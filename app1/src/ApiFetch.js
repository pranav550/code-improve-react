import React, { Component } from 'react'


export default class ApiAxios extends Component {
    constructor(props) {
        super(props)

        this.state = {
            postList: []
        }
    }

    async componentDidMount() {

        //----axios get--------
        var url = 'https://jsonplaceholder.typicode.com/posts';
        // fetch(url)
        //     .then((response) => response.json())
        //     .then((json) => {
        //         this.setState({
        //             postList: json
        //         })
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

        let options = {
            method: "POST",
            body: JSON.stringify({
                title: 'foo1',
                body: 'bar',
                userId: 101,
                id: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }

        let response = await fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                this.state.postList.push(json);
                this.setState({
                    postList: [...this.state.postList]
                })
            });



    }

    render() {
        console.log(this.state.postList)
        return (
            <div>
                {this.state.postList.map(data => {
                    return <p key={data.id}>{data.title}</p>
                })}
            </div>
        )
    }
}
