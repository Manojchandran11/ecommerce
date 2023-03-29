import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './components/home';
import Header from './components/header';
import Addproduct from './components/addproduct';
import View from "./components/view"
import Cart from './components/cart';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exct path="/" element={<Home />}></Route>
        <Route path="/addproduct" element={<Addproduct/>}></Route>
        <Route path="/view/:productid" element={<View/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
