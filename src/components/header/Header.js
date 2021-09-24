import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'
import './Header.css'
import cart from '../../assets/Cart.svg'
import user from '../../assets/User.svg'
import logo from '../../assets/logo.png'


const Header = () => {

    const cartContent = useSelector(state => state.cart)
    console.log('le cotnent',cartContent)
    const [title, setTitle] = useState("Mes courses en ligne")
    const [itemsNumber, setItemsNumber] = useState()

    const userLog = useSelector(state => state.auth)
    console.log(userLog)
    useEffect(() => {
        setItemsNumber(cartContent.length)
    }, [cartContent.length])

    const { pathname } = useLocation()
    useEffect(() => {
        pathname === "/cart" ? setTitle('Mon panier') : pathname === '/payment' ? setTitle('Paiement') : pathname === '/recap' ? setTitle('Récapitulatif de votre commande') : pathname === '/login' ? setTitle('Connexion') : setTitle("Mes courses en ligne")
    }, [pathname])

    return (
    <>
        <div className="container">
            <div className="logo-container">
                <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
            </div>
            <div className="title-container">{title}</div>
            <div className="icons-container">
                <Link to="/cart">
                    <div className="mini-container">
                        <img className="icons" src={cart} alt="icons" />
                        {itemsNumber > 0 && <div className="little-circle">{itemsNumber}</div>}
                    </div>
                </Link>
                <div className="mini-container"><img className="icons" src={user} alt="icons" /></div>
            </div>
        </div>
        <div className="border"></div>
    </>
    )
}

export default Header
