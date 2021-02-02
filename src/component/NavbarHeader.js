import Home from "./Home";
import About from "./About";
import Katalog from "./Katalog/Katalog";
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { useState } from "react";

function NavbarHeader() {
  const [search, setSearch] = useState(null)
  const filterSearch = (e) => {
    setSearch (e.target.value)
  }
  return (
    <>
      <Router>
        <Navbar expand="lg">
          <Navbar.Brand href="#home"><h3>Shop</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav">
              <Nav.Link><Link to="/" className="link">Home</Link></Nav.Link>
              <Nav.Link><Link to="/katalog" className="link">Katalog</Link></Nav.Link>
              <Nav.Link><Link to="/about" className="link">About</Link></Nav.Link>

              <NavDropdown className="link" title="Dropdown">
                <NavDropdown.Item><Link to="/" className="link">Home</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/katalog" className="link">Katalog 1</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/katalog" className="link">Katalog 2</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><Link to="/katalog" className="link">Sold Out</Link></NavDropdown.Item>
              </NavDropdown>

              {/* <Nav.Link disabled><Link to="/about">Pre Order</Link></Nav.Link> */}

            </Nav>

            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form> */}

            {/* <div className="col-3">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1"><i class="fas fa-search"></i></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  onChange={filterSearch}
                />
              </InputGroup>
            </div> */}

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