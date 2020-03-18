import React, { useState } from 'react';
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

const Navbarsub = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return ( <
        div >
        <
        div className = "navbarsub position" >
        <
        Navbar light expand = "md"
        className = "p-3 " >
        <
        NavbarBrand className = "ml-5 navbarbrandsub"
        href = "" > < Link to = "home" > < span className = "inline textsubbrand" > axel < /span><span className="inline brandtext">cious</span > < /Link></NavbarBrand >
        <
        NavbarToggler onClick = { toggleNavbar }
        className = "mr-2" / >
        <
        Collapse isOpen = {!collapsed }
        navbar className = "collapse navbar-collapse" >
        <
        Nav className = "ml-auto mr-5"
        navbar >
        <
        NavItem >
        <
        NavLink > < Link to = "/home"
        className = "mr-5 text-decoration-none"
        href = "/components/" > < span className = "textsub" > Home < /span></Link >
        <
        /NavLink> <
        /NavItem> <
        UncontrolledDropdown nav inNavbar >
        <
        DropdownToggle nav caret className = "mr-3" >
        <
        span className = "textsub" > Menu < /span> <
        /DropdownToggle> <
        DropdownMenu right >
        <
        DropdownItem >
        <
        Link to = "/browse-category/1" > < span className = "allitems" > Food < /span></Link >
        <
        /DropdownItem> <
        DropdownItem >
        <
        Link to = "/browse-category/2" > < span className = "allitems" > Drink < /span></Link >
        <
        /DropdownItem> <
        DropdownItem divider / >
        <
        DropdownItem >
        <
        Link to = "/browse-items"
        className = "text-decoration-none" > < span className = "allitems" > All Items < /span></Link >
        <
        /DropdownItem> <
        /DropdownMenu> <
        /UncontrolledDropdown> <
        NavItem >
        <
        NavLink > < Link to = "/browse-restaurant"
        className = "mr-4 text-decoration-none"
        href = "/components/" > < span className = "textsub" > Restaurant < /span></Link > < /NavLink> <
        /NavItem> <
        NavItem >
        <
        NavLink > < Link to = "/cart"
        className = " mr-4 margin text-decoration-none cartsub"
        href = "/components/" > < img src = { cart }
        width = "30px"
        alt = "" / > < /Link> <
        /NavLink> <
        /NavItem> <
        NavItem >
        <
        NavLink >
        <
        Link to = "/login"
        className = " btnloginsub"
        href = "/components/" > < button type = "button"
        className = "btnsub btn btn-warning" > Login < /button></Link >
        <
        /NavLink> <
        /NavItem> <
        /Nav> <
        /Collapse> <
        /Navbar> <
        /div> <
        /div>
    )
}

export default Navbarsub;