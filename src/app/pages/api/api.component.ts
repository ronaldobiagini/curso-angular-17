import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { UserGit } from '../../_models/userGit';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
})
export class ApiComponent implements OnInit {
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  username: string = '';
  user: UserGit | undefined;

  ngOnInit(): void {
    //this.getGitUser();
  }

  getGitUser() {
    this.userService.getGitUser(this.username).subscribe(
      (response: UserGit) => {
        this.user = response;
      },
      (e) => {
        this.toastr.error(e.error.message, '', { timeOut: 120000 });
      }
    );
  }
}
