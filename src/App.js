import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact';
function App() {
  return (
   <>
   <Header />

   <main className='main'>
    <Home />
    <Contact />
   </main>
   </>
  );
}

export default App;
