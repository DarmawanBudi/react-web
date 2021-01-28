import Home from "./Home";
import About from "./About";
import Katalog from "./Katalog/Katalog";
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import "../App.css";

function NavbarHeader() {
    return (
      <>
        <Router>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link><Link to="/" className="link">Home</Link></Nav.Link>
                <Nav.Link><Link to="/katalog" className="link">Katalog</Link></Nav.Link>
                <Nav.Link><Link to="/about" className="link">About</Link></Nav.Link>

                {/* <NavDropdown title="Dropdown">
                  <NavDropdown.Item><Link to="/" className="link">Home</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/katalog" className="link">Katalog 1</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/katalog" className="link">Katalog 2</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item><Link to="/katalog" className="link">Sold Out</Link></NavDropdown.Item>
                </NavDropdown> */}

                {/* <Nav.Link disabled><Link to="/about">Pre Order</Link></Nav.Link> */}
                
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
  
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/katalog">
              <Katalog />
            </Route>
            
          </Switch>
        </Router >
      </>
    );
  }
  
  export default NavbarHeader;