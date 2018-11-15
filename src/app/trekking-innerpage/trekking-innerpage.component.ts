import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-trekking-innerpage',
  templateUrl: './trekking-innerpage.component.html',
  styleUrls: ['./trekking-innerpage.component.scss']
})
export class TrekkingInnerpageComponent implements OnInit {

  trekkingData: any = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    return this.appService.getTripsData().subscribe(res => {
      this.trekkingData = res;
    });
  }
}
