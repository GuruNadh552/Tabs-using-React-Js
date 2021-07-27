import './App.css';
import Card from './components/Card'
import dataApi from "./components/DataApi";

function App() {
  return (
    <div className="App">
      <Card menuData={dataApi}/>
    </div>
  );
}

export default App;
