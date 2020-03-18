import React from 'react';
import axios from 'axios'
import Bakso from '../img/rendang.jpg'
import { Link } from 'react-router-dom'
import cart from '../img/cart.png'

class ListItemResto extends React.Component {

    handleDelete = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:3000/items/62`, { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
            .then(res => {
                console.log(res.data)
                if (res.data.success !== false) {
                    try {
                        alert('delete items successfully')
                    } catch (error) {
                        console.log(error.response)
                        alert(error.response.msg)
                    }
                } else {
                    alert('add items failed')
                }
            })
            .catch(err => {
                console.log(err)
                console.log(err.response)
                alert(err.response.msg)
            })
    }

    render() {
        return ( <
            div className = "col-lg-2" >
            <
            Link to = { `/restaurant-items/${this.props.id}` }
            className = "text-decoration-none" >
            <
            div className = "card  text-center carditemresto mb-5" >
            <
            img src = { process.env.REACT_APP_API_URL + this.props.images }
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
            button onClick = { e => this.handleDelete(e) }
            type = "button"
            className = "btn btn-danger btndel" > Delete < /button> <
            /div> <
            /div> <
            /Link>

            <
            /div>

        )
    }
}

export default ListItemResto;