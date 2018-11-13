import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';



export const router: Routes = [

   { path: '', component: IndexComponent },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});