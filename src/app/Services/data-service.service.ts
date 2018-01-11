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

  saveCourse(formCourse: ICourse) {
    const counter = this.counterfn()
    counter.inc()
    formCourse.id = counter.getval()
    this.getCourses().push(formCourse)
    // console.log(this.getCourses())
  }

  counterfn(): { inc, dec, getval } {
    let counter = 2
    let inc = (): void => {
      counter = counter + 1
    }
    let dec = (): void => {
      counter = counter - 1
    }
    let getval = (): number => {
      return counter
    }
    return { inc, dec, getval }
  }


}


