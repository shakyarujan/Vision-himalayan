import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
import { iif } from 'rxjs';

@Component({
  selector: 'app-package-detail-innerpage',
  templateUrl: './package-detail-innerpage.component.html',
  styleUrls: ['./package-detail-innerpage.component.scss']
})

export class PackageDetailInnerpageComponent implements OnInit {
  tripType; recommendedPackages = [];
  id: String;
  typeId1: String;
  typeId2: any = [];
  trips: any = [];
  tripsData: any = [];
  itineraryData: any = [];
  daterange: any = {};
  inbound: any = [];
  outbound: any = [];

  bookingForm: FormGroup;

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute,
    private daterangepickerOptions: DaterangepickerConfig, private fb: FormBuilder) {

      // this.recommendedPackages = [];
    this.daterangepickerOptions.settings = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false
    };

    this.route.params.subscribe(params => {
      this.id = params.id;
      this.packages(this.id);
    });


  }

  ngOnInit() {
    this.itineraryDetails();

    this.bookingForm = this.fb.group({
      user_id: null,
      date: [null, Validators.required],
      adults: [null, Validators.required],
      childrens: [null, Validators.required],
      contactName: [null, [Validators.required, Validators.minLength(2)]],
      contactEmail: [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      contactNumber: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]{10}$')])]
    });
  }

  packages(id) {
    console.log('hello');
    this.appService.getTripId(id).subscribe((res: any) => {
      this.tripsData = res;

          this.tripType = this.tripsData[0].type;

          if (this.tripType == 'Inbound') {

            this.appService.getInboundData().subscribe((inbound: any) => {
              for ( let i = 0; i < inbound.length; i++ ) {
                if ( this.id == inbound[i].trip_id ) {
                  delete inbound[i];
                }

              }
              for ( let i = 0; i < inbound.length; i++) {
                if ( inbound[i] != null ) {
                  this.recommendedPackages.push(inbound[i]);
                }
              }
            });
          } else if (this.tripType == 'Outbound') {
            this.appService.getOutboundData().subscribe((outbound: any) => {
              for ( let i = 0; i < outbound.length; i++ ) {
                if ( this.id == outbound[i].trip_id ) {
                  delete outbound[i];
                }
              }
              for ( let i = 0; i < outbound.length; i++) {
                if ( outbound[i] != null ) {
                  this.recommendedPackages.push(outbound[i]);
                }
              }
            });
          } else {
            //nothing
          }
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

  fun(contactEmail) {
    const uri = ('https://www.validator.pizza/email/') + contactEmail.value;
    console.log(uri);

  }

  // API fetching part

  itineraryDetails() {
    this.route.params.subscribe(params => {
      this.id = params.id;

      this.appService.getItineraryData(this.id).subscribe(res => {
        this.itineraryData = res;
        this.packages(this.id);
      });
    });
  }

  tripId(trip_id) {
    this.recommendedPackages = [];
    this.router.navigate([`/package-detail/${trip_id}`]);

  }


  // Scroll to top
  top() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
