import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private ar: ActivatedRoute) {
  	this.ar.params.subscribe( parametros =>{
  		console.log('Ruta Padre');
  		console.log(parametros);
  	});
  }

  ngOnInit() {
  }

}
