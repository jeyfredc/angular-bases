import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { CounterModule } from './counter/components/counter.module';
// import { HeroesModule } from './heroes/heroes.module';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DbzModule,
    // CounterModule,
    // HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
