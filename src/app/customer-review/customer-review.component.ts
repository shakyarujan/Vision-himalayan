import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.scss']
})
export class CustomerReviewComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    // this.userReview();
  }


  // userReview() {
  //   return this.appService.getReview();
  // }

}
