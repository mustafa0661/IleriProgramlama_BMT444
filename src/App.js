import './App.css';
import Fonksiyonel from './components/Fonksiyonel';
import Islem from './components/Islem';
import Listele from './components/Listele';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <h1 className='text-center'>İşlem Bileşenini Göster</h1>
      <Islem></Islem>
      <br/>
      <User></User>
      <br/>
      <Listele></Listele>
      <br/>
      <Fonksiyonel></Fonksiyonel>
    </div>
  );
}

export default App;
