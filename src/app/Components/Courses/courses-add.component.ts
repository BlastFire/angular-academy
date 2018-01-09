import { Component, OnInit, ViewChild } from '@angular/core';
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
    // if(form.invalid) {
    //   console.log("invalid")
    // } else if(form.valid) {
    //   console.log("valid")
    // }
    //this.dataService.getCourses().push(form.value)

    console.log(form)
  }

  test(readerEvt, form) {
    let file = readerEvt.target.files[0]
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener("load", function () {
      // console.log(btoa(reader.result))
      form.form.get('avatar').patchValue({
        value: reader.result
      })
    }, false)

  }

}
