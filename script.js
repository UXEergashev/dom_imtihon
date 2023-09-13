let button = document.querySelector(".buttonn");
let body = document.querySelector("body");
let score = document.querySelector(".score")
let start =document.querySelector(".start")
let input =document.querySelector("input")
let soroq = document.querySelector(".soroq")
let highscore= document.querySelector(".highscore")
let buttom =document.querySelector(".button_1");
let xato =document.querySelector(".xato")
let xatto = document.querySelector(".xatto")
let rendom = parseInt(Math.random()*20);

button.addEventListener("click", () => {
    if(input.value < rendom ){
        start.innerHTML= "🔝teparoq chiqing";
        xato.style.display= "block";
        xatto.style.display = "none";
        body.style.backgroundColor= "red"


    }
    else if(input.value > rendom){
        start.innerHTML="↘ pastroqga tushing"
        xato.style.display= "block";
        xatto.style.display = "none";
        body.style.backgroundColor= "red"

    }
    else{
        start.innerHTML= "🎺 javob to'gri"
        body.style.backgroundColor= "green"
        soroq.innerHTML =`${rendom}`
        highscore.innerHTML= "✔ togri javob 1";
        xatto.style.display = "block";
        xato.style.display= "none";
        body.style.color ="black";
    }  
}
)
button.addEventListener("click" , () =>{
    totalClicks.style.display = "block";   

});
function totalClick(click){
    
    const totalClicks= document.querySelector(".totalClicks");
    const sumvalue= parseInt(totalClicks.innerText) +click;
    totalClicks.innerText = sumvalue;
    
    
}





    


