import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerRequest } from '../actions'
import '../assets/styles/components/Register.scss'

function Register(props) {
    const { registerRequest, history } = props
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleInput = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    
    const handleSubmit = e =>{
        e.preventDefault()
        registerRequest(form)
        history.push("/")
    }

    
    return (
        <section className="register">
            <section className="register__container">
                <h2>Regístrate</h2>
                <form 
                    className="register__container--form"
                    onSubmit={handleSubmit}
                >
                    <input 
                        className="input__register"
                        name="name" 
                        type="text" 
                        placeholder="Nombre" 
                        onChange={handleInput}
                    />
                    <input 
                        className="input__register" 
                        name="email" 
                        type="text" 
                        placeholder="Correo"
                        onChange={handleInput} 
                    />
                    <input 
                        className="input__register"
                        name="password"  
                        type="password" 
                        placeholder="Contraseña" 
                        onChange={handleInput}
                    />
                    <button
                        className="button__register"
                        type="submit"
                    >
                        Registrarme
                    </button>
                </form>
                <Link to="/login">Iniciar sesión</Link>
            </section>
        </section>
    )
}

const mapDispatchToProps = {
    registerRequest
}

export default connect(null, mapDispatchToProps)(Register)
