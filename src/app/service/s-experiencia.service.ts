import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

  /* URL: 'http://localhost:8088/' */ 
  
  URL = 'https://backend-7x8v.onrender.com/' + 'explab/';

  constructor(private httpCliente: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpCliente.get<Experiencia[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpCliente.get<Experiencia>(this.URL + `detail/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpCliente.post<any>(this.URL + `create`, experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpCliente.put<any>(this.URL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpCliente.delete<any>(this.URL + `delete/${id}`);
  }
}
