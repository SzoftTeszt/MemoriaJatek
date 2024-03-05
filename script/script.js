sorokSzama=6
oszlopokSzama=6

function balKattintas(){
    console.log(this.style.backgroundImage)
    console.log(this.dataset.kep)
    // this.style.backgroundImage='url("'+this.dataset.kep+'")'
    this.style.backgroundImage=`url("${this.dataset.kep}")`
    setTimeout(() => {
        this.style.backgroundImage="none"
    }, 3000);    
} 


function cellatKeszit(){
    cella = document.createElement('div')
    cella.classList.add("cella")
    cella.addEventListener("click", balKattintas )
    cella.style.width=90/sorokSzama+"vh"
    cella.style.height=90/sorokSzama+"vh"
    return cella;
}

function palyaKeszit(){
    for (let i = 0; i < sorokSzama; i++) {
       sor = document.createElement("div")
       sor.className="sor"
       for (let j = 0; j < oszlopokSzama; j++) 
            sor.appendChild(cellatKeszit())        
       document.getElementById("palya").appendChild(sor)
    }


    for (let i = 1; i <= sorokSzama*oszlopokSzama/2; i++) {
      for (let j = 0; j < 2; j++) {  
        x=Math.floor(Math.random()*sorokSzama)
        y=Math.floor(Math.random()*oszlopokSzama)
        if ( !document.getElementById("palya").children[x].children[y].dataset.kep)
        {
            document.getElementById("palya").children[x].children[y].dataset.kep="./img/"+i+".png"
            // document.getElementById("palya").children[x].children[y].style.backgroundImage="url('./img/"+i+".png')"
        }
        else j--
    }  
    }
}
palyaKeszit()

// cella.className="cella"

// cella.setAttribute('cicamica',' Igor')
//cella.dataset.kep="./img/1.png"
//cella.style.backgroundImage='url("./img/2.png")'
// cella.onclick = 


katt = () => {
    console.log(this)
}






