import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ScrollUp } from './components/ScrollUp';
import { useState } from 'react';
import { Work } from './components/Work';
function App() {
  const[activeNav, setActiveNav] = useState('#about');

  const handleNav = (section) => {
    setActiveNav(section);
  }
  return (
   <>
   <Header activeNav={activeNav} handleNav={handleNav}/>

   <main className='main'>
    <Home />
    <Contact />
    <Work />
   </main>
   <Footer handleNav={handleNav}/>
   <ScrollUp />
   </>
  );
}

export default App;
