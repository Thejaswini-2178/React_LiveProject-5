import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './Componennts/Header';
import Home from './Componennts/Home';
import Doctors from './Componennts/Doctor';
import Service from './Componennts/Service';
import About from './Componennts/About';
import Blog from './Componennts/Blog';
import Appointment from './Componennts/Appointment';
import Footer from './Componennts/Footer';
import Contact from './Componennts/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>  
        <Route path='/service' element={<Service/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
