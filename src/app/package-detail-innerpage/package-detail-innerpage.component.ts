import { Component, OnInit } from '@angular/core';
import {AppService} from '../service/app.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-package-detail-innerpage',
  templateUrl: './package-detail-innerpage.component.html',
  styleUrls: ['./package-detail-innerpage.component.scss']
})
export class PackageDetailInnerpageComponent implements OnInit {

  id: String;
  tripsData: any = [];
  itineraryData: any = [];

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.tripDetail();
    this.itineraryDetails();
  }

  tripDetail() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.appService.getTripId(this.id).subscribe(res => {
        this.tripsData = res;
      });
    });
  }

  itineraryDetails() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.appService.getItineraryData(this.id).subscribe(res => {
        console.log(res);
        this.itineraryData = res;
      });
    });
  }


}
