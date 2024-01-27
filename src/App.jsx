import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Work from './components/work';
import About from './components/about';
import AboutWork from './components/aboutwork';
import Footer from './components/footer';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Work/>
      <About/>
      <AboutWork/>
      <Footer/>
    </div>
  );
}

export default App;
