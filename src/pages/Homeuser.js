import React from 'react';
import Navbaruser from '../components/Navbaruser';
import Jumbotrons from '../components/Jumbotron'
import Footer from '../components/Footer'
import Joinus from '../components/Joinus';
import Slider from '../components/SliderItems'
import Slidersresto from '../components/SliderResto'

class Homeuser extends React.Component {

    render() {
        return ( <
            div > { /* NAVBAR */ } <
            Navbaruser / > { /* JUMBOTRON */ } <
            Jumbotrons / > { /* SLIDER */ } <
            Slider / > { /* JOIN US */ } <
            Joinus / > { /* SliderResto */ } <
            Slidersresto / > { /* FOOTER */ } <
            Footer / >
            <
            /div>
        )
    }
}

export default Homeuser;