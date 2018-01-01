import { Injectable } from '@angular/core';
import { ICourse } from '../Models/course.interface';
import { CoursesMock } from '../Storage/storage'

@Injectable()
export class DataServiceService {

  constructor() { }

  courses: ICourse[] = []

  getCourses(): ICourse[] {
    if (this.courses.length === 0) {
      this.courses = CoursesMock
    }
    return this.courses
  }

  getCourseById(id: string): ICourse {
    return this.getCourses().find(x => x.id === +id)
  }



}


