import React from 'react';
import { Link } from '@reach/router'
import axios from 'axios';

export default class AddPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post_title: '',
            post_text: '',
        }
        this.updateBody = this.updateBody.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateTitle = event => {
        this.setState({ post_title: event.target.value });
    }
    updateBody = event => {
        this.setState({ post_text: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Post Title: ${this.state.post_title}`);
        console.log(`Post Text: ${this.state.post_text}`);
        
        const newPost = {
            post_title: this.state.post_title,
            post_text: this.state.post_text
        };

        axios.post('http://localhost:4000/posts/add', newPost)
            .then(res => console.log(res.data));
        
        this.setState({
            post_title: '',
            post_text: '',
        })

      

    }

    render() {
        const title = this.state.title
        const body = this.state.body
        console.log(this.state)
        return (
            <div className="container">
                <h1 class="text-center default-text">Add a post</h1>
                <div className='card indigo post'>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group row">
                            <label for="post-title" class="col-sm-2 col-form-label">Post title:</label>
                            <div class="col-sm-10">
                                <input type="text" name="title" className="form-control" value={this.state.post_title} placeholder="Enter a title" title="title" onChange={this.updateTitle} />
                            </div>
                        </div>

                        <div action="#" class="form-group row">
                            <label for="post-text" class="col-sm-2 col-form-label">
                                Post Text:</label>
                            <div class="col-sm-10">
                                <input type="text" name="body" className="form-control" value={this.state.post_text} placeholder="Enter a post" title="body" onChange={this.updateBody} />
                            </div>
                        </div>

                        <div class="form-group row mt-3">
                            <div class="col-10 offset-2">
                                <button type="submit" class="btn btn-outline-primary">Create Post</button>
                                <Link to='listpage'><a href="#"  value="Create Post"  class="btn btn-link">Back</a></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}