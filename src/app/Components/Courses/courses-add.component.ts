import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../Models/course.interface';
import { DataServiceService } from '../../Services/data-service.service'

@Component({
  selector: 'courses-add',
  templateUrl: './courses-add.component.html',
  styleUrls: ['./courses-add.component.css']
})
export class CoursesAddComponent implements OnInit {

  constructor(
    private dataService: DataServiceService
  ) { }

  ngOnInit() {
  }

  course: ICourse

  onSubmit(form: any) {
    //TODO form validation
    this.dataService.getCourses().push(form.value)
  }

}
