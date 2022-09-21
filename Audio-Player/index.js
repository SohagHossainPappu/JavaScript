for(var i = 0;i < 4; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
         var text=this.innerHTML;
         document.querySelector("h2").innerHTML=text+"........";
         audioPlay(text);
    });

}
var music=["Audio/Cradles.mp3","Audio/Muhammad.mp3","Audio/Soft.mp3"];
var audio1=new Audio(music[0]);
var audio2=new Audio(music[1]);
var audio3=new Audio(music[2]);

function audioPlay(text){
     switch(text){
          case "CRADLES" :
               audio1.play();
               audio2.pause();
               audio3.pause();
               break;
          case "MUHAMMAD" :
               audio2.play();
               audio1.pause();
               audio3.pause();
               
               break;
          case "SOFT MUSIC" :
               audio3.play();
               audio2.pause();
               audio1.pause();
               break;
           case "PAUSE" :
               audio1.pause();
               audio2.pause();
               audio3.pause();
               break;
     }
}
