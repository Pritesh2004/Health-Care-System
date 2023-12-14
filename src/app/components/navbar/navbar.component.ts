import { Component, HostListener, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public loggedIn = false

  navbarfixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 0) {
      console.log(window.scroll);
      this.navbarfixed = true;
    }
    else {
      this.navbarfixed = false;
    }
  }

  constructor(private loginService: LoginService, public dialog: MatDialog) {

  }
  openDialog() {

    this.dialog.open(DialogElementsExampleDialog);


  }

  ngOnInit(): void {

    this.loggedIn = this.loginService.isLoggedIn()

  }

  logoutUser() {
    this.loginService.logout()
    location.reload()
  }

}




@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})

export class DialogElementsExampleDialog implements OnInit {
 public  user: any

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    let email = localStorage.getItem('email')


    console.log(email)
    this.userService.getUser(email).subscribe(
      data => {
this.user=data
        console.log(data)
        console.log(this.user.email)
      },
      error => {
        console.log(error)
        
      }

    )
  }



}