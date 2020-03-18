import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Profileusers extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data_profile: {},
            data_updated: {}
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
                console.log(x.substr(2, 4))
                console.log(res.data.data[1][0].updated_at)
                let dataArr = res.data.data[0][0]
                let dataArr2 = res.data.data[1][0]
                this.setState({
                    data_profile: dataArr,
                    data_updated: dataArr2
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return ( <
            div > { console.log(this.state.data_profile) } <
            div className = "container" >
            <
            Link to = "/userprofile"
            className = "card-body-link" >
            <
            div className = "card mb-3 card-profile card-body-hover" >
            <
            div className = "row no-gutters" >
            <
            div className = "row no-gutters" >
            <
            div className = "img-profilesize" > < img src = { process.env.REACT_APP_API_URL + this.state.data_profile.images }
            className = "card-img card-img-profile"
            alt = "" / > < /div> <
            /div> <
            div className = "col-md-6" >
            <
            div className = "card-body" >
            <
            h5 className = "card-title" > { this.state.data_profile.name_user } < /h5> <
            hr / >
            <
            p className = "card-text" > < small className = "text-muted" > Last updated { this.state.data_updated.updated_at } < /small></p >
            <
            p className = "card-text text-muted mt-5" > { this.state.data_profile.address } < /p> <
            h5 className = "card-text text-muted" > { this.state.data_profile.work } < /h5> <
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

export default Profileusers;