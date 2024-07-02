export interface APIResponse {
  message: string;
  result: boolean;
  data: any;
}

export class Department {
  deptId: number;
  deptName: string;
  deptHeadEmpId: number;
  deptHeadName: string;
  createdDate: Date;
  constructor() {
    this.createdDate = new Date();
    this.deptId = 0;
    this.deptName = '';
    this.deptHeadEmpId = 0;
    this.deptHeadName = '';
  }
}

export class EmployeeModel {
  employeeId: number;
  employeeName: string;
  contactNo: string;
  emailId: string;
  deptId: number;
  password: string;
  deptName: string;
  gender: string;
  role: string;
  constructor() {
    this.emailId = '';
    this.contactNo = '';
    this.deptId = 0;
    this.employeeId = 0;
    this.deptName = '';
    this.employeeName = '';
    this.gender = '';
    this.password = '';
    this.role = '';
  }
}

export class LoginModel {
  password: string;
  emailId: string;
  constructor() {
    this.password = '';
    this.emailId = '';
  }
}
