import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { SliderData } from './data/SliderData'
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import InfoSection from "./components/InfoSection";
import { InfoDta,InfoDtaTwo,InfoDtaThree } from "./data/InfoData";
import BlackBack from "./components/BlackBack";
import Footer from "./components/Footer";
import Fade from 'react-reveal/Fade';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Prices from "./components/Prices";
import ContactUs from "./components/ContactUs";


function App() {
const [isOpen,setIsOpen] = useState(false);
const toggle = () => {
  setIsOpen(!isOpen)
}
const ShoN='true';

  return (
    <>
    <Router>
      <GlobalStyle/>
          <Navbar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          
          <Switch>
              <Route exact path='/'>
              <Hero slides={SliderData} id="rentals"/>
              <Fade left>
                <InfoSection {...InfoDtaTwo}/>
              </Fade>
               <Fade right> 
                  <InfoSection {...InfoDta}/>
                </Fade>
                <Fade left>
                <InfoSection {...InfoDtaThree}/>
              </Fade>
                <BlackBack/>
                <Fade bottom>
                <Prices/>
                </Fade>
              </Route>
              <Route path='/Prices'>
              <Navbar toggle={toggle} ShoN={ShoN}/>
              <Fade bottom>
                <Prices/>
                </Fade>
              </Route>
              <Route path='/about'>
                <BlackBack/>
              </Route>
              <Route path='/specialities'>
              <Navbar toggle={toggle} ShoN={ShoN}/>
              <Fade left>
                <InfoSection {...InfoDtaTwo}/>
              </Fade>
               <Fade right> 
                  <InfoSection {...InfoDta}/>
                </Fade>
                <Fade left>
                <InfoSection {...InfoDtaThree}/>
              </Fade>
              </Route>
              <Route path='/contact'>
              <Navbar toggle={toggle} ShoN={ShoN}/>
              <Fade bottom>
               <ContactUs/>
                </Fade>
              </Route>
            </Switch>
          <Footer/>
          </Router>


    </>
  );
}

export default App;
