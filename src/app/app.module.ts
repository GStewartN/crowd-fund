import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { IdeasComponent } from './ideas/ideas.component';
import { CharitiesComponent } from './charities/charities.component';
import { AdminComponent } from './admin/admin.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';
import { CharityDetailComponent } from './charity-detail/charity-detail.component';
import { TargetPipe } from './target.pipe';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditIdeaComponent } from './edit-idea/edit-idea.component';
import { EditCharityComponent } from './edit-charity/edit-charity.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    ProjectsComponent,
    IdeasComponent,
    CharitiesComponent,
    AdminComponent,
    ProjectDetailComponent,
    IdeaDetailComponent,
    CharityDetailComponent,
    TargetPipe,
    EditProjectComponent,
    EditIdeaComponent,
    EditCharityComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
