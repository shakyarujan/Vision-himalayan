import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  images: any = [];

  constructor(private appService: AppService ) { }

  ngOnInit() {
    this.appService.getImagesId(3).subscribe(res => {
      return this.images = res;
    });


  }

}
