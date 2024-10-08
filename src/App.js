import './App.css';
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
    </div>
  );
}

export default App;
