
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import About from './Pages/about/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className='mx-16'>
      <Navbar></Navbar>
      <Routes>
        
        
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
