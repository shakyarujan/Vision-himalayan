import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppService } from '../service/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  info: any = [];

  constructor(private http: HttpClient, private appService: AppService) { }

  ngOnInit() {
    this.getSiteInfo();
  }

  getSiteInfo() {
    return this.appService.getSiteInfo().subscribe(res => {
      this.info = res;
    });
  }

}
