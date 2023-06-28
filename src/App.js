import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Collection from './components/collection/Collection';
function App() {
  return (
    <div className="App">
      <div className='h-screen'>
    <Home/>
    </div>
    <div className='h-full mt-0'>
    <Collection/>
    </div>
    </div>
  );
}

export default App;
