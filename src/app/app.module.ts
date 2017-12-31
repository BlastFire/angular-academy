import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/Header.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursesComponent } from './Components/Courses/courses.component'
import { CourseListComponent } from './Components/Courses/course-list.component';
import { HomeComponent } from './Components/home.component'
import { DataServiceService } from './Services/data-service.service';
import { CourseDetailsComponent } from './Components/Courses/course-details.component';
import { CoursesHomeComponent } from './Components/Courses/courses-home.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    CourseListComponent,
    HomeComponent,
    CourseDetailsComponent,
    CoursesHomeComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
