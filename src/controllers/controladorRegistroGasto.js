//11/10/2024 INICIAMOS EN ESTA LINEA
import { gastosSimulados } from "./simuladorBD.js"
let gastos
console.log(gastos)
if (gastos == null) {
    gastos=gastosSimulados
    
}else{
    gastos=JSON.parse(sessionStorage.getItem("datos"))
}
//document.getElementById('botonRegistro').addEventListener('click', function (event) {
    //event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

//1. Crear variable para enlazar cada caja del formulario

let descripcionInput=document.getElementById("descripcion")
let montoInput=document.getElementById("monto")
let categoriaInput=document.getElementById("categoria")
let fechaInput=document.getElementById("fecha")
let botonRegistroGasto=document.getElementById("botonRegistro")




//2.Desencadenar la lógica del formulario
//2A. Lo primero es detectar que al formulario le hicieron clic en enviar

botonRegistroGasto.addEventListener("click",function(evento){
    evento.preventDefault()
    let gasto={
        id:Date.now(),
        descripcion:descripcionInput.value,
        monto:montoInput.value,
        fecha:fechaInput.value,
        categoria:categoriaInput.value,
        

    }
    //11/10/2024
    //Agregando el nuevo gasto al arreglo de gastos
    gastos.push(gasto)
    
    //como almacenar o guardar información utilizando la memoria del navegador
    sessionStorage.setItem("datos",JSON.stringify(gastos))


    Swal.fire({
        title: "Gasto registrado con exito",
        text: "Estamos para servirte",
        icon: "success"
    }).then(() =>{
        // Limpiar los valores del formulario
       descripcionInput.value = '';
       montoInput.value = '';
       fechaInput.value = '';
       categoriaInput.value = ''; // Si es un select, selecciona la opción por defecto
   
       // Enfocar el campo de descripción
       descripcionInput.focus(); 
         });     
})
