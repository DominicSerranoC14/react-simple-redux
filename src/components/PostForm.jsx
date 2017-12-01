import React, { Component } from 'react';

class PostForm extends Component {
    render() {
        return (
            <div>
                <input type="text" 
                    disabled={this.props.formDisabled}
                    onChange={this.props.handleChange} 
                    onKeyPress={this.props.handleKeyPress} 
                    value={this.props.title}
                    />

                <button onClick={this.props.createPost} disabled={this.props.formDisabled}>Add Post</button>
            </div>
        );
    }
};

export default PostForm;