import {
    FETCH_BEGIN,
    FETCH_COMICS_SUCCESS,
    FETCH_FAILURE,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_NOTFOUND
} from '../types';
// @ts-ignore
import api from 'marvel-api';
const marvel = api.createClient({ publicKey: "3ca597889dd0b1330035da637fc045e6", privateKey: "22aa21f2e85ea7b9ac133486f37855af4e591311"})

export const fetchBegin = () => ({
    type: FETCH_BEGIN
});

export const fetchComicsSuccess = (comics: any) => ({
    type: FETCH_COMICS_SUCCESS,
    payload: comics
});

export const fetchCharactersSuccess = (characters: any) => ({
    type: FETCH_SEARCH_SUCCESS,
    payload: characters
});

export const fetchFailure = (error: any) => ({
    type: FETCH_FAILURE,
    payload: { error }
});

export function fetchComics(limit: any, offset: any) {
    return (dispatch: any) => {
        dispatch(fetchBegin());

        if (limit != null && offset != null) {
            return marvel.comics.findAll(limit, offset)
                .then((json: any) => {
                    dispatch(fetchComicsSuccess(json));
                    return json;
                })
                .fail((error: any) => {
                    dispatch(fetchFailure(error))
                })
                .done();
        } else {
            dispatch(fetchFailure('error'))
        }

    };
}

export function fetchSearch(name: string) {
    return (dispatch: any) => {
        dispatch(fetchBegin());

        if (name != null) {
            return marvel.characters.findByName(name)
                .then((json: any) => {
                    console.log(json.data.length);
                    if(json.data.length === 0){
                        dispatch({ type: FETCH_SEARCH_NOTFOUND });
                    } else {
                        dispatch(fetchCharactersSuccess(json));
                        return json;
                    }

                })
                .fail((error: any) => {
                    dispatch(fetchFailure(error))
                })
                .done();
        } else {
            dispatch(fetchFailure('error'))
        }

    };
}
