import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() cardusername: User = { nome: '', idade: 0 };

  @Output() userInfoEmiter = new EventEmitter<User>();
  RetornarUser() {
    this.userInfoEmiter.emit(this.cardusername);
  }
}
