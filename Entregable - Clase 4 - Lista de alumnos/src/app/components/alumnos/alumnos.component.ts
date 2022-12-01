import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/students';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  students: Student[] =  [
    new Student(1,'Lionel', 'Messi', new Date ('1987-06-24'), true),
    new Student(2,'Lionel', 'Messi', new Date ('1987-06-24'), false),
    new Student(3,'Lionel', 'Messi', new Date ('1987-06-24'), true),
    new Student(4,'Lionel', 'Messi', new Date ('1987-06-24'), true),
    new Student(5, 'Lionel', 'Messi', new Date ('1987-06-24'), false),
    new Student(6, 'Lionel', 'Messi', new Date ('1987-06-24'), true),
    new Student(7, 'Lionel', 'Messi', new Date ('1987-06-24'), true),
    new Student(8, 'Lionel', 'Messi', new Date ('1987-06-24'), true),
    new Student(9, 'Lionel', 'Messi', new Date ('1987-06-24'), true)
  ]
  constructor() { }

  ngOnInit(): void {
  }



}
