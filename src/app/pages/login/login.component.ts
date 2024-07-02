import { Component } from '@angular/core';
import { APIResponse, LoginModel } from '../../core/model/API.model';
import { EmployeeService } from '../../core/services/employee.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginObj: LoginModel = new LoginModel();
  constructor(private empService: EmployeeService, private router: Router) {}

  onLogin() {
    // debugger;
    this.empService.login(this.loginObj).subscribe((res: APIResponse) => {
      if (res.result) {
        alert('Login Success');
        localStorage.setItem('ticketData', JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard');
      } else {
        alert(res.message);
      }
    });
  }
}
