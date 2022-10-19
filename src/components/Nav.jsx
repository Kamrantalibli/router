import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../img/logo.png'
const Nav = () => {
  return (
    <div>

            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/shop">Shop</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/news">News</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/pages">Pages</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="#"><i className="fa-solid fa-magnifying-glass"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="#"><i className="fa-solid fa-user"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="#"><i className="fa-solid fa-cart-plus"></i></Link>
                            </li>
            
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
  )
}

export default Nav