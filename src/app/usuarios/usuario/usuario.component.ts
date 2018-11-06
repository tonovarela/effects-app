
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { CargarUsuario } from '../../store/actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;
  loading: boolean;
  error: any;

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('usuario').subscribe( data => {
      this.usuario = data.usuario;
      this.error = data.error;
      this.loading = data.loading;
    });
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(new CargarUsuario(id));
    });
  }

}
