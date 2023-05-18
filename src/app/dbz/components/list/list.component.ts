import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent{
@Input() //@input sirve para exportar characterList en otro componente
  public characterList: Character[] = [{
    name:'Trunks',
    power: 10,
  }]

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();


  public onDeleteCharacter(id?: string):void {
    //TODO: Emitir el id del personaje
    if (!id) return;
    this.onDeleteId.emit(id)

  }
}
