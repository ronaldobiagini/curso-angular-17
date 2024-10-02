import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-increment',
  templateUrl: './home-increment.component.html',
  styleUrl: './home-increment.component.css'
})
export class HomeIncrementComponent implements OnDestroy, OnInit, DoCheck {
  num: number = 1;

  incrementar(): void {
    this.num++;
  }

  ngDoCheck(): void {
    console.log("Uma mudança ocorreu")
  }
  ngOnDestroy(): void {
    console.log("home destruida")
  };

  ngOnInit(): void {
    console.log("home inicializada")
  }

}
