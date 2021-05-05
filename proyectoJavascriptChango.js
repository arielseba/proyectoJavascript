let carritoA=JSON.parse(localStorage.getItem("carritoA"));


total=0;

//OBTENGO LA COTIZACION DEL DOLAR A TRAVES DE UNA API
let dolar=0;
let url = "https://mercados.ambito.com/dolar/oficial/variacion";
const api=new XMLHttpRequest();
api.open("GET",url,true);
api.send();
api.onreadystatechange=function(){
  if(this.status == 200 && this.readyState==4){
  let datos=JSON.parse(this.responseText);

 dolar=parseInt(datos.compra);


  }
}
function vaciarCarrito(){
  $("#vaciarCarrito").on("click", function(){    
   
    $("#tabla").slideUp("slow",function(){    
    $(`#tabla`).remove();
    $("#precioDolar").remove();  
    $(`#totalImporteChango`).remove();
    $("#carroVacio").append(`<div>
    <h3 style="color:white ;text-align: center;">Por el momento usted no ha seleccionado ningun producto de nuestra tienda </h3>                                
    </div>`)    
    $(`#totalImporteChango`).html(` <h3 style="color:green ;text-align: center;">   <button class = "btn btn-secondary" id="vaciarCarrito" style="margin-right:40%">VaciarCarrito</button> Total Importe Carrito       $ ${total} </h3>                                
    </div>`);   
    window.localStorage.removeItem("carritoA"); 
                                      
   });  

});}

function finalizarCompra(){
  $("#finalizarCompra").on("click", function(){    
    
  
    swal({
      title: "Importe a abonar",
      text: "En ARS: \t\t\t\t\t\t$" + (total*dolar).toFixed(2) + "\n" + "En USD: $" + total,
      icon: "success",
      buttons: true,
      success: true,
      
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Muchas gracias por su compra","A continuacion le pediremos algunos datos para concluir la compra.","success", {
          
          
        });
        $("#tabla").fadeOut("500",function(){    
      
        })
        $("#totalImporteChango").fadeOut("5000",function(){    
    
        })
        $("#precioDolar").remove(); 
    $("#formularioCompra").append(`  <form  class="form row g-3" style="margin-bottom:9%;" >
    <div class="col-md-6 " >
      <label for="inputNombre" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="inputNombre" placeholder="Ingrese su nombre">
    </div>
    <div class="col-md-6">
      <label for="inputApellido" class="form-label">Apellido</label>
      <input type="text" class="form-control" id="inputApellido" placeholder="Ingrese su apellido">
    </div>
    <div class="col-12">
      <label for="inputDireccion" class="form-label">Direccion</label>
      <input type="text" class="form-control" id="inputDireccion" placeholder="Ingrese su direccion" >
    </div>
    <div class="col-12">
      <label for="inputTelefono" class="form-label">Telefono</label>
      <input type="text" class="form-control" id="inputTelefono" placeholder="Ingrese su telefono" >
    </div>
    <div class="col-md-6">
      <label for="inputCiudad" class="form-label">Ciudad</label>
      <input type="text" class="form-control" id="inputCiudad" placeholder="Ingrese su ciudad">
    </div>
    <div class="col-md-4">
      <label for="inputProvincia" class="form-label">Provincia</label>
      <select id="inputProvincia" class="form-select">
        <option selected>Elegir...</option>
        <option>Buenos Aires</option>
        <option>Cordoba</option>
        <option>Mendoza</option>
        <option>Neuquen</option>
        <option>Rio Negro</option>
        <option>Santa Cruz</option>
        <option>Misiones</option>
        <option>Entre Rios</option>
        <option>Misiones</option>
      </select>
    </div>
   

    <div class="col-12">
      <button id="enviar" type="submit" class="btn btn-primary" style="margin:  10% 0px 10% 40%; background-color:yellow; color:black;">Enviar</button>
    </div>
  </form>`)    } 
    });


      });  
  

    };
    
