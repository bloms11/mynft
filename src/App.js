import './App.css';
import Collections from './components/Collections';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Collections/>
    </div>
  );
}

export default App;
