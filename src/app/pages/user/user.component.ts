import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  /*
  users:String[] = [
    "Vinicios", "Julio", "Larissa", "Ronaldo"
  ]*/

  userSelected: User | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(120)]],
      idade: [
        '',
        [Validators.required, Validators.min(2), Validators.max(130)],
      ],
    });
  }

  CriarUser() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value);
      this.userForm.reset();
    } else {
      console.log('Não foi possível criar o usuário.' + this.userForm.errors);
    }
  }

  users: User[] = [
    { nome: 'Vinicios', idade: 25 },
    { nome: 'Julio', idade: 17 },
    { nome: 'Larissa', idade: 31 },
    { nome: 'Ronaldo', idade: 46 },
  ];

  userInfoSelecionado(user: User) {
    this.userSelected = user;
  }
}
