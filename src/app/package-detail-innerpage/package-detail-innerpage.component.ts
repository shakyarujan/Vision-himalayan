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

  // createForm: FormGroup;

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) {
    // this.createForm = this.fb.group({
    //   user_id: '',
    //   date: '',
    //   adult: '',
    //   children: '',
    //   fullname: '',
    //   email: '',
    //   mobile: ''
    // });
  }
  public daterange: any = {};

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

  // addBooking(user_id, date, adult, children, fullname, email, mobile) {
  //   this.appService.addBooking(user_id, date, adult, children, fullname, email, mobile).subscribe(() => {
  //     this.router.navigate([`/package-detail/${user_id}`]);
  //   });
  // }

    selectedDate(value: any) {
        this.daterange.start = value.start;
        this.daterange.end = value.end;
    }

    // expected output is an object containing the event and the picker.
    // your method can be named whaterver you want.
    // you can add multiple params to the method and pass them in the template
    public calendarCanceled(e:any) {
      console.log(e);
      // e.event
      // e.picker
  }

  public calendarApplied(e:any) {
      console.log(e);
      // e.event
      // e.picker
  }

}
