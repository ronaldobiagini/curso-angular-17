import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { UserGit } from '../../_models/userGit';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
})
export class ApiComponent {
  constructor(private userService: UserService, private toastr: ToastrService) {
    this.users = [];
  }

  username: string = '';
  users: UserGit[]; // | undefined;

  getGitUser() {
    if (this.username.length == 0) {
      this.toastr.error('O nome do usuário é obrigatório', '', {
        timeOut: 5000,
      });
      return;
    }

    this.userService.getGitUser(this.username).subscribe(
      (response: UserGit) => {
        this.users?.unshift(response);
        console.log(this.users);
      },
      (e) => {
        this.toastr.error(e.error.message, '', { timeOut: 5000 });
      }
    );
  }
}
