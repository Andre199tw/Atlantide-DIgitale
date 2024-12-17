let data_var;
let risposta;
let risposta_corretta_n;
let vite=3;
let punteggio=0;

async function genera_domanda(){
    id=random(1,39);
    risposta=null;
    risposta_corretta_n=null;
    data_var=null;
    console.log("id domanda: "+ id);
    let data= await fetching(id);
    load_difficolta();
    let a=[null,null,null,null];
    while(a[3]===null){
        n=random(0,4);
        console.log("numero"+n+" indice");
        for(j=0;j<4;j++){       
            if(a[j]==undefined||a[j]==n){
                a[j]=n;
                
            console.log("a[j]= "+a[j]);
                break;
            }
        }
    }
    console.log(a);
    document.getElementById("domanda").textContent=data.domanda;
    document.getElementById(a[0]).textContent=risposta.corretta;
    risposta_corretta_n=a[0];
    document.getElementById(a[1]).textContent=risposta.errata1;
    document.getElementById(a[2]).textContent=risposta.errata2;
    document.getElementById(a[3]).textContent=risposta.errata3;
}

function risposta_data(risposta){
    if(risposta===risposta_corretta_n){
        console.log("risposta corretta");
        punteggio++;
        document.getElementById("punteggio").textContent="Punteggio: "+punteggio;
        console.log(punteggio);
        genera_domanda();
    }
    else{
        risposta_errata();
    }
}

function load_difficolta(){
    diff=data_var.difficolta;
    console.log(diff);
    document.getElementById("diff").textContent=diff;
    switch(diff){
        case "Facile":
            document.getElementById("diff").style.background="green";
            break;
        case "Media":
            document.getElementById("diff").style.background="orange";
            break;
        case "Difficile":
            document.getElementById("diff").style.background="red";
            break;
    }
}

async function risposta_errata(){
        console.log("risposta errata");
        vite--;
        console.log("vite rimanenti"+vite);
        await box_errore();
        document.getElementById("box_errato").style.display = "none";
        if(vite==-1){
            let tp=punteggio;
            record_topscore(tp);
            punteggio=0;
            vite=3;
            document.getElementById("vita1").style.display="block";
            document.getElementById("vita2").style.display="block";
            document.getElementById("vita3").style.display="block";
            document.getElementById("punteggio").textContent="Punteggio: 0";
            console.log("game over");
            document.getElementById("blur_go").style.display="block";
            document.getElementById("game_over").style.display="block";
            document.getElementById("overlay-game-over").style.display="block";
            
        }
        else{
            
            for(i=3;i>vite;i--){

                document.getElementById("vita"+i).style.display="none";
                console.log("vita decrementata "+i);
                
            }
        }
    genera_domanda();        
}

async function box_errore(){
    console.log("box errore!!!!!!!!!!");
    document.getElementById("box_errato").style.display = "block";
    document.getElementById("correzione").textContent = "La risposta corretta era: "+risposta.corretta;
    const chiudi = document.getElementById("errato_chiudi");
    const ripassa = document.getElementById("ripassa");
    ripassa.addEventListener("click", function() {
        window.location.href = data_var.argomento;
    });
    return new Promise(resolve => {
        chiudi.addEventListener("click", function() {
            resolve();
        });
    });
}

    function record_topscore(score){
    if(localStorage.getItem("topscore")===null||localStorage.getItem("topscore")<score){
        localStorage.setItem("topscore",score);
        document.getElementById("top_score").textContent="Record: "+score;
    }
}

function load_score(){
    if(localStorage.getItem("topscore")!==null){
        localStorage.getItem("topscore");
        document.getElementById("top_score").textContent="Record: "+localStorage.getItem("topscore");
        console.log("score caricato");
    }
}

function chiudi_game_over(){
    document.getElementById("blur_go").style.display="none";
    document.getElementById("game_over").style.display="none";
    document.getElementById("overlay-game-over").style.display="none";
}
function decode_JSON(data){
    data_JSON=JSON.stringify(data)
}

function decode_JSON(data){
    data_JSON=JSON.stringify(data);
    console.log("decode "+data_JSON);
    return data_JSON;
}

function random(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    n= Math.floor(Math.random() * (max - min) + min);
    console.log("il numero generato è : "+n);
    return n;
}


async function fetching(id) {
    try {
        const response = await fetch('/src/quiz.json');
        const data = await response.json();
        risultato= data.find(item=>item.id===id);
        risposta=risultato.risposta;
        console.log(risposta);
        data_var=risultato;
        return risultato;
    } catch (error) {
        console.error("Errore: ", error);
        return null;
    }
}
