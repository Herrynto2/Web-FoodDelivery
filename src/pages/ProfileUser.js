import React from 'react';
import { Link } from 'react-router-dom'
import Gua from '../img/gua.jpg'

class Profileuser extends React.Component {
    render() {
        return ( <
            div >
            <
            div className = "container" >
            <
            Link className = "card-body-link" >
            <
            div className = "card mb-3 card-profile card-body-hover" >
            <
            div className = "row no-gutters" >
            <
            div className = "row no-gutters" >
            <
            img src = { Gua }
            className = "card-img card-img-profile" / >
            <
            /div> <
            div className = "col-md-6" >
            <
            div className = "card-body" >
            <
            h5 className = "card-title" > Heri Heryanto < /h5> <
            hr / >
            <
            p className = "card-text" > < small className = "text-muted" > Last updated 3 mins ago < /small></p >
            <
            p className = "card-text text-muted mt-5" > Web Developer < /p> <
            h5 className = "card-text text-muted" > Depok < /h5>

            <
            /div> <
            /div> <
            /div> <
            /div> <
            /Link> <
            /div> <
            /div>
        )
    }
}

export default Profileuser;