var screen = document.getElementsByClassName("screen")[0];
const button = document.getElementsByTagName("button");

for(var i=0;i<button.length;i++){
   button[i].addEventListener("click",function(event){
      var userclicked = this.innerHTML;
      if(userclicked=='x'){
          userclicked = '*';
         screen.value += userclicked; 
      }else if(userclicked == "C"){
          screen.value = "";
      }else if(userclicked == "="){
          screen.value = eval(screen.value);
      }else if(userclicked == "%"){
         userclicked = "/";
         screen.value += userclicked;
      }else if(userclicked == "D"){
        
        screen.value = screen.value.substring(0,screen.value.length-1);
     }else{
        screen.value += userclicked;
      }
   })
}