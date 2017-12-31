import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home.component'
import { CoursesComponent } from './Components/Courses/courses.component'
import { CourseDetailsComponent } from './Components/Courses/course-details.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CourseDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
