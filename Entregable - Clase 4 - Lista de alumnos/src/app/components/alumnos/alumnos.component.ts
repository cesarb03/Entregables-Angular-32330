import { Component } from '@angular/core';

import { Student } from 'src/app/interface/students.interface';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent {
  // public prueba: boolean[]

  students: Student[] = [
    {
      id: 1,
      firstName: 'Lionel',
      lastName: 'Messi',
      createdAt: new Date('1987-06-24'),
      isTop10: false,
    },
    {
      id: 2,
      firstName: 'Lionel',
      lastName: 'Messi',
      createdAt: new Date('1987-06-24'),
      isTop10: false,
    },
    {
      id: 3,
      firstName: 'Lionel',
      lastName: 'Messi',
      createdAt: new Date('1987-06-24'),
      isTop10: true,
    },
    {
      id: 4,
      firstName: 'Lionel',
      lastName: 'Messi',
      createdAt: new Date('1987-06-24'),
      isTop10: false,
    },
  ];
}
  // alternarTop10(students: Student): void {
  //   this.prueba = students.map(function (student) {
  //     return student.isTop10;
  //   });
  //   this.prueba = !this.prueba;
  //   console.log(prueba);
  // }

