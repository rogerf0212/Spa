import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//rutas
import { APP_ROUTING } from './app.routes'

// servicios
import { HeroesService } from './servicios/heroes.service';

//componentes
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    APP_ROUTING ],
  providers: [
    HeroesService
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    NavbarComponent,
    AboutComponent,
    HeroesComponent,
    HomeComponent,
    HeroeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
