import foody from "../assets/images/logo.jpeg";
import logo from "../assets/images/images.png";
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import Button from "./elements/Button";
import { useEffect, useState } from "react";

export const Header = ({ cartCount }) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem('Auth token');
        sessionStorage.removeItem('User Id');
        window.dispatchEvent(new Event("storage"))
        navigate("/");
    }

    useEffect(() => {
        const checkAuthToken = () => {
            const token = sessionStorage.getItem('Auth token');
            if (token) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        }

        window.addEventListener('storage', checkAuthToken);

        return () => {
            window.removeEventListener('storage', checkAuthToken);
        }
    }, [])

    return (
        <nav id="header" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <img src={foody} alt="logo" className="w-20 h-20 object-cover logo-rad"/>
                    </Link>
                </div>
                 {/* <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                <Link to="/" className="toggleColor no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <img src={logo} alt="logo" className="w-60 h-20 object-cover"/>
                    </Link>
                </div>  */}
                <div className="flex items-center justify-center space-x-4">
                    <Link to="/cart" className="mr-4 relative">
                        <img src={cartIcon} alt="cart"/>
                        {cartCount > 0 && isLoggedIn? <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1">{cartCount}</div> : null}
                    </Link>
                     {
                        isLoggedIn ? 
                        <button onClick={handleLogout}>Log Out</button> : 
                        (
                            <>
                             <Link to="/login">Log In</Link>
                             <Link to="/register">Sign Up</Link>
                            </>
                        )
                    } 
                </div>
            </div>
        </nav>
    )
}