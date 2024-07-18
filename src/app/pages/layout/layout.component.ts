import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeModel } from '../../core/model/API.model';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  loggedData: EmployeeModel = new EmployeeModel();

  constructor() {
    const localData = localStorage.getItem('ticketData');
    if (localData != null) {
      this.loggedData = JSON.parse(localData);
    }
  }
}
