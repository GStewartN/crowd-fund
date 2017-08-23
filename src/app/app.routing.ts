import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashPageComponent } from './splash-page/splash-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
