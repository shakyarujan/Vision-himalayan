import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  phoneNumber = '+977-9851063719';
  email = 'himalayanvisiontreks@gmail.com';

  constructor() { }

  ngOnInit() {
  }

}
