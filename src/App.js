import './App.css';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <div className="App">
    <Navbar/>
      <Router>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/about" element={<About/>} />
              </Routes>
          </Router>
    </div>
    <Footer/>
    </>
  );
}

export default App;
