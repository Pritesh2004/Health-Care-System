import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  public query={
    email : '',
    queries:''
  }

  constructor(private userService: UserService){}


  addQueries(){

    this.userService.postQuery(this.query).subscribe(

      (data) => {
        console.log(data);
        Swal.fire({
          title:'Query posted Successfully ',
          text:'Check your email for your answer',
          icon:'success',
          showConfirmButton:true,
        confirmButtonText: '<a href="/">Ok</a>'
        })
        
      },
      (error) => {
        console.log(error)
        
      }

    )

  }
}
