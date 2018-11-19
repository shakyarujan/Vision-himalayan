import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DaterangepickerConfig } from 'ng2-daterangepicker';

@Component({
  selector: 'app-package-detail-innerpage',
  templateUrl: './package-detail-innerpage.component.html',
  styleUrls: ['./package-detail-innerpage.component.scss']
})

export class PackageDetailInnerpageComponent implements OnInit {

  id: String;
  tripsData: any = [];
  itineraryData: any = [];
  daterange: any = {};


  // createForm: FormGroup;

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute, private daterangepickerOptions: DaterangepickerConfig ) {
    // this.createForm = this.fb.group({
    //   user_id: '',
    //   date: '',
    //   adults: ['', Validators.required],
    //   childrens: ['', Validators.required],
    //   contactName: ['', Validators.required],
    //   contactEmail: ['', Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
    //   contactNumber: ['', Validators.required, Validators.pattern("[0-9]{0-10}")]
    // });



    this.daterangepickerOptions.settings = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false
  };
  }

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

        console.log(this.daterange.start, this.daterange.stop);
    }

    public calendarCanceled(e: any) {
      console.log(e);
      // e.event
      // e.picker
  }

  public calendarApplied(e: any) {
      console.log(e);
      // e.event
      // e.picker
  }

}
