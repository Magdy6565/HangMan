let letters ="abcdefghijklmnopqrstuvwxyz" ;
let lettersArr = Array.from(letters) ;
let lettersplace = document.querySelector(".letters")
for(let i =0 ; i <lettersArr.length ; i++){
    let myspan = document.createElement("span") ;
    let letter = document.createTextNode(lettersArr[i]) ;
    myspan.appendChild(letter) ;
    myspan.className="letter-box"
    lettersplace.appendChild(myspan)
}

let myobj = {
    cities:["Alexandria","Cairo","Manchester","London"] ,
    movies:["The GodFather","Taxi Driver","Oppenheimer","Barbie"] ,
   premierleague_Teams :["Liverpool","Manchester city","Brighton","chelsea"]
} ;
let allkeys = Object.keys(myobj) ;
let randomcategory = Math.floor(Math.random() * allkeys.length) ;
console.log(allkeys[randomcategory])
document.querySelector(".category span").innerHTML = allkeys[randomcategory] ;
console.log(myobj[allkeys[randomcategory]])
let elements = myobj[allkeys[randomcategory]];
let randomelement = Math.floor(Math.random()*elements.length) ;
(elements[randomelement])
let choosenelement = elements[randomelement];
let  lettersguess = document.querySelector(".lettersguess") 
for(let j =0 ; j<choosenelement.length  ; j++){
    let myspan2 = document.createElement("span") ;
    if(choosenelement[j] === " "){
        myspan2.className="Space"
    }

    lettersguess.appendChild(myspan2) ;
}


let bool =false  ;
let allboxs = document.querySelectorAll(".lettersguess span")
let thedraw = document.querySelector(".thedraw")
// console.log(thedraw[0])
let finish = true; 
let wrong =0  ;
if(choosenelement.indexOf(" ")!== -1){
    let mytext = document.createTextNode(" ")
    allboxs[choosenelement.indexOf(" ")].appendChild(mytext)
    allboxs[choosenelement.indexOf(" ")].classList.add("correct")
    console.log("space")
}
document.addEventListener("click" ,function(e){

    bool = false ;
    finish=true
    if(e.target.className === "letter-box"){
        e.target.style.opacity = "0.1" ;
        e.target.style.pointerEvents = "none"
        // console.log(e.target.innerHTML)
       
        for(let h =0 ; h<choosenelement.length ; h++){
         
            if(e.target.innerHTML.toLowerCase() === choosenelement[h].toLowerCase()  ){
                bool = true  ;
                allboxs[h].classList.add("correct")
                document.querySelector(".right").play()
                let mytext = document.createTextNode(choosenelement[h])
                allboxs[h].appendChild(mytext)
                

            }
        }
        // console.log(thedraw)
        if(bool === false ){
            wrong++ ;
            thedraw.classList.add(`Wrong-${wrong}`)
            document.querySelector(".wrong").play()
            if(wrong === 9 ){
                window.alert(`Game Over ! The word is ${choosenelement}`)
                this.location.reload()
            }
        }
        for(h =0 ;  h <allboxs.length ; h++){
            if(allboxs[h].classList.contains("correct")){
                console.log("true")
                continue ;
            }
            else{
                console.log(false);
              finish = false;
              break ; 
            }
        }
        if(finish === true ){
            window.alert("You WON")
            this.location.reload()
        }


     
    }

})
