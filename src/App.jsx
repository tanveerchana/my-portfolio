import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Work from './components/work';
import About from './components/about';
import AboutWork from './components/aboutwork';
import Footer from './components/footer';
import AboutPage from './pages/AboutPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <Routes>
      <Route path='/' element = {<Layout />}>
        <Route index element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/work' element={<WorkPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
