
import './App.css';
import Footer from './Medical-service/Footer/Footer';
import Getpro from './Medical-service/Getpro/Getpro';
import Header from './Medical-service/Header/Header';
import Preloader from './Medical-service/Preloader/Preloader';
import Slider from './Medical-service/Slider/Slider';

import Startshedule from './Medical-service/Startshedule/Startshedule';


function App() {
  return (
    <div className="App">
      <Preloader/>
      <Getpro/>
      <Header/>
      <Slider/>
      <Startshedule/>
      <Footer/>
     
   

    </div>
  );
}

export default App;
