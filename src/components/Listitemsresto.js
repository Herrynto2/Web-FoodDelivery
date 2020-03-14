import React from 'react';
import axios from 'axios'
import Bakso from '../img/bakso.png'
import { Link } from 'react-router-dom'
import cart from '../img/cart.png'

class ListItemResto extends React.Component {

    render() {
        return ( <
            div className = "col-lg-2" >
            <
            Link className = "text-decoration-none" >
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
            /div> <
            /Link> <
            /div>
        )
    }
}

export default ListItemResto;