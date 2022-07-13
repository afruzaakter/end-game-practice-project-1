
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/about/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/contact/Contact';
import Footer from './Pages/footer/Footer';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar';



function App() {
  return (
    <div className='mx-16'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
