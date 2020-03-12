import React from 'react';
import '../assets/Login.css'
import { Link } from 'react-router-dom'

class Login extends React.Component {
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
            div className = "col-lg formlogin pl-5 pr-5 pt-5" >
            <
            div className = "titlelogin" > < label > Login < /label></div >
            <
            div class = "form-group" >
            <
            label
            for = "exampleFormControlInput1"
            className = "text-dark gray" > Username < /label> <
            input type = "text"
            className = "form-control"
            id = "exampleFormControlInput1"
            placeholder = "username ..." / >
            <
            label
            for = "exampleFormControlInput1"
            className = "mt-3" > password < /label> <
            input type = "password"
            className = "form-control"
            id = "exampleFormControlInput1"
            placeholder = "password ..." / >
            <
            /div> <
            div className = "text-right" >
            <
            Link to = "/forgot-password"
            className = "text-decoration-none" > < span className = "forgotlink" > forgot the password < /span></Link >
            <
            /div> <
            div className = "text-center" >
            <
            Link to = "/homes"
            className = "ml-3"
            href = "/components/" > < button type = "button"
            className = "btn btn-primary mt-4" > Login < /button></Link >
            <
            /div> <
            div className = "text-center mt-4" >
            <
            Link to = "/signup"
            className = "text-decoration-none" > < span className = "signuplink" > Create new account < /span></Link >
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

export default Login;