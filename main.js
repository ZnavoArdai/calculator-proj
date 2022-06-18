let display=document.getElementById("display");
let display1=document.getElementById("display1");


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

              case "=":
                try{
                    display.innerText=eval(display.innerText);
                    display1.innerText=display.innerText;


                }
                catch{display.innerText="Eror"}
                break;


            default:
display.innerText+=i.innerText;

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