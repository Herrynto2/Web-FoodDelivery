import React from 'react'
import '../assets/Style.css'
import Navbarsub from '../components/Navbarsub'
import ListItems from '../components/Listitems'
import Footer from '../components/Footer'
import axios from 'axios'

class Items extends React.Component {
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
                        div >
                        <
                        Navbarsub / > {
                            this.state.data_items.map((val, idx) => ( <
                                    ListItems key = { idx }
                                    name = { val.name_item }
                                    restaurant = { val.name_restaurant }
                                    />))} <
                                    Footer / >
                                    <
                                    /div>
                                )
                            }
                        }

                        export default Items;