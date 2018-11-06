import { CargarUsuariosSuccess, CargarUsuariosFail } from './../actions/usuarios.actions';
import { UsuarioService } from './../../services/usuario.service';
import { map, switchMap, catchError } from 'rxjs/operators';


import { Injectable } from '@angular/core';
import { Actions} from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { Effect } from '@ngrx/effects';
import { of } from 'rxjs';


@Injectable()
export class UsuariosEffects {

 constructor(private actions$: Actions,
public usuarioService: UsuarioService) {}

  @Effect()
  cargarUsuarios$ = this.actions$.ofType(usuariosActions.CARGAR_USUARIOS).pipe (
      switchMap( () => {
      return this.usuarioService.getUsers()
      .pipe( map( users => new CargarUsuariosSuccess(users) ),
       catchError(error => of(new CargarUsuariosFail(error)) )
           );
      })
  );
}
