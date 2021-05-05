import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  borrar:string = '';
  boleano:boolean = false
  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan', 'America'];

  eliminarArray(){
    this.borrar =  this.heroes.shift() || '';
  };
}
