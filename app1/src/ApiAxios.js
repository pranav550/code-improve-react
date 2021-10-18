import React, { Component } from 'react'
import axios from 'axios';

export default class ApiAxios extends Component {
    constructor(props) {
        super(props)

        this.state = {
            postList: []
        }
    }

    componentDidMount() {

        //----axios get--------
        var url = 'https://jsonplaceholder.typicode.com/posts';
        // axios.get(url)
        //     .then(response => {
        //         console.log(response.data)
        //         this.setState({
        //             postList: response.data
        //         })
        //     }).catch(error => {
        //         console.log(error)
        //     })

        let options = {
            method: "POST",
            url: url,
            Headers: {
                'Content-type': 'application/json'
            },
            data: {
                title: 'foo1',
                body: 'bar',
                userId: 101,
                id: 1
            }
        }

        axios.post(url, options)
            .then(response => {
                console.log(response.data.data)
                this.state.postList.push(response.data.data);
                console.log(this.state)
                this.setState({
                    postList: [...this.state.postList]
                })
            }).catch(error => {
                console.log(error)
            })


    }

    render() {
        console.log(this.state.postList)
        return (
            <div>
                {this.state.postList.map(data => {
                    return <p key={data.userId}>{data.title}</p>
                })}
            </div>
        )
    }
}
