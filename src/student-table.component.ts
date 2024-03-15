// student-table.component.ts

import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  students: Student[] = [];
  searchText: string = '';
  selectedField: string = '';
  minMarks: number = 0;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  filterStudents() {
    if (this.minMarks) {
      this.students = this.studentService.filterStudentsByMarks(this.minMarks);
    } else {
      this.students = this.studentService.getStudents();
    }
  }

  sortStudents() {
    if (this.selectedField) {
      this.students = this.studentService.sortStudentsByField(this.selectedField);
    }
  }
}
