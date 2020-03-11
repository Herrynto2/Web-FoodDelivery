import React from 'react';
import Navbars from '../components/Navbar';
import Jumbotrons from '../components/Jumbotron'
import Footer from '../components/Footer'
import Joinus from '../components/Joinus';

class Home extends React.Component {

    render() {
        return ( <
            div > { /* NAVBAR */ } <
            Navbars / > { /* JUMBOTRON */ } <
            Jumbotrons / > { /* JOIN US */ } <
            Joinus / > { /* FOOTER */ } <
            Footer / >
            <
            /div>
        )
    }
}

export default Home;