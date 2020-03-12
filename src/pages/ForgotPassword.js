import React from 'react';
import '../assets/Login.css'
import { Link } from 'react-router-dom'

class ForgotPassword extends React.Component {
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
            div className = "col-4 info-panel" >
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
            className = "form-control"
            id = "exampleFormControlInput1"
            placeholder = "username ..." / >
            <
            label
            for = "exampleFormControlInput1"
            className = "mt-3" > New password < /label> <
            input type = "password"
            className = "form-control"
            id = "exampleFormControlInput1"
            placeholder = "password ..." / >
            <
            label
            for = "exampleFormControlInput1"
            className = "mt-3" > Confirm password < /label> <
            input type = "password"
            className = "form-control"
            id = "exampleFormControlInput1"
            placeholder = "password ..." / >
            <
            /div> <
            div className = "text-center" >
            <
            Link to = "/home"
            className = "ml-3"
            href = "/components/" > < button type = "button"
            className = "btn btn-primary mt-2" > Send < /button></Link >
            <
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