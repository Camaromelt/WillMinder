(function(){
    let playing = false;
    $('.button').on('click',function(e){
        e.preventDefault();
        let soundArray =  [];
        let sound = new Audio('GOTEEEEMM.mp3');
        soundArray.push(sound);
        let random = Math.floor(Math.random()*soundArray.length);
        if(!playing){
            soundArray[random].play();
            playing = true;
            setTimeout(()=>{playing = false;},3000);
        }
        
    })
  })();