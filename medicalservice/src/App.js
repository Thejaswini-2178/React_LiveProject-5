
import './App.css';
import Footer from './Medical-service/Footer';
import Header from './Medical-service/Header';
import Preloader from './Medical-service/Preloader';
import Slider from './Medical-service/Slider';
import Startshedule from './Medical-service/Startshedule';

function App() {
  return (
    <div className="App">
     <Preloader/>
     <Header/>
     <Slider/>
     <Startshedule/>
     <Footer/>
    </div>
  );
}

export default App;
