import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Main from '../src/pages/Main'
import Signup from '../src/pages/Signup'
import Items from '../src/pages/Items'

function App() {
    return ( <
            BrowserRouter >
            <
            Switch >
            <
            Route exact path = "/"
            render = {
                (props) =>
                ( < Main {...props }
                    />)}/ >

                    <
                    Route path = "/Login"
                    render = {
                        (props) =>
                        ( < Login {...props }
                            />)}/ >

                            <
                            Route path = "/signup"
                            render = {
                                (props) =>
                                ( < Signup {...props }
                                    />)}/ >

                                    <
                                    Route path = "/home"
                                    render = {
                                        (props) =>
                                        ( < Home {...props }
                                            />)}/ >

                                            <
                                            Route path = "/items"
                                            render = {
                                                (props) =>
                                                ( < Items {...props }
                                                    />)}/ >


                                                    <
                                                    /Switch> <
                                                    /BrowserRouter>
                                                );
                                            }

                                            export default App;