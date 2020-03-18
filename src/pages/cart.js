import React from 'react';
import { Link } from 'react-router-dom'
import Bakso from '../img/rendang.jpg'
import Navbarsubuser from '../components/Navbarsubuser'
import Footer from '../components/Footer'

class Carts extends React.Component {
    render() {
        return (
            <div>
                <Navbarsubuser />
                <div className='container'>
                    <h4 className=" bold mt-5 text-center">Cart</h4>
                    
                        <div className="card mb-3 checkout-profile img-cartsize card-body-hover">
                            <div className="row no-gutters justify-content-center">
                            <Link to="/checkout" className="card-body-link">
                                <div className="row no-gutters">
                                    <div className="img-checksize"><img src={Bakso} className="card-img card-img-cart"/></div>
                                </div>
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="cart-title">Bakso Pekalongan</h5>
                                        <hr />
                                       <h6 className="cart-resto text-center">Solaria</h6>
                                       <h6 className="check-price text-center">Rp. 10000</h6>
                                    </div>
                                </div>
                            </Link>
                            </div>
                            
                        </div>
                    
                 
                        <div class="card-body">
                            <div className="text-checkout bold">Total :<span className="cart-balance">Rp. 288800</span></div>
                        </div>
                    </div>
           

                <Footer/>
            </div>
        )
    }
}

export default Carts;