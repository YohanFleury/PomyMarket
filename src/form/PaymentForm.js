import React, { useState } from 'react'
import { resetCart } from '../redux/actions/actionCart'
import { useDispatch } from "react-redux" 
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

import InputField from '../components/form/InputField'

const PaymentForm = ({ total }) => {

    const dispatch = useDispatch()
    const validate = Yup.object({
        address: Yup.string().min(5, '5 carctères minimum.').max(40).required('Veuillez saisir une adresse.'),
        postCode: Yup.string().min(2).max(7).required('Veuillez saisir un code postal.'),
        city: Yup.string().min(2).max(20).required('Veuillez saisir une ville.'),
        cardNumber: Yup.string().min(16, "Numéro de carte invalide").max(16, "Numéro de carte invalide").required('Veuillez saisir un numéro de carte valide.'),
        cvv: Yup.string().min(3).max(3).required('Veuillez saisir un CVV correct.')
    })

    const [address, setAddress] = useState()
    const [postCode, setPostCode] = useState()
    const [city, setCity] = useState()


    window.localStorage.setItem('address', address)
    window.localStorage.setItem('postCode', postCode)
    window.localStorage.setItem('city', city)

    const history = useHistory()
    return (
        <Formik 
        initialValues={{
            address: '',
            postCode: '',
            city: '',
            cardNumber: '',
            date: '',
            cvv: '' 
        }}
        onSubmit={(values) =>{ 
            setAddress(values.address)
            setPostCode(values.postCode)
            setCity(values.city)
            dispatch(resetCart())
            history.push('/recap')
        }}
        validationSchema={validate}>
           {() => (
            <Form className="main-pay-container">
                <div className="left-container">
                    <h4 className="title"> Ma livraison </h4>
                    <div className="form-container">
                            <InputField name="address" type="text" label="Adresse" inputClass="input-address"  />
                            <InputField name="postCode" type="text" label="Code Postal" inputClass="input-post-city" />
                            <InputField name="city" type="text" label="Ville" inputClass="input-post-city" />
                    </div>
                </div>
                <div className="right-container">
                    <h4 className="title"> Mon moyen de paiement </h4>
                    <div className="form-container">
                        <InputField name="cardNumber" type="text" label="Numéro de carte" inputClass="input"  />
                        <label className="form-element">
                            <p className="label">Date</p> 
                            <input className="input-date" type="text" name="date" />
                            <input className="input-date" type="text" name="date" />
                            <input className="input-date" type="text" name="date" />
                        </label>
                        <InputField name="cvv" type="text" label="CVV" inputClass="input-cvv"  />
                    </div>
                    <div className="final-price">
                            <div style={{display: 'flex', justifyContent:'space-between', width: '30%'}}>
                                <h4 className="total">Total</h4>
                                <h4 className="total">{total} €</h4>
                            </div>
                        <button className="pay-btn" type="submit" >Payer</button>
                    </div>
                </div>
            </Form>
           )}
        </Formik>
    )
}

export default PaymentForm
