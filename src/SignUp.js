import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>

                    <div className="col-md-5">
                        <form>
                            <h3>Sign Up</h3>

                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            <p className="forgot-password text-right"><br />
                    Already registered <a href="/login">sign in?</a>
                            </p>
                        </form>
                    </div>
                    <div className="col-md-5"></div>

                </div>
            </div>
        );
    }
}