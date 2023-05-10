import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  form = {
    username: localStorage.getItem('username') ,
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

}