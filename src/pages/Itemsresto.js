import React from 'react'
import '../assets/Style.css'
import { Link } from 'react-router-dom'
import Navbarsub from '../components/Navbarsub'
import ListItemResto from '../components/Listitemsresto'
import Footer from '../components/Footer'
import axios from 'axios'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

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
            await axios.get(`http://localhost:3000/items`, { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
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

                const style = {
                    background: 'linear-gradient(45deg, #ffc107 30%, #ffc107 90%)',
                    color: 'white',
                    height: 55,
                    padding: '0 30px',
                    boxShadow: '0 3px 5px 2px rgb(204, 204, 204)',
                }

                return ( <
                        div > { /* Navbar */ } <
                        Navbarsub / >

                        { /* Content Items */ } <
                        div >
                        <
                        div className = "container marginallitems" >
                        <
                        div className = "row" >
                        <
                        div className = "mt-4 text-right" >
                        <
                        Link to = '/restaurant-items' > < Fab style = { style }
                        borderRadius = "25%" >
                        <
                        AddIcon / >
                        <
                        /Fab></Link >

                        <
                        /div> <
                        div className = "col-md-12" > < h4 className = "text-center bold mb-5" > List Items Restaurant < /h4></div >
                        <
                        /div> <
                        div className = "row " > {
                            this.state.data_items.map((val, idx) => ( <
                                    ListItemResto key = { idx }
                                    images = { val.images }
                                    items = { val.name_item }
                                    restaurant = { val.name_restaurant }
                                    prices = { val.price }
                                    category = { val.category }
                                    id = { val.id_item }
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