import React from 'react';
import { Link } from 'react-router-dom'
import Bakso from '../img/rendang.jpg'
import Navbarsubuser from '../components/Navbarsubuser'
import Footer from '../components/Footer'
import axios from 'axios'

class Checkout extends React.Component {
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
        return (
            <div>
                <Navbarsubuser />
                <div className='container'>
                    <h4 className=" bold mt-5 mb-5 text-center ">Checkout Item</h4>
                  
                    {/* {this.state.data_items && ( */}
                        <div className="card-body-link">
                            <div className="card mb-5 card-profil">
                                <div className="row no-gutters">
                                    <div className="row no-gutters">
                                        <img src={Bakso} className="card-img card-img-detail" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5 className="cart-titles">Rendang</h5>
                                            <hr />
                                            <h6 className="cart-resto">Warunk Padang - Bogor</h6>
                                            <h6 className="cart-price">Rp. 20.000</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <input type="number" class="form-control input-total" min="1" placeholder="total items ..."/>
                    {/* )} */}

                    <div class="card">
                        <div class="card-body">
                            <div className="text-checkout bold">Checkout  :
                            <button className="ml-3 btn btn-danger bold">Rp. 100000 </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Checkout;