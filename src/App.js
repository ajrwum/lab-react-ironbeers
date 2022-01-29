import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AllBeers from './pages/AllBeers';
import OneBeer from './pages/OneBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/beers' element={ <AllBeers /> } />
        <Route path='/beers/:beerId' element={ <OneBeer /> } />
        <Route path='/random-beer' element={ <OneBeer /> } />
        <Route path='/new-beer' element={ <NewBeer /> } />
      </Routes>
    </div>
  );
}

export default App;
