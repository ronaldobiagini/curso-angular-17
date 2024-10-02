import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ExemploComponenteComponent } from './_components/exemplo-componente/exemplo-componente.component';
import { MenuPrincipalComponent } from './_components/menu-principal/menu-principal.component';
import { FooterComponent } from './_components/footer/footer.component';
import { BaseUIComponent } from './_components/base-ui/base-ui.component';
import { UserComponent } from './pages/user/user.component';
import { HomeIncrementComponent } from './_components/home-increment/home-increment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExemploComponenteComponent,
    MenuPrincipalComponent,
    FooterComponent,
    BaseUIComponent,
    UserComponent,
    HomeIncrementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
