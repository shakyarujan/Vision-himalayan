import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppService } from './service/app.service';

import { Daterangepicker } from 'ng2-daterangepicker';

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
import { ContactusFooterComponent } from './contactus-footer/contactus-footer.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { PackageDetailInnerpageComponent } from './package-detail-innerpage/package-detail-innerpage.component';
import { AboutComponent } from './about/about.component';
import { AboutInnerpageComponent } from './about-innerpage/about-innerpage.component';

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
    ContactusFooterComponent,
    PackageDetailComponent,
    PackageDetailInnerpageComponent,
    AboutComponent,
    AboutInnerpageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routes,
    Daterangepicker
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
