import { Component } from '@angular/core';
import { PokedeskService } from '../../services/pokedesk.service';

@Component({
  selector: 'app-pokedesk',
  templateUrl: './pokedesk.component.html',
  styleUrls: ['./pokedesk.component.css']
})
export class PokedeskComponent {
public pokemon: any [] =[];
constructor(private pokedeskService:PokedeskService){
  this.getPokedesk();
}
getPokedesk(){
  this.pokedeskService.getPokedesk().subscribe({
    next:(value)=>{
      console.log(value);
      const result: any = value;
      this.pokemon = result.results;
      console.log(this.pokemon);

    }
  })
}
}
