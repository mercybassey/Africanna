import React from 'react';

import styled from 'styled-components';


const Ul = styled.ul`
    
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    cursor: pointer;
   
   

    
    li{
        padding: 18px 12px;
        font-family: 'Xanh Mono', monospace;
        font-weight: bold;
        font-size: 20px;
        color:white;

        :hover{
            color: #330000;
        }
       
    }
   
   
    @media (max-width: 760px) {
        text-align: center;
        flex-flow: column nowrap;
        background-color:white;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 40vh;
        width: 100%;
        padding-top: 3rem;
        transition: transform 0.3s ease-in-out;
        

        li{
            color:#8B0000;
            border-bottom:3px solid #CDC5BF;
        }
    }
`



const RightNav = ({open}) => {
    return(
        <Ul open={open}>
            <li>Styles</li>
            <li>Contact US</li>
            <li>We are Africans</li>
        </Ul>
    )
}

export default RightNav;