$(document).ready(function(){

    
  
$("#jqueryCarrito").fadeIn(3000);
$("#jqueryCarrito").slideDown("fast");

$(".logo").animate({
    width: 'auto',
    opacity: '1'},"slow");
    


if(carritoA==undefined){
$("#carroVacio").append(`<div>
<h3 style="margin-right:auto;margin-left:auto;color:white ;text-align: center;">Por el momento usted no ha seleccionado ningun producto de nuestra tienda </h3>                                
</div>`)


}
                  

if(carritoA!=undefined){

   $("#precioDolar").append(`<h4 style> Precio dolar hoy: $ ${dolar}  </h4>`)
    $("#tabla").append(`<tr  style="color:yellow; font-size:150%; "> <td>${"id"}</td>
                             <td>${"Producto"}</td>
                             <td>${"Importe"}</td>
                             <td></td>
                             <td>${"Cantidad"}</td>
                             <td></td>
                             <td>${"Importe Total"}</td>
                             <td>${"Eliminar"}</td>
                        
                          `)

            for(const elem of carritoA){
           
                $("#tabla").append(`<tr style="color:white;margin-top:20%" id="producto${elem.id}" style="font-weight:700">
                                <td id="${elem.id} "> ${elem.id}  </td>
                                <td> ${elem.descripcion}  </td>
                                <td style="width: 20%"> $ ${elem.precio} </td>
                                <td><button style=" padding:1%; margin-right:15%" id="botonAgregar${elem.id}"> + </button></td>
                                <td id="CantidadG${elem.id}"> ${elem.cantidadG} </td>
                                <td><button style=" padding:1%; margin-left:15%"  id="botonQuitar${elem.id}"> - </button></td>
                                <td id="CantidadT${elem.id}"> $ ${elem.precio * elem.cantidadG} </td>
                                <td><button class = "btn-xs btn-danger" id="botonEliminar${elem.id}"> x </button>   </td>
                                ${total=total+(elem.cantidadG*elem.precio)}
                               
                                
                                `);

                
                
                               //funcion de agregar unidades de productos del carrito
                                $(`#botonAgregar${elem.id}`).on('click', function(){
                                   elem.cantidadG=elem.cantidadG+1;
                                   $(`#CantidadG${elem.id}`).html(elem.cantidadG);
                                   $(`#CantidadT${elem.id}`).html("$ "+ (elem.cantidadG*elem.precio).toFixed(2));
                                   total=total+elem.precio;
                                   $(`#totalImporteChango`).html(`
                                   <button class="btn btn-secondary" id="vaciarCarrito">    VaciarCarrito  </button><h3 id="importe" style="color:white"; font-size:100px">Total Compra  $ ${total.toFixed(2)}</h3><button class = "btn btn-success" id="finalizarCompra" style="margin-right:40%">Finalizar Compra</button> 
                                    `) 
                                   localStorage.setItem("carritoA",JSON.stringify(carritoA));
                                   
                                  vaciarCarrito();
                                  finalizarCompra(); 

                                })
                        
                                 //funcion de quitar unidades de productos del carrito
                                $(`#botonQuitar${elem.id}`).on('click', function(){
                                    if(elem.cantidadG>1){
                                    elem.cantidadG=elem.cantidadG-1;
                                    $(`#CantidadG${elem.id}`).html(elem.cantidadG);
                                    $(`#CantidadT${elem.id}`).html("$ "+ (elem.cantidadG*elem.precio).toFixed(2));
                                    total=total-elem.precio;
                                    $(`#totalImporteChango`).html(`
                                    <button class="btn btn-secondary" id="vaciarCarrito">    VaciarCarrito  </button><h3 id="importe" style="color:white"; font-size:100px">Total Compra  $ ${total.toFixed(2)}</h3><button class = "btn btn-success" id="finalizarCompra" style="margin-right:40%">Finalizar Compra</button> 
                                     `) 
                                    localStorage.setItem("carritoA",JSON.stringify(carritoA)); 
                                    vaciarCarrito();
                                    finalizarCompra(); 
                                    }
                                })
                                //funcion de eliminar productos del carrito
                              $(`#botonEliminar${elem.id}`).on('click', function(){
                                  
                                    const busquedaId = carritoA.findIndex(elemento => {
                                    return elemento.id === elem.id;});
                                    $(`#producto${elem.id}`).fadeOut(1000,function(){
                                    $(`#producto${elem.id}`).remove();
                                    carritoA.splice(busquedaId,1);   
                                    total=total-(elem.precio*elem.cantidadG);                                
                                    $(`#totalImporteChango`).html(`
                                    <button class="btn btn-secondary" id="vaciarCarrito">    VaciarCarrito  </button><h3 id="importe" class="importeCompra" style="color:white"; font-size:100px">Total Compra  $ ${total.toFixed(2)}</h3><button class = "btn btn-success" id="finalizarCompra" style="margin-right:40%">Finalizar Compra</button> 
                                     `) 
                                    if(total===0){
                                        $(`#totalImporteChango`).remove();
                                        $("#carroVacio").append(`<div>
                                        <h3 style="color:white ;text-align: center;">Por el momento usted no ha seleccionado ningun producto de nuestra tienda </h3>                                
                                        </div>`)}
                                    localStorage.setItem("carritoA",JSON.stringify(carritoA)); 
                    
                                    vaciarCarrito();
                                    finalizarCompra(); 
                              
                                });
                                
                                    }
                                     
                              )

                          
                }
                $(`#totalImporteChango`).html(`
                <button class="btn btn-secondary" id="vaciarCarrito">    VaciarCarrito  </button><h3 id="importe" style="color:white"; font-size:100px">Total Compra  $ ${total.toFixed(2)}</h3><button class = "btn btn-success" id="finalizarCompra" style="margin-right:40%">Finalizar Compra</button> 
                 `) 

              }
        
             
    
            vaciarCarrito();
            finalizarCompra();  
         
    }
  
    
  
    
    );
   

    $(`#enviar`).on('click', function(){
      
      swal({
        title: "Muchas gracias!",
        text: "Este desarrollo esta en modo test para un Proyecto para CoderHouse",
        icon: "success",
        button: "Confirmar!",
      })
    
        $(`#tabla`).remove();
        $("#precioDolar").remove();  
        $(`#totalImporteChango`).remove();
        $("#carroVacio").append(`<div>
        <h3 style="color:white ;text-align: center;">Por el momento usted no ha seleccionado ningun producto de nuestra tienda </h3>                                
        </div>`)    
        $(`#totalImporteChango`).html(` <h3  style="color:green ;text-align: center;">   <button class = "btn btn-secondary" id="vaciarCarrito" style="margin-right:40%">VaciarCarrito</button> Total Importe Carrito       $ ${total} </h3>                                
        </div>`);   
        window.localStorage.removeItem("carritoA"); 
        alert("se cumple la funcion de enviar ")
   })
        