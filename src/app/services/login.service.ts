import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPatient } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:9595"

 public user:any;

  constructor(private http:HttpClient) { }


  // generateToken(credentials: { username: string; password: string; }){
  //   return this.http.post(`${this.url}/token`,credentials)
  // }

  login(login: LoginPatient){
    return this.http.post<any>(
      "http://localhost:8181/patient/login",login
    );
    }
    
    loginPatient: LoginPatient=new LoginPatient();
  // to log user in
  loginUser(email: String){


    localStorage.setItem("patientEmail",this.loginPatient.email)
    return email;

  }
  // to check that user is loged in or not
  isLoggedIn(){
    let local = localStorage.getItem('patientEmail');
    if(local==undefined || local=='' || local==null)
    {
      return false;
    }else{
      return true;
    }
  }
  // to log user out
  logout(){
    localStorage.removeItem('patientEmail');
    return true;
  }

  getEmail(){
    localStorage.getItem('patientEmail')
    
  }
}
