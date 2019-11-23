import { SET_FAVORITE, DELETE_FAVORITE } from '../types'

export function setFavorite(payload){
    return{
        type: SET_FAVORITE,
        payload
    }
}

export function deleteFavorite(payload){
    return{
        type: DELETE_FAVORITE,
        payload
    }
}