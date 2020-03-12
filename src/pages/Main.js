import React from 'react'

class Main extends React.Component {
    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('token'))
        console.log(data)
        if (data) {
            this.props.history.push('/login')
        } else {
            this.props.history.push('/home')
        }
    }

    render() {
        console.log('render')
        return null
    }
}

export default Main;