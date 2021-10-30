//ejercicio "mes"
let mes:number=document.getElementById("numerodemes");
let btn=document.getElementById("btn");
btn?.addEventListener("click", ()=>{
  let mes2=number(mes.value);
  let diasp=2
  let diass=4;6;9;11,
  let diast=1;3;5,7;8;10;12;
switch (true) {

  case(mes2===diasp):
console.log ("tiene 28 dias");

  break;

  case (mes2===diass):
console.log ("tiene 30 dias");

   break;

  case (mes2===diast):
console.log ("tiene 31 dias");

   break;

  default:
    break;
             } 
