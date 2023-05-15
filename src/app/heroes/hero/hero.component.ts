import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
public name:string = "iron Man";
public age:number = 45;

get capitalizeName ():string {
  return this.name[0].toUpperCase() + this.name.substring(1)
}

get getHeroDescription():string {
return `${ this.name } - ${this.age} `
}

changeName():string {
return this.name="Doctor Strange"
}

changeAge():number {
return this.age=24
}

resetForm():void {
  this.name="iron Man"
  this.age=45

  }

}
