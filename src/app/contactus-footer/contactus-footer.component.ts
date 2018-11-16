import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../service/app.service';


@Component({
  selector: 'app-contactus-footer',
  templateUrl: './contactus-footer.component.html',
  styleUrls: ['./contactus-footer.component.scss']
})
export class ContactusFooterComponent implements OnInit {

  constructor(private http: HttpClient, private appService: AppService) { }

  infos: any = [];

  ngOnInit() {
    this.getSiteInfo();
  }

  getSiteInfo() {
    this.appService.getSiteInfo().subscribe(res => {
      return this.infos = res;
    });
  }

}
