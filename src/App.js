import './App.css';
import Fonksiyonel from './components/Fonksiyonel';
import Islem from './components/Islem';
import Listele from './components/Listele';
import PropKullanimi from './components/PropKullanimi';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <hr/>
      <Fonksiyonel/>
      <PropKullanimi
        bir="Frontend Kitap Listesi"
        iki="React"
        uc="Angular"
      />
      <hr/>
      <PropKullanimi
        bir="Backend Kitap Listesi"
        iki="Asp.Net Core"
        uc="Spring Boot"
      />
    </div>
  );
}

export default App;
