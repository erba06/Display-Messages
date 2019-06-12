import React from 'react';
import axios from 'axios';

export default class AddPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState({ title: event.target.value, text: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const newpost = {
            title: this.state.title,
            text: this.state.text
        };

        axios.post(`https://jsonplaceholder.typicode.com/posts`, { newpost })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Post title:
            <input type="text" title="title" onChange={this.handleChange} />
                    </label>
                    <label>
                        Post Text:
            <input type="text" text="text" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}