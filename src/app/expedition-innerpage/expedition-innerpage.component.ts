import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-expedition-innerpage',
  templateUrl: './expedition-innerpage.component.html',
  styleUrls: ['./expedition-innerpage.component.scss']
})
export class ExpeditionInnerpageComponent implements OnInit {

  expeditionData: any = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    return this.appService.getOutboundData().subscribe(res => {
      this.expeditionData = res;
    });
  }

}
