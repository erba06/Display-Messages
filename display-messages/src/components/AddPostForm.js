import React from 'react';
import { Link } from '@reach/router'
import axios from 'axios';
import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

export default class AddPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }
        this.updateBody = this.updateBody.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateTitle = event => {
        this.setState({ title: event.target.value });
    }
    updateBody = event => {
        this.setState({ body: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Post Title: ${this.state.title}`);
        console.log(`Post Text: ${this.state.body}`);

        const newPost = {
            title: this.state.title,
            body: this.state.bodys
        };

        axios.post('http://localhost:4000/posts/add', newPost)
            .then(res => {
                if (res.status === 200) { Alert.success('Post saved to DB') }
                else {
                    console.log("damn");
                    Alert.warning('Login Failed!')
                }
            })
            .catch(function () {
                Alert.warning('Error handling');
            });


        this.setState({
            title: '',
            body: '',
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
                                <input type="text" name="title" className="form-control" value={this.state.title} placeholder="Enter a title" title="title" onChange={this.updateTitle} />
                            </div>
                        </div>

                        <div action="#" class="form-group row">
                            <label for="post-text" class="col-sm-2 col-form-label">
                                Post Text:</label>
                            <div class="col-sm-10">
                                <input type="text" name="body" className="form-control" value={this.state.body} placeholder="Enter a post" title="body" onChange={this.updateBody} />
                            </div>
                        </div>

                        <div class="form-group row mt-3">
                            <div class="col-10 offset-2">
                                <button type="submit" class="btn btn-outline-primary">Create Post</button>
                                <Link to='listpage'><a href="#" value="Create Post" class="btn btn-link">Back</a></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}