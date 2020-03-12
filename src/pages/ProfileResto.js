import React from 'react';
import { Link } from 'react-router-dom'
import Gua from '../img/resto2.jpg'
import Navbarsubuser from '../components/Navbarsubuser'

class Profilerestaurant extends React.Component {
    render() {
        return ( <
            div >
            <
            Navbarsubuser / >
            <
            div className = "container" >
            <
            div className = "row mt-5" >
            <
            div className = "col-sm-12" >
            <
            h3 className = "tittleuserprofile" > Restaurant Profile < /h3><hr / >
            <
            /div> <
            /div> <
            div className = "row mt-3" >
            <
            div className = "col-lg-4 sizeprofile" >
            <
            img src = { Gua }
            className = "sizeuserprofile mb-3" / >
            <
            input type = "file"
            className = "form-control-file"
            id = "exampleFormControlInput1" / >
            <
            /div> <
            div className = "col-lg-1" > < /div> <
            div className = "col-lg-6" >
            <
            div class = "form-group" >
            <
            label
            for = "exampleFormControlInput1"
            className = " sml" > Restaurant < /label> <
            input type = "text"
            className = "form-control"
            id = "exampleFormControlInput1"
            placeholder = "restaurant ..." / >
            <
            label
            for = "exampleFormControlInput1"
            className = "mt-2 sml" > Description < /label> <
            input type = "text"
            className = "form-control"
            id = "exampleFormControlInput1"
            placeholder = "description ..." / >
            <
            label
            for = "exampleFormControlInput1"
            className = "mt-2 sml" > Work < /label> <
            input type = "text"
            className = "form-control"
            id = "exampleFormControlInput1"
            placeholder = "created by ..." / >
            <
            label
            for = "exampleFormControlInput1"
            className = "mt-2 sml" > Description < /label> <
            input type = "text"
            className = "form-control"
            id = "exampleFormControlInput1"
            placeholder = "description ..." / >
            <
            label
            for = "exampleFormControlInput1"
            className = "mt-2 sml" > Location < /label> <
            input type = "text"
            className = "form-control mb-4"
            id = "exampleFormControlInput1"
            placeholder = "location ..." / >
            <
            button class = "btn btn-warning my-2 my-sm-0"
            type = "submit" > Edit < /button>

            <
            /div> <
            /div> <
            /div> <
            /div>

            <
            /div>
        )
    }
}

export default Profilerestaurant;