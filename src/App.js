import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
//Pages
import Home from './pages/Home'
import Homeuser from '../src/pages/Homeuser'
import Login from './pages/Login'
import Main from '../src/pages/Main'
import Signup from '../src/pages/Signup'
import ForgotPassword from '../src/pages/ForgotPassword'
import Items from '../src/pages/Items'
import Restaurant from '../src/pages/Restaurant'
import CreateRestaurant from '../src/pages/Createresto'

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
                                    Route path = "/forgot-password"
                                    render = {
                                        (props) =>
                                        ( < ForgotPassword {...props }
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
                                                            Route path = "/restaurant"
                                                            render = {
                                                                (props) =>
                                                                ( < Restaurant {...props }
                                                                    />)}/ >

                                                                    <
                                                                    Route path = "/joinus"
                                                                    render = {
                                                                        (props) =>
                                                                        ( < CreateRestaurant {...props }
                                                                            />)}/ >

                                                                            <
                                                                            Route path = "/homes"
                                                                            render = {
                                                                                (props) =>
                                                                                ( < Homeuser {...props }
                                                                                    />)}/ >


                                                                                    <
                                                                                    /Switch> <
                                                                                    /BrowserRouter>
                                                                                );
                                                                            }

                                                                            export default App;