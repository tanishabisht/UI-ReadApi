import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './navbar.scss'


const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand className='nav_logo' href="#/alldocs">ReadAPI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <nav className="ml-auto">
          <NavLink activeClassName='secLinkActive' className='secLink' to="/alldocs">ALL DOCUMENTATION</NavLink>
          <NavLink activeClassName='secLinkActive' className='secLink' to="/adddocs">ADD DOCUMENTATION</NavLink>
        </nav>
        </Navbar.Collapse>
    </Navbar>
  )
}


export default NavbarComponent