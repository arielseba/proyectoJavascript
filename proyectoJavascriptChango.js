//VARIABLE DONDE SE GUARDA LO QUE HAY EN EL LOCAL STORAGE
let carritoA=JSON.parse(localStorage.getItem("carritoA"));
//VARIABLE DONDE SE GUARDA EL TOTAL DEL IMPORTE DE LA COMPRA
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
//SE AGREGA EVENTO SOLAMENTE CON UN ALERT AL FORMULARIO
$("#enviar").on("click", function(){  
alert("El formulario esta en modo test para un proyecto de CoderHouse");
 })
//FUNCION ENCARGADA DE VACIAR EL CARRITO DE COMPRAS
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


//FUNCION ENCARGADA DE FINALIZAR LA COMPRA DEL USUARIO Y AGREGAR UN FORMULARIO DE CONTACTO
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
        swal({
          title: "Muchas gracias!",
          text: "Este desarrollo esta en modo test para un Proyecto para CoderHouse",
          icon: "success",
          button: "Confirmar!",
        })
          $(`#tabla`).remove();
          $("#precioDolar").remove();  
          $(`#totalImporteChango`).remove();
          $(`#totalImporteChango`).html(` <h3  style="color:green ;text-align: center;">   <button class = "btn btn-secondary" id="vaciarCarrito" style="margin-right:40%">VaciarCarrito</button> Total Importe Carrito$ ${total} </h3>                                
          </div>`);  
           window.localStorage.removeItem("carritoA"); 
        $("#tabla").fadeOut("500",function(){    
      
        })
        $("#totalImporteChango").fadeOut("5000",function(){    
    
        })
        $("#precioDolar").remove(); 
        location.reload();
    } 
    });
      });  
};
    
$(document).ready(function(){

$("#jqueryCarrito").fadeIn(3000);
$("#jqueryCarrito").slideDown("fast");
//SE AGREGA ANIMACION AL LOGO DE LA PAGINA
$(".logo").animate({
    width: 'auto',
    opacity: '1'},"slow");
    

//SI EL CARRITO ESTA VACIO AGREGA UN DIV CON UNA LEYENDA
if(carritoA==undefined){
$("#carroVacio").append(`<div>
<h3 style="margin-right:auto;margin-left:auto;color:white ;text-align: center;">Por el momento usted no ha seleccionado ningun producto de nuestra tienda </h3>                                
</div>`)
}

//SI EL CARRITO NO ESTA VACIO AGREGA UN DIV CON UNA LOS PRODUCTOS Y SUS RESPECTIVOS DATOS                  
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
                                <td><button id="botonAgregar${elem.id}"> + </button></td>
                                <td id="CantidadG${elem.id}"> ${elem.cantidadG} </td>
                                <td><button id="botonQuitar${elem.id}"> - </button></td>
                                <td id="CantidadT${elem.id}"> $ ${elem.precio * elem.cantidadG} </td>
                                <td><button class = "btn-xs btn-danger" id="botonEliminar${elem.id}"> x </button>   </td>
                                ${total=total+(elem.cantidadG*elem.precio)}
                                `);

                
                                //FUNCION DE AGREGAR UNIDADES DE PRODUCTOS DEL CARRITO
                                   $(`#botonAgregar${elem.id}`).on('click', function(){
                                   elem.cantidadG=elem.cantidadG+1;
                                   $(`#CantidadG${elem.id}`).html(elem.cantidadG);
                                   $(`#CantidadT${elem.id}`).html("$ "+ (elem.cantidadG*elem.precio).toFixed(2));
                                   total=total+elem.precio;
                                   $(`#totalImporteChango`).html(`
                                   <button class="btn btn-secondary" id="vaciarCarrito" style="margin-left:25%">    VaciarCarrito  </button><h3 id="importe" style="color:white"; font-size:100px">Total Compra  $ ${total.toFixed(2)}</h3><button class = "btn btn-success" id="finalizarCompra" style="margin-right: 25%">Finalizar Compra</button> 
                                    `) 
                                   localStorage.setItem("carritoA",JSON.stringify(carritoA));
                                   
                                  vaciarCarrito();
                                  finalizarCompra(); 

                                })
                                //FUNCION DE QUITAR UNIDADES DE PRODUCTOS DEL CARRITO
                                    $(`#botonQuitar${elem.id}`).on('click', function(){
                                    if(elem.cantidadG>1){
                                    elem.cantidadG=elem.cantidadG-1;
                                    $(`#CantidadG${elem.id}`).html(elem.cantidadG);
                                    $(`#CantidadT${elem.id}`).html("$ "+ (elem.cantidadG*elem.precio).toFixed(2));
                                    total=total-elem.precio;
                                    $(`#totalImporteChango`).html(`
                                    <button class="btn btn-secondary" id="vaciarCarrito" style="margin-left:25%">    VaciarCarrito  </button><h3 id="importe" style="color:white"; font-size:100px">Total Compra  $ ${total.toFixed(2)}</h3><button class = "btn btn-success" id="finalizarCompra" style="margin-right: 25%">Finalizar Compra</button> 
                                     `) 
                                    localStorage.setItem("carritoA",JSON.stringify(carritoA)); 
                                    vaciarCarrito();
                                    finalizarCompra(); 
                                    }
                                })
                              
                                //FUNCION DE ELIMINAR PRODUCTOS DEL CARRITO  
                                    $(`#botonEliminar${elem.id}`).on('click', function(){
                                    const busquedaId = carritoA.findIndex(elemento => {
                                    return elemento.id === elem.id;});
                                    $(`#producto${elem.id}`).fadeOut(1000,function(){
                                    $(`#producto${elem.id}`).remove();
                                    carritoA.splice(busquedaId,1);   
                                    total=total-(elem.precio*elem.cantidadG);                                
                                    $(`#totalImporteChango`).html(`
                                    <button class="btn btn-secondary" id="vaciarCarrito" style="margin-left:25%">    VaciarCarrito  </button><h3 id="importe" class="importeCompra" style="color:white"; font-size:100px">Total Compra  $ ${total.toFixed(2)}</h3><button class = "btn btn-success" id="finalizarCompra" style="margin-right: 25%">Finalizar Compra</button> 
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
                //SE AGREGAN LOS BOTONES DE "VACIAR CARRITO" Y "FINALIZAR COMPRA", TAMBIEN SE AGREGA EL TOTAL DE CARRITO.
                $(`#totalImporteChango`).html(`
                <button class="btn btn-secondary" id="vaciarCarrito" style="margin-left:25%">VaciarCarrito  </button><h3 id="importe" style="color:white"; font-size:100px">Total Compra  $ ${total.toFixed(2)}</h3><button class = "btn btn-success" id="finalizarCompra" style="margin-right: 25%">Finalizar Compra</button> 
                 `) 
                }
            //SE LLAMA A LA FUNCION VACIAR CARRITO
            vaciarCarrito();
            //SE LLAMA A LA FUNCION FINALIZAR COMPRA
            finalizarCompra();  
            
           }
           
           );
   
    