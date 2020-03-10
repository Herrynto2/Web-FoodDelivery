import React from 'react';
import { Link } from 'react-router-dom'
import {
    Input,
    Button,
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label
} from 'reactstrap';

class Navbars extends React.Component {
    render() {

        return ( <
            div >
            <
            Container className = "mt-5" >
            <
            Row >
            <
            Col sm = "6"
            md = {
                { size: 6, offset: 3 } }
            className = "text-center" >
            <
            div >
            <
            Form >
            <
            FormGroup >
            <
            Label className = ""
            color = "dark" > LOGIN < /Label> <
            Input className = "mt-3"
            type = "text"
            placeholder = "username ..."
            name = "username"
            onChange = { e => this.handleUsername(e) }
            /> <
            Input className = "mt-3"
            type = "password"
            placeholder = "password ..."
            name = "password"
            onChange = { e => this.handlePassword(e) }
            /> <
            Button className = "mt-3"
            onClick = { e => this.handleLogin(e) }
            color = "primary"
            size = "md"
            block > Login < /Button> <
            /FormGroup> <
            /Form> <
            /div> <
            /Col> <
            /Row> <
            /Container> <
            /div>
        )
    }
}

Navbars.defaultProps = {
    tittleHome: "Home"
}

export default Navbars;