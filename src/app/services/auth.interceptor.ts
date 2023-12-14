import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor{
    
    constructor(){

    }

    intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        
        let newReq=req;
        let token=localStorage.getItem('token')

        console.log("INTERCEPTOR", token)

        if(token!=null){
            newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
        }

        return next.handle(newReq)
    }


}