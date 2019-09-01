import { Injectable } from '@angular/core';
import { API } from './../app.api' 
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private http: HttpClient) { }

  getPlans(id: string ): Observable<any> {
    return this.http.get<any>(`${API}/planos/${id}`)
  }
}
