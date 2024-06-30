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
