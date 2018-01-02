import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home.component'
import { CoursesComponent } from './Components/Courses/courses.component'
import { CourseDetailsComponent } from './Components/Courses/course-details.component'
import { CoursesHomeComponent } from './Components/Courses/courses-home.component'
import { CoursesAddComponent } from './Components/Courses/courses-add.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'courses', component: CoursesComponent,
    children: [
      { path: '', component: CoursesHomeComponent },
      { path: 'add', component: CoursesAddComponent },
      { path: ':id', component: CourseDetailsComponent }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
