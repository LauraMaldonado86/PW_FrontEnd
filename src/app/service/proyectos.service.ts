import { Injectable } from '@angular/core';
import { Proyectos } from '../model/proyectos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  /* URL: 'http://localhost:8088/' */ 
  
  URL = 'https://backend-7x8v.onrender.com/' + 'proyectos/';

  constructor(private httpCliente: HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.httpCliente.get<Proyectos[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Proyectos>{
    return this.httpCliente.get<Proyectos>(this.URL + `detail/${id}`);
  }

  public save(proyectos: Proyectos): Observable<any>{
    return this.httpCliente.post<any>(this.URL + `create`, proyectos);
  }

  public update(id: number, proyectos: Proyectos): Observable<any>{
    return this.httpCliente.put<any>(this.URL + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any>{
    return this.httpCliente.delete<any>(this.URL + `delete/${id}`);
  }

}
