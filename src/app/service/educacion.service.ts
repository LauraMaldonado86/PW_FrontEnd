import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  /* URL: 'http://localhost:8088/' */

  URL = 'https://backend-7x8v.onrender.com/' + 'educacion/';

  constructor(private httpCliente: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpCliente.get<Educacion[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpCliente.get<Educacion>(this.URL + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpCliente.post<any>(this.URL + `create`, educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpCliente.put<any>(this.URL + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpCliente.delete<any>(this.URL + `delete/${id}`);
  }
}
