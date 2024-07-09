import { Auto } from "./models/autos"


class concesionaria {
    /* completar */
   autos: Auto[];
   constructor(autos:Auto[]){
    this.autos = autos
   }

   buscarAuto(patente:string){
      let autoEncontrado = this.autos.find((auto:Auto)=> auto.patente == patente)
      return autoEncontrado ? autoEncontrado : null;
   }

   venderAuto(patente:string){
      let autoVendido = this.buscarAuto(patente)
      if(autoVendido){
         return autoVendido.vendido = true
      }
   }
   autosParaLaVenta(){
      let autosDisponibles = this.autos.filter((auto:Auto)=> auto.vendido == false)
      return autosDisponibles
   }
   autosNuevos(){
      let autosDisponibles = this.autosParaLaVenta().filter((auto:Auto)=>auto.km < 100);
      return autosDisponibles
   }

   listaDeVentas(){
      let vendidos = this.autos.filter((auto:Auto)=>auto.vendido === true)
      return vendidos
   }

   totalDeVentas(){
    let preciosVendidos = this.listaDeVentas()

    if(preciosVendidos.length == 0){
            return 0;
        } 
    
    let gananciaTotal = preciosVendidos.map((auto:Auto)=>auto.precio).reduce((acum, num)=>{
        return acum + num
       })
    return gananciaTotal

    }

    puedeComprar(persona:Persona, patente:string){

           let autoDeInteres = this.buscarAuto(patente)
            if(!autoDeInteres){
                return;
            }
           let montoCuotaComprador = persona.capacidadDePagoEnCuotas / autoDeInteres.cuotas;
           let montoCuotaAuto = autoDeInteres.precio / autoDeInteres.cuotas;

           return persona.capacidadDePagoTotal > autoDeInteres.precio && montoCuotaComprador > montoCuotaAuto;
       }
   }