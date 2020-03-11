import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/Style.css'
import cart from '../img/cart.png'
import search from '../img/search.png'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class Navbars extends React.Component {
    render() {

        return (
            <div>
                <div className="position">
                <Navbar light expand="md" className="p-3 navbars">
                    <NavbarBrand className="ml-5 navbarbrand" href="/" ><span className="inline text">axel</span><span className="inline brandtext">cious</span></NavbarBrand>
                        <form class="form-inline my-2 my-lg-0 textcolor">
                            <input class="bgsearch form-control mr-sm-2" type="search" placeholder="Search..." />
                            <Link><img src={search} alt="" width="30px" height="30px" className="btnsearch"/></Link>
                        </form>
                    <NavbarToggler className="mr-2" />
                    <Collapse navbar className="collapse navbar-collapse">
                        <Nav className="ml-auto mr-5" navbar>
                            <NavItem >
                                <NavLink><Link to="/home" className="mr-5 margin text-decoration-none" href="/components/"><span className="text">Home</span></Link>
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar >
                                <DropdownToggle nav caret>
                                    <span className="text">Menu</span>
                                </DropdownToggle>
                                <DropdownMenu right >
                                    <DropdownItem>
                                        Food
                                    </DropdownItem>
                                    <DropdownItem>
                                        Drink
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        All Items
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem >
                                <NavLink><Link to="/home" className="ml-3 text-decoration-none" href="/components/"><span className="text">Restaurant</span></Link></NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink><Link to="/home" className="ml-4 mr-3 margin text-decoration-none cart" href="/components/"><img  src={cart} width="30px" alt=""/></Link>
                                </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink>
                                    <Link to="/login" className="ml-3 btnlogin" href="/components/"><button type="button" className="btn btn-warning">Login</button></Link>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                </div>
            </div>
        )
    }
}

Navbars.defaultProps = {
    tittleHome: "Home"
}

export default Navbars;