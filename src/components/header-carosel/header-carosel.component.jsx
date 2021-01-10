import React from "react";
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'animate.css/animate.css'
import 'react-multi-carousel/lib/styles.css';

const CarouselContainer = styled.div`
  position: relative;
  top: -250px;
  align-items: center;
  background-color: white;
  height: 200px;
  width: 800px;
  margin: 0 auto;
  

  @media screen and (max-width:360px) {
    margin: 0 auto;
    height:250px;
    width:250px;
    position: relative;
   bottom:50px;
  }

  @media screen and (max-width:800px) {
    margin: 0 auto;
    height:250px;
    width:250px;
    position: relative;
    top: -480px;
  }
 
`
const Image = styled.img`
  height: 150px;
  width: 150px;
  margin: 0 auto;
  position: relative;
  top: 40px;

  @media screen and (max-width:800px) {
    margin: 0 auto;
    height:250px;
    width:250px;
   
  }

  
 
`


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};


class HeaderCarousel extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            deviceType: true
        }
    };

    render() {
        return(
          <CarouselContainer className="animate__animated animate__fadeInUp animate__delay-2s ">
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            <Image src="/pictures/images (1).jpg" alt="logo" />
            <Image src="/pictures/images (2).jpg" alt="logo" />
            <Image src="/pictures/images (3).jpg" alt="logo" />
            <Image src="/pictures/images (4).jpg" alt="logo" />
            <Image src="/pictures/images (5).jpg" alt="logo" />
            <Image src="/pictures/images (6).jpg" alt="logo" />
            <Image src="/pictures/images (8).jpg" alt="logo" />
            <Image src="/pictures/images (9).jpg" alt="logo" />
            <Image src="/pictures/images (10).jpg" alt="logo" />
            <Image src="/pictures/images (11).jpg" alt="logo" />
            <Image src="/pictures/images (12).jpg" alt="logo" />
            <Image src="/pictures/images (13).jpg" alt="logo" />
            <Image src="/pictures/images (14).jpg" alt="logo" />
            <Image src="/pictures/images (15).jpg" alt="logo" />
            <Image src="/pictures/images (16).jpg" alt="logo" />
            <Image src="/pictures/images (17).jpg" alt="logo" />
            <Image src="/pictures/images (18).jpg" alt="logo" />
            <Image src="/pictures/images (19).jpg" alt="logo" />
            <Image src="/pictures/images (20).jpg" alt="logo" />
            
            
         </Carousel>
         </CarouselContainer> 
        )
       
    }
  
    
}


export default HeaderCarousel;