import React from "react";
import Navbar from "./component/navbar";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router  , Route, Routes } from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import Login from "./login/login";
import { useNavigate } from 'react-router-dom';
import Productpage from "./pages/product";
import Productdetils from "./pages/p-detils";
function App(){
    return(
            <Router>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index path="dashbord" element = {<Dashbord/>}/>
                        <Route path="Login" element = {<Login/>}/>
                        <Route path="product" element = {<Productpage/>}/>
                        <Route path="product-detail" element ={<Productdetils/>}/>
                    </Route>
                </Routes>
            </Router>
    )
}
export default App;