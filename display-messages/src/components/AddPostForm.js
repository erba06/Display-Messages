import React from 'react';
import { Link } from '@reach/router'


export default class AddPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.updateBody = this.updateBody.bind(this);
        this.updateTitle = this.updateTitle.bind(this);

    }

    updateTitle = event => {
        this.setState({ title: event.target.value });
    }
    updateBody = event => {
        this.setState({ body: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        fetch('/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))

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
                                <input type="text" name="title" class="form-control" placeholder="Enter a title" title="title" onChange={this.updateTitle} />
                            </div>
                        </div>

                        <div action="#" class="form-group row">
                            <label for="post-text" class="col-sm-2 col-form-label">
                                Post Text:</label>
                            <div class="col-sm-10">
                                <input type="text" name="body" class="form-control" placeholder="Enter a post" title="body" onChange={this.updateBody} />
                            </div>
                        </div>

                        <div class="form-group row mt-3">
                            <div class="col-10 offset-2">
                                <button type="submit" class="btn btn-outline-primary">Add</button>
                                <Link to='listpage'><a href="#" class="btn btn-link">Back</a></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}