import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
   <>
   <Header />

   <main className='main'>
    <Home />
    <Contact />
    <Footer />
   </main>
   </>
  );
}

export default App;
