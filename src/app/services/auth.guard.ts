import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { LoginDoctorService } from './login-doctor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router, private service:LoginDoctorService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
   
      if (this.loginService.isLoggedIn() || this.service.isDoctorLoggedIn()) {
        return true;
      
      } else {
        this.router.navigate(['login']);
        return false;
      }
      

 
  }  
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     if(this.service.isDoctorLoggedIn()){
  //       return true;
  //     }else{
  //       this.router.navigate(['doctorLogin'])
  //       return false
  //     }

 
  // } 
}
