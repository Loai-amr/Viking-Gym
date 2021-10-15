import React from 'react'
import styled,{ css } from 'styled-components/macro';
import { Button } from './Button'
import ImageK from '../images/gym.jpg';
import {IoMdArrowRoundForward} from 'react-icons/io'
import Fade from 'react-reveal/Fade';

const BlackBack = () => {
    return (
        <BlackWrap>
             <Fade bottom>
            <WhiteBack>
                <LeftWhite>
                    <h1>About Us</h1>
                    <p>We deliver the tools to help people track their progress and keep them accountable. We rely on high-quality research and our network of experts to make LIVESTRONG.com the trustworthy, authoritative destination for people wanting to live their best lives.
                    </p>
                    <p>we strive to help all people make informed decisions about their health.</p>
                    <Button css={`min-width:190px`}>Learn More <Arrow/></Button>
                </LeftWhite>
                <RightWhite src={ImageK} alt='gym' />
            </WhiteBack>
            </Fade>
        </BlackWrap>
    )
}

export default BlackBack


const BlackWrap = styled.section`
padding: 7rem 0;
background: black;
`;

const WhiteBack = styled.section`
display: flex;
flex-direction: row;
background: #fff;
padding:: 0 1rem;

@media screen and (max-width: 768px) {
    flex-direction: column;
};
`;

const LeftWhite = styled.div`
padding: 3rem 6rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

h1 {
    margin-bottom: 2rem;
    font-size: clamp(1rem, 4vw, 2rem);
}

p {
    font-size: clamp(.5rem, 4vw, 1.3rem);
    margin-bottom: 2rem;
};

@media screen and (max-width: 768px) {
    order: 2;
    justify-content: center;
    align-items: center;
    padding: 3rem 4rem;
};
`;

const RightWhite = styled.img`
display: flex;
width: 50%;
object-fit: cover;

@media screen and (max-width: 768px) {
    order: 1;
    height: 90%;
    width: 90%;
    margin:auto;
    margin-top:-50px;
};
`;

const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem;
`;