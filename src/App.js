
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/footer/Footer';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className='mx-16'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
