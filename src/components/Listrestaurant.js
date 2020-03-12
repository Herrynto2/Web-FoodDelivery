import React from 'react';
import Resto from '../img/resto1.jpg'
import { Link } from 'react-router-dom'
import cart from '../img/cart.png'

class ListRestaurant extends React.Component {
    render() {
        return ( <
            div >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-md-12" > < h4 className = "text-center bold mt-5 mb-5" > Restaurant < /h4></div >
            <
            /div> <
            div className = "row" >
            <
            div className = "col-lg-3" >
            <
            Link className = "text-decoration-none" >
            <
            div className = "card  text-center cardresto" >
            <
            img src = { Resto }
            className = "card-img-top imgitems" / >
            <
            div className = "card-body text-center" >
            <
            h5 className = "card-resto" > Solaria < /h5> <
            h6 className = "textcolor" > Depok < /h6> <
            /div> <
            /div> <
            /Link> <
            /div> <
            /div> <
            /div> <
            /div>
        )
    }
}

export default ListRestaurant;