//chiama funzioni per l'avvio
const cookie_onload = {
    calling: function(){
        cookie_functions.banner_cookie();
        backmenu();
        accesso_storage();
    }
}

//calcola quali pagine siano state visitate
function backmenu(){
    let i=1;
    console.log("backmenu aperto");
    while(localStorage.getItem('position')>=i){
      document.getElementById("cap"+i).style.color="orange";
      i++;
    }
    backmenu_appr();
    i=1;
  }
//valuta quali pagine di approfondimento siano state visitate
  function backmenu_appr(){
    let i=1;
    console.log("backmenu approfondimento aperto");
    while(localStorage.getItem('appr_position')>=i){
      document.getElementById("appr"+i).style.color="orange";
      i++;
    }
    i=1;
  }

  //contatore di pagine approfondimento visitate
  function appr_position(position){
    if(localStorage.getItem('appr_position')<position&&localStorage.getItem('accesso')=='true'){
      console.log("posizione aggiornata a "+position);
      localStorage.setItem('appr_position', position);
    }
  }
  
//salva in localStorage la modalità di utilizzo
function setpnv(){
    document.cookie="pnv=true;";
    localStorage.setItem('pnv',true);
    console.log("cookie salvato");
  }
  
  document.cookie = 'pnv=false; path=/';
  document.cookie = 'accesso=false; path=/';
  console.log(document.cookie);
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  //classe di gestione cookies e localstorage
const cookie_functions = {
  position_cookie_linked: function(position){
    if(localStorage.getItem('position')<position&&localStorage.getItem('accesso')=='true'){
      console.log("posizione aggiornata a "+position);
      localStorage.setItem('position', position);
    }
  },
  
//imposta sul LocalStorage l'accettamento dei cookies
  accetta_ccokie:function(){
    hide_cookie_bar();
    console.log("cookies accettati");
    document.cookie = 'accesso=true; path=/';
    localStorage.setItem('accesso', true);
    console.log("accesso"+getCookie("accesso"));
    starter.play();
  },

//mostra la barra di cookies se ancora non sono stati accettati o rifiutati
  banner_cookie: function(){
    let accesso=localStorage.getItem('accesso');
    console.log(accesso+"ccc");

    if(accesso==null){
      document.getElementById("box-cookies").style.display="block";
      console.log("banner cookies")
    }
    else{
      console.log("banner non mostrato");
    } 
  },

//imposta in LocalStorage il rifiuto dei cookies
  rifiuta_cookie: function(){
    hide_cookie_bar();
    localStorage.setItem('accesso', false);
    console.log("cookies rifiutati");
  },

  //nasconde il banner dei cookies
  hide_cookie_bar: function(){
    document.getElementById("box-cookies").style.display="none";
  },
}

