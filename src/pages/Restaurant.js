import React from 'react'
import '../assets/Style.css'
import Navbarsub from '../components/Navbarsub'
import ListRestaurant from '../components/Listrestaurant'
import Footer from '../components/Footer'
import axios from 'axios'

class Restaurant extends React.Component {
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
            await axios.get("http://localhost:3000/browse-restaurant")
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
                        div >
                        <
                        Navbarsub / >
                        <
                        div >
                        <
                        div className = "container margincontent" >
                        <
                        div className = "row" >
                        <
                        div className = "col-md-12" > < h4 className = "text-center bold mt-5 mb-5" > Restaurant < /h4></div >
                        <
                        /div> <
                        div className = "row mb-5" > {
                            this.state.data_items.map((val, idx) => ( <
                                    ListRestaurant key = { idx }
                                    name = { val.name_restaurant }
                                    location = { val.location }
                                    id = { val.id_restaurant }
                                    logo = { val.logo }
                                    />))} <
                                    /div> <
                                    /div> <
                                    /div> <
                                    Footer / >
                                    <
                                    /div>
                                )
                            }
                        }

                        export default Restaurant;