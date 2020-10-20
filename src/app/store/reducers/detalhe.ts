import {FETCH_DETAILS_BEGIN, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_FAILURE} from '../types';

const initialState = {
    item: [],
    related: [],
    loading: false,
    error: null
};

export default function detailsReducer(
    state = initialState,
    action: any
) {
    switch (action.type) {
        case FETCH_DETAILS_BEGIN:
            return {
                ...state,
                loading: true
            };

        case FETCH_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                item: action.payload.data[0]
            };

        case FETCH_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}