import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Doctor Strange', 'Bruja Scarlatta']
  public deletedHero?:string

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
  }

}
