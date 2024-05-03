import './App.css';
import Newsletter from './Newsletter.jsx';
import Header from './Header.jsx';
import Photocarousel from './Photocarousel.jsx';
import Footer from './Footer.jsx';
import Title from './Title.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <header>
        <Title/>
        <h2 className="text"> Summer 2024</h2>
      </header>
        <Photocarousel/>
      <div>
        <h3 className="text">Get Email Updates</h3>
      </div>
      <div>
      </div>
        <Newsletter/>
      <div>
        <Footer/>
      </div>
    </div>
  ) 
} 

export default App;
