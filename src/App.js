import './App.css';
import{ React }from 'react'
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import { Routes, Route } from "react-router-dom";
import MasterPlan from './Pages/Masterplan/Materplan';
import Gallery from './Pages/Gallery/gallery';
import MyMoola from './Pages/My Moola/MyMoola';
import SalePage from './Pages/Sale/Sale';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<SalePage/>} />
        <Route path="/yearbook" element={<Gallery/>} />
        <Route path="/masterplan" element={<MasterPlan />} />
        <Route path="/MyMoola" element={<MyMoola/>} />

      </Routes>

    </div>
  );
}

export default App;
