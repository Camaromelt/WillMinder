let lastPlayed = 0;
let random;
let playing = false;
let soundArray =  [];
let sound = new Audio('Execution_Context.mp3');
let sound2 = new Audio('Uh_uh.mp3');
let sound3 = new Audio('PoshWord.mp3');
let sound4 = new Audio('IE.mp3');
let sound5 = new Audio('Thumbs.mp3');
soundArray.push(sound, sound2, sound3, sound4, sound5);
generateRandom =() => {
    let temp = Math.floor(Math.random()*soundArray.length);
    console.log(temp, lastPlayed, soundArray);
    if(temp === lastPlayed){
        generateRandom();
    }else{
        return temp;
    }
 }
 function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } 
  function setRandomColor() {
    $("body").css("background-color", getRandomColor());
  }
(function(){
    $('.button').on('click',function(e){
        e.preventDefault();
         $('.button').disabled = true;
        if(!playing){
            random = generateRandom();
            lastPlayed = random;
            let content = soundArray[random];
            console.log(content);
            content.play();
            playing = true;
            setTimeout(function(){playing = false; $('.button').disabled = false;}, 10000);
            setInterval(function(){ setRandomColor(); }, 200);
        }
        
    });
  })();