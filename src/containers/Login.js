import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginRequest } from '../actions'

import '../assets/styles/components/Login.scss'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'

function Login(props) {
    const { loginRequest, history } = props
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleInput = event =>{
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        loginRequest(form)
        history.push("/")
    }
    
    return (
        <section className="login">
            <section className="login__container">
                <h2>Inicia sesión</h2>
                <form 
                    className="login__container--form"
                    onSubmit={handleSubmit}
                >
                    <input 
                        className="login__input" 
                        type="email" 
                        name="email"
                        placeholder="Correo" 
                        onChange={handleInput}
                    />
                    <input 
                        className="login__input"
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />
                    <button className="login__button">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
          </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src={googleIcon} /> Inicia sesión con Google</div>
                    <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">No tienes ninguna cuenta <Link to="/register">Regístrate</Link></p>
            </section>
        </section>
    )
}

const mapDispatchToProps = {
    loginRequest
}

export default connect(null, mapDispatchToProps)(Login)
