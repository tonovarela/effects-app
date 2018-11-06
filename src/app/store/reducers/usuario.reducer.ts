import { UsuariosState } from './usuarios.reducer';
import { Usuario } from './../../models/usuario.model';

import * as fromUsuario from '../actions';


export interface UsuarioState {
    usuario: Usuario;
     loaded: boolean;
     loading: boolean;
     error: any;
}

const estadoInicial: UsuarioState = {
    usuario: null,
    loaded: false,
    loading: false,
    error: false
};

export function usuarioReducer (state = estadoInicial , action: fromUsuario.usuarioAccciones): UsuarioState {
switch ( action.type ) {

    case fromUsuario.CARGAR_USUARIO:
    return {
        ...state,
        loading: true,
        error: null
    };
    case fromUsuario.CARGAR_USUARIO_FAIL:
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
    case fromUsuario.CARGAR_USUARIO_SUCCESS:
    return {
        ...state,
        loaded: true,
        loading: false,
        usuario: action.usuario
    };
    default: return state;
}


}
