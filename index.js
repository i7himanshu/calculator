var d=document.querySelector(".display");
var op;
var n1;
var n2;
var result;

var count=0;
for(count=0;count<10;count++){

    document.querySelectorAll(".a")[count].addEventListener("click",function(e){
       
        d.textContent=d.textContent+this.textContent;
        
    })
}

document.querySelector(".reset").addEventListener("click",function(){
    d.textContent="";
})

var c=0;
for(c=0;c<4;c++){
    document.querySelectorAll(".o")[c].addEventListener("click",function(){
        op=this.textContent;
        n1=parseInt(d.textContent);
        d.textContent="";
    });
}

document.querySelector(".equals").addEventListener("click",function(){

    n2=parseInt(d.textContent);
    switch(op){
        case "+":{
            result=n1+n2;
        }
        break;
        case "*":{
            result=n1*n2;

        }
        break;
        case "/":{
            result=n1/n2;
        }
        break;
        case "-":{
            result=n1-n2;
        }
    
    }

    d.textContent=""+result;
});