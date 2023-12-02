import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
  return (
    <>

    <Header/>

    <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/cart' element={<Cart/>}/>




</Routes>

      <Footer/>
     
    </>
  );
}

export default App;
