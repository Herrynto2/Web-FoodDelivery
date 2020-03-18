import React from 'react';
import '../assets/Login.css'
import { Link } from 'react-router-dom'

class CreateRestaurant extends React.Component {
    render() {
        return (
            <div>
                <div className="bgcreateresto">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-6-lg info-panel">
                                <div className="row">
                                    <div className="col-lg formjoinus pl-5 pr-5 pt-4">
                                        <div className="titlecreateresto"><label>Create your restaurant</label></div>
                                        <div class="form-group ">
                                            <label for="exampleFormControlInput1" className="lbljoinus">Restaurant's name</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name ..." />
                                            <label for="exampleFormControlInput1" className="lbljoinus mt-3">Location</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Location ..." />
                                            <label for="exampleFormControlInput1" className="lbljoinus mt-3">Description</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Description ..." />
                                            <label for="exampleFormControlInput1" className="lbljoinus mt-3">Owner</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Created by ..." />
                                            <label for="exampleFormControlInput1" className="lbljoinus mt-3">Logo</label>
                                            <input type="file" className="form-control-file" id="exampleFormControlInput1" />

                                        </div>
                                        <div className="text-center">
                                            <Link to="/restaurant" className="ml-3" href="/components/"><button type="button" className=" btn-auth btn btn-warning mt-4">Create</button></Link>
                                        </div>
                                        <div className="text-center mt-3">
                                            <Link to="/home" className="text-decoration-none"><span className="signuplink">Back to home</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateRestaurant;