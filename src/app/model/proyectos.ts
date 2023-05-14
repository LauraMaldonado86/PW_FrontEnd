export class Proyectos {
    id?: number;
    nombreP: string;
    periodoP: string;
    descripcionP: string;

    constructor(nombreP: string, periodoP: string, descripcionP: string) {
        this.nombreP = nombreP;
        this.periodoP = periodoP;
        this.descripcionP = descripcionP;
    }
}

