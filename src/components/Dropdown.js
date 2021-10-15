import React from 'react'
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components'
import { menuData } from '../data/MenuData';
import {Link} from "react-router-dom"

const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
right: 0;
transition: 0.4s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
right: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

const Dropdown = ({isOpen,toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown


const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

const CloseIcon = styled(FaTimes)`
color: #ffffff;
`;

const DropdownWrapper = styled.div`

`;

const DropdownMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5,90px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(5,85px) ;
}
`;

const DropdownLink = styled(Link)`
display: flex;
color: #fff;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
cursor: pointer;
transition: 0.18s ease-in-out;


&:hover {
    background: rgba(0, 0, 0, 0.500);
}
`;