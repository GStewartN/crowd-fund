import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { IdeasComponent } from './ideas/ideas.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';
import { CharitiesComponent } from './charities/charities.component';
import { CharityDetailComponent } from './charity-detail/charity-detail.component';import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashPageComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'ideas',
    component: IdeasComponent
  },
  {
    path: 'ideas/:id',
    component: IdeaDetailComponent
  },
  {
    path: 'charities',
    component: CharitiesComponent
  },
  {
    path: 'charities/:id',
    component: CharityDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
