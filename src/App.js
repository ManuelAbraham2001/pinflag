import logo from './logo.svg';
import './App.css';
import Header from './components/shared/header/Header'
import Home from './pages/index/Home'
import Planes from './pages/planes/Planes'
import { Partners } from './pages/partners/Partners';
import More from './pages/more/More'
import Footer from './components/shared/footer/Footer';
import MoreTienda from './pages/more/MoreTienda';
import MoreUs from './pages/more/MoreUs';
import Servicios from './pages/servicios/Servicios';
import Blog from './pages/blog/Blog';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/servicios' element={<Servicios/>} />
                <Route path='/planes' element={<Planes/>} />
                <Route path='/partners' element={<Partners/>} />
                <Route path='/blog' element={<Blog/>} />
                <Route path='/mas/clientes' element={<More/>} />
                <Route path='/mas/tiendas' element={<MoreTienda/>} />
                <Route path='/mas/nosotros' element={<MoreUs/>} />
            </Routes>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
