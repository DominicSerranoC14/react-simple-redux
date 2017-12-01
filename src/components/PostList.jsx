import React, { Component } from 'react';
import PostForm from './PostForm.jsx';

// Display posts
const Posts = ({ posts }) => {
    if (posts.length === 0) {
        return <p>There are currently no posts.</p>
    }

    return posts.map((post, i) => <p key={i}>{post}</p>);
};  

// Handle state and render child components
class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            title: '',
            formDisabled: false,
        };

        this.addPost = this.addPost.bind(this);
        this.createPost = this.createPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    addPost(post) {
        this.setState(prevState => ({
           posts: [...prevState.posts, post], 
        }));
    }

    createPost() {
        if (this.state.title === '') return;

        this.setState({ formDisabled: true });

        setTimeout(() => {
            this.addPost(this.state.title);
            this.setState({ title: '', formDisabled: false });
        }, 2000);
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.createPost();
        }
    }

    render() {
        return (
            <div>
                <p>Post List</p>

                <Posts posts={this.state.posts} />

                <PostForm createPost={this.createPost}
                    formDisabled={this.state.formDisabled}
                    handleChange={this.handleChange} 
                    handleKeyPress={this.handleKeyPress} 
                    title={this.state.title} 
                    />
            </div>
        );
    }
};

export default PostList;