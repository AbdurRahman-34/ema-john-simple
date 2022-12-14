import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import RequerAuth from './Components/RequerAuth/RequerAuth';
import Shipment from './Components/Shipment/Shipment';
import Shop from './Components/Shop/Shop';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/shipment' element={
          <RequerAuth>
            <Shipment/>
          </RequerAuth>
        }></Route>
        <Route path='/inventory' element={
          <RequerAuth>
            <Inventory/>
          </RequerAuth>
        }></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
