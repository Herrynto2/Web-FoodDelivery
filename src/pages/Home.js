import React from 'react';
import Navbars from '../components/Navbar';
import Jumbotrons from '../components/Jumbotron'
import Footer from '../components/Footer'

class Home extends React.Component {

    render() {
        return ( <
            div > { /* NAVBAR */ } <
            Navbars / > { /* JUMBOTRON */ } <
            Jumbotrons / > { /* FOOTER */ } <
            Footer / >
            <
            /div>
        )
    }
}

export default Home;