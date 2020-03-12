import React from 'react';
import { Link } from 'react-router-dom'
import resto from '../img/resto2.jpg'

class Profilerestos extends React.Component {
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
            img src = { resto }
            className = "card-img card-img-profile" / >
            <
            /div> <
            div className = "col-md-8" >
            <
            div className = "card-body " >
            <
            h5 className = "card-title" > Solaria < /h5> <
            hr / >
            <
            p className = "card-text" > < small className = "text-muted" > Last updated 3 mins ago < /small></p >
            <
            p className = "card-text text-muted" > Description Lorem ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit.Recusandae, dignissimos!dolor sit amet consectetur adipisicing elit.Praesentium, ut. < /p> <
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

export default Profilerestos;