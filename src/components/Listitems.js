import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import cart from '../img/cart.png'
import Swal from 'sweetalert2'

class ListItems extends React.Component {
    constructor(props) {
        super()
        this.state = {
            visible: false
        }
    }

    toggle() {
        this.setState({
            visible: !this.state.visible
        })
    }

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
        return ( <
            div className = "col-lg-3" >
            <
            Link to = { `/detail-items/${this.props.id}` }
            className = "text-decoration-none" >
            <
            div className = "card  text-center cardresto mb-5" >
            <
            img alt = { this.props.items }
            src = { process.env.REACT_APP_API_URL + this.props.images }
            className = "card-img-top imgitems" / >
            <
            div className = "card-body text-center" >
            <
            img onClick = { e => this.handleAddToCart(this.props.id) }
            src = { cart }
            alt = ""
            className = "imgcart" / >
            <
            h5 className = "card-text" > { this.props.items } < /h5> <
            h7 className = "card-resto" > { this.props.restaurant } < /h7> <
            h6 className = "textcolor" > { this.props.prices } < /h6> <
            /div> <
            /div> <
            /Link> <
            /div>

        )
    }
}

export default ListItems;