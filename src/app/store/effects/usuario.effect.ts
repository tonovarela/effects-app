import { CargarUsuarioSuccess, CargarUsuarioFail } from './../actions/usuario.actions';
import { UsuarioService } from './../../services/usuario.service';
import { map, switchMap, catchError } from 'rxjs/operators';


import { Injectable } from '@angular/core';
import { Actions} from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { Effect } from '@ngrx/effects';
import { of } from 'rxjs';


@Injectable()
export class UsuarioEffects {

 constructor(private actions$: Actions,
public usuarioService: UsuarioService) {}

  @Effect()
  cargarUsuario$ = this.actions$.ofType(usuarioActions.CARGAR_USUARIO).pipe (
      switchMap( (action) => {
          const id = action['id'];
      return this.usuarioService.getUserByID(id)
      .pipe( map( user => new CargarUsuarioSuccess(user) ),
       catchError(error => of(new CargarUsuarioFail(error)) )
           );
      })
  );
}
