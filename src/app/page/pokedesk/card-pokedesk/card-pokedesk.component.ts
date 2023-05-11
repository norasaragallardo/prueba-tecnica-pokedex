import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-pokedesk',
  templateUrl: './card-pokedesk.component.html',
  styleUrls: ['./card-pokedesk.component.css']
})
export class CardPokedeskComponent {
  constructor(private router:Router){

  }
@Input() pokemon: any = {};

abrirDetalle(item: any){
  console.log(item);
  this.router.navigate(['/', 'detail']);
}
}
