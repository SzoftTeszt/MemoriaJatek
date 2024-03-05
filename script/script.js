console.log("Helló")

cella = document.createElement('div')
// cella.className="cella"
cella.classList.add("cella")
// cella.setAttribute('cicamica',' Igor')
cella.dataset.kep="./img/1.png"
//cella.style.backgroundImage='url("./img/2.png")'
// cella.onclick = 
function balKattintas(){
    console.log(this.style.backgroundImage)
    console.log(this.dataset.kep)
    // this.style.backgroundImage='url("'+this.dataset.kep+'")'
    this.style.backgroundImage=`url("${this.dataset.kep}")`
    setTimeout(() => {
        this.style.backgroundImage="none"
    }, 3000);    
} 

katt = () => {
    console.log(this)
}

cella.addEventListener("click", balKattintas )




document.getElementById("palya").appendChild(cella)