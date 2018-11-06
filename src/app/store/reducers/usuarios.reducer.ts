import { UsuariosState } from './usuarios.reducer';
import { Usuario } from './../../models/usuario.model';

import * as fromUsuarios from '../actions';


export interface UsuariosState {
    usuarios: Usuario[];
     loaded: boolean;
     loading: boolean;
     error: any;
}

const estadoInicial: UsuariosState = {
    usuarios: [],
    loaded: false,
    loading: false,
    error: false
};

export function usuariosReducer (state = estadoInicial , action: fromUsuarios.usuariosAccciones): UsuariosState {
switch ( action.type ) {

    case fromUsuarios.CARGAR_USUARIOS:
    return {
        ...state,
        loading: true,
        error: null
    };
    case fromUsuarios.CARGAR_USUARIOS_FAIL:
    return {
        ...state,
        error: {
            status: action.payload.status,
            message: action.payload.message,
            url: action.payload.url
        },
        loaded: false,
        loading: false,
    };
    case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
    return {
        ...state,
        loaded: true,
        loading: false,
        usuarios: [...action.usuarios]
    };
    default: return state;
}


}
