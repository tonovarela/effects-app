import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { CargarUsuarios } from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
 usuarios: Usuario[] = [];
 loading: boolean ;
 error: any;
  constructor(private store: Store<AppState>) {
   }

  ngOnInit() {
    this.store.select('usuarios').subscribe(data => {
      this.usuarios = data.usuarios;
      this.loading = data.loading;
      this.error = data.error;
    });
    this.store.dispatch(new CargarUsuarios());

    // this.usuarioService.getUsers().subscribe(users => {
    //  this.usuarios = users;
    // });
  }

}
