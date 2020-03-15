import React from 'react'
import '../assets/Style.css'
import Navbarsub from '../components/Navbarsub'
import ListItemResto from '../components/Listitemsresto'
import Footer from '../components/Footer'
import axios from 'axios'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Itemsresto extends React.Component {
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
            await axios.get("http://localhost:3000/browse-items")
                .then(res => {
                    console.log(res)
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
                        div > { /* Navbar */ } <
                        Navbarsub / >

                        { /* Content Items */ } <
                        div >
                        <
                        div className = "container" >
                        <
                        div className = "row" >
                        <
                        div className = "col-md-12" > < h4 className = "text-center bold mt-5 mb-5" > List Items < /h4></div >
                        <
                        /div> <
                        div className = "row " > {
                            this.state.data_items.map((val, idx) => ( <
                                    ListItemResto key = { idx }
                                    items = { val.name_item }
                                    restaurant = { val.name_restaurant }
                                    prices = { val.price }
                                    category = { val.category }
                                    id = { val.id_items }
                                    />))} <
                                    /div> <
                                    /div> <
                                    /div>

                                    { /* Pagination */ } <
                                    div className = "container" >
                                    <
                                    div className = "row justify-content-center" >
                                    <
                                    Pagination >
                                    <
                                    PaginationItem >
                                    <
                                    PaginationLink first href = "#" / >
                                    <
                                    /PaginationItem> <
                                    PaginationItem >
                                    <
                                    PaginationLink previous href = "#" / >
                                    <
                                    /PaginationItem> <
                                    PaginationItem active >
                                    <
                                    PaginationLink href = "#" > 1 <
                                    /PaginationLink> <
                                    /PaginationItem> <
                                    PaginationItem >
                                    <
                                    PaginationLink next href = "#" / >
                                    <
                                    /PaginationItem> <
                                    PaginationItem >
                                    <
                                    PaginationLink last href = "#" / >
                                    <
                                    /PaginationItem> <
                                    /Pagination> <
                                    /div> <
                                    /div>

                                    { /* Footer */ } <
                                    Footer / >
                                    <
                                    /div>
                                )
                            }
                        }

                        export default Itemsresto;