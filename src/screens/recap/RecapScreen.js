import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './RecapScreen.css'

const RecapScreen = () => {

    const authState = useSelector(state => state.auth)
    const { login } = authState[0]
    const history = useHistory()

    useEffect(() => {
        return !login ? history.push('/login') : ""
    }, [])

    const cartContent = JSON.parse(localStorage.getItem('cartContent'))
    const total = window.localStorage.getItem('total')
    const address = window.localStorage.getItem('address')
    const postCode = window.localStorage.getItem('postCode')
    const city = window.localStorage.getItem('city')

    const style = {font: 'normal normal normal 25px/30px Roboto',
                    letterSpacing: '0px',
                    color: '#797979',}

    return (
        <div className='main-container'>
            <p className="title-recap"> Merci pour votre commande et à bientôt sur PomyMarket !</p>
            <div style={style}>
                Votre commande vous sera livrée à l'adresse <br />suivante : 
            </div>
            <div className='recap-address'>
                <p style={style}>{address} </p>
                <p style={style}>{postCode} {city} </p>
            </div>
            <p style={style}>Votre commande est constituée de : </p>
            <ul className="recap-cart">{cartContent.map((e,i) => (
                        <li className="test" key={i} style={style}>{e.quantity} {e.title}</li>
                ))}
            </ul>
            <p style={style}>Pour un total de  {total} €</p>
        </div>
    )
}

export default RecapScreen
