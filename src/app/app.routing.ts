import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TrekkingComponent } from './trekking/trekking.component';
import {ExeditionComponent} from './exedition/exedition.component';
import {PackageDetailComponent} from './package-detail/package-detail.component';
import {AboutComponent} from './about/about.component';




export const router: Routes = [

   { path: '', component: IndexComponent },
   { path: 'trekking', component: TrekkingComponent},
   { path: 'expedition', component: ExeditionComponent},
   { path: 'package-detail/:id', component: PackageDetailComponent},
   { path: 'about', component: AboutComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});
