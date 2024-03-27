'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

export default function NavBar({idPage}) {
    const [isClient, setIsClient] = useState(false)
    
    let isHomePage = null;
    let navBarClass = null;
    
    useEffect(() => {
        setIsClient(true)
    }, [])

    if (isClient) {
        isHomePage = typeof window !== 'undefined' && window.location.pathname === "/" && isClient;
        navBarClass = isHomePage ? "navBar" : "";
    }

  return (
    <>
        <nav id = {navBarClass} className={`navbar navbar-expand-lg navbar-${isHomePage ? "dark" : "light"}`} style={{height: "4rem", fontSize: "1.5rem"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/" style={{fontSize: "1.5rem"}}>Restaurante X</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={`nav-link ${ (idPage === 0) ? "active" : "" }`} aria-current="page" href="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className={`nav-link dropdown-toggle ${ (idPage === 1) ? "active" : "" }`} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" href="/foods">Comidas</Link></li>
                            <li><Link className="dropdown-item" href="/drinks">Bebidas</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${ (idPage === 2) ? "active" : "" }`} href="/about" >About</Link>
                    </li>
                    <div className='d-flex'>
                    <li className="nav-item align-self-end">
                        <Link className={`nav-link ${ (idPage === 3) ? "active" : "" }`} href="/reservations" >Reservations</Link>
                    </li>
                    </div>

                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
