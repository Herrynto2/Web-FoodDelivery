import React from 'react';
import Navbarsubuser from '../components/Navbarsubuser'
import axios from 'axios'
import Swal from 'sweetalert2'

class Checkout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data_carts: null,
            checkout: null,
            total: ''
        }
    }

    handleValue = (e) => {
        console.log(e.target.value)
        this.setState({
            total: e.target.value
        })
    }

    componentDidMount() {
        this.getDataItems(this.props.match.params.id)
    }
    async getDataItems(id) {
        console.log(window.localStorage.getItem('token'))
        await axios.get(`http://localhost:3000/cart/${id}`, { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
            .then(res => {
                console.log(res.data.checkout)
                let dataArr = res.data.data[0]
                let dataArr2 = res.data.checkout
                this.setState({
                    data_carts: dataArr,
                    chekout: dataArr2
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    ////Checkout
    handleCheckout = async(e) => {
        const data = {
            total: this.state.total
        }
        const alerts = Swal.mixin({ customClass: { confirmButton: 'btn btn-warning' } })
        if (this.state.total === "" || this.state.total < 1) {
            alerts.fire({ icon: 'error', text: 'Please input value minimal 1!' })
        } else {
            await axios.post(`${process.env.REACT_APP_API_URL}/checkout/${this.props.match.params.id}`, data, {
                    headers: {
                        Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token'))
                    }
                })
                .then(res => {
                    console.log(res)
                    if (res.data.success !== false) {
                        try {
                            alerts.fire({ icon: 'success', text: 'Payment successful' })
                            this.props.history.push('/cart')
                        } catch (error) {
                            console.log(error.response)
                            alerts.fire({ icon: 'error', text: `${error.response.msg}` })
                        }
                    } else {
                        alerts.fire({ icon: 'error', title: 'Oops...', text: `${res.data.msg}` })
                    }
                })
                .catch(err => {
                    console.log({ err })
                    alerts.fire({ icon: 'error', text: `${err.response.msg}` })
                })
        }
    }

    render() {
        return ( <
            div >
            <
            Navbarsubuser / >
            <
            div className = 'container' >
            <
            h4 className = " bold mt-5 mb-5 text-center " > Checkout Item < /h4> {
                this.state.data_carts && ( <
                    div className = "card-body-link" >
                    <
                    div className = "card mb-5 card-profil" >
                    <
                    div className = "row no-gutters" >
                    <
                    div className = "row no-gutters" >
                    <
                    img src = { process.env.REACT_APP_API_URL + this.state.data_carts.images }
                    className = "card-img card-img-detail"
                    alt = "..." / >
                    <
                    /div> <
                    div className = "col-md-6" >
                    <
                    div className = "card-body" >
                    <
                    h5 className = "cart-titles" > { this.state.data_carts.name_item } < /h5> <
                    hr / >
                    <
                    h6 className = "cart-resto" > { this.state.data_carts.name_restaurant } - { this.state.data_carts.location } < /h6> <
                    p className = "text-muted" > { this.state.data_carts.description } < /p> <
                    h6 className = "cart-price" > Rp. { this.state.data_carts.price } < /h6> <
                    /div> <
                    /div> <
                    /div> <
                    /div> <
                    /div>
                )
            } <
            input onChange = { e => this.handleValue(e) }
            type = "number"
            class = "form-control input-total"
            min = "1"
            placeholder = "total items ..." / >

            <
            div class = "card" >
            <
            div class = "card-body" >
            <
            div className = "text-checkout bold" > Checkout:
            <
            button onClick = { e => this.handleCheckout(e) }
            className = "ml-3 btn btn-danger bold" > Rp. { this.state.chekout } < /button> <
            /div> <
            /div> <
            /div> <
            /div>


            <
            /div>
        )
    }
}

export default Checkout;