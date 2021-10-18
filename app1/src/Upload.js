import axios from 'axios'
import React, { Component } from 'react'

export default class Upload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFileId: ''
        }
    }

    myHandler = (events) => {
        this.setState({
            selectedFileId: events.target.files[0]
        })
        console.log(events.target.files[0])
    }

    submitHandler = async (event) => {
        event.preventDefault();
        console.log(this.state)
        var url = "	https://api.imgur.com/3/image";
        const formData = new FormData();
        formData.append('image', this.state.selectedFileId, this.state.selectedFileId.name);
        //formData.append('name', 'demo');
        let response = await axios.post(url, formData);
        console.log(response)
    }



    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="file" name="image" onChange={this.myHandler} />
                    <input type="Submit" value="Upload" />
                </form>
            </div>
        )
    }
}
