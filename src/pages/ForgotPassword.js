import React from 'react';
import '../assets/Login.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ForgotPassword extends React.Component {

    constructor(props) {
        super(props)
        this.state = { username: '', newpassword: '', confirmpassword: '' }
    }

    handleUsername = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            username: e.target.value
        })
    }
    handleNewPassword = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            newpassword: e.target.value
        })
    }
    handleConfirmPassword = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            confirmpassword: e.target.value
        })
    }

    //When login button click
    handleSend = (e) => {
        e.preventDefault()
        const data = {
            username: this.state.code,
            newpassword: this.state.newpassword,
            confirmpassword: this.state.confirmpassword
        }
        if (this.state.username === "" || this.state.newpassword === "" || this.state.confirmpassword === "") {
            alert('text still empty!')
        } else {
            axios.patch('http://localhost:3000/forgot-password', data)
                .then(res => {
                    console.log(res.data)
                    if (res.status === 200) {
                        try {
                            alert('verification successfully')
                            this.props.history.push('/login')
                        } catch (error) {
                            console.log(error.response)
                            alert(error.response.msg)
                        }
                    }
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                    alert(err.response.msg)
                })
        }
    }


    render() {
        return ( <
            div >
            <
            div className = "bg" >
            <
            div className = "container" >
            <
            div className = "row justify-content-center" >
            <
            div className = "col-lg-4 info-panel" >
            <
            div className = "row" >
            <
            div className = "col-lg formforgot pl-5 pr-5 pt-5" >
            <
            div class = "form-group" >
            <
            label
            for = "exampleFormControlInput1"
            className = "text-dark gray" > Username < /label> <
            input type = "username"
            onChange = { e => this.handleUsername(e) }
            className = "form-control"
            id = "exampleFormControlInput1"
            placeholder = "username ..." / >
            <
            label
            for = "exampleFormControlInput1"
            className = "mt-3" > New password < /label> <
            input type = "password"
            onChange = { e => this.handleNewPassword(e) }
            className = "form-control"
            id = "exampleFormControlInput1"
            placeholder = "password ..." / >
            <
            label
            for = "exampleFormControlInput1"
            className = "mt-3" > Confirm password < /label> <
            input type = "password"
            onChange = { e => this.handleConfirmPassword(e) }
            className = "form-control"
            id = "exampleFormControlInput1"
            placeholder = "password ..." / >
            <
            /div> <
            div className = "text-center" >
            <
            button type = "button"
            onClick = { e => this.handleSend(e) }
            className = "btn btn-primary mt-2" > Send < /button> <
            /div> <
            div className = "text-center mt-4" >
            <
            Link to = "/login"
            className = "text-decoration-none" > < span className = "signuplink" > Back to login < /span></Link >
            <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div>
        )
    }
}

export default ForgotPassword;