function suma1 (peso, petg){
    let resultado = (peso * petg);
    return  resultado;
 }
 function suma2 (peso, pla){
     let resultado = (peso * pla);
     return  resultado;
  }
 
 
 
 let bienvenido = prompt ("Hola, bienvenido/a a TRITECH LAB quieres obtener una cotizacion?")     
 
 while (bienvenido == "si" || bienvenido == "Si" || bienvenido == "SI") {
     let material = prompt ("elige un material PLA O PETG ingresalos con mayuscula porfavor")
     let peso = Number (prompt ("necesitamos que nos digas cual es el peso de la pieza que queres imprimir"))
     if (material== "PETG" && peso >0) {
         alert(suma1 (peso , 318));
     }
     else if (material =="PLA" && peso >0){
     alert (suma2 (peso,415));
 
     }
     break;
 }
 
 
   
     
 let color = prompt ("en que color te gustaria? \n\n 1-verde \n\n 2-amarillo \n\n 3-negro")
  if (color== 1 ){
     alert("tenemos en stock")
  }
  else if (color==2){
     alert("tenemos en stock")
  }
  else {
     alert ("ya no nos quedan")
  }
  
  let cantidad = prompt ("ya elegiste el color, ahora dinos la cantidad que deseas")
 
  if (cantidad <= 20 && color == 1){
     alert ("en breves nos pondremos en contacto contigo para una mejor atencion!")
  }
  else if ( cantidad <=10 && color ==2){
     alert ("en breves nos pondremos en contacto contigo para una mejor atencion!")
  }
  else  {
     alert("no tenemos en stock lo sentimos")
      
  }

 