import React from 'react'


import './PaymentScreen.css'
import PaymentForm from '../../form/PaymentForm'


const PaymentScreen = () => {

    const total = window.localStorage.getItem('total')
    
    return (
        <>
            <PaymentForm total={total} />
        </>
    )
}

export default PaymentScreen
