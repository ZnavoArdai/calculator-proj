let display=document.getElementById("display");
let display1=document.getElementById("display1");


let perv="";
let next="";
let operator="";
let operator2=""
let therdnum=""

let btn=document.getElementsByClassName("btn");


for (const i of btn) {
    
    i.addEventListener("click",()=>{

        switch(i.innerText){

            case "←":
               display.innerText= display.innerText.slice(0,-1);

               break;
              case "C":
                display1.innerText=display.innerText;

              display.innerText="";
              break;

              

    
                // try{
                    // display.innerText=eval(display.innerText);
                    // display1.innerText=display.innerText;
         
        
            // }
                // }
                // catch{display.innerText="Eror"}

                // console.log(caculate("+"))

    

    

            default:{
                display.innerText+=i.innerText;

            }


         


if(display.innerText*1==display.innerText){
    perv=display.innerText;
    
}

    for (let i = 0; i < display.innerText.length; i++) {
        if(display.innerText[i]=="+"||display.innerText[i]=="-"||display.innerText[i]=="*"||display.innerText[i]=="/"){

            
        next=display.innerText.slice(i+1);

        
        
    }
    // if(display.innerText[i]=="+"||display.innerText[i]=="-"||display.innerText[i]=="/"||display.innerText[i]=="*"){


    //     operator=display.innerText[i];
        
        
    // }

    
  
}


        }

      


    })
}
window.addEventListener('keydown' ,e =>{

    if(e.key==e.key*1){

    display.innerText+=e.key
    }
    else if(e.key=="+"||e.key=="-"||e.key=="*"||e.key=="/"||e.key=="("||e.key==")"||e.key=="."){
        display.innerText+=e.key

    }
  
   else if(e.key=="="||e.key=="Enter"){
     display.innerText=eval(display.innerText);
     display1.innerText=display.innerText;


    }

    else if(e.key=="Backspace"){
        display.innerText= display.innerText.slice(0,-1);

    }
    else{
        display.innerText="numbers only"

        setTimeout(()=>{
            display.innerText=""
    
        },3000)
    }
 



    })

    equal.addEventListener("click",()=>{

        if(display.innerText.includes("+")){

         display.innerText=parseInt(perv)+parseInt(next)

         perv=display.innerText;
        }

       else if(display.innerText.includes("-")){

            display.innerText=parseInt(perv)- parseInt(next)
            perv=display.innerText;

           }
         else  if(display.innerText.includes("*")){

            display.innerText=parseInt(perv)* parseInt(next)
            perv=display.innerText;

           }
         else  if(display.innerText.includes("/")){

            display.innerText=parseInt(perv)/ parseInt(next)
            perv=display.innerText;

           }  
    })

  
    

    

    
 
       

    
    

    
    // for (let i = 0; i < display.innerText.length; i++) {

    //     if(display.innerText[i]=="+"){
    //         display.innerText=+(perv)+ +(next)
    //     }

    //     else if(display.innerText[i]=="-"){
    //         display.innerText=+(perv)- +(next)

    //     }
