import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './CartScreen.css'

const CartScreen = () => {

    const cartContent=[...new Set(useSelector(state => state.cart))]
    const priceValues = []
    cartContent.forEach(element => { priceValues.push(element.price * element.quantity) })
    const total = priceValues.reduce((a, b) => a + b, 0)
    window.localStorage.setItem('total', total)

   
   
    const authState = useSelector(state => state.auth)
    const { login } = authState[0]
    const history = useHistory()
    
    useEffect(() => {
        return !login ? history.push('/login') : ""
    }, [])

    const handlePay = () => {
        window.localStorage.setItem('cartContent', JSON.stringify(cartContent))
        history.push('/payment')
    }

    return (
        <div className="main-cart-container">
            { cartContent.length === 0 ? <h3 className="cart-title"> Votre panier est vide. </h3> : 
            <>
            <div className="cartContent-container">
                <div className="cart-title">
                            <div className="cart-element"><h4>Quantité</h4></div>
                            <div className="cart-element"><h4>Article</h4></div>
                            <div className="cart-element" style={{marginLeft: '40px'}}><h4>Prix</h4></div>
                </div>
                        {cartContent.map((e,i) => (
                            <div className="table-cart" key={i}>
                                <div className="cart-element"><h5>{e.quantity}</h5></div>
                                <div className="cart-element"><h5>{e.title}</h5></div>
                                <div className="cart-element" style={{marginLeft: '40px'}}><h5>{e.price * e.quantity} €</h5></div>
                            </div>
                        ))}
                    
            </div>  
            <div className="total-container">
                <div className="total-price">
                    <h4>Total</h4> 
                    <h4>{total} €</h4>
                </div>
                <div className="btn-container">
                    <button className='pay-btn' onClick={handlePay} > Payer </button>
                </div>
            </div>
            </>}
        </div>
    )
}   

export default CartScreen
