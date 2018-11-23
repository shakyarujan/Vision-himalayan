import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-contactus-footer-social',
  templateUrl: './contactus-footer-social.component.html',
  styleUrls: ['./contactus-footer-social.component.scss']
})
export class ContactusFooterSocialComponent implements OnInit {

  info: any = [];

  constructor(private appSrevice: AppService) { }

  ngOnInit() {
    this.appSrevice.getSiteInfo().subscribe(res => {
      return this.info = res;
    });
  }

}
