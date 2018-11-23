import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DaterangepickerConfig } from 'ng2-daterangepicker';

@Component({
  selector: 'app-package-detail-innerpage',
  templateUrl: './package-detail-innerpage.component.html',
  styleUrls: ['./package-detail-innerpage.component.scss']
})

export class PackageDetailInnerpageComponent implements OnInit {

  id: String;
  trips: any = [];
  tripsData: any = [];
  itineraryData: any = [];
  daterange: any = {};

  bookingForm: FormGroup;

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute,
    private daterangepickerOptions: DaterangepickerConfig, private fb: FormBuilder) {

    this.daterangepickerOptions.settings = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false
  };
  }

  ngOnInit() {
    this.tripData();
    this.tripDetail();
    this.itineraryDetails();

    this.bookingForm = this.fb.group({
      user_id: null,
      date: [null, Validators.required],
      adults: [null, Validators.required],
      childrens: [null, Validators.required],
      contactName: [null, [Validators.required, Validators.minLength(2)]],
      contactEmail: [null, Validators.compose([Validators.required, Validators.pattern('^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,6})$')])],
      contactNumber: [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]{10}$')])]
    });
  }

  get date() {
    return this.bookingForm.get('date');
  }

  get adults() {
    return this.bookingForm.get('adults');
  }

  get childrens() {
    return this.bookingForm.get('childrens');
  }


  get contactName() {
    return this.bookingForm.get('contactName');
  }

  get contactEmail() {
    return this.bookingForm.get('contactEmail');
  }

  get contactNumber() {
    return this.bookingForm.get('contactNumber');
  }

  onsubmit(fb: FormGroup) {
  //   console.log(this.bookingForm);
  //   if (this.bookingForm.valid) {
  //     console.log('form submitted');
  //   } else {
  //     this.validateAllFormFields(this.bookingForm);
  //   }
  // }

  // validateAllFormFields(formGroup: FormGroup) {
  //   Object.keys(formGroup.controls).forEach(field => {
  //     console.log(field);
  //     console.log('...................');
  //     const control = formGroup.get(field);
  //     if (control instanceof FormControl) {
  //       control.markAsTouched({ onlySelf: true });
  //     } else if (control instanceof FormGroup) {
  //       this.validateAllFormFields(control);
  //     }
  //   });

  // console.log(fb.value);

  }
  booked() {
    console.log(this.bookingForm);
    // console.log('Final Value', this.user);
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



  // API fetching part

  tripData() {
    this.appService.getTripsData().subscribe(res => {
      return this.trips = res;
    });
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
