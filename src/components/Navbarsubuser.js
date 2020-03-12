import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/Style.css'
import cart from '../img/cartsub.png'
import search from '../img/searchsub.png'

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

class Navbarsub extends React.Component {
    render() {

        return (
            <div>
                <div className="navbarsub">
                    <Navbar light expand="md" className="p-3 ">
                        <NavbarBrand className="ml-5 navbarbrandsub" href=""><Link to="home"><span className="inline textsubbrand">axel</span><span className="inline brandtext">cious</span></Link></NavbarBrand>
                        <form className="form-inline my-2 my-lg-0 textcolor ml-3">
                            <input class=" form-control mr-sm-2" type="search" placeholder="Search..." />
                            <Link><img src={search} alt="" width="30px" height="30px" className="cartsub" /></Link>
                        </form>
                        <NavbarToggler className="mr-2" />
                        <Collapse navbar className="collapse navbar-collapse">
                            <Nav className="ml-auto mr-5" navbar>
                                <NavItem >
                                    <NavLink><Link to="/home" className="mr-5 text-decoration-none" href="/components/"><span className="textsub">Home</span></Link>
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar >
                                    <DropdownToggle nav caret className="mr-3">
                                        <span className="textsub">Menu</span>
                                    </DropdownToggle>
                                    <DropdownMenu right >
                                        <DropdownItem>
                                            <Link to="/items"><span className="allitems">Food</span></Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to="/items"><span className="allitems">Drink</span></Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <Link to="/items" className="text-decoration-none"><span className="allitems">All Items</span></Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem >
                                    <NavLink><Link to="/restaurant" className="ml-3 text-decoration-none" href="/components/"><span className="textsub">Restaurant</span></Link></NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink><Link to="/profile" className="ml-4 mr-3 margin text-decoration-none cartsub" href="/components/"><img src={cart} width="30px" alt="" /></Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink>
                                        <Link to="/login" className="ml-3 btnloginsub" href="/components/"><button type="button" className="btnsub btn btn-warning">Logout</button></Link>
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

export default Navbarsub;