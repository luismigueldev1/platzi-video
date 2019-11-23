import { SET_FAVORITE } from '../types'

export function setFavorite(payload){
    return{
        type: SET_FAVORITE,
        payload
    }
}