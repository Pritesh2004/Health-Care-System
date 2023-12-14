import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDoctorService } from 'src/app/services/login-doctor.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

export class LoginDoctor {

  password: any;
  email: any;

}

export class LoginPatient {
  email: any;
  password: any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  constructor(private loginService: LoginService, private service: LoginDoctorService, private router: Router) { }
  
  doctor: LoginDoctor = new LoginDoctor();

  patient:LoginPatient =new LoginPatient();

  ngOnInit(): void {

   
  }
  // isLoggedIn(){
  //   let email = localStorage.getItem('email');
  //   if(email==undefined || email=='' || email==null)
  //   {
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }

  // local: LoginUser = new LoginUser();

  loginU() {

    this.service.login(this.doctor).subscribe(
      (data) => {
        console.log
       
          sessionStorage.setItem('email', this.doctor.email);
          sessionStorage.setItem('password', this.doctor.password);
          this.router.navigate(['/doctorDashboard']);
       
      },
      (error) => {
        Swal.fire({
          title:'Invalid Credentials',
          icon:'error',
          showConfirmButton:true,
        confirmButtonText: '<a href="/login">Ok</a>'
        })
        console.log(error)}
    );
  }
  onSubmitDoctor() {

    this.loginU();
    // this.resetForm();

  }

  onSubmit() {
    if ((this.patient.email != '' && this.patient.password != '') && (this.patient.email != null && this.patient.password != null)) {
      localStorage.setItem("email", this.patient.email)
      this.loginService.login(this.patient).subscribe(
        (response: any) => {
          console.log(response);

          this.loginService.loginUser(response.token)
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.log(error);
          Swal.fire({
            title:'Invalid Credentials',
            icon:'error',
            showConfirmButton:true,
          confirmButtonText: '<a href="/login">Ok</a>'
          })
        }

      )

    } else {
      console.log("Fields are empty")
    }
  }

}
