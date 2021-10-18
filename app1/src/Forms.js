import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            comment: "",
            nameErr: "",
            emailErr: ""
        }
    }

    validForm = () => {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        this.setState({
            nameErr: '',
            emailErr: ''
        })
        if (this.state.name == "") {
            this.setState({
                nameErr: "Please Enter Name"
            })
        }
        if (this.state.email == "") {
            this.setState({
                emailErr: "Please Enter Email"
            })
        }

        else if (!regEmail.test(this.state.email)) {
            this.setState({
                emailErr: "Invalid Email"
            })
        }
        return true
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)

        if (this.validForm()) {
            console.log("form valid")
        } else {
            console.log("form invalid")
        }
    }



    formHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }





    render() {
        const { name, email, comment, nameErr, emailErr } = this.state
        return (
            <div>
                <form autoComplete="off" onSubmit={this.submitHandler}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={this.formHandler} />
                    <br />
                    {
                        nameErr.length > 0 && <span className="error">{nameErr}</span>
                    }
                    <br />
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email} onChange={this.formHandler} />
                    <br />
                    {
                        emailErr.length > 0 && <span className="error">{emailErr}</span>
                    }
                    <br />
                    <label htmlFor="comment">Comment</label>
                    <input type="text" name="comment" value={comment} onChange={this.formHandler} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
