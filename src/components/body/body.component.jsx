import React from "react";
import styled from "styled-components";
import 'animate.css/animate.css'
import 'react-multi-carousel/lib/styles.css';

const Container = styled.div`
    height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;
`

const AboutAfricaTitle = styled.h3`
    margin: 0 auto;
    margin-top: -400px;
    font-family: 'Xanh Mono', monospace;

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

    @media screen and (max-width:800px) {
        position: relative;
        top:-130px;
        text-align:center;
        justify-content: center;
        left:150px;
        font-size:2rem;
        
    }

    @media screen and (max-width:800px) {
        position:relative;
        top:-60px;
        text-align:center;
        left:150px;
    }
`

const AboutAfrica = styled.div`
    color: grey;
    margin: 0 auto;
    margin-top: -400px;
    width: 700px;

    @media screen and (max-width:800px) {
        position:relative;
        top:40px;
        text-align:center;
        left:-50px;
    }

    @media screen and (max-width:800px) {
        position:relative;
        top:90px;
        text-align:center;
        left:-50px;
    }

`



const Body = () => {
    return(
        <Container className="animate__animated animate__fadeInLeft animate__delay-4s">        
            <AboutAfricaTitle>About Africa</AboutAfricaTitle>
            <AboutAfrica>Africa is the world's second-largest and second-most populous continent, 
                after Asia in both cases. At about 30.3 million km² including adjacent islands, 
                it covers 6% of Earth's total 
                surface area and 20% of its land area.
                With 1.3 billion people as of 2018, 
                it accounts for about 16% of the world's human population.</AboutAfrica> 

                {/* <AboutAfrica style={{position: "relative", top:"400px"}}>Considered by many scientists to be the origin of mankind, Africa is a continent of 54 independent countries and a rich mix of native peoples, cultures, economies and history.</AboutAfrica>

                <AboutAfrica>The scenic beauty and variety is quite stunning, it is home to vast deserts, tropical rain forests, rugged mountains and fertile grasslands. It is abundant in flora and fauna unsurpassed by any other continent</AboutAfrica>

                <AboutAfrica>An ever-increasing number of tourists from around the globe are drawn to this incredible continent every year to experience its wonders.</AboutAfrica> */}
        </Container>
    )
}

export default Body;