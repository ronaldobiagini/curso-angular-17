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
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserCardComponent } from './_components/user-card/user-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiComponent } from './pages/api/api.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExemploComponenteComponent,
    MenuPrincipalComponent,
    FooterComponent,
    BaseUIComponent,
    UserComponent,
    HomeIncrementComponent,
    UserDetailsComponent,
    UserCardComponent,
    ApiComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
