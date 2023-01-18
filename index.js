var numberOfDrums = document.querySelectorAll(".drum").length;

for(i = 0; i < numberOfDrums; i++) {
    document.addEventListener('keydown', function(event) {
        playInstrument(event.key);
    });
     
    document.querySelectorAll(".drum").forEach(function(btn) {
        btn.addEventListener("click", handleClick);
    });
     
     
    function handleClick() {
        var clickedOn = this.innerText;
        playInstrument(clickedOn);
    }
     
    function playInstrument( key ) {
        var soundToPlay = "";
        switch (key) {
            case 'w':
                soundToPlay = "sounds/tom-1.mp3";
                break;
            case 'a':
                soundToPlay = "sounds/tom-2.mp3";
                break;
            case 's':
                soundToPlay = "sounds/tom-3.mp3";
                break;
            case 'd':
                soundToPlay = "sounds/tom-4.mp3";
                break;
            case 'k':
                soundToPlay = "sounds/crash.mp3";
                break;
            case 'i':
                soundToPlay = "sounds/kick-bass.mp3";
                break;
            case 'j':
                soundToPlay = "sounds/snare.mp3";
                break;
            default:
                console.log(key);
        }
        if (soundToPlay.length > 1) {
            var audio = new Audio(soundToPlay);
            audio.play();
        }
    }
}    