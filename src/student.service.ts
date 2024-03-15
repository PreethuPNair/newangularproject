// student.service.ts

import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    { name: 'John', age: 20, department: 'Computer Science', totalMarks: 85 },
    { name: 'Alice', age: 21, department: 'Mathematics', totalMarks: 90 },
    { name: 'Bob', age: 22, department: 'Physics', totalMarks: 75 },
    { name: 'Carol', age: 19, department: 'Biology', totalMarks: 80 }
  ];

  constructor() { }

  getStudents(): Student[] {
    return this.students;
  }

  filterStudentsByMarks(minMarks: number): Student[] {
    return this.students.filter(student => student.totalMarks > minMarks);
  }

  sortStudentsByField(field: string): Student[] {
    return this.students.sort((a, b) => a[field] > b[field] ? 1 : -1);
  }
}
