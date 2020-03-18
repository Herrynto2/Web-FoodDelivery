import React from 'react';
import { Link } from 'react-router-dom'
import Gua from '../img/gua.jpg'
import axios from 'axios'
import Navbarsubuser from '../components/Navbarsubuser'

class Profileuser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data_profile: {},
            balance: ''
        }
    }
    componentDidMount() {
        this.getDataUsers()
    }
    async getDataUsers() {
        // await axios.get("http://localhost:3000/detail-items/" + this.props.match.params.id)
        console.log(window.localStorage.getItem('token'))
        await axios.get(`http://localhost:3000/profile`, { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
            .then(res => {
                const x = "heriheryanto"
                    // console.log(x.substr(2, 4))
                console.log(res.data.data[0][0])
                let dataArr = res.data.data[0][0]
                this.setState({
                    data_profile: dataArr
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // Topup
    handleBalance = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            balance: e.target.value
        })
    }
    handleTopup = (e) => {
        e.preventDefault()
        const data = {
            balance: this.state.balance
        }
        if (this.state.balance === "") {
            alert('Please input value!')
        } else {

            // console.log(data) // to get data fotm username & password
            axios.patch(`http://localhost:3000/topup`, JSON.stringify(data), { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
                .then(res => {
                    console.log(this.state.balance) //to get data token 
                    if (res.data.success !== false) { // 200 is http code success
                        try {
                            alert('topup successfully', res.data)
                            this.props.history.push('/userprofile') //push home page
                        } catch (error) {
                            console.log(error.response)
                            alert(error.response.msg)
                        }
                    } else {
                        alert("please input value")
                    }
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                    alert(err.response.msg)
                })
        }
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
            h3 className = "tittleuserprofile" > User Profile < /h3><hr/ >
            <
            /div> <
            /div> <
            div className = "row mt-3" >
            <
            div className = "col-lg-4 sizeprofile" >
            <
            img src = { this.state.data_profile.images }
            className = "sizeuserprofile mb-3" / >
            <
            input type = "file"
            className = "form-control-file"
            id = "exampleFormControlInput1" / >
            <
            textarea className = "form-control address"
            rows = "3"
            value = { this.state.data_profile.address } > < /textarea> <
            /div> <
            div className = "col-lg-1" > < /div> <
            div className = "col-lg-6" >
            <
            small className = "balance" > Balance < /small><br/ >
            <
            button onClick = { e => this.handleTopup(e) }
            class = "btn btn-warning btntopup"
            type = "submit" > Topup < /button> <
            span className = "value" > Rp. { this.state.data_profile.Saldo } < /span> <
            input onChange = { e => this.handleBalance(e) }
            type = "number"
            width = "100px"
            name = "balance"
            className = "form-control mb-4"
            id = "exampleFormControlInput1" / >


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
            value = { this.state.data_profile.name_user }
            disable / >
            <
            label
            for = "exampleFormControlInput1"
            className = "mt-2 sml" > Email < /label> <
            input type = "email"
            className = "form-control"
            id = "exampleFormControlInput1"
            value = { this.state.data_profile.email }
            /> <
            label
            for = "exampleFormControlInput1"
            className = "mt-2 sml" > Gender < /label> <
            select class = "form-control"
            id = "exampleFormControlSelect1"
            value = { this.state.data_profile.gender } >
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
            value = { this.state.data_profile.work }
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

export default Profileuser;