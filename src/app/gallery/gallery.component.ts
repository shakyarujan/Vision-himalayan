import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images: any = [];

  constructor(private appService: AppService, private route: Router) { }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
      this.appService.getImages().subscribe(res => {
        return this.images = res;
      });
  }

  tripId(trip_id) {
    this.route.navigate([`/package-detail/${trip_id}`]);
  }


}
