import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button ,Dropdown} from 'react-bootstrap'
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Login from './Login'
import SignUp from './SignUp'
class Bootstrap extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="warning" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">  <img src="https://magichands.co/assets/final-css-index/images/logo.png" style={{ width: '200px' }} />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/"><Button variant="outline-info">Home</Button></Nav.Link>
                                        <Nav.Link href="/about-us"><Button variant="outline-info">Contact Us</Button></Nav.Link>
                                        <Nav.Link href="/login" ><Button variant="outline-info" target="_blank">Login</Button></Nav.Link>  
                                        <Nav.Link href="/signup" ><Button variant="outline-info" target="_blank">Signup</Button></Nav.Link>  

                                        <Nav.Link href="/about-us">

                                            <Button variant="outline-info" ><a href="tel:18001213367">1800 121 3367</a></Button>
                                            </Nav.Link>
                                        <Dropdown className="m-2">
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Location
                                             </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Banaglore</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2"> New Delhi</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Mumbai </Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Kolkata </Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Nav>
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-4 m-2" />
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about-us">
                                    <AboutUs />
                                </Route>
                                <Route path="/contact-us">
                                    <ContactUs />
                                </Route>
                                <Route path="/login">
                                    <Login />
                                </Route>
                                <Route path="/signup">
                                    <SignUp />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bootstrap;