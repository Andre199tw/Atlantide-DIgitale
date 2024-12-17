
let PNV=0;
let mn=0;


//FUNZIONE CARDINE PER CHIAMATE ONLOAD
window.onload=function onloadp(){
  cookie_onload.calling();
}


function esci(){
  document.getElementById("finestra-esci").style.display="block";
  document.getElementById("overlay1").style.display="block";
  document.getElementById("blur_ex").style.display="block";
  console.log("function esci");
}
function annexit(){
  document.getElementById("finestra-esci").style.display="none";
  document.getElementById("overlay1").style.display="none";
  document.getElementById("blur_ex").style.display="none";
  console.log("function annexit");
}
function n() {
  alert("applicazione in chiusura");
  window.close();
}

function ontutorial(){
  document.getElementById("overlay").style.display="block";
  document.getElementById("overlay-content").style.display="block";
  document.getElementById("blur_tuto").style.display="block";
}

function offtuto(){  
  document.getElementById("overlay").style.display="none";
  document.getElementById("overlay-content").style.display="none";
  document.getElementById("blur_tuto").style.display="none";
  console.log("offtuto");
};



function menu_appear(){
  if(mn==0){
    document.getElementById("menu-box").style.display="block";
    d();
    document.getElementById("blur_menu").style.display="block";
    mn=1;
  }
}

function d(){
  document.getElementById("T-button").style.display="none";
}

function clmenu(){
  document.getElementById("menu-box").style.display="none";
  document.getElementById("blur_menu").style.display="none";
  document.getElementById("T-button").style.display="block";
  mn=0;
}



function accesso_storage(){
  if(localStorage.getItem('accesso')=='false'){
    starter.play();
  }
}

document.addEventListener('keydown', function(event) {
  if (event.defaultPrevented == 37) {
    return;
  }
  switch (event.key) {
    case "ArrowLeft":
      controlli.indietro();
      break;
    case "ArrowUp":
      controlli.tuto_PNV();
      break;
    case "ArrowRight":
      console.log("right");
      controlli.avanti();
      break;
    case "ArrowDown":
      controlli.home();
      // home.click();
      // console.log("down");
      break;
    case " ":
      console.log("spazio");
      break;
    case "Escape":
      console.log("esc");
      //richiesta di conferma
      controlli.esci_PNV();
      break;
    case "1":
      console.log("unus");
      controlli.appr1_PNV();
      break;
    case "2":
      console.log("duo");
      controlli.appr2_PNV();
      break;
    case "3":
      console.log("tres");
      controlli.appr3_PNV();
      break;
    default:
      return;
  }
  event.preventDefault();
}, true);

  
  
  let entp=0;

function PNV_para(argomento){
  const arg=document.getElementById(argomento);
  document.addEventListener('keydown', async function (event) {
    if(event.key=="Enter"){
      arg.play();
      PNV=1;
      entp++;
      setpnv();
      console.log("inizio PNV argomento:"+argomento+" "+arg);
      verPNV();
    }
    if(entp==2){
      arg.pause();
      console.log("PNV in pausa");
      entp=0;
    }
  },true);
}

// document.addEventListener('keydown',function(event){
//   if(event.key=="ArrowRight"&&localStorage.getItem('pnv')==1){
//     avanza.play();
//     console.log("avanza");
//     avanti;
//   }
// })

function avanti(destinazione){
  
    setTimeout(function() {
      window.location.href = destinazione;
    }, 0);
  }

function verPNV(){
  let verpnv=getCookie("pnv");
  console.log("PNV= "+verpnv);
  return verpnv;
}

function accetta_cookie(){
  cookie_functions.accetta_ccokie();
}

function hide_cookie_bar(){
  document.getElementById("box-cookies").style.display="none";
}

function rifiuta_cookie(){
  cookie_functions.rifiuta_cookie();
}

function position_cookie(position){
  cookie_functions.position_cookie_linked(position);
}


