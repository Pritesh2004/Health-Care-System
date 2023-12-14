import { Component, OnInit } from '@angular/core';
import { LoginDoctorService } from 'src/app/services/login-doctor.service';

@Component({
  selector: 'app-doctor-navbar',
  templateUrl: './doctor-navbar.component.html',
  styleUrls: ['./doctor-navbar.component.css']
})
export class DoctorNavbarComponent implements OnInit{



  public loggedIn = false
 
  

  constructor(private service: LoginDoctorService) {

  }
  ngOnInit(): void {
    this.loggedIn = this.service.isDoctorLoggedIn()

  }

  logoutUser() {
    this.service.loggedOut()
    location.reload()
  }

 
 
}
