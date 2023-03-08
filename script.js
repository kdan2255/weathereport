
let TrenutnaDTLokacija=Intl.DateTimeFormat().resolvedOptions().timeZone;
let LocalLocation=document.getElementById('LocalLocation');
let LocalTime=document.getElementById('LocalTime');
let ImeVremena=document.getElementById('vremegrad');
let kljuc="6d3b966560c86e97b4342990c35328d1";
let InputFrom;
let TrenutnaLokacija;
let SadasnjaLokacija;
let VremeStalno;
var GlobalJSONData;
  BubbleWeather=document.getElementById('krug');


document.getElementById('dugme').onclick=()=>{

  InputFrom=document.getElementById('InputBar').value;
  TrenutnaLokacija=InputFrom;
  console.log(TrenutnaLokacija+"1");
  LocalLocation.innerText="Location:"+TrenutnaLokacija;
  WeatherData(TrenutnaLokacija);
  BubbleWeather.classList.add('animationd');

  setTimeout(function(){
          BubbleWeather.classList.remove('animationd');
      }, 2500);

}




















/*function WeatherData(WeatherLocation) {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${WeatherLocation}&appid=${kljuc}`)
.then(odgovor=>odgovor.json())
.then(podatcijson=>{GlobalJSONData=podatcijson;})
.then(()=>{console.log(GlobalJSONData)})
.catch(greska=>IspisiGresku(greska))

}
za strani sat
*/









function WeatherData(WeatherLocation) {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${WeatherLocation}&appid=${kljuc}`)
.then(odgovor=>odgovor.json())
.then(podatci=>IspisiVreme(podatci))
.catch(greska=>IspisiGresku(greska))
console.log(WeatherLocation+"2");
}




function DefaultVreme(){
let VremeSirovoD=new Date();
let VremeSatiD=VremeSirovoD.getHours();
let VremeMinuti=VremeSirovoD.getMinutes();
if(VremeMinuti<10){
  LocalTime.innerText=`${VremeSatiD}:0${VremeMinuti}`;
}else{
  LocalTime.innerText=`${VremeSatiD}:${VremeMinuti}`;
}

}

function DefaultLokacija(){

  TrenutnaLokacija=TrenutnaDTLokacija.substring(TrenutnaDTLokacija.indexOf('/')+1,TrenutnaDTLokacija.length);
if(TrenutnaLokacija=='Belgrade'){


  LocalLocation.innerText+='Beograd';
}else{
  LocalLocation.innerText+=TrenutnaLokacija;
}


}

function IspisiVreme(data){
let ImeLokacije=document.getElementById('ime-grada');
let ImeTemperature=document.getElementById('temp');
let ImeVlaznosti=document.getElementById('hum');
let ImeOpisa=document.getElementById('glavni-opis');
let Ikona=document.getElementById('ikona');


let CelsiusTemp=Math.round(parseFloat(data.main.temp)-273.15);
let Opis=data.weather[0].description;
let GlavniOpis=data.weather[0].main;
let VremeSirovo=new Date();
let VremeSati=VremeSirovo.getHours();






ImeTemperature.innerHTML="Temp:"+CelsiusTemp+"C°";
ImeVlaznosti.innerHTML="Hum:"+data.main.humidity+"%";
if(data.name==="Belgrade"){
  ImeLokacije.innerHTML="Beograd"+" "+data.sys.country+":";
}else{
ImeLokacije.innerHTML=data.name+" "+data.sys.country+":";}
ImeOpisa.innerHTML=GlavniOpis;



















let lowercaseglavniopis=GlavniOpis.toLowerCase();
/*Ako ikada napravim srpsku verziju
switch(lowercaseglavniopis){
  case "clear":
  ImeOpisa.innerHTML=GlavniOpis+"/Cisto";
      break;
  case "clouds":
ImeOpisa.innerHTML=GlavniOpis+"/Oblacno";
      break;
  case "rain":
  ImeOpisa.innerHTML=GlavniOpis+"/Kisa";
  case "thunderstorm":
ImeOpisa.innerHTML=GlavniOpis+"/Oluja";
      break;
  case "snow":
ImeOpisa.innerHTML=GlavniOpis+"/Sneg";
      break;
  case "sleet":
ImeOpisa.innerHTML=GlavniOpis+"/Suznezica";
      break;
  case "smoke":
ImeOpisa.innerHTML=GlavniOpis+"/Zadimljeno";
      break;
  case "ash":
ImeOpisa.innerHTML=GlavniOpis+"/Cadjavo";
      break;
  case "tornado":
ImeOpisa.innerHTML=GlavniOpis+"/Tornado";
      break;
  case "mist":
ImeOpisa.innerHTML=GlavniOpis+"/Maglovito";
      break;
  case "fog":
ImeOpisa.innerHTML=GlavniOpis+"/Maglovito";
      break;
  case "showers":
  ImeOpisa.innerHTML=GlavniOpis+"/Pljusak";
      break;
  case "drizzle":
ImeOpisa.innerHTML=GlavniOpis+"/Rosulja";
      break;
  case "sunny":
ImeOpisa.innerHTML=GlavniOpis+"/Suncano";
      break;



  default:
}*/


let offset=data.timezone/3600;
let VremeSirovoS=new Date();
let VremeSatiS=VremeSirovoS.getHours();
let VremeMinutiS=VremeSirovoS.getMinutes();
console.log(data);


VremeSatiS+=offset;



switch (lowercaseglavniopis){
case "clear":
Ikona.classList.add(`wi`);
Ikona.classList.add(`wi-day-sunny`);
    break;
case "clouds":
Ikona.classList.add(`wi`);
Ikona.classList.add(`wi-cloudy`);
    break;
case "rain":
Ikona.classList.add(`wi`);
Ikona.classList.add(`wi-rain`);
case "thunderstorm":
Ikona.classList.add(`wi`);
Ikona.classList.add(`wi-thunderstorm`);
    break;
case "snow":
Ikona.classList.add(`wi`);
Ikona.classList.add(`wi-snow`);
    break;
case "sleet":
Ikona.classList.add(`wi`);
Ikona.classList.add(`wi-sleet`);
    break;
case "smoke":
Ikona.classList.add(`wi`);
Ikona.classList.add(`wi-smoke`);
    break;
case "ash":
Ikona.classList.add(`wi`);
Ikona.classList.add(`wi-fire`);
    break;
case "tornado":
Ikona.classList.add(`wi`);
Ikona.classList.add(`wi-tornado`);
    break;
case "mist":
Ikona.classList.add(`wi`);
Ikona.classList.add(`wi-fog`);

    break;
case "fog":
Ikona.classList.add(`wi`);
Ikona.classList.add(`wi-fog`);
    break;
case "showers":
Ikona.classList.add(`wi`);
Ikona.classList.add(`wi-showers`);
    break;
case "drizzle":
Ikona.classList.add(`wi`);
Ikona.classList.add(`wi-rain`);
    break;



default:
Ikona.classList.add(`wi`);
Ikona.classList.add(`wi-na`);

}
}














DefaultVreme();

let Lclockfunc=DefaultVreme;

window.onload=function(){
setInterval(Lclockfunc,1000);
DefaultLokacija();
WeatherData(TrenutnaLokacija);
BubbleWeather.classList.add('animationd');

setTimeout(function(){
        BubbleWeather.classList.remove('animationd');
    }, 2500);
}
function IspisiGresku(err){
  console.log("Greska:"+err);
}
