import './App.css';
import Header from './components/header/Header.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
