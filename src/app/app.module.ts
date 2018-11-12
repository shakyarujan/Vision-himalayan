import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    FooterBgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
