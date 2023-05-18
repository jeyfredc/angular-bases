import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
/* Cuando el servicio es privado no se puede acceder directamente a las propiedades y es buena paractica empezar a realizar los metodos en
el constructor para que se pueda acceder a cada propiedad sin modificar la propiedad directamente */
constructor( private dbzService: DbzService){}

//El operador espread se hace para no modificar directamente la propiedad, cuando realizamos esto
//en el main-page.component ya no es necesario llamar la propiedad con dbzService.characters porque para eso
//se esta realizando el metodo en esta parte
  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character)
  }

}
