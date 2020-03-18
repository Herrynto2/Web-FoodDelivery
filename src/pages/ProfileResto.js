import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbarsubuser from '../components/Navbarsubuser'

class Profilerestaurant extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data_profile: {},
            name: ''
        }
    }


    componentDidMount() {
        this.getDataResto()
    }
    async getDataResto() {
        await axios.get(`http://localhost:3000/restaurant`, { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
            .then(res => {
                console.log(res.data.data[0])
                let dataArr = res.data.data[0]
                this.setState({
                    data_profile: dataArr
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


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
            h3 className = "tittleuserprofile" > Restaurant Profile <
            /h3><hr / >

            <
            /div> <
            /div> <
            div className = "row mt-3" >
            <
            div className = "col-lg-4 sizeprofile" >
            <
            Link to = "/items" > < button class = " btnitems btn btn-warning my-2 my-sm-0"
            type = "submit" > Items < /button></Link >
            <
            img src = { process.env.REACT_APP_API_URL + this.state.data_profile.logo }
            className = "sizeuserprofile mb-3 mt-4" / >
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
            input name = "name"
            type = "text"
            className = "form-control"
            id = "exampleFormControlInput1"
            value = { this.state.data_profile.name_restaurant }
            /> <
            label
            for = "exampleFormControlInput1"
            className = "mt-2 sml" > Owner < /label> <
            input type = "text"
            className = "form-control"
            id = "exampleFormControlInput1"
            value = { this.state.data_profile.created_by }
            /> <
            label
            for = "exampleFormControlInput1"
            className = "mt-2 sml" > Description < /label> <
            input type = "text"
            className = "form-control"
            id = "exampleFormControlInput1"
            value = { this.state.data_profile.description }
            /> <
            label
            for = "exampleFormControlInput1"
            className = "mt-2 sml" > Location < /label> <
            input type = "text"
            className = "form-control mb-4"
            id = "exampleFormControlInput1"
            value = { this.state.data_profile.location }
            /> <
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

export default Profilerestaurant;