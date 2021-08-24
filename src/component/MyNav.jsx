import React from 'react';
import {Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand, NavbarText} from 'reactstrap';

class MyNav extends React.Component {
    render(){
        return (
            <div>
                <Navbar color="light" light expand="md" className="mx-2">
                    <NavbarBrand href="/login">Auth</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink href="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/register">Register</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default MyNav;