import React from "react";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";

export class Header extends React.Component {
    render() {
        return (
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Navbar.Brand href="#home" className="col-md-3 col-lg-2 me-0 px-3">
                    Tyler Lazenby
                </Navbar.Brand>
                <Navbar.Toggle className="position-absolute d-md-none" />
                <FormControl type="text" className="form-control-dark w-100" placeholder="Search" aria-label="Search"/>
                <ul className="navbar-nav px3">
                    <Nav.Item className="text-nowrap">
                        <Nav.Link href="#">Sign Out</Nav.Link>
                    </Nav.Item>
                </ul>
            </header>
        );
    }
}