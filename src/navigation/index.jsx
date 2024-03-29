import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Header} from "../components/Header"
import Home from "../pages/Home"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Cart from "../pages/Cart"
import Menu from "../pages/Menu";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";
import { Restro } from "../pages/Restro"
import { Footer } from "../components/Footer"


const Navigation = () => {
    const productsInCart = useSelector(cartProducts);
    return (
        <BrowserRouter>
        <Header cartCount={productsInCart ? productsInCart.length : 0}/>
        <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/login" element = {<Login/>} />
            <Route path="/restro/:name" element ={<Restro/>}/>
            <Route path="/register" element = {<Register/>} />
            <Route path="/menu" element = {<Menu/>} />
            <Route path="/cart" element = {<Cart/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Navigation;