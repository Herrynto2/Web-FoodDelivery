import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import Bakso from '../img/bakso.png'
import Gua from '../img/gua.jpg'
import { Media} from 'reactstrap';

class Reviews extends React.Component {

    render() {
        return (
            <div>
            <div className="marginreview">
               <div className='container'>

                                     <div className='row justify-content-center'>
                                         <div className='col-lg-9'>
                                            <div className="reviews-box">
                                               <Media>
                                                <Media left href="#">
                                               <img src={Gua} className="img-reviews"/>
                                                </Media>
                                                <Media body>
                                                <Media heading>
                                                 {this.props.name}
                                              </Media>
                                                {this.props.review}
                                                </Media>
                                          </Media>  
                                            </div>
                                          </div>
                                     </div>
               </div>
            </div>
        </div>
        )
    }
}

export default Reviews;