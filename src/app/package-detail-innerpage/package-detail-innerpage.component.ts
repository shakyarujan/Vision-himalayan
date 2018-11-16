import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-detail-innerpage',
  templateUrl: './package-detail-innerpage.component.html',
  styleUrls: ['./package-detail-innerpage.component.scss']
})
export class PackageDetailInnerpageComponent implements OnInit {

  public daterange: any = {};

  constructor() { }

  ngOnInit() {
  }

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
