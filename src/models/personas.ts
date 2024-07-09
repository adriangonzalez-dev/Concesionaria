let personas = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }

    module.exports = personas

class Persona {
    nombre:string;
    capacidadDePagoEnCuotas:number;
    capacidadDePagoTotal:number;

    constructor(
        nombre:string,
        capacidadDePagoEnCuotas:number,
        capacidadDePagoTotal:number
    ){
        this.nombre=nombre;
        this.capacidadDePagoEnCuotas=capacidadDePagoEnCuotas;
        this.capacidadDePagoTotal=capacidadDePagoTotal;
    }
}