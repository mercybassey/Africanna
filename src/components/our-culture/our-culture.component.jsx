import React from "react";
import styled from "styled-components";

const OurCultureContainer = styled.div`
height: 100vh;
align-items: center;
justify-content: center;
`

const Titile = styled.h3`
margin: 0 auto;
margin-top: 200px;
font-family: 'Xanh Mono', monospace;
color:black;
font-weight: bold;
text-align: center;


::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #FF030D;
    transition: width .3s;
}

:hover::after {
width: 100%;
}
`

const OurCulture = () => {
    return(
        <OurCultureContainer>
            <Titile>Our Culture</Titile>
        </OurCultureContainer>
    )
}


export default OurCulture;