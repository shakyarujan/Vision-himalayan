import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-about-innerpage',
  templateUrl: './about-innerpage.component.html',
  styleUrls: ['./about-innerpage.component.scss']
})
export class AboutInnerpageComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  trips: any = [];

  ngOnInit() {
    this.tripData();
  }

  tripData() {
    this.appService.getTripsData().subscribe(res => {
      return this.trips = res;
    });
  }

  tripId(trip_id) {
    this.router.navigate([`/package-detail/${trip_id}`]);
  }
}
