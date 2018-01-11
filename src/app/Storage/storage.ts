import { ICourse } from '../Models/course.interface'

export const CoursesMock: ICourse[] = [
    {
        id: 1,
        name: 'Course1',
        category: 'Js',
        teacherName: 'Teacher Name1',
        teacherEmail: 'teacher@domain.com',
        description: 'course 1 description',
        language: 'FR',
        avatar: 'image1.jpg',
        rating: 2,
        invisible: false,
        creationDate: 1507486008447,
        lastUpdateDate: 1507486008447
    },
    {
        id: 2,
        name: 'Course2',
        category: 'Java',
        teacherName: 'Teacher Name2',
        teacherEmail: 'teacher@domain.com',
        description: 'course 2 description',
        language: 'EN',
        avatar: 'image2.jpg',
        rating: 3,
        invisible: false,
        creationDate: 1507486008447,
        lastUpdateDate: 1507486008447
    }
]