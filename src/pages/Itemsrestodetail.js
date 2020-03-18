import React from 'react';
import Navbarsubuser from '../components/Navbarsubuser'
import axios from 'axios'
import { useParams } from "react-router-dom";

class itemsrestoDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data_items: null,
            name_item: '',
            category: '',
            price: '',
            description: '',
            images: null,
            total_item: ''
        }
    }
    handleName = (e) => {
        console.log(e.target.value)
        this.setState({
            name_item: e.target.value
        })
    }
    handleCategory = (e) => {
        console.log(e.target.value)
        this.setState({
            category: e.target.value
        })
    }
    handlePrice = (e) => {
        console.log(e.target.value)
        this.setState({
            price: e.target.value
        })
    }
    handleDescription = (e) => {
        console.log(e.target.value)
        this.setState({
            description: e.target.value
        })
    }
    handleImages = (e) => {
        console.log(e.target.files[0])
        this.setState({
            images: e.target.files[0]
        })
    }
    handleValue = (e) => {
        console.log(e.target.value)
        this.setState({
            total_item: e.target.value
        })
    }

    componentDidMount() {
        this.getDataItems(this.props.match.params.id)
    }
    async getDataItems(id) {
        console.log(window.localStorage.getItem('token'))
        await axios.get(`http://localhost:3000/restaurant-items/${id}`, { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
            .then(res => {
                console.log(res.data)
                let dataArr = res.data.data
                this.setState({
                    data_items: dataArr
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    //Edit Items
    handleEdit = (e) => {
        const data = new FormData()
        data.append('name_item', this.state.name_item)
        data.append('category', this.state.category)
        data.append('price', this.state.price)
        data.append('description', this.state.description)
        data.append('images', this.state.images)

        if (this.state.name_item === "" || this.state.category === "" || this.state.price === "" || this.state.description === "") {
            alert('text still empty!')
        } else {
            // console.log(data) // to get data fotm username & password
            axios.patch(`http://localhost:3000/items/${this.props.match.params.id}`, data, { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
                .then(res => {
                    console.log(res.data)
                    if (res.data.success !== false) {
                        try {
                            alert('Edit items successfully')
                        } catch (error) {
                            console.log(error.response)
                            alert(error.response.msg)
                        }
                    } else {
                        alert('Edit items failed')
                    }
                })
                .catch(err => {
                    console.log(err)
                    console.log(err.response)
                    alert(err.response.msg)
                })
        }
    }

    //Add total Items 
    handleAdd = async(e) => {
        const data = {
            total_item: this.state.total_item
        }
        if (this.state.value === "") {
            alert('value still empty!')
        } else {
            await axios.patch(`${process.env.REACT_APP_API_URL}/items/total/${this.props.match.params.id}`, { total_item: `${this.state.total_item}` }, {
                    headers: {
                        Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token'))
                    }
                })
                .then(res => {
                    console.log(res)
                    if (res.data.success !== false) {
                        try {
                            alert('add value items successfully')
                        } catch (error) {
                            console.log(error.response)
                            alert(error.response.msg)
                        }
                    } else {
                        alert('add items failed')
                    }
                })
                .catch(err => {
                    console.log({ err })
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
            div className = 'container marginitemresto' >
            <
            h4 className = " bold mt-5 mb-5 text-center " > Items < /h4>

            {
                this.state.data_items && ( <
                    div className = "row" >
                    <
                    div className = "col-lg-5" >
                    <
                    div className = "card-body-link" >
                    <
                    div className = "cards card mb-5" >
                    <
                    div className = "row no-gutters card-gutters" >
                    <
                    div className = "row no-gutters" >
                    <
                    img src = { process.env.REACT_APP_API_URL + this.state.data_items.images }
                    className = "card-img card-img-detail"
                    alt = "..." / >
                    <
                    /div> <
                    div className = "col-md-12" >
                    <
                    div className = "card-body" >
                    <
                    h5 className = "cart-titles" > { this.state.data_items.name_item } < /h5> <
                    hr / >
                    <
                    h6 className = "cart-resto" > { this.state.data_items.name_restaurant } - { this.state.data_items.location } < /h6> <
                    h6 className = "cart-price" > Rp. { this.state.data_items.price } < /h6> <
                    /div> <
                    /div> <
                    /div> <
                    /div> <
                    /div> <
                    /div>

                    <
                    div className = "col-lg-7" >
                    <
                    input type = "text"
                    onChange = { e => this.handleName(e) }
                    name = "name"
                    className = "form-control mb-3"
                    placeholder = { this.state.data_items.name_item }
                    /> <
                    input type = "text"
                    onChange = { e => this.handleCategory(e) }
                    name = "category"
                    className = "form-control mb-3"
                    placeholder = { this.state.data_items.category }
                    /> <
                    input type = "text"
                    onChange = { e => this.handlePrice(e) }
                    name = "price"
                    className = "form-control mb-3"
                    placeholder = { this.state.data_items.price }
                    /> <
                    input type = "text"
                    onChange = { e => this.handleDescription(e) }
                    name = "description"
                    className = "form-control mb-3"
                    placeholder = { this.state.data_items.description }
                    /> <
                    input onChange = { e => this.handleImages(e) }
                    type = "file"
                    className = "form-control-file mb-3" / >
                    <
                    button onClick = { e => this.handleEdit(e) }
                    className = 'btn btn-danger block btn-edit-item-resto mb-5' > Edit < /button> <
                    input type = "number"
                    onChange = { e => this.handleValue(e) }
                    name = "value"
                    className = "form-control mb-3"
                    min = "1"
                    placeholder = "add items..." / >
                    <
                    button onClick = { e => this.handleAdd(e) }
                    type = "button"
                    className = 'btn btn-danger block btn-edit-item-resto' > Add < /button> <
                    /div> <
                    /div>
                )
            }

            <
            /div>


            <
            /div>
        )
    }
}

export default itemsrestoDetail;