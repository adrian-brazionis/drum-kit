
for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    //detecta que se presiona el boton//
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML; //esto activa el html interno q hara switch para que suene cada tecla//

    makeSound(buttonInnerHTML);

    animatedButton(buttonInnerHTML);
    }); 

    //detecta que se presiona la tecla del teclado//

    document.addEventListener("keydown", function(event) {

        makeSound(event.key);

        animatedButton(event.key);
    });

    function makeSound(key) {
        switch (key) {
            case "w":
                 var tom1 = new Audio('sounds/tom-1.mp3');
                 tom1.play();
                
             break;
 
             case "a":
                 var tom2 = new Audio('sounds/tom-2.mp3');
                 tom2.play();
        
             break;
 
             case "s":
                 var tom3 = new Audio('sounds/tom-3.mp3');
                 tom3.play();
        
             break;
 
             case "d":
                 var tom4 = new Audio('sounds/tom-4.mp3');
                 tom4.play();
        
             break;
 
             case "j":
                 var crash = new Audio('sounds/crash.mp3');
                 crash.play();
        
             break;
 
             case "k":
                 var kick = new Audio('sounds/kick-bass.mp3');
                 kick.play();
        
             break;
 
             case "l":
                 var snare = new Audio('sounds/snare.mp3');
                 snare.play();
        
             break;
 
            default:
               
        } 
    }
    
    //cambio de apariencia boton al tocar
    function animatedButton(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        
        activeButton.classList.add("pressed");

        setTimeout(function(currentKey) {
            activeButton.classList.remove("pressed");
        }, 100);
    }

}