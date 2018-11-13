import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-treking-info',
  templateUrl: './section-treking-info.component.html',
  styleUrls: ['./section-treking-info.component.scss']
})
export class SectionTrekingInfoComponent implements OnInit {

  field1 = 'Trekking';
  fieldDetail1 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.';
  field2 = 'Expedition';
  fieldDetail2 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.';
  field3 = 'Adventure';
  fieldDetail3 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.';
  field4 = 'Tours';
  fieldDetail4 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.';

  constructor() { }

  ngOnInit() {
  }

}
