import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../assets/Style.css'
import cart from '../img/cart.png'
import search from '../img/search.png'
import profile from '../img/profile.png'

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


const Navbaruser = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return ( <
        div >
        <
        div className = "position" >
        <
        Navbar light expand = "md"
        className = "p-3 navbars" >
        <
        NavbarBrand className = "ml-5 navbarbrand"
        href = "" > < Link to = "home" > < span className = "inline text" > axel < /span><span className="inline brandtext">cious</span > < /Link></NavbarBrand > {
            /* <form class="form-inline my-2 my-lg-0 textcolor">
                                        <input class="bgsearch form-control mr-sm-2" type="search" placeholder="Search..." />
                                        <Link><img src={search} alt="" width="30px" height="30px" className="btnsearch" /></Link>
                                    </form> */
        }

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
        className = "mr-4 margin text-decoration-none"
        href = "/components/" > < span className = "text" > Home < /span></Link >
        <
        /NavLink> <
        /NavItem> <
        UncontrolledDropdown nav inNavbar >
        <
        DropdownToggle nav caret className = "mr-3" >
        <
        span className = "text" > Menu < /span> <
        /DropdownToggle> <
        DropdownMenu right >
        <
        DropdownItem >
        <
        Link to = "browse-category/1" > < span className = "allitems" > Food < /span></Link >
        <
        /DropdownItem> <
        DropdownItem >
        <
        Link to = "browse-category/2" > < span className = "allitems" > Drink < /span></Link >
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
        href = "/components/" > < span className = "text" > Restaurant < /span></Link > < /NavLink> <
        /NavItem> <
        NavItem >
        <
        NavLink > < Link to = "/cart"
        className = "mr-4 margin text-decoration-none cart"
        href = "/components/" > < img src = { cart }
        width = "30px"
        alt = "" / > < /Link> <
        /NavLink> <
        /NavItem> <
        NavItem >
        <
        NavLink > < Link to = "/profile"
        className = "mr-4 margin text-decoration-none cart"
        href = "/components/" > < img src = { profile }
        width = "30px"
        alt = "" / > < /Link> <
        /NavLink> <
        /NavItem> <
        NavItem >
        <
        NavLink >
        <
        Link to = "/login"
        className = "mr-3 btnlogin"
        href = "/components/" > < button type = "button"
        className = "btn btn-warning" > Logout < /button></Link >
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

export default Navbaruser;