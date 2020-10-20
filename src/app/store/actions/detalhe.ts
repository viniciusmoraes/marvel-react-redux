import {FETCH_DETAILS_BEGIN, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_FAILURE} from '../types';

// @ts-ignore
import api from 'marvel-api';
const marvel = api.createClient({ publicKey: "3ca597889dd0b1330035da637fc045e6", privateKey: "22aa21f2e85ea7b9ac133486f37855af4e591311"})

export const fetchBegin = () => ({
    type: FETCH_DETAILS_BEGIN
});

export const fetchFailure = (error: any) => ({
    type: FETCH_DETAILS_FAILURE,
    payload: { error }
});

export const fetchDetailsSuccess = (details: any) => ({
    type: FETCH_DETAILS_SUCCESS,
    payload: details
});

export function fetchDetails(type: string, id: string) {
    return (dispatch: any) => {
        dispatch(fetchBegin());
        if (type !== undefined && id !== undefined) {

            if (type === 'quadrinho') {
                return marvel.comics.find(id)
                    .then((json: any) => {
                        dispatch(fetchDetailsSuccess(json));
                        return json;
                    })
                    .fail((error: any) => {
                        dispatch(fetchFailure(error));
                    })
                    .done();
            } else {
                return marvel.characters.find(id)
                    .then((json: any) => {
                        dispatch(fetchDetailsSuccess(json));
                        return json;
                    })
                    .fail((error: any) => {
                        dispatch(fetchFailure(error));
                    })
                    .done();
            }


        } else {
            dispatch(fetchFailure('error'));
        }
    }
}