//FUNCION QUE MUESTRA UN ALERT PERSONALIZADO AL AGREGAR UN PRODUCTO AL CARRO
function mostrar(){
    swal("Muchas gracias","El producto fue agregado exitosamente","success") ;
}


            

//ANIMACION DEL LOGO DE LA EMPRESA
$(".logo").animate({
    width: '150px',
    opacity: '1'},"slow", );

//Declaramos la url del archivo JSON local
const URLJSON = "productos.json"
//INTRODUCIMOS LOS PRODUCTOS AL DIV A TRAVES DEL ARCHIVO JSON
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $(".cargaProductos").append(` <div  class="card">
                                <img  class="imgcard" src="${dato.img}" alt="">
                                <strong><p >${dato.descripcion} </p>
                                <p>$ ${dato.precio}</p></strong>
                                <button id="${dato.id}" style="height: auto; margin-bottom: 10px;" class="btn btn-warning">Agregar</button>
                                </div>`)  }
//DECLARACION DE VARIABLES
let totalImporte=0;
let totalDescripciones="";
let contadorCarrito=0;
let producto=[ "Gorras Lisas" , "Gorras Disney","Gorras Super Campeones" , "Gorras de Clubes" ];
let cantidad=0;
let productosSeleccionados=[];
let carritoA=[];
let verificador=0;  

class gorrasLisas {
    constructor(id,descripcion, precio, cantidadG){
    this.id=id;
    this.descripcion=descripcion;
    this.precio=precio;
    this.cantidadG=cantidadG;}
 
}

class carrito{
    constructor(descripcionCarrito,precioCarrito,cantidadCarrito){this.descripcionCarrito=descripcionCarrito;
        this.precioCarrito=precioCarrito;
        this.cantidadCarrito=cantidadCarrito;
        }
    }

//Declaracion de las gorras lisas
let gorraNegra=new gorrasLisas ( 1, "Gorra Lisa Negra" ,  14.99,  0); 
let gorraBeige=new gorrasLisas ( 2, "Gorra Lisa Beige" ,  15.99,  0); 
let gorraAzulM=new gorrasLisas ( 3,"Gorra Lisa Azul Marino" ,  14.99,0); 
let gorraAzulC=new gorrasLisas ( 4,"Gorra Lisa Azul Clasico" ,  10.99,0); 
//Declaracion de las gorras de Disney
let gorraMickeyRosa=new gorrasLisas ( 5, "Gorra Mickey Rosa" ,  18.99,  0); 
let gorraMickeyNegra=new gorrasLisas (6, "Gorra Mickey Negra" ,  18.99, 0);
let gorraMinnieNegra=new gorrasLisas ( 7,"Gorra Minnie Negra" ,  16.99,  0);
let gorraDonald=new gorrasLisas   (8, "Gorra Pato Donald Combinada" ,  18.99,0);
let gorraMickeyRoja=new gorrasLisas (9, "Gorra Mickey Roja" ,  19.99,  0); 
let gorraPluto=new gorrasLisas (10, "Gorra Pluto Clasica" ,  15.99,  0); 
//Declaracion de las gorras de los supercampeones
let gorraAzul=new gorrasLisas ( 11,"Gorra Super Campeones Azul" ,  10.99,  0); 
let gorraAzulR=new gorrasLisas ( 12,"Gorra Super Campeones Azul c/Rojo" ,  10.99, 0); 
let gorraAzulB=new gorrasLisas ( 13,"Gorra Super Campeones Azul c/Blanco" ,  11.99, 0); 
let gorraNegraC=new gorrasLisas ( 14,"Gorra Super Campeones Negra" ,  12.99,  0); 
let gorraNegraE=new gorrasLisas ( 15,"Gorra Super Campeones Negra Estampada" ,  14.99,  0); 
let gorraNegraD=new gorrasLisas ( 16,"Gorra Super Campeones Negra c/Dorada" ,  14.99,  0); 
//Declaracion de las gorras de Futbol
let gorraIndependiente=new gorrasLisas (17, "Gorra Independiente " ,  9.99,  0); 
let gorraBoca=new  gorrasLisas( 18,"Gorra Boca " ,  4.99,  0); 
let gorraRiver=new gorrasLisas ( 19,"Gorra River " ,  20.99, 0); 
let gorraRacing=new gorrasLisas ( 20,"Gorra Racing " ,  10.99,0);
//DECLARACION DE ARRAY CON TODOS LOS PRODUCTOS
let totalProductos=[gorraNegra,gorraBeige,gorraAzulM,gorraAzulC,gorraMickeyRosa,gorraMickeyNegra,gorraMinnieNegra,gorraDonald,gorraMickeyRoja,gorraPluto,
 gorraAzul,gorraAzulR,gorraAzulB,gorraNegraC,gorraNegraE,gorraNegraD,gorraIndependiente,gorraBoca,gorraRiver,gorraRacing];
 

//SE AGREGAN EVENTOS AL HACER CLICK 
let agregar=document.getElementById("1");
agregar.addEventListener("click",()=>{productoAgregado(1)});
agregar=document.getElementById("2");
agregar.addEventListener("click",()=>{productoAgregado(2)});
agregar=document.getElementById("3");
agregar.addEventListener("click",()=>{productoAgregado(3)});
agregar=document.getElementById("4");
agregar.addEventListener("click",()=>{productoAgregado(4)});
agregar=document.getElementById("5");
agregar.addEventListener("click",()=>{productoAgregado(5)});
agregar=document.getElementById("6");
agregar.addEventListener("click",()=>{productoAgregado(6)});
agregar=document.getElementById("7");
agregar.addEventListener("click",()=>{productoAgregado(7)});
agregar=document.getElementById("8");
agregar.addEventListener("click",()=>{productoAgregado(8)});
agregar=document.getElementById("9");
agregar.addEventListener("click",()=>{productoAgregado(9)});
agregar=document.getElementById("10");
agregar.addEventListener("click",()=>{productoAgregado(10)});
agregar=document.getElementById("11");
agregar.addEventListener("click",()=>{productoAgregado(11)});
agregar=document.getElementById("12");
agregar.addEventListener("click",()=>{productoAgregado(12)});
agregar=document.getElementById("13");
agregar.addEventListener("click",()=>{productoAgregado(13)});
agregar=document.getElementById("14");
agregar.addEventListener("click",()=>{productoAgregado(14)});
agregar=document.getElementById("15");
agregar.addEventListener("click",()=>{productoAgregado(15)});
agregar=document.getElementById("16");
agregar.addEventListener("click",()=>{productoAgregado(16)});
agregar=document.getElementById("17");
agregar.addEventListener("click",()=>{productoAgregado(17)});
agregar=document.getElementById("18");
agregar.addEventListener("click",()=>{productoAgregado(18)});
agregar=document.getElementById("19");
agregar.addEventListener("click",()=>{productoAgregado(19)});
agregar=document.getElementById("20");
agregar.addEventListener("click",()=>{productoAgregado(20)});
          
 

//FUNCION QUE AGREGA PRODUCTOS AL CARRITO DE COMPRAS
function productoAgregado(id){
    //SI EL LOCAL STORAGE NO ESTA VACIO, IGUALO EL CARRITO CON EL CONTENIDO DE LOCAL STORAGE
    if (localStorage.carritoA!=undefined) {
       carritoA=JSON.parse(localStorage.carritoA);
       let verificador=0;      
        //RECORRO LOS ELEMENTOS DEL CARRITO, SI SE REPITE UN ID LE SUMO 1 UNIDAD, SINO PONGO EL VALOR DE VERIFICADOR EN 1(FLAG)
        for(const elem of carritoA){
                if(elem.id==id){
                elem.cantidadG=elem.cantidadG+1;
                verificador=1;
                }
            
                if(verificador!=1){ 
                        verificador=0;
                    }
            }
        //EN CASO DE NO ENCONTRARSE EL ID, SUMO 1 UNIDAD Y PUSHEO EL PRODUCTO AL CARRITO
            if(verificador===0  ){
                totalProductos[id-1].cantidadG=totalProductos[id-1].cantidadG+1;
                carritoA.push(totalProductos[id-1]);  
                }
            
    }
  //SI EL LOCAL STORAGE ESTA VACIO, SUMO 1 UNIDAD AL PRODUCTO Y PUSHEO EL PRODUCTO AL CARRITO. LUEGO MUESTO EL ALERT PERSONALIZADO CON LA FUNCION MOSTRAR Y GUARDO EN LOCAL STORAGE EL CONTENIDO DE CARRITO.
    if (localStorage.carritoA==undefined ){
     totalProductos[id-1].cantidadG=totalProductos[id-1].cantidadG+1;
     carritoA.push(totalProductos[id-1]);    }
     mostrar();
     localStorage.setItem("carritoA",JSON.stringify(carritoA));
    }
 }
});






