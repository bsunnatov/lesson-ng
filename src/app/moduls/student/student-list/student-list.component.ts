import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: any[] = [];
  constructor() {
    this.students.push(new Student('Axmedov', 'Davron', 30))
    this.students.push(new Student('Olimov', 'Sanjar', 31))
    this.students.push(new Student('Maqsudov', 'Xurshid', 26))
  }

  ngOnInit(): void {
  }

}
