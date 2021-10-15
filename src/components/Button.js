import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
background: black;
white-space: nowrap;
outline: none;
border: none;
border-radius: 20px;
min-width: 100px;
max-width: 200px;
cursor: pointer;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
transition: 0.3s;

padding: ${({big}) => (big ? '16px 40px' : '12px 24px')};
color: white;
font-size: ${({ big }) => (big ? '20px' : '14px')};

&:hover {
    transform: translateY(-5px);
}
`