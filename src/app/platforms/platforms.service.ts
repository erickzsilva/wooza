import { Injectable } from '@angular/core'
import { Platform } from './platform/platform.model'
import { PLATAFORMAS_API } from './../app.api'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class PlatformsService {

  constructor(private http: HttpClient) { }

  platform() : Observable<Platform[]> {
    return this.http.get<Platform[]>(`${PLATAFORMAS_API}`)

  }
}
