import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-contactus-footer-address',
  templateUrl: './contactus-footer-address.component.html',
  styleUrls: ['./contactus-footer-address.component.scss']
})
export class ContactusFooterAddressComponent implements OnInit {

  info: any = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getSiteInfo().subscribe(res => {
      return this.info = res;
    });
  }

}
