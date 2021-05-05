import {Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
            <h1>{{title}}</h1>

            <h3>la base es {{base}}</h3>

            <button (click)="acumular(base)">+ {{base}}</button>

            <span>{{numero}}</span>

            <button (click)="acumular(-base)">- {{base}}</button>

            <button (click)="eliminarVN()">eliminarB</button>
    `
})
export class ContadorComponent {
    mensajeError:string = 'hubo un error';
    mensjae:string = 'se elimino correctamente';
    title:string = 'contador App';
    numero:number = 10;
    base: number = 5;
    acumular ( valor:number){
      this.numero += valor;
    };

    eliminarVN(){
        this.numero = 0;
    }
}