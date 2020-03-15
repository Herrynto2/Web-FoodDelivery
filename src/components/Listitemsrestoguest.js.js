import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import cart from '../img/cart.png'

class ListItemRestoGuest extends React.Component {

    render() {
        console.log(this.props)
        return ( <
            div className = "col-lg-3" >
            <
            Link to = { `/detail-items/${this.props.id}` }
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
            Link to = { `/items/${this.props.id}` } >
            <
            button onClick = { e => this.handleDelete(e) }
            type = "button"
            className = "btn btn-danger btnadd" > Add < /button> <
            /Link> <
            /div> <
            /div> <
            /Link> <
            /div>
        )
    }
}

export default ListItemRestoGuest;