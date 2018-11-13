import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SectionTrekingInfoComponent } from './section-treking-info/section-treking-info.component';
import { GoExploreComponent } from './go-explore/go-explore.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LangtangTrekkingComponent } from './langtang-trekking/langtang-trekking.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterBgComponent } from './footer-bg/footer-bg.component';
import { IndexComponent } from './index/index.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhatWeDoSectionComponent } from './what-we-do-section/what-we-do-section.component';
import { TrekkingComponent } from './trekking/trekking.component';
import { TrekkingSectionComponent } from './trekking-section/trekking-section.component';
import { TrekkingInnerpageComponent } from './trekking-innerpage/trekking-innerpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SectionTrekingInfoComponent,
    GoExploreComponent,
    GalleryComponent,
    LangtangTrekkingComponent,
    CustomerReviewComponent,
    ContactusComponent,
    FooterBgComponent,
    IndexComponent,
    WhatWeDoComponent,
    WhatWeDoSectionComponent,
    TrekkingComponent,
    TrekkingSectionComponent,
    TrekkingInnerpageComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
