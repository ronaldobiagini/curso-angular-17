import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})

export class UserDetailsComponent implements OnInit {
  username:string | null = ""
  usernameQS: string | null = ""

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.getRouteParams();
    this.getQueryParams();
  }

  getRouteParams() {
    this.route.paramMap.subscribe((params) => {
      this.username = params.get("username"); //username corresponde ao valor utilizado no path da rota
    })
  }

  getQueryParams() {
    this.route.queryParams.subscribe((params) => {
      this.usernameQS = params["username"];
    })
  }
}
