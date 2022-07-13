import "./App.css";
import Header from "./components/header/Header.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import MobileNavigation from "./components/navigation/MobileNavigation";
import DesktopNavigation from "./components/navigation/DesktopNavigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header></Header> */}
        <MobileNavigation/>
        <DesktopNavigation/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
