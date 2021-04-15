
    obtenerDatos();


function obtenerDatos(){
    let url="https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,%20AR&units=metric&appid=006a00f2941245e672854998ed06b86a";


    const api=new XMLHttpRequest();
    api.open("GET",url, true);
    api.send();
    api.onreadystatechange=function(){
        if(this.status ==200 && this.readyState == 4){
            let datos=JSON.parse(this.responseText);
            console.log(datos.main.temp);
            let resultado= document.querySelector("#resultado");
            let decimal=(datos.main.temp).toFixed(0);
            resultado.innerHTML=`<h3> Temperatura Buenos Aires  ${decimal}</h3>`;

        }
    }
}