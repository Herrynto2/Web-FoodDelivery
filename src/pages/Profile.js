import React from 'react'
import '../assets/Style.css'
import Navbarsubuser from '../components/Navbarsubuser'
import Profileusers from '../components/Profileusers'
import Profilerestos from '../components/Profilesrestos'

class Profile extends React.Component {
   
    render() {
        return (
        <div>
            <Navbarsubuser/>
            <Profileusers/>
            <Profilerestos/>
        </div>
        )
    }
}

export default Profile;