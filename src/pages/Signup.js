import React from 'react';
import '../assets/Login.css'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
    render() {
        return ( <
            div >
            <
            div className = "row" >
            <
            div className = "col-sm-8 bgsignup" > < /div> <
            div className = "col-sm-4 p-5" >
            <
            div className = "text-center bold mb-5 text-signup" > Sign Up < /div> <
            div class = "form-group" >
            <
            input type = "text"
            className = "form-control"
            placeholder = "name ..." / >
            <
            input type = "text"
            className = "form-control mt-3"
            placeholder = "username ..." / >
            <
            input type = "password"
            className = "form-control mt-3"
            placeholder = "password ..." / >
            <
            input type = "email"
            className = "form-control mt-3"
            placeholder = "email ..." / >
            <
            select class = "form-control mt-3"
            id = "exampleFormControlSelect1"
            placeholder = "Gender" >
            <
            option > Man < /option> <
            option > Woman < /option> <
            /select> <
            input type = "text"
            className = "form-control mt-3"
            placeholder = "address ..." / >
            <
            input type = "text"
            className = "form-control mt-3"
            placeholder = "work ..." / >
            <
            /div> <
            div className = "text-center" >
            <
            Link to = "/login"
            className = "ml-3"
            href = "/components/" > < button type = "button"
            className = "btn btn-primary mt-4" > Sign Up < /button></Link >
            <
            /div> <
            div className = "text-center mt-4" >
            <
            Link to = "/login"
            className = "text-decoration-none" > < span className = "signuplink" > Login < /span></Link >
            <
            /div> <
            /div> <
            /div> <
            /div>
        )
    }
}

export default Signup;