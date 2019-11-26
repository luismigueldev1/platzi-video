import {
    SET_FAVORITE,
    DELETE_FAVORITE,
    LOGIN_REQUEST,
    LOGOUT_REQUEST,
    REGISTER_REQUEST,
    GET_VIDEO_SOURCE,
    SEARCH_VIDEO
} from '../types'

export function reducer(state, action) {

    switch (action.type) {

        case SET_FAVORITE:
            const exist = state.mylist.find(item => item.id === action.payload.id)
            if (exist) {
                return {
                    ...state
                }
            }
            return {
                ...state,
                mylist: [
                    ...state.mylist,
                    action.payload
                ]
            }

        case DELETE_FAVORITE:
            return {
                ...state,
                mylist: state.mylist.filter(items => items.id != action.payload)
            }

        case LOGIN_REQUEST:
            return {
                ...state,
                user: action.payload
            }

        case LOGOUT_REQUEST:
            return {
                ...state,
                user: action.payload
            }

        case REGISTER_REQUEST:
            return {
                ...state,
                user: action.payload
            }
        case GET_VIDEO_SOURCE:
            return {
                ...state,
                playing:
                    state.trends.concat(state.originals)
                        .find(item => item.id === Number(action.payload))
                    || []
            }
        case SEARCH_VIDEO:
            if(action.payload == "") return {...state, results:[]}
            let results = []
            const search = action.payload.toLowerCase()
            const allVideos = state.trends.concat(state.originals)

            results = allVideos.filter(item => 
                item.title.toLowerCase()
                    .includes(search)
                
            )
            return {
                ...state,
                results : results 
            }

        default:
            return state
    }
}
