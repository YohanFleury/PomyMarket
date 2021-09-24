import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addToCart } from '../../redux/actions/actionCart'
import items from '../../datas/fakeDatas'
import addCart from '../../assets/addCart.svg'
import './HomeScreen.css'
import { useHistory } from 'react-router-dom'



const HomeScreen = () => {

    
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const { login } = authState[0]
    const history = useHistory()
    
    useEffect(() => {
        return !login ? history.push('/login') : ""
    }, [])

    return (
        <div className="container">
            {items.map(e => (
                    <div className="card-container" key={e.id}>
                        <div className="image-container"> <img className="product-image" src={e.image} alt={e.id} /> </div>
                        <div className="card-footer">
                            <div className="product-infos">
                                <div>{e.title}</div>
                                <div>{e.price} €</div>
                            </div>
                            <div onClick={() => dispatch(addToCart(e.id))}>
                                <img className="add-cart" src={addCart} />
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default HomeScreen
