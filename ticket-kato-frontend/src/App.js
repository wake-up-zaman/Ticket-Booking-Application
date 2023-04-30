import "./App.css";
import Navbar from "./pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import BagInfo from './pages/Home/BagInfo';

import Flight from "./pages/Searching/Flight";
import Train from "./pages/Searching/Train";
import Launch from "./pages/Searching/Launch";
import Bus from "./pages/Searching/Bus";
import Offer from "./pages/Home/Offer";
import GoogleMap from "./pages/Home/GoogleMap";
import About from "./pages/Shared/About";
import LimitedOffer from "./pages/Home/LimitedOffer";
import BusList from "./pages/SearchResult/BusList";
import Payment from "./pages/Payment/Payment";



function App() {
  return (
    <div >
      <div className="content-bg-color main-content">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            <Route path='/' element={<Bus></Bus>}></Route>
            <Route path='bus' element={<Bus></Bus>}></Route>
            <Route path='flight' element={<Flight></Flight>}></Route>
            <Route path='train' element={<Train></Train>}></Route>
            <Route path='launch' element={<Launch></Launch>}></Route>
          </Route>
          <Route path='/busList' element={<BusList />}></Route>
          <Route path='/payment' element={<Payment />}></Route>
          <Route path="/bagInfo" element={<BagInfo></BagInfo>}/>
          <Route path="/offer" element={<LimitedOffer/>}/>
          <Route path='/destination' element={<GoogleMap></GoogleMap>}/>
          <Route path='/about' element={<About></About>}/>
        </Routes>
      </div>
    </div>
  );

}

export default App;


