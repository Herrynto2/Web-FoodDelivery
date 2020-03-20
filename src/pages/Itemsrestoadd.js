import React, { Component } from 'react'
import Navbarsubuser from '../components/Navbarsubuser'
import Rendang from '../img/rendang.jpg'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'


class ItemsRestoadd extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
    handleDesc = (e) => {
        console.log(e.target.value)
        this.setState({
            description: e.target.value
        })
    }
    handleImages = (e) => {
        console.log(e.target.value)
        this.setState({
            images: e.target.files[0]
        })
    }
    handleTotal = (e) => {
        console.log(e.target.value)
        this.setState({
            total_item: e.target.value
        })
    }

    handleAdd = (e) => {
        const data = new FormData()
        data.append('name_item', this.state.name_item)
        data.append('category', this.state.category)
        data.append('price', this.state.price)
        data.append('description', this.state.description)
        data.append('images', this.state.images)
        data.append('total_item', this.state.total_item)

        if (this.state.name_item === "" || this.state.category === "" || this.state.price === "" || this.state.description === "") {
            alert('text still empty!')
        } else {
            // console.log(data) // to get data fotm username & password
            axios.post(`http://localhost:3000/items`, data, { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
                .then(res => {
                    console.log(res.data)
                    if (res.data.success !== false) {
                        try {
                            alert('Add items successfully')
                        } catch (error) {
                            console.log(error.response)
                            alert(error.response.msg)
                        }
                    } else {
                        alert('Add items failed')
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
            div className = "container marginadditems" >
            <
            div className = "row justify-content-center" >
            <
            div className = "col-md-6 text-center" >
            <
            h5 className = "text-muted mb-3" > Create Items < /h5> <
            img src = { Rendang }
            className = "imgshape" / >
            <
            div className = "text-center " >
            <
            input onChange = { e => this.handleImages(e) }
            type = "file"
            className = "form-control-file" / >
            <
            /div> <
            form noValidate autoComplete = "off" >
            <
            TextField onChange = { e => this.handleName(e) }
            label = "Items name"
            color = "primary"
            className = "inputadditems mt-3" / >
            <
            TextField onChange = { e => this.handleCategory(e) }
            label = "Category"
            color = "primary"
            className = "inputadditems" / >
            <
            TextField onChange = { e => this.handlePrice(e) }
            label = "Price"
            color = "primary"
            className = "inputadditems" / >
            <
            TextField onChange = { e => this.handleDesc(e) }
            label = "Description name"
            color = "primary"
            className = "inputadditems" / >
            <
            TextField onChange = { e => this.handleTotal(e) }
            label = "Items total"
            color = "primary"
            className = "inputadditems" / >
            <
            div className = "text-center" >
            <
            button type = "button"
            onClick = { e => this.handleAdd(e) }
            className = "btn-auth btn btn-warning mt-4 mb-5" > Create < /button> <
            /div> <
            /form> <
            /div> <
            /div> <
            /div> <
            /div>
        )
    }
}

export default ItemsRestoadd;