
$(".logo").animate({
    width: '150px',
    opacity: '1'},"slow", );


let preguntarComprar="";
let nombre="";
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
let gorraNegra=new gorrasLisas ( 1, "Gorra Lisa Negra" ,  2000,  0); 
let gorraBeige=new gorrasLisas ( 2, "Gorra Lisa Beige" ,  1500,  0); 
let gorraAzulM=new gorrasLisas ( 3,"Gorra Lisa Azul Marino" ,  2000,0); 
let gorraAzulC=new gorrasLisas ( 4,"Gorra Lisa Azul Clasico" ,  1500,0); 
let gorraBlanca=new gorrasLisas ( 5,"Gorra Lisa Blanca Clasica" ,  1500,0); 
//let gorrasLisasA=[gorraNegra,gorraBeige,gorraAzulM,gorraAzulC,gorraBlanca];
//Declaracion de las gorras de Disney
let gorraMickeyRosa=new gorrasLisas ( 6, "Gorra Mickey Rosa" ,  2500,  0); 
let gorraMickeyNegra=new gorrasLisas (7, "Gorra Mickey Negra" ,  2500, 0);
let gorraMinnieNegra=new gorrasLisas ( 8,"Gorra Minnie Negra" ,  2000,  0);
let gorraDonald=new gorrasLisas   (9, "Gorra Pato Donald Combinada" ,  2300,0);
let gorraMickeyRoja=new gorrasLisas (10, "Gorra Mickey Roja" ,  3000,  0); 
let gorraPluto=new gorrasLisas (11, "Gorra Pluto Clasica" ,  2000,  0); 
//let gorrasDisneyA=[gorraMickeyRosa,gorraMickeyNegra,gorraMinnieNegra,gorraDonald,gorraMickeyRoja,gorraPluto];
//Declaracion de las gorras de los supercampeones
let gorraAzul=new gorrasLisas ( 12,"Gorra Super Campeones Azul" ,  1200,  0); 
let gorraAzulR=new gorrasLisas ( 13,"Gorra Super Campeones Azul c/Rojo" ,  1200, 0); 
let gorraAzulB=new gorrasLisas ( 14,"Gorra Super Campeones Azul c/Blanco" ,  1200, 0); 
let gorraAzulRo=new gorrasLisas ( 15,"Gorra Super Campeones Azul c/Rojo" ,  1200,  0); 
let gorraNegraC=new gorrasLisas ( 16,"Gorra Super Campeones Negra" ,  1200,  0); 
let gorraNegraE=new gorrasLisas ( 17,"Gorra Super Campeones Negra Estampada" ,  1500,  0); 
let gorraNegraD=new gorrasLisas ( 18,"Gorra Super Campeones Negra c/Dorada" ,  1500,  0); 
//let gorraSuperCampeonesA=[gorraAzul,gorraAzulR,gorraAzulB,gorraAzulRo,gorraNegraC,gorraNegraE,gorraNegraD];

//Declaracion de las gorras de Futbol
let gorraIndependiente=new gorrasLisas (19, "Gorra Independiente " ,  1600,  0); 
let gorraBoca=new  gorrasLisas( 20,"Gorra Boca " ,  1600,  0); 
let gorraRiver=new gorrasLisas ( 21,"Gorra River " ,  2000, 0); 
let gorraRacing=new gorrasLisas ( 22,"Gorra Racing " ,  1600,0);
//let gorrasFutbolA=[gorraIndependiente,gorraBoca,gorraRiver,gorraRacing]; 

let totalProductos=[gorraNegra,gorraBeige,gorraAzulM,gorraAzulC,gorraBlanca,gorraMickeyRosa,gorraMickeyNegra,gorraMinnieNegra,gorraDonald,gorraMickeyRoja,gorraPluto,
 gorraAzul,gorraAzulR,gorraAzulB,gorraAzulRo,gorraNegraC,gorraNegraE,gorraNegraD,gorraIndependiente,gorraBoca,gorraRiver,gorraRacing];
 

 
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
agregar=document.getElementById("21");
agregar.addEventListener("click",()=>{productoAgregado(21)});
agregar=document.getElementById("22");
agregar.addEventListener("click",()=>{productoAgregado(22)});




function productoAgregado(id){
  
    if (localStorage.carritoA!=undefined) {
        carritoA=JSON.parse(localStorage.carritoA);
        console.log("La pagina anterior trae",carritoA);
        let verificador=0;      
        for(const elem of carritoA){
                
            if(elem.id==id){
            console.log("Entro al if dentro del for")
            console.log("Recorro lo que hay en el carrito y sumo 1 unidad en caso de que se encuentre el id");
            elem.cantidadG=elem.cantidadG+1;
            verificador=1;
            console.log("El verificador vale", verificador); 
            }
            console.log("El verificador vale", verificador); 
            if(verificador!=1){ 
                    verificador=0;
                console.log("El verificador deberia entrar a 0(else)", verificador); 
            }
        }
        console.log("El verificador vale : " ,verificador);
        if(verificador===0  ){
            console.log("Termine de recorrer el carrito y sumo 1 unidad y pusheo el producto en el caso de que no se encuentre el id");
            totalProductos[id-1].cantidadG=totalProductos[id-1].cantidadG+1;
            carritoA.push(totalProductos[id-1]);  
              }
            console.log(localStorage.carritoA);
    }
  
    if (localStorage.carritoA==undefined ){
     console.log("No hay nada en el carrito (undefined) pusheo el producto seleccionado");
     totalProductos[id-1].cantidadG=totalProductos[id-1].cantidadG+1;
     carritoA.push(totalProductos[id-1]);    
     console.log("CarritoA",carritoA);}
    
     
    alert("El producto fue agregado exitosamente");
    localStorage.setItem("carritoA",JSON.stringify(carritoA));
    console.log("---------------------------------------------------------");
}


    


