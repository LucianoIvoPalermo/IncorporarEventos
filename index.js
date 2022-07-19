//Formulario
let formulario = document.getElementById("form")
console.log(formulario)

let inputNombre = document.getElementById("nombre")
console.log(inputNombre)

let buttonEnviar = document.getElementById("button")
buttonEnviar.onclick = () => {
    let inputNombre = document.getElementById("nombre").value
    let inputApellido = document.getElementById("apellido").value
    let inputEmpresa = document.getElementById("empresa").value
    let inputTelefono = document.getElementById("telefono").value
    let inputEmail = document.getElementById("email").value
    let inputComentario = document.getElementById("comentario").value

    let div2 = document.getElementById('div1')
    div2.innerHTML = `<h1>Muchas gracias ${inputNombre} ${inputApellido}!</h1>
                        <h2>Estaremos respondiendo tu consulta a tu correo ${inputEmail} dejandote la información para que ustedes ${inputEmpresa} puedan contactarnos. De no obtener respuesta les estaremos llamando al ${inputComentario}.`;


    console.log(inputNombre, inputApellido, inputEmpresa, inputTelefono, inputEmail, inputComentario);

}


//EN PROCESO
// Probar en el formulario (adaptar)

/* let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");    
}*/


//Calculo de horas a contratar

let botonHoras = document.getElementById("botonHoras")
.value

botonHoras.onclick = ()  => {
  let horasCant = document.getElementById("horasCant").value  
  horasCant.addEventListener(horasCant, () => {
    console.log("horasCant");
  }) 
}



//Test a desarrollar para tp final

/*let horasCant = document.getElementById("horasCant").value
let horasTotales = document.getElementById("horasTotales")
let botonTiposdeEvento = document.getElementById("botonTiposdeEvento")
let botonTotal = document.getElementById()
let resetear = document.getElementById("resetear")


horasTotales.onclick = () => {
    console.log(horasCant)
  }
botonTiposdeEvento.forEach(botonTiposdeEvento => {
  botonTiposdeEvento.onclick = () =>{
    console.log("algo")
    calcularValores
  }
  
});

function calcularValores() {
  let horasCant
  if (horasTotales) {
    horasCant = horasTotales
  } else {

  }

}
*/




//Estructura vieja


/*class Contratacion {
    constructor(id, descripcion, valor) {
        this.id = id;
        this.descripcion = descripcion;
        this.valor = valor;
    }
  }
  const horaFiesta = new Contratacion("1","1 hora de show en fiesta privada", 10000);
  const horaCasamiento = new Contratacion("2","1 hora de show en casamiento", 15000);
  const horaCumple = new Contratacion("3","1 hora de show en cumpleaños", 12000);
  const horaExtra = new Contratacion("4","1 hora extra de show por pedido especial", 30000);
  const horaSociales = new Contratacion("5","1 hora de presencia sin show", 40000);
  
  let gastoTotal = 0;
  
  const sumarHoras = (horas) => (gastoTotal += horas);
  
  function comprar() {
    let continuar = true;
    alert("Usted está en la página oficial de Babasónicos! Determine la cantidad de horas y el tipo de evento al que desea contratar a la banda.");
  
    while (continuar) {
      let horas = prompt(`
      Ingrese el numero de la izquierda para contratar las horas deseadas.
      
      Detalle de horas:
      ${horaFiesta.id} - ${horaFiesta.descripcion} $${horaFiesta.valor}
      ${horaCasamiento.id} - ${horaCasamiento.descripcion} $${horaCasamiento.valor}
      ${horaCumple.id} - ${horaCumple.descripcion} $${horaCumple.valor}
      ${horaExtra.id} - ${horaExtra.descripcion} $${horaExtra.valor}
      ${horaSociales.id} - ${horaSociales.descripcion} $${horaSociales.valor}
      6 - Salir
      
      Gastaste: $${gastoTotal}.
      `);
  
      switch (horas) {
        case "1":
          sumarHoras(horaFiesta.valor);
          break;
        case "2":
          sumarHoras(horaCasamiento.valor);
          break;
        case "3":
          sumarHoras(horaCumple.valor);
          break;
        case "4":
          sumarHoras(horaExtra.valor);
          break;
        case "5":
          sumarHoras(horaSociales.valor);
          break;
        case "6":
          continuar = false;
          break;
        default:
          alert("El valor ingresado no es válido.");
          break;
      }
      if (horas != "6") continuar = confirm("Desea seguir acordando horarios?");
    }
  
    alert(`El total del show es $${gastoTotal}.`);
  }
  
  comprar();
  console.log(gastoTotal)*/