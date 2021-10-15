import React from 'react'
import styled,{ css } from 'styled-components/macro';
import { Button } from './Button'

const Prices = () => {
    return (
        <Pricewra>
            <UpperPart>
                <h1>Rates</h1>
            </UpperPart>
            <LowerPart>
                <PlaneDetail>
                    <h1>3 Month</h1>
                    <h2>150$</h2>
                    <Button css={` margin-top: 1rem;
                   margin-bottom: .5rem;
                   width: 100%;`}> Join Now ! </Button>
                </PlaneDetail>
                <PlaneDetail css={`margin: -2rem;`}>
                    <h1>6 Month</h1>
                    <h2>250$</h2>
                    <Button css={` margin-top: 1.5rem;
                   width: 100%; `}> Join Now ! </Button>
                </PlaneDetail>
                <PlaneDetail>
                    <h1>1 Year </h1>
                    <h2>450$</h2>
                    <Button css={` margin-top: 1rem;
                   margin-bottom: .5rem;
                   width: 100%; `}> Join Now ! </Button>
                </PlaneDetail>
            </LowerPart>
        </Pricewra>
    )
}

export default Prices


const Pricewra = styled.section`
padding: 3rem 4rem;
padding-top:5rem;
@media screen and (max-width: 768px) {
    padding: 2rem 0;
}
`;

const UpperPart = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: clamp(1rem, 8vw, 2rem);
font-weight: 400;
text-transform: uppercase;
text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
padding-bottom: 3.5rem;

@media screen and (max-width: 768px) {
    padding-bottom: 1rem;
}

h1{
    cursor: pointer;
}
`;


const LowerPart = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
padding: 0 5rem;

@media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
}
`;


const PlaneDetail = styled.div`
width:20vw;
padding: 1.5rem 0;
background-color: rgba(0, 0, 0, 0.9);
border-radius: 10px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
color: white;
min-width:220px;
cursor: pointer;

h1 {
    font-size: clamp(2rem, 3vw, 3.5rem);
    padding-top: .5rem;
    padding-bottom: 1rem;
    font-weight: 400;
}

h2 {
    font-size: clamp(2.2rem, 3.5vw, 3.7rem);
    padding: 2rem 0;
    font-weight: 400;
}

@media screen and (max-width: 768px) {
    margin: 4rem 0;
    padding: 1.5rem 2rem;
}
`;