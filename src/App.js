import {Routes, Route} from 'react-router-dom';
import './App.css';

// import components
import Header from './components/Header';
import Footer from './components/Footer';

//import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';



function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/property/:id' element={<PropertyDetails/>} />

        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
