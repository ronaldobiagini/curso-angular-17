import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrl: './menu-principal.component.css'
})
export class MenuPrincipalComponent implements OnInit {
  ngOnInit(): void {
    console.log("Menu principal onInit")
  }

}
