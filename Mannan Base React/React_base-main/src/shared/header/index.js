import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { ROUTES } from 'utils/Common/Constant'

const Header = ({history}) => {
  const { pathname } = history.location
  const isActive = (path) => {
    return pathname.includes(path)
  }
  return (
    <>
      <Navbar bg="light" variant="light">
        <Link className={`navbar-brand ${isActive('/') && 'active'}`} to="/">Contact</Link>
        <Nav className="mr-auto">
          <Link className={`nav-link ${isActive('/about') && 'active'}`} to="/about">About</Link>
          <Link className={`nav-link ${isActive('/test') && 'active'}`} to="/test">Test</Link>
          <Link className={`nav-link ${isActive('/context') && 'active'}`} to="/context">Context</Link>
          <Link className={`nav-link ${isActive('/form') && 'active'}`} to="/form">Form</Link>
          <Link className={`nav-link ${isActive(ROUTES.USER_PATH) && 'active'}`} to={ROUTES.USER_PATH}>Users</Link>
          <Link className={`nav-link ${isActive(ROUTES.CANVAS_PATH) && 'active'}`} to={ROUTES.CANVAS_PATH}>Canvas</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    </>
  )
}

export default Header