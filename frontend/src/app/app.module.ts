import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { TimelineComponent } from './timeline/timeline.component';
import { RouterModule } from '@angular/router';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { ProjectListComponent } from './project-list/project-list.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopbannerComponent,
    TimelineComponent,
    ProjectsPageComponent,
    HomePageComponent,
    ArticlesPageComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {path: 'home', component: HomePageComponent},
      {path: 'projects', component: ProjectsPageComponent},
      {path: 'articles', component: ArticlesPageComponent},
      {path: '**', component: HomePageComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
