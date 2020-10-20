import { combineReducers } from 'redux';
import listagem from "./listagem";
import detalhe from "./detalhe";

export const Reducers = combineReducers({
    listagem,
    detalhe
});