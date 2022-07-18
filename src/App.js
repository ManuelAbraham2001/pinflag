import './App.css';
import Header from './components/header/Header.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/home/Home'
import Planes from './components/pages/planes/Planes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/planes' element={<Planes/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
