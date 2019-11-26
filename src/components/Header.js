import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutRequest } from '../actions'
import gravatar from '../utils/gravatar'
import '../assets/styles/components/Header.scss'

import logoPlatziVideo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'

function Header(props) {
    const { user, logoutRequest, pathname } = props
    const hasUser = Object.keys(user).length > 0

    const handleLogout = () => {
        logoutRequest({})
    }

    return (
        <header className={pathname === '/' ? 'header' : 'header header-green' }>
            <Link to="/">
                <img className="header__img" src={logoPlatziVideo} alt="Platzi Video" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {hasUser ?
                        <img src={gravatar(user.email)} alt={user.email} />
                        :
                        <img src={userIcon} alt="profile" />
                    }

                    <p>Perfil</p>
                </div>
                <ul>
                    {hasUser ?
                        <li>
                            <Link to="/">
                                {user.email}
                            </Link>
                        </li>
                        :
                        null
                    }

                    {hasUser ?
                        <li>
                            <a onClick={handleLogout} >
                                Cerrar Sesión
                            </a>
                        </li>
                        :
                        <li>
                            <Link to="/login">
                                Iniciar sesión
                    </Link>
                        </li>
                    }
                </ul>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = {
    logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
