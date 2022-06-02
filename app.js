let autos = require("./autos")

let personas = require("./personas")

const concesionaria = {
    /* completar */
   autos: autos,
   personas: personas,

   buscarAuto: function(patente){
      let autoEncontrado = this.autos.find(function(auto){
         return auto.patente == patente
      })
      return autoEncontrado ? autoEncontrado : null;
   },

   venderAuto: function(patente){
      let autoVendido = this.buscarAuto(patente)
      if(autoVendido){
         return autoVendido.vendido = true
      };
   },
   autosParaLaVenta: function(){
      let autosDisponibles = this.autos.filter(function(auto){
         return auto.vendido == false
      })
      return autosDisponibles
   },
   autosNuevos: function(){
      let autosDisponibles = this.autosParaLaVenta();
      let autos0 = autosDisponibles.filter(function(auto){
         return auto.km < 100
      })
      return autos0
   },
   listaDeVentas: function(){
      let sumaVendidos = []
      this.autos.forEach(function(auto){
         if(auto.vendido){
            sumaVendidos.push(auto.precio)
         }
      })
      return sumaVendidos
   },

   totalDeVentas: function(){
    let preciosVendidos = this.listaDeVentas()

    if(preciosVendidos.length == 0){
               return 0;
    } else{
          let gananciaTotal = preciosVendidos.reduce(function(acum, num){
       return acum + num
       })
       return gananciaTotal
           }
           
       },

       puedeComprar: function(persona, auto){
           let comprador = this.personas.find(function(elemento){
               return elemento.nombre == persona
           })

           let autoDeInteres = this.buscarAuto(auto)

           let montoCuotaComprador = comprador.capacidadDePagoEnCuotas / autoDeInteres.cuotas;
           let montoCuotaAuto = autoDeInteres.precio / autoDeInteres.cuotas;

           return comprador.capacidadDePagoTotal > autoDeInteres.precio && montoCuotaComprador > montoCuotaAuto;
       }
      

      
         
   }



   


console.log(concesionaria.puedeComprar("juan", "JJK116"))