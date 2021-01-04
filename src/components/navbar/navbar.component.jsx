import React from 'react';
import HamBurger from './hamburger.component';
import styled from 'styled-components';

const Nav = styled.div`
    width:100%;
    height:65px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
`

const NavContainer = styled.div`
    font-family: 'Charmonman', cursive;
    font-weight: bold;
    font-size: 50px;
    
`

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>Afircanna</NavContainer>
            <HamBurger/>
        </Nav>
    )
}

export default Navbar;