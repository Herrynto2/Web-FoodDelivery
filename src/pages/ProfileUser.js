import React from 'react';
import { Link } from 'react-router-dom'
import Gua from '../img/gua.jpg'
import Navbarsubuser from '../components/Navbarsubuser'

class Profileuser extends React.Component {
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
            h3 className = "tittleuserprofile" > User Profile < /h3><hr/ >
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
            textarea className = "form-control address"
            rows = "3 " > < /textarea> <
            /div> <
            div className = "col-lg-1" > < /div> <
            div className = "col-lg-6" >
            <
            small className = "balance" > Balance < /small><br/ >
            <
            button class = "btn btn-warning btntopup"
            type = "submit" > Topup < /button> <
            span className = "value" > 200000 < /span>

            <
            hr / >
            <
            div class = "form-group" >
            <
            label
            for = "exampleFormControlInput1"
            className = " sml" > Name < /label> <
            input type = "text"
            className = "form-control"
            id = "exampleFormControlInput1"
            placeholder = "name ..." / >
            <
            label
            for = "exampleFormControlInput1"
            className = "mt-2 sml" > Email < /label> <
            input type = "email"
            className = "form-control"
            id = "exampleFormControlInput1"
            placeholder = "email ..." / >
            <
            label
            for = "exampleFormControlInput1"
            className = "mt-2 sml" > Gender < /label> <
            select class = "form-control"
            id = "exampleFormControlSelect1"
            placeholder = "Gender" >
            <
            option > Man < /option> <
            option > Woman < /option> <
            /select>   <
            label
            for = "exampleFormControlInput1"
            className = "mt-2 sml" > Work < /label> <
            input type = "text"
            className = "form-control mb-4"
            id = "exampleFormControlInput1"
            placeholder = "work ..." / >
            <
            button class = "btn btn-warning my-2 my-sm-0"
            type = "submit" > Edit < /button> <
            /div> <
            /div> <
            /div> <
            /div>


            <
            /div>
        )
    }
}

export default Profileuser;