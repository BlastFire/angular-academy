import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../Services/data-service.service'
import { ICourse } from '../../Models/course.interface';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(
    private router: Router,
    private dataService: DataServiceService
  ) { }

  courses: ICourse[]

  ngOnInit() {
    this.courses = this.dataService.getCourses()
  }

  gotoCourseDetails(id: string) {
    this.router.navigate(['/course', id])
  }

}
