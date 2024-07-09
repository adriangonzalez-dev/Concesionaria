export class Auto {
    marca:string;
    modelo:string;
    precio:number;
    km: number;
    color: string;
    cuotas: number;
    anio: number;
    patente: string;
    vendido: boolean;

    constructor(
        marca:string,
        modelo:string,
        precio:number,
        km: number,
        color: string,
        cuotas: number,
        anio: number,
        patente: string,
        vendido: boolean
    ){
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
        this.km=km;
        this.color=color;
        this.cuotas=cuotas;
        this.anio=anio;
        this.patente=patente;
        this.vendido=vendido
    }
}
let autosSinDueños = [
    {
        marca: "Ford",
        modelo: "Fiesta",
        precio: 150000,
        km: 200,
        color: "Azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: false
    },
    {
        marca: "Toyota",
        modelo: "Corolla",
        precio: 100000,
        km: 0,
        color: "Blanco",
        cuotas: 14,
        anio: 2019,
        patente: "JJK116",
        vendido: false
    }
]

const autos:Auto[] = [];

autosSinDueños.forEach((auto)=>{
    autos.push(new Auto(auto.marca, auto.modelo, auto.precio, auto.km, auto.color, auto.cuotas, auto.anio, auto.patente, auto.vendido))
})

export {autos}


