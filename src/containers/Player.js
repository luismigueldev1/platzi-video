import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { getVideoSource } from '../actions'
import '../assets/styles/components/Player.scss'
import NotFound from '../containers/NotFound'
function Player(props) {
    const {
        history,
        playing,
        getVideoSource
    } = props

    const { id } = props.match.params

    useLayoutEffect(() => {
        getVideoSource(id)

    }, [])
    
    const hasPlaying = Object.keys(props.playing).length > 0

    return hasPlaying ? (
        <div className="player">
            <video controls autoPlay>
                <source src={playing.source} type="video/mp4" />
            </video>

            <div className="Player-back">

                <button
                    type="button"
                    onClick={() => history.goBack()}
                >
                    Regresar
                 </button>

            </div>
        </div>
    ) : <NotFound />
}

const mapStateToProps = state => {
    return {
        playing: state.playing
    }
}

const mapDispatchToProps = {
    getVideoSource
}


export default connect(mapStateToProps, mapDispatchToProps)(Player)
