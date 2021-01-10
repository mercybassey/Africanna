import React from "react";
import styled from "styled-components";
import 'animate.css/animate.css';

const WhoWeAreContainer = styled.div`
background-image: url(../../images/whoweare.jpg);
background-repeat: no-repeat;
background-size: cover;
height: 35rem;
overflow: hidden;
margin-top:150px;
opacity:19;

@media screen (max-width: 375px) {
    width:100%;
    position:relative;
    margin-top:2000px !important;
}
`

const Text = styled.h3`
display:flex;
align-items: center;
justify-content: center;
font-family: 'Xanh Mono', monospace;
font-weight:bold;
margin-top:60px;


`

const MainText = styled.p`
text-align:center;
align-items: center;
justify-content: center;
font-family: 'Jaldi', sans-serif;
font-family: 'Marck Script', cursive;
font-family: 'Parisienne', cursive;
font-size:1.7rem;
color: black;
font-weight:bold;
margin-top:40px;
width:70%;
margin:0 auto;
`


const WhoWeAre = () => {
    return(
        <WhoWeAreContainer className="animate__animated animate__fadeInLeft animate__delay-4s">
            <Text className="animate__animated animate__fadeInLeft animate__delay-5s">The African Woman</Text>
            <MainText className="animate__animated animate__fadeInLeft animate__delay-6s">We the african women, we are strong!
                We are Beautiful, We dont settle for less that what we deserve
                We dont worry about what we are now, For what we will be,
                we are gradually becoming. We will raise our head high wherever we go, Because of our
                African Pride. And nobody will take that from us. <br/><br/>

                We are black, tall as a cypress. Strong beyond all definition still defying place and time and circumstance assailed impervious indestructible
                look on us and be renewed.<br/><br/>

                We are Educated Exquisite Black Queens.
            </MainText>
        </WhoWeAreContainer>
    )
}

export default WhoWeAre;