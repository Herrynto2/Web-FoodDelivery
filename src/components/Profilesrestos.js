import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import resto from '../img/resto2.jpg'

class Profilerestos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data_profile: {}
        }
    }

    componentDidMount() {
        this.getDataResto()
    }

    async getDataResto() {
        // await axios.get("http://localhost:3000/detail-items/" + this.props.match.params.id)
        console.log(window.localStorage.getItem('token'))
        await axios.get(`http://localhost:3000/restaurant`, { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
            .then(res => {
                console.log(res)
                console.log(res.data.data[0])
                let dataArr = res.data.data[0]
                this.setState({
                    data_profile: dataArr,
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
            div className = "container" >
            <
            Link to = "/restaurantprofile"
            className = "card-body-link" >
            <
            div className = "card mb-5 mt-5 card-body-hover" >
            <
            div className = "row no-gutters" >
            <
            div className = "row no-gutters" >
            <
            img src = { process.env.REACT_APP_API_URL + this.state.data_profile.logo }
            className = "card-img card-img-profile" / >
            <
            /div> <
            div className = "col-md-8" >
            <
            div className = "card-body " >
            <
            h5 className = "card-title" > { this.state.data_profile.name_restaurant } < /h5> <
            hr / >
            <
            p className = "card-text" > < small className = "text-muted" > Last updated { this.state.data_profile.date_updated } < /small></p >
            <
            p className = "card-text text-muted mb-5" > { this.state.data_profile.description } < /p> <
            h5 className = "card-text text-muted" > { this.state.data_profile.location } < /h5>

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