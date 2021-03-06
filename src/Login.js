import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        
                    </div>

                    <div className="col-md-5">
                        <form>
                            <h3>Sign In</h3>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            <p className="forgot-password text-right"><br />
                                Forgot <a href="/forgot">password?</a><br />
                                don't have account please registered <a href="/signup">sign up</a>

                            </p>
                        </form>

                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-2"></div>

                </div>
            </div>
        );
    }
}