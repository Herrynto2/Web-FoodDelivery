import React from 'react';
import { Link } from 'react-router-dom'
import Bakso from '../img/bakso.png'
import Navbarsubuser from '../components/Navbarsubuser'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import axios from 'axios'

class ItemsID extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data_items: null
        }
    }

    // async componentDidMount() {
    //     this.setState({ items: items.filter(o => o.id === parseInt(this.props.match.params.id))[2] })
    // }

    componentDidMount() {
        this.getDataItems()
    }

    async getDataItems() {
        await axios.get("http://localhost:3000/detail-restaurant/1")
            .then(res => {
                console.log(res.data.data.name_item)
                let dataArr = res.data.data
                this.setState({ data_items: dataArr })
            })
            .catch(err => {
                console.log(err)
                console.log(err.response.data.message)
            })
    }

    render() {
        return ( <
            div >
            <
            Navbarsubuser / >
            <
            div className = 'container' >
            <
            h4 className = " bold mt-5 text-center" > Items < /h4> {
                this.state.data_items && ( <
                    div className = "card-body-link" >
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
                    h5 className = "cart-title" > { this.state.data_items.name_item } < /h5> <
                    hr / >
                    <
                    h6 className = "cart-resto" > { this.state.data_items.name_restaurant } < /h6> <
                    h6 className = "cart-price" > Rp. { this.state.data_items.price } < /h6> <
                    /div> <
                    /div> <
                    /div> <
                    /div> <
                    /div>
                )
            } <
            div class = "card" >
            <
            div class = "card-body" >
            <
            div className = "text-checkout bold" > Checkout: < span className = "cart-balance" > Rp.288800 < /span></div >
            <
            /div> <
            /div> <
            /div> <
            Reviews / >
            <
            Footer / >
            <
            /div>
        )
    }
}

export default ItemsID;