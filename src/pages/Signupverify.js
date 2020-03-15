import React from 'react';
import '../assets/Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../assets/Login.css'

class Verify extends React.Component {
    constructor(props) {
        super(props)
        this.state = { code: '' }
    }

    handleCode = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            code: e.target.value
        })
    }



    //When login button click
    handleVerify = (e) => {
        e.preventDefault()
        const data = {
            code: this.state.code
        }
        if (this.state.code === "") {
            alert('code still empty!')
        } else {
            // console.log(data) // to get data fotm username & password
            axios.patch(`http://localhost:3000/verify?code=${data.code}`)
                .then(res => {
                    console.log(res.data) //to get data token 
                    if (res.status === 200) { // 200 is http code success
                        try {
                            alert('verification successfully', res.data)
                            this.props.history.push('/login') //push home page
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
            div className = "col-lg-6 info-panel" >
            <
            div className = "row" >
            <
            div className = "col-lg formverify pl-5 pr-5 pt-5" >
            <
            div className = "titleverify" > < label > Verify your account < /label></div >
            <
            input type = "text"
            onChange = { e => this.handleCode(e) }
            className = "form-control inputverify"
            name = "code"
            placeholder = "code ..." / >
            <
            div className = "btnverify" > < button type = "button"
            onClick = { e => this.handleVerify(e) }
            className = "btn btn-primary mt-4" > Verify < /button></div >
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
            /div>
        )
    }
}

export default Verify;