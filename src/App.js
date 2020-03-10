import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'

function App() {
    return ( <
            BrowserRouter >
            <
            Switch >

            <
            Route path = "/home"
            render = {
                (props) =>
                ( < Home {...props }
                    />)}/ >




                    <
                    /Switch> <
                    /BrowserRouter>
                );
            }

            export default App;