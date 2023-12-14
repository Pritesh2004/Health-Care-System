import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private userService:UserService){}
  public userDetails: any

  ngOnInit(): void {
    let email = localStorage.getItem('email')
    console.log(email)
    this.userService.getUser(email).subscribe(
      data => {

        this.userDetails = data
        localStorage.setItem('email',this.userDetails.email)
        localStorage.setItem('firstName',this.userDetails.firstName)
        localStorage.setItem('lastName',this.userDetails.lastName)
        localStorage.setItem('gender',this.userDetails.gender)


        console.log(data)
        console.log(this.userDetails.email)
      },
      error => {
        console.log(error)

      }

    )
  }

}
