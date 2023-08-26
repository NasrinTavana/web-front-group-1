import React from "react";
import Navbar from "./component/navbar";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router  , Route, Routes } from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import Login from "./login/login";
import { useNavigate } from 'react-router-dom';
import Productpage from "./pages/product";
import Productdetils from "./pages/p-detils";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Navbar1 from "./component/function"
import { ValueProvider } from "./component/function";
import Register from "./login/Register";
function App(){
    return(
            <Router>
                <ValueProvider>
                    <Navbar />
                </ValueProvider>
                <Routes>
                    <Route path=""  element = {<Dashbord/>}/>
                    <Route path="Login" element = {<Login/>}/>
                    <Route path="Register" element = {<Register/>}/>
                    <Route path="product" element = {<Productpage/>}/>
                    <Route path="product-detail" element ={<Productdetils/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="checkout" element={<Checkout/>}/>
                </Routes>
            </Router>
    )
}
export default App;