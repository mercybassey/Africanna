import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/navbar/navbar.component';
import TypingEffect from '../../components/typing-effect/typing-effect.component';
import HeaderCarousel from "../../components/header-carosel/header-carosel.component";




const HeaderImage = styled.div`
    background-image: url(../../images/header2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 45rem;
    overflow: hidden;

    @media screen (max-width: 800px) {
        width:100%;
    }
   
   
` 

const Header = () => {
    return(
        <>
            <HeaderImage>
                <NavBar />
                <TypingEffect />
                <HeaderCarousel/>
            </HeaderImage>
             
        </>
    )
}

export default Header;