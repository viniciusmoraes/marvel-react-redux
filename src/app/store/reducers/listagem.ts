import {
    FETCH_BEGIN,
    FETCH_COMICS_SUCCESS,
    FETCH_FAILURE,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_NOTFOUND
} from '../types';

const initialState = {
    comics: null,
    characters: null,
    meta: '',
    loading: false,
    error: null
};

export default function productReducer(
    state = initialState,
    action: any
) {
    switch (action.type) {
        case FETCH_BEGIN:
            return {
                ...state,
                comics: null,
                loading: true,
                error: null,
                characters: null,
                notfound: false
            };

        case FETCH_SEARCH_NOTFOUND:
            return {
                notfound: true,
                loading: false,
                meta: {
                    limit: 0,
                    total: 0
                }
            };

        case FETCH_COMICS_SUCCESS:
            return {
                ...state,
                notfound: false,
                loading: false,
                comics: action.payload.data,
                meta: action.payload.meta
            };

        case FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                comics: null,
                notfound: false,
                loading: false,
                characters: action.payload.data,
                meta: action.payload.meta
            };

        case FETCH_FAILURE:
            return {
                ...state,
                comics: null,
                characters: null,
                notfound: false,
                loading: false,
                error: action.payload.error
            };

        default:
            return state;
    }
}
