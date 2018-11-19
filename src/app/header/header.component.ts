import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imageset: any = [];
  url = 'url(../../assets/img/himalayan-2.png)';

  constructor(private appService: AppService ) { }

  ngOnInit() {
    this.getImage();
  }

  getImage() {

    console.log('..................................................');
  }

}
