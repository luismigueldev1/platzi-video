import { SET_FAVORITE } from '../types'

export function reducer(state, action){

    switch (action.type) {

        case SET_FAVORITE:
            return {
                ...state,
                mylist: [
                    ...state.mylist,
                    action.payload
                ]
            }

        default:
           return state
    }
}

