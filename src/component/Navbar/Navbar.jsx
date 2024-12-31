import React, { useContext, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/images/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/userContext';
import { cartContext } from '../../Context/cartContext';

export default function Navbar() {
    const { isLogin, setLogin } = useContext(userContext);
    const {cartNumber,getProductToCart} =useContext(cartContext);
let navigate = useNavigate()
    function handleLogout() {
        localStorage.removeItem('userToken'); // Clear token
        setLogin(null); // Update login status
        navigate('/login')
    }
    async function getProduct() {
        await getProductToCart()
        
    }
   useEffect(()=>{
     getProduct()
   },[])
    return (
        <nav className="navbar navbar-expand-lg navbar-light custom-navbar" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" width={90} /> Hamza Sports
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isLogin ? (
                        <ul className="navbar-nav me-auto mb-5 pb-3 pt-3 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link className="nav-link active" to="/sports">
                                    Sports
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    About us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/carts">
                                    Carts{cartNumber}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    ) : null}
                    <ul className="Registeration d-flex list-unstyled">
                        {!isLogin ? (
                            <>
                                <li className="nav-item  pt-3">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item ms-4 mt-3">
                                    <Link className="nav-link" to="/register">
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item mx-2 mt-3 cursor-pointer">
                                    <button className="btn btn-link nav-link" onClick={()=>{handleLogout()}}>
                                        Logout
                                    </button>
                                </li>
                                <form className="d-flex mx-3 pt-2">
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                </form>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
        
    );
}
