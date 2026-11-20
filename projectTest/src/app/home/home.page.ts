
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonBadge
  ]
})
export class HomePage {

  student = {
    id: 65671,
    firstName: 'Sor',
    lastName: 'Visal',
    age: 21,
    gender: 'Male',
    university: 'Asia Euro University',
    year: 4,
    email: 'sor.visal@gmail.com',
    phone: '0965793407',
    isActive: true
  };

  skills: string[] = [
    'C#',
    'ASP.NET',
    'PHP-Laravel',
    'Angular',
    'React',
    'TypeScript',
    'SQL Server',
    'DevOps Engineer'
  ];

  get fullName(): string {
    return `${this.student.firstName} ${this.student.lastName}`;
  }

  get studentStatus(): string {
    return this.student.isActive
      ? 'Active Student'
      : 'Inactive Student';
  }
}
