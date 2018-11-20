import { Component, OnInit } from '@angular/core';
import {AppService} from '../service/app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-go-explore',
  templateUrl: './go-explore.component.html',
  styleUrls: ['./go-explore.component.scss']
})
export class GoExploreComponent implements OnInit {

  trips: any = [];

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.tripData();
  }

  tripData() {
    this.appService.getTripsData().subscribe(res => {
      console.log(res[1]);
      return this.trips = res;
    });
  }

  tripId(trip_id) {
    this.router.navigate([`/package-detail/${trip_id}`]);
  }

}
