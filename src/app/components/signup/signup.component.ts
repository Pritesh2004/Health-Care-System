import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  ngOnInit(): void {

  }

  public user = {
    firstName: '',
    lastName: '',
   
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    gender:'',

  };

  
  hide=true;

  constructor(private userService: UserService) {

  }


  // isStrongPassword(password: string): boolean {
  //   const minLength = 8;
  //   const uppercaseRegex = /[A-Z]/;
  //   const lowercaseRegex = /[a-z]/;
  //   const numberRegex = /[0-9]/;
  //   const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

  //   return (
  //     password.length >= minLength &&
  //     uppercaseRegex.test(password) &&
  //     lowercaseRegex.test(password) &&
  //     numberRegex.test(password) &&
  //     specialCharacterRegex.test(password)
  //   );
  // }

  // passwordValidator(control: NgForm): { [key: string]: any } | null {
  //   const password = control.value;

  //   if (!this.isStrongPassword(password)) {
  //     return { strongPassword: true };
  //   }

  //   return null;
  // }

  // passwordMismatch(control: AbstractControl): { [key: string]: boolean } | null {
  //   const password = control.get('password');
  //   const confirmPassword = control.get('confirmPassword');

  //   if (password && confirmPassword && password.value !== confirmPassword.value) {
  //     return { passwordMismatch: true };
  //   }

  //   return null;
  // }

  formSubmit(form: any) {
    if(this.user.password !==this.user.confirmPassword){
      alert("Passwords dont match")
    }
    else if (form.valid) {
      
      if (this.user.email == '' || this.user.email == null) {
        alert("email is required")
      }
      
      this.userService.addUser(this.user).subscribe(

        (data) => {
          console.log(data);
          Swal.fire({
            title:'Successfully Registered',
            icon:'success',
            showConfirmButton:true,
          confirmButtonText: '<a href="/login">Ok</a>'
          })
          
        },
        (error) => {
          console.log(error)
          
        }

      );
    }
  }
}

