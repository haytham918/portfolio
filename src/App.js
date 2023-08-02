import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ScrollUp } from './components/ScrollUp';
function App() {
  return (
   <>
   <Header />

   <main className='main'>
    <Home />
    <Contact />
   </main>
   <Footer />
   <ScrollUp />
   </>
  );
}

export default App;
