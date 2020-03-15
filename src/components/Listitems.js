import React from 'react';
import axios from 'axios'
import Bakso from '../img/rendang.jpg'
import { Link } from 'react-router-dom'
import cart from '../img/cart.png'

class ListItems extends React.Component {

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
            Link > < img src = { cart }
            alt = ""
            className = "imgcart" / > < /Link> <
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