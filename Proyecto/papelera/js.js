
var stepx=0;
var stepy=0;
$(document).keypress(function(event){
      
    var key = (event.keyCode ? event.keyCode : event.which);
    var char=String.fromCharCode(key)
        //alert('You pressed key : ' +char);    
        console.log(char);
         stepx=0;
         stepy=0;
        if(char=="d"){
            //alert("presionaste d");
            stepx+=5;
            //$("#telescopio").animate({ "left": stepx+"px" ,"top": "+=7px"}, "");
        }
        else if(char=="a"){
            stepx-=5;
           // $("#telescopio").animate({ "left": "-=7px" }, "");
        }
        else if(char=="w"){
            stepy+=5;
            //$("#telescopio").animate({ "top": "-=7px" }, "");
        }
        else if(char=="s"){
            stepy-=5;
            //$("#telescopio").animate({ "top": "+=7px" }, "");
        }
        $("#telescopio").animate({ "left": stepx+"px" ,"top": stepy+"px"}, "");
 
  
});
$(document).Keydown(function(event){
    
    var key = (event.keyCode ? event.keyCode : event.which);
    var char=String.fromCharCode(key)
        alert('You pressed key : ' +char);    
        
  
});

$(document).ready(function(){
    

    // $("#in").keypress(function(e) {
    //     console.log(e);
    //     //13 es el código de la tecla
    //     if(e.which == 37) {
    //           alert('Has pulsado enter!');
    //     }
        
        
    // $("#in").keypress(function(e){
    //     char = String.fromCharCode(e.which);
    //     console.log("Character : " + char);
    //     $("#in").val("");
    //     if(char=="d"){
    //         alert("presionaste d");
    //         $("#telescopio").animate({left: '500px'});
    //     }
    //     else if(char=="a"){
    //         $("#telescopio").animate({ left: "500px" });
    //     }
    //     else if(char=="w"){
    //         $("#telescopio").animate({ top: "500px" });
    //     }
    //     else if(char=="s"){
    //         $("#telescopio").animate({ top: "500px" });
    //     }
    // });
    

    $("#telescopio").on({
        mouseenter: function(){
          $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
          $(this).css("background-color", "lightblue");
        },
        click: function(){
          $(this).css("background-color", "yellow");
        }
      });








  });
















/*


    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create
        }
    };

    var game = new Phaser.Game(config);

    function preload ()
    {
        //this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('nave', 'img/james webb/webb 1.png',{ frameWidth: 32, frameHeight:  48});
        this.load.image('sky', 'img/exoplaneta/exoplaneta.jpeg');
    }
    var platforms;

    var telescopio;

    


    function create ()
    {
        //this.add.image(400, 300, 'sky');
        //this.add.image(40, 300, 'nave');

            //Fondo
        this.add.image(400, 300, 'sky');

        //Grupo de elemenots físicos (para luego aplicarle rigidez a todos)
        platforms = this.physics.add.staticGroup();

        //Suelo
        platforms.create(40, 568, 'nave').setScale(0.01).refreshBody();

        // james web

    //Variable para el jugador
    telescopio = this.physics.add.sprite(20, 500, 'nave').setScale(0.01).refreshBody();
    telescopio.create(20, 500, 'nave').setScale(0.01).refreshBody();

    //Opciones físicas de rebote y gravedad
    //telescopio.setBounce(0.2);
    //telescopio.body.setGravityY(300);

    //Colisiones con los bordes
    telescopio.setCollideWorldBounds(true);

    
    //Animación de andar a la izquierda (sprites 0 a 3)
    
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('nave', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    //Animación de girar o estar quieto (sprite 4)
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    //Animación de andar a la derecha (sprites 5 a 8)
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    


        /*var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }


    */