import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Daterangepicker } from 'ng2-daterangepicker';

import { AppService } from './service/app.service';

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
import { TrekkingComponent } from './trekking/trekking.component';
import { TrekkingInnerpageComponent } from './trekking-innerpage/trekking-innerpage.component';
import { ExeditionComponent } from './exedition/exedition.component';
import { ExpeditionInnerpageComponent } from './expedition-innerpage/expedition-innerpage.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { PackageDetailInnerpageComponent } from './package-detail-innerpage/package-detail-innerpage.component';
import { AboutComponent } from './about/about.component';
import { AboutInnerpageComponent } from './about-innerpage/about-innerpage.component';
import { ContactComponent } from './contact/contact.component';
import { ContactusCurveBgComponent } from './contactus-curve-bg/contactus-curve-bg.component';
import { ContactusFooterSocialComponent } from './contactus-footer-social/contactus-footer-social.component';
import { ContactusFooterAddressComponent } from './contactus-footer-address/contactus-footer-address.component';

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
    TrekkingComponent,
    TrekkingInnerpageComponent,
    ExeditionComponent,
    ExpeditionInnerpageComponent,
    PackageDetailComponent,
    PackageDetailInnerpageComponent,
    AboutComponent,
    AboutInnerpageComponent,
    ContactComponent,
    ContactusCurveBgComponent,
    ContactusFooterSocialComponent,
    ContactusFooterAddressComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routes,
    Daterangepicker
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
