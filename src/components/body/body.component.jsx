import React from "react";
import styled from "styled-components";
import 'animate.css/animate.css'
import 'react-multi-carousel/lib/styles.css';
import 'animate.css/animate.css';
import WhoWeAre from "../../components/who-we-are/who-we-are.component";
import './body.styles.css';


const Container = styled.div`
    height: 100vh;
    position:relative;
    top:200px;
    align-items: center;
    justify-content: center;
    margin:0 auto;
`

const AboutAfricaTitle = styled.h3`
    margin: 0 auto;
    margin-top: -90px;
    font-family: 'Xanh Mono', monospace;
    font-weight:bold;
    text-align:center;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width:800px) {
        margin:0 auto;
        position:relative;
        top:-170px;
    }
`

const AboutAfrica = styled.div`
    color: grey;
    margin: 0 auto;
    margin-top: 40px;
    width: 90%;
    text-align:center;

    @media screen and (max-width:800px) {
        position:relative;
        top:-150px;
        margin:0 auto;
    }

`



const IamAfrican = styled.h3`
margin: 0 auto;
margin-top: 40px;
font-family: 'Xanh Mono', monospace;
text-align:center;
justify-content: center;
align-items: center;
font-weight:bold;

@media screen and (max-width:800px) {
    position:relative;
    top:-100px;
    margin:0 auto;
}
`
const ImageContainer = styled.div`
width: 100%;
height:70%;
padding:0;
margin:0 auto;


@media screen and (max-width:800px) {
    position:relative;
    top:-80px;
    margin:0 auto;
}
`

const Image = styled.img`
padding: 30px;
width:100%;
height:100%;

@media screen and (max-width:800px) {
position:relative;
   width:100%;
   margin:20px;
   margin:0 auto;
}
`





const Body = () => {
    return(
        <>
            <Container className="animate__animated animate__fadeInLeft animate__delay-4s">        
                <AboutAfricaTitle>About Africa</AboutAfricaTitle>
                <AboutAfrica>Africa is the world's second-largest and second-most populous continent,  after Asia in both cases. At about 30.3 million km² including adjacent islands, 
                    it covers 6% of Earth's total 
                    surface area and 20% of its land area.
                    With 1.3 billion people as of 2018, 
                    it accounts for about 16% of the world's human population.
                </AboutAfrica>

                <IamAfrican>I'm African and I'm Pop <i className="fa fa-headphones" style={{width:"30px", height:"30px"}}></i></IamAfrican>
                <ImageContainer>
                    <div className="card-group ">
                        <div className="card">
                        <Image src="./pop/burna-boy.jpg" className="card-img animate__animated animate__fadeInLeft animate__delay-7s" alt="..."/>
                        </div>
                        <div className="card">
                            <Image src="./pop/davido.jpg" className="card-img animate__animated animate__fadeInLeft animate__delay-9s" alt="..." />
                        </div>
                        <div className="card">
                            <Image src="./pop/tiwa-savage.jpg" className="card-img animate__animated animate__fadeInLeft animate__delay-5s" alt="..."/>
                        </div>
                        <div className="card">
                            <Image src="./pop/yemi-alade.jpg" className="card-img animate__animated animate__fadeInLeft animate__delay-4s" alt="..."/>
                        </div>
                    </div>
                </ImageContainer> 
                <WhoWeAre className="whoweare"/>
            </Container>
            
        </>
    )
}

export default Body;





