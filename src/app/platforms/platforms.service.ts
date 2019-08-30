import { Injectable } from '@angular/core'
import { Platform } from './platform/platform.model'
import { API } from './../app.api'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class PlatformsService {

  constructor(private http: HttpClient) { }

  platform(): Observable<any> {
    return this.http.get<any>(`${API}/plataformas`);

  }
}
