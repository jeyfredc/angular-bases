import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  // Este es un EventEmmitter el cual sirve para transmitir los elementos del hijo al componente padre que para este caso practico el componente padre
  // es dbz-add-character
  //para que pueda salir y ser transmitido hacia el padre debe tener @Output
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  // Función para guardar caracter que se agrega al boton de agregar del formulario
  saveCharacter () {
    console.log(this.character);
    // El if significa que si en la propiedad de nombre no hay nada no va a realizar ningun evento o accion hacia adelante
    if(this.character.name.length === 0 ) return;
    /* Caso contrario si pasa la validacion, va a enviar rtodo hacia el componente padre, para eso es el emit */
    this.onNewCharacter.emit(this.character)
    // Despues de enviar los datos se limpia el formulario

    this.character = { name: '', power: 0};
    console.log('Limpio los caracteres', this.character);

  }
}
