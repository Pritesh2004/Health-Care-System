import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {

  constructor(private http : HttpClient) { }

  helloFlask() {
    {

      return this.http.get('http://127.0.0.1:5000/hello');
    }
  }

  prediction(symptoms:any) {
    {
      return this.http.post('http://127.0.0.1:5000/predict',symptoms);
    }
  }
}
