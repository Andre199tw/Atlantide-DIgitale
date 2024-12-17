
const controlli={
    avanti: function(){
        if(localStorage.getItem("pnv")=="false"||localStorage.getItem("pnv")=="null"){
            const avanti=document.getElementById("avanti");
            avanti.click();
          }
          else{
            const avanza=document.getElementById('avanzamentoscheda');
            avanza.play();
            setTimeout(function() {
              const avanti=document.getElementById("avanti");
              avanti.click();
            }, 2000);
          }
    },
    indietro: function(){
        if(localStorage.getItem("pnv")=="false"||localStorage.getItem("pnv")=="null"){
            const indietro=document.getElementById("indietro");
            indietro.click();
          }
          else{
            const indietro=document.getElementById('indietro_audio');
            indietro.play();
            setTimeout(function() {
              const indietro=document.getElementById("indietro");
              indietro.click();
            }, 2000);
          }
    },
    home: function(){
        if(localStorage.getItem("pnv")=="false"||localStorage.getItem("pnv")=="null"){
            const home=document.getElementById("home");
            home.click();
          }
          else{
            const home=document.getElementById('home_audio');
            home.play();
            console.log("home_pnvjs");
            setTimeout(function() {
              const home=document.getElementById("home");
              home.click();
            }, 2000);
          }
    },
    esci_PNV: function(){
        const esci=document.getElementById("esci");
        esci.click();
        const esci_audio=document.getElementById("esci_audio");
        esci_audio.play();
        window.close();
    },
    tuto_PNV: function(){
        const tutorial=document.getElementById("inizioPNV");
        tutorial.play();
    },
    appr1_PNV: function(){
        const appr1=document.getElementById("appr1");
        const appr1_audio=document.getElementById("avanzamentoscheda");
        appr1_audio.play();
        setTimeout(function() {
          appr1.click();
        }, 2000);
        
    },
    appr2_PNV: function(){
        const appr2=document.getElementById("appr2");
        const appr1_audio=document.getElementById("avanzamentoscheda");
        appr1_audio.play();
        setTimeout(function() {
          appr2.click();
        }, 2000);
    },
    appr3_PNV: function(){
        const appr3=document.getElementById("appr3");
        const appr1_audio=document.getElementById("avanzamentoscheda");
        appr1_audio.play();
        setTimeout(function() {
          appr3.click();
        }, 2000);
    }
}


