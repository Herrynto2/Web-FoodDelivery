import React from 'react';
import Navbarsubuser from '../components/Navbarsubuser'
import Footer from '../components/Footer'
import axios from 'axios'
import Cart from '../components/Cart'

class CartsItem extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data_items: []
            }
        }
        componentDidMount() {
            this.getDataItems()
        }
        async getDataItems() {
            await axios.get(`http://localhost:3000/carts`, { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
                .then(res => {
                    console.log(res.data.data)
                    let dataArr = res.data.data
                    this.setState({
                        data_items: dataArr,
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }


        render() {
                return ( <
                        div >
                        <
                        Navbarsubuser / >
                        <
                        div className = 'container margincart' >
                        <
                        h4 className = " bold mt-5 text-center mb-5" > Cart < /h4> <
                        div className = "row " > {
                            this.state.data_items.map((val, idx) => ( <
                                    Cart key = { idx }
                                    images = { val.images }
                                    items = { val.name_item }
                                    restaurant = { val.name_restaurant }
                                    prices = { val.price }
                                    id = { val.id_item }
                                    id_cart = { val.id_cart }
                                    total_item = { val.total_item }
                                    />))} <
                                    /div> <
                                    /div>


                                    <
                                    Footer / >
                                    <
                                    /div>
                                )
                            }
                        }

                        export default CartsItem;