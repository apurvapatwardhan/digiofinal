import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import {DetailParent,Timer} from './components/DetailParent/DetailParent';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" element= {<Home />}/>
        <Route path="/details" element = {<DetailParent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
