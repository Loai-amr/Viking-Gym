import React,{useState,useEffect} from 'react'
import styled,{css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import { menuData} from '../data/MenuData'
import { Button } from './Button'
import {FaBars} from 'react-icons/fa'
import {GiVikingHelmet} from 'react-icons/gi'

const Navbar = ({toggle,ShoN}) => {

    const [Show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll",null);
        };
    }, []);

    return (
        <Nav Show={Show} ShoN={ShoN}>
            <Logo to="/">
            <GiVikingHelmet css={`margin-right: 8px;`}/>
                VIKING GYM</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu css={`margin-right: 3px;`}>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
           
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
height:60px;
display:flex;
justify-content: space-between;
padding: 1rem 7rem;
z-index:100;
position:fixed;
width:100%;

transition-timing-function: ease-in;
transition: all 0.6s;
background-color: ${({Show,ShoN}) => (Show ? 'black' : (ShoN ? 'black' : (ShoN ? 'black' : 'transparent')))};

@media screen and (max-width: 805px) {
    padding: 1rem 2rem;
}
`;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height:100%;
cursor: pointer;
text-decoration: none;
`

const Logo = styled(Link)`
${NavLink}
font-size: larger;
`;

const MenuBars = styled(FaBars)`
display:none;
color:white;
@media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    transform: translate(-50%, 25%);
}
`;

const NavMenu = styled.div`
display:flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width: 768px) {
    display: none;}
`;

const NavMenuLinks = styled(Link)`
${NavLink}
transition: 0.2s ease-in-out;

&:hover {
    color: rgba(255, 255, 255, 0.600);
}
`;