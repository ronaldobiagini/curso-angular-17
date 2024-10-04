import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  exibirHome: boolean = true;
  hiddenHome: boolean = false;
  user: User | undefined;

  constructor(private userService: UserService) {
    this.user = userService.getUser();
  }

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
