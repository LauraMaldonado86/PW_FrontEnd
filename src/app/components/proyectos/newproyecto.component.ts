import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreP: string;
  periodoP: any;
  descripcionP: string;
  
  constructor(private proyectosS: ProyectosService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void{
    const proyectos = new Proyectos(this.nombreP, this.periodoP, this.descripcionP);
    this.proyectosS.save(proyectos).subscribe(
      data =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
