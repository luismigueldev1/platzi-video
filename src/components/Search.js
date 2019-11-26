import React, { useState } from 'react'
import { connect } from 'react-redux'
import { searchVideo } from '../actions'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Search.scss'


function Search(props) {
    const [box, setBox] = useState(false)
    const handleSearch = e => {
        props.searchVideo(e.target.value)
        setBox(true)
        if(!e.target.value){
            setBox(false)
        }

    }

    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input
                name="search"
                type="text"
                className="input__search"
                placeholder="Buscar..."
                autoComplete="off"
                onChange={handleSearch}
            />
            {box ?
                <div className="search_box">
                    {props.results.map(video =>

                        <Link to={"/player/" + video.id} key={video.id}>
                            <h5 > {video.title}</h5>
                        </Link>
                    )}
                </div>
            : ''
            }
        </section>
    )
}
const mapDispatchToProps = {
    searchVideo
}
const mapStateToProps = state => {
    return {
        results: state.results
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search) 
