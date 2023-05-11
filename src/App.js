import './App.css';
import './index.css';
import Header from './components/Header';
import ForecastApi from './components/ForecastApi';

function App() {
  return (
    <div className="App">

      <Header/>
      <ForecastApi/>
     
    </div>
  );
}

export default App;
