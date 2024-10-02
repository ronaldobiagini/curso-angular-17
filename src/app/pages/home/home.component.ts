import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  exibirHome: boolean = true;
  hiddenHome: boolean = false;

  criar() {
    this.exibirHome = true;
  }

  destruir() {
    this.exibirHome = false;
  }

  mostrar() {
    this.hiddenHome = false;
  }

  esconder() {
    this.hiddenHome = true;
  }
}
