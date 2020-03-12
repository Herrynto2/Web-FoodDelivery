import React from 'react';
import axios from 'axios'
import Bakso from '../img/bakso.png'
import { Link } from 'react-router-dom'
import cart from '../img/cart.png'

class ListItems extends React.Component {

    render() {
        return ( <
            div >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-md-12" > < h4 className = "text-center bold mt-5 mb-5" > List Items < /h4></div >
            <
            /div> <
            div className = "row " >
            <
            div className = "col-lg-3" >
            <
            Link className = "text-decoration-none" >
            <
            div className = "card  text-center cardresto" >
            <
            img src = { Bakso }
            className = "card-img-top imgitems" / >
            <
            div className = "card-body text-center" >
            <
            Link > < img src = { cart }
            alt = ""
            className = "imgcart" / > < /Link> <
            h5 className = "card-text" > { this.props.items } < /h5> <
            h7 className = "card-resto" > { this.props.restaurant } < /h7> { /* <h6 className="textcolor">{this.props.prices}</h6> */ } <
            /div> <
            /div> <
            /Link>

            <
            /div> <
            /div> <
            /div> <
            /div>
        )
    }
}

export default ListItems;