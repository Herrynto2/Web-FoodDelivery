import React from 'react';
import { Link } from 'react-router-dom'
import Bakso from '../img/bakso.png'
import Navbarsubuser from '../components/Navbarsubuser'
import Footer from '../components/Footer'

class Carts extends React.Component {
    render() {
        return ( <
            div >
            <
            Navbarsubuser / >
            <
            div className = 'container' >
            <
            h4 className = " bold mt-5 text-center" > Cart List < /h4> <
            Link to = "/checkout"
            className = "card-body-link" >
            <
            div className = "card mb-3 card-profile img-cartsize card-body-hover" >
            <
            div className = "row no-gutters" >
            <
            div className = "row no-gutters" >
            <
            div className = "img-cartsize" > < img src = { Bakso }
            className = "card-img card-img-cart" / > < /div> <
            /div> <
            div className = "col-md-6" >
            <
            div className = "card-body" >
            <
            h5 className = "cart-title" > Bakso Pekalongan < /h5> <
            hr / >
            <
            h6 className = "cart-resto" > Solaria < /h6> <
            h6 className = "cart-price" > Rp.10000 < /h6> <
            /div> <
            /div> <
            /div> <
            /div> <
            /Link> <
            div class = "card" >
            <
            div class = "card-body" >
            <
            div className = "text-checkout bold" > Checkout: < span className = "cart-balance" > Rp.288800 < /span></div >
            <
            /div> <
            /div> <
            /div>


            <
            Footer / >
            <
            /div>
        )
    }
}

export default Carts;