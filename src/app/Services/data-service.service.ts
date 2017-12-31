import { Injectable } from '@angular/core';
import { ICourse } from '../Models/course.interface';
import { CoursesMock as courses } from '../Storage/storage'

@Injectable()
export class DataServiceService {

  constructor() { }

  getCourses(): ICourse[] {
    return courses
  }

}


