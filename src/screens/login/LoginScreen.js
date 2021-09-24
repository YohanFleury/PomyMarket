import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './LoginScreen.css'
import isLogin from '../../redux/actions/actionAuth'

const LoginScreen = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector(state => state.auth)

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [formError, setFormError] = useState()
    
    const handleSubmit = (username, password) => {
        dispatch(isLogin(username, password))
        const {error, login} = state[0]
        setFormError(error)
        if (login) {
            history.push('/')
        }
        
    }

    return (
        <div className="main-container">
            <h4 className="title"> Me connecter </h4>
            <form className="form-container">
                <label className="form-element" onChange={e => setUsername(e.target.value)}>
                    <p className="label">Identifiant </p>
                    <input className="input" type="text" name="identifiants" />
                </label>
                <label className="form-element" onChange={e => setPassword(e.target.value)}>
                    <p className="label">Mot de passe</p> 
                    <input className="input" type="password" name="password" />
                </label>
            </form>
                {formError && <p style={{color: 'red'}}> {formError} </p>}
            <div className="btn-container">
                <button className="btn" onClick={() => handleSubmit(username, password) }> Valider </button>
            </div>
        </div>
    )
}

export default LoginScreen
