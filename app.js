const audio =new Audio();
audio.src="./Click.mp3";

let num = 0 ;
let btn = document.getElementById('btn');
    btn.addEventListener('click',function(){
     num = num +1;
     document.getElementById('txt').innerHTML=num;
     
     
     if (num==100) {
        audio.play()
      }
    })



