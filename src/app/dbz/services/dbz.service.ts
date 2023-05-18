import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },
  {
    id: uuid(),
    name:'Goku',
    power:9500
  },
  {
    id: uuid(),
    name:'Vegueta',
    power:7500
  }
]


/* Funcion que recibe el caracter del elemento hijo */
addCharacter(character: Character):void {
  //El operador spread se utiliza en este caso para poder obtener todas las propiedades que vienen de character como el name y el power,
  //asi el newCharacter va a tener las propiedades del uuid, mas las otras dos propiedades de character despues de realizar el push
  const newCharacter : Character = {id: uuid(), ...character}
  this.characters.push(newCharacter)

}

// onDeleteCharacter(id: number):void {
// console.log("LLega el id ", id);

//   this.characters.splice(id,1)

// }

deleteCharacterById(id:string){
  this.characters = this.characters.filter(character => character.id !=id)
}
}
