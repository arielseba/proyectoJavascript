
    
let carritoA=JSON.parse(localStorage.getItem("carritoA"));
let prueba;
let totalCompraImporte=0;
console.log("que nos trae da la pagina anterior" , carritoA)
let contador=-1;
     
/*$(document).ready(function(){
    console.log("EL DOM ESTA LISTO");
});*/

            for(const elem of carritoA){
           
                $("#jqueryCarrito").append(`<tr><td id="${elem.id} "> ${elem.id}  </td>
                                <td> ${elem.descripcion}  </td>
                                <td> $ ${elem.precio} </td>
                                <td id="CantidadG${elem.id}">${elem.cantidadG}</td>
                                <td id="CantidadT${elem.id}"> $ ${elem.precio * elem.cantidadG} </td>
                                <td ><button class = "btn btn-success " id="botonAgregar${elem.id}"> + </button>
                                <button class = "btn btn-warning" id="botonQuitar${elem.id}"> - </button>
                                <button class = "btn btn-danger" id="botonEliminar${elem.id}"> x </button>   </td>
                                <td>${contador=contador+1}</td><tr>
                                <hr> 
                                `);
                
                               //funcion de agregar unidades de productos del carrito
                                $(`#botonAgregar${elem.id}`).on('click', function(){
                                    console.log(`Agregaste una unidad el producto:  ${elem.descripcion}`);
                                    elem.cantidadG=elem.cantidadG+1;
                                    console.log(elem);
                                   $(`#CantidadG${elem.id}`).html(elem.cantidadG);
                                   $(`#CantidadT${elem.id}`).html("$ "+ elem.cantidadG*elem.precio);
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
                                    localStorage.setItem("carritoA",JSON.stringify(carritoA));  
                                    }
                                })
                                //funcion de eliminar productos del carrito
                              /* $(`#botonEliminar${elem.id}`).on('click', function(){
                                  $(`#id${elem.id}`).remove();
                                  delete carritoA[elem.id];
                                    console.log(`Eliminaste el producto :  ${elem.descripcion}`);
                                    localStorage.setItem("carritoA",JSON.stringify(carritoA));
                                    for(const elemento of carritoA){
                                        if (elemento.id==`${elem.id}`){
                                            console.log("ustede quiere eliminar el producto: ", elemento.descripcion);
                                            carritoA.splice();
                               
                                        }
                                    }
                                       $("#j").fadeOut(3000);
                                })*/

              

            console.log("Contador: ", contador);
                }
             
            $("#jqueryCarrito").fadeIn(3000);
            $("#jqueryCarrito").slideDown("fast");

            $(".logo").animate({
                width: '150px',
                opacity: '1'},"slow", function(){console.log("animate")});
        
            $(".carritoAnimacion").css("color","green")
            .slideDown(2000)
            .delay(2000)
            .slideUp(2000);
            
            
            
         
    
            
          