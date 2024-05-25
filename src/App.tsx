import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Feature from './components/features';
import FaQ from './components/faq';
import User from './components/user';
import Footer from './components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 700,
      once: true,
      easing: 'ease-out',
    });
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <Jumbotron />
      <Feature />
      <User />
      <FaQ />
      <Footer />
    </React.Fragment>
  );
}

export default App;
