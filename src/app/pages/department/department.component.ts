import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../core/services/department.service';
import { APIResponse, Department } from '../../core/model/API.model';
import { CommonModule } from '@angular/common';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule, CommonModule, NaPipe],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss',
})
export class DepartmentComponent {
  departmentList: Department[] = [];
  constructor(private deptService: DepartmentService) {}

  ngOnInit(): void {
    this.loadDepartment();
  }

  loadDepartment() {
    this.deptService.getAllDept().subscribe((res: Department[]) => {
      this.departmentList = res;
      console.log(res);
    });
  }
}
