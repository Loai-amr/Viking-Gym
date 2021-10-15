import React from 'react'
import styled , { css }from 'styled-components'

const ContactUs = () => {
    return (
        <Coverr>
            <Map>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13047.58233027039!2d-98.45103496939468!3d35.15922478510657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87adb30af7b76acb%3A0xae2aac995c0e1ebe!2sNowhere%2C%20OK%2073038!5e0!3m2!1sen!2sus!4v1629742643800!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
            </Map>
       <TextAddress>
            <h1>Contact Us</h1>
            <p>Dovnov 7 Street, <br/> London Ministor</p>
            <p>VikingGym@gmail.com</p>
            <p>061-7452779 - 062-2387688</p>
       </TextAddress>
        </Coverr>
    )
}

export default ContactUs

const Coverr = styled.section`
padding: 6rem;
display: flex;

@media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2.5rem 0;
}
`;

const Map = styled.div`
iframe {
    width: 600px;
    height: 450px;
}

@media screen and (max-width: 768px) {
    order:2;
    margin: auto;

    iframe {
        width: 70vw;
        height: 50vh;
    }
}
`;

const TextAddress = styled.div`
margin-left: 10rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
h1 {
    padding-bottom: 2rem;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
}
p {
    padding: .6rem 0;
    font-weight: 600;
}

@media screen and (max-width: 768px) {
    margin: 0;
    padding: 3rem 0;
    order: 1;
    h1 {
        padding-bottom: 1rem;
    }
}
`;