$(document).ready(function(){



let carritoA=JSON.parse(localStorage.getItem("carritoA"));
console.log("que nos trae da la pagina anterior" , carritoA)
total=0;

$("#jqueryCarrito").fadeIn(3000);
$("#jqueryCarrito").slideDown("fast");

$(".logo").animate({
    width: '150px',
    opacity: '1'},"slow");

/*$(document).ready(function(){
    console.log("EL DOM ESTA LISTO");
});*/

            for(const elem of carritoA){
           
                $("#jqueryCarrito").append(`<tr id="producto${elem.id}" style="font-weight:600"><td id="${elem.id} "> ${elem.id}  </td>
                                <td> ${elem.descripcion}  </td>
                                <td> $ ${elem.precio} </td>
                                <td id="CantidadG${elem.id}">${elem.cantidadG}</td>
                                <td id="CantidadT${elem.id}"> $ ${elem.precio * elem.cantidadG} </td>
                                <td ><button class = "btn btn-success " id="botonAgregar${elem.id}"> + </button>
                                <button class = "btn btn-warning" id="botonQuitar${elem.id}"> - </button>
                                <button class = "btn btn-danger" id="botonEliminar${elem.id}"> x </button>   </td>
                                ${total=total+(elem.cantidadG*elem.precio)}
                               <tr>
                                <hr> 
                                `);

                
                
                               //funcion de agregar unidades de productos del carrito
                                $(`#botonAgregar${elem.id}`).on('click', function(){
                                    console.log(`Agregaste una unidad el producto:  ${elem.descripcion}`);
                                    elem.cantidadG=elem.cantidadG+1;
                                    console.log(elem);
                                   $(`#CantidadG${elem.id}`).html(elem.cantidadG);
                                   $(`#CantidadT${elem.id}`).html("$ "+ elem.cantidadG*elem.precio);
                                   total=total+elem.precio;
                                   $(`#totalImporteChango`).html(` <h3 style="color:green ;text-align: center;">   <button class = "btn btn-secondary" id="vaciarCarrito" style="margin-right:40%">VaciarCarrito</button> Total Importe Carrito       $ ${total} </h3>                                
                                   </div>`);
                                   localStorage.setItem("carritoA",JSON.stringify(carritoA));
                                    

                                })
                        
                                 //funcion de quitar unidades de productos del carrito
                                $(`#botonQuitar${elem.id}`).on('click', function(){
                                    if(elem.cantidadG>1){
                                    console.log(`Quitaste una unidad el producto:  ${elem.descripcion}`);
                                    elem.cantidadG=elem.cantidadG-1;
                                    console.log(elem);
                                    $(`#CantidadG${elem.id}`).html(elem.cantidadG);
                                    $(`#CantidadT${elem.id}`).html("$ "+ elem.cantidadG*elem.precio);
                                    total=total-elem.precio;
                                    $(`#totalImporteChango`).html(` <h3 style="color:green ;text-align: center;">   <button class = "btn btn-secondary" id="vaciarCarrito" style="margin-right:40%">VaciarCarrito</button> Total Importe Carrito       $ ${total} </h3>                                
                                   </div>`);
                                    localStorage.setItem("carritoA",JSON.stringify(carritoA)); 
                                   
                                    }
                                })
                                //funcion de eliminar productos del carrito
                              $(`#botonEliminar${elem.id}`).on('click', function(){
                                  
                                    const busquedaId = carritoA.findIndex(elemento => {
                                    return elemento.id === elem.id;});
                                    //$(`#producto${elem.id`).slideDown(3000);
                                    $(`#producto${elem.id}`).remove();
                                    carritoA.splice(busquedaId,1);   
                                    total=total-(elem.precio*elem.cantidadG);                                
                                    $(`#totalImporteChango`).html(` <h3 style="color:green ;text-align: center;">   <button class = "btn btn-secondary" id="vaciarCarrito" style="margin-right:40%">VaciarCarrito</button> Total Importe Carrito       $ ${total} </h3>                                
                                    </div>`);  

                                    localStorage.setItem("carritoA",JSON.stringify(carritoA)); 
                                   
                                    }
                                     
                              )
                    
                           
                                

 
                }

            
                
                if(carritoA!=undefined){
                    $("#totalImporteChango").append(`<div>
                               <h3 style="color:green ;text-align: center;">   <button class = "btn btn-secondary" id="vaciarCarrito" style="margin-right:40%">VaciarCarrito</button> Total Importe Carrito       $ ${total} </h3>                                
                    </div>`)    }
               
                $("#vaciarCarrito").on("click", function(){                            
                    window.localStorage.removeItem("carritoA");});  
           
                });