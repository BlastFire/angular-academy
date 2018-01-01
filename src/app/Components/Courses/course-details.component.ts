import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/observable/of'
import { ICourse } from '../../Models/course.interface'
import { DataServiceService } from '../../Services/data-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataServiceService
  ) { }

  course: ICourse;


  ngOnInit() {
    // this.hero$ = this.route.paramMap
    //   .switchMap((params: ParamMap) =>
    //     this.dataService.getCourseById(params.get('id')))
    this.route.params.subscribe(params => {
      this.course = this.dataService.getCourseById(params['id'])
    });
  }

}
