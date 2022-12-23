import React from 'react';
import styled, {css } from 'styled-components';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';


const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 1;
    position: fixed;
    width: 100%;
    background: #000;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;

const MenuBars = styled.i`
`;
const NavMenu = styled.div``;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">UsefulSprint</Logo>
            <MenuBars />
            <NavMenu>  
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key = {index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            
        </Nav>
    );
};

export default Navbar;