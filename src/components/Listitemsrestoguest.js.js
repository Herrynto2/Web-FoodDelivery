import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import cart from '../img/cart.png'
import Swal from 'sweetalert2'

class ListItemRestoGuest extends React.Component {
    handleAddToCart = async(id) => {
        const alerts = Swal.mixin({ customClass: { confirmButton: 'btn btn-warning' } })
        await axios.post(`${process.env.REACT_APP_API_URL}/carts/${id}`, {}, {
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token'))
                }
            })
            .then(res => {
                console.log(res.data)
                if (res.data.success !== false) {
                    try {
                        alerts.fire({ icon: 'success', text: 'Save item successfully' })

                    } catch (error) {
                        alerts.fire({ icon: 'error', text: error.response.msg })
                    }
                } else {
                    alerts.fire({ icon: 'error', text: 'Failed to save items!' })
                }
            })
            .catch(err => {
                console.log({ err })
                alerts.fire({ icon: 'error', text: err.response.msg })
            })
    }

    render() {
        console.log(this.props)
        return ( <
            div className = "col-lg-3" >
            <
            Link to = { `/detail-items/${this.props.id}` }
            className = "text-decoration-none" >
            <
            div className = "card  text-center carditemrestodetail mb-5" >
            <
            img src = { process.env.REACT_APP_API_URL + this.props.images }
            className = "card-img-top imgitemresto" / >
            <
            div className = "card-body text-center" >
            <
            img onClick = { e => this.handleAddToCart(this.props.id) }
            src = { cart }
            alt = ""
            className = "imgcarts" / >
            <
            h5 className = "card-text-resto" > { this.props.items } < /h5> <
            h7 className = "card-resto-category" > { this.props.category } < /h7> <
            h6 className = "textcolor text-price" > { this.props.prices } < /h6> <
            /div> <
            div className = "btn-group text-center" >
            <
            /div> <
            /div> <
            /Link> <
            /div>
        )
    }
}

export default ListItemRestoGuest;