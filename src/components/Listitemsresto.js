import React from 'react';
import axios from 'axios'
import Bakso from '../img/rendang.jpg'
import { Link } from 'react-router-dom'
import cart from '../img/cart.png'

class ListItemResto extends React.Component {

    handleDelete = (e) => {
        console.log(this.state.username, this.state.password)
        e.preventDefault()
        const data = {
                username: this.state.username,
                password: this.state.password
            }
            //Validation username && password
        if (this.state.username === "" && this.state.password === "") {
            alert('Username or password connot be empty !')
        } else {
            // console.log(data) // to get data fotm username & password
            axios.post('http://localhost:3000/items/2', { //check to port 3000 from table users that connect to backend
                    username: this.state.username,
                    password: this.state.password
                })
                .then(res => {
                    console.log(res) //to get data token 
                    if (res.status === 200) { // 200 is http code success
                        try {
                            localStorage.setItem('token', JSON.stringify(res.data.data.token)) //save token to localstorage
                                //console.log(this.props)
                            this.props.history.push('/home') //push home page
                        } catch (error) {
                            console.log(error.response)
                            alert(error.response.msg)
                        }
                    }
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                    alert(err.response.data.msg)
                })
        }
    }

    render() {
        return ( <
            div className = "col-lg-3" >
            <
            Link to = '/restaurant-items/2'
            className = "text-decoration-none" >
            <
            div className = "card  text-center carditemresto mb-5" >
            <
            img src = { Bakso }
            className = "card-img-top imgitemresto" / >
            <
            div className = "card-body text-center" >
            <
            h5 className = "card-text-resto" > { this.props.items } < /h5> <
            h7 className = "card-resto-category" > { this.props.category } < /h7> <
            h6 className = "textcolor text-price" > { this.props.prices } < /h6> <
            /div> <
            div className = "btn-group text-center" >
            <
            Link to = { `/items/${this.props.id}` } > < button onClick = { e => this.handleDelete(e) }
            type = "button"
            className = "btn btn-danger btndel" > Delete < /button></Link >
            <
            /div> <
            /div> <
            /Link> <
            /div>
        )
    }
}

export default ListItemResto;