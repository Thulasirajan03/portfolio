
import './App.css';
import About from './Components/About';
import Body from './Components/Body';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Footers from './Components/Footers';

function App() {
  return (
    <div className='app '>
    <Header/>
    <Body/>
    <About/>
    <Projects/>
    <Contact/>
    <Footers/>
    </div>
    
  );
}

export default App;
