import React from 'react';
import { Link } from 'react-router-dom'
import Bakso from '../img/rendang.jpg'
import Navbarsubuser from '../components/Navbarsubuser'
import Footer from '../components/Footer'
import axios from 'axios'

class RestaurantItemsID extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data_items: null
    //     }
    //     // this.getDataItems = this.getDataItems.bind(this)
    // }

    // componentDidMount() {
    //     this.getDataItems()
    // }

    // async getDataItems() {
    //     // await axios.get("http://localhost:3000/detail-items/" + this.props.match.params.id)
    //     await axios.get("http://localhost:3000/detail-items/2")
    //         .then(res => {
    //             console.log(res)
    //             let dataArr = res.data.data
    //             this.setState({
    //                 data_items: dataArr
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             console.log(err.response.data.message)
    //         })
    // }


    render() {
        return ( <
            div >
            <
            Navbarsubuser / >
            <
            div className = 'container' >
            <
            h4 className = " bold mt-5 mb-5 text-center " > Items < /h4>

            { /* {this.state.data_items && ( */ } <
            div className = "row" >
            <
            div className = "col-lg-5" >
            <
            div className = "card-body-link" >
            <
            div className = "card mb-5 card-profil" >
            <
            div className = "row no-gutters" >
            <
            div className = "row no-gutters" >
            <
            img src = { Bakso }
            className = "card-img card-img-detail"
            alt = "..." / >
            <
            /div> <
            div className = "col-md-12" >
            <
            div className = "card-body" >
            <
            h5 className = "cart-titles" > Rendang < /h5> <
            hr / >
            <
            h6 className = "cart-resto" > Warunk Padang - Bogor < /h6> <
            h6 className = "cart-price" > Rp.20.000 < /h6> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div>

            <
            div className = "col-lg-7" >
            <
            input type = "text"
            onChange = { e => this.handleName(e) }
            name = "name"
            className = "form-control mb-3"
            placeholder = "items name..." / >
            <
            input type = "text"
            onChange = { e => this.handleName(e) }
            name = "name"
            className = "form-control mb-3"
            placeholder = "category..." / >
            <
            input type = "text"
            onChange = { e => this.handleName(e) }
            name = "name"
            className = "form-control mb-3"
            placeholder = "price..." / >
            <
            input type = "text"
            onChange = { e => this.handleName(e) }
            name = "name"
            className = "form-control mb-3"
            placeholder = "description..." / >
            <
            input type = "file"
            className = "form-control-file mb-3" / >
            <
            button className = 'btn btn-danger block btn-edit-item-resto mb-5' > Edit < /button> <
            input type = "number"
            onChange = { e => this.handleName(e) }
            name = "name"
            className = "form-control mb-3"
            min = "1"
            placeholder = "add items..." / >
            <
            button className = 'btn btn-danger block btn-edit-item-resto' > Add < /button>                  <
            /div> <
            /div> { /* )} */ }

            <
            /div>


            <
            /div>
        )
    }
}

export default RestaurantItemsID;