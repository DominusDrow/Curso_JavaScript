
//variables globales
const  d = document,
    PLYRH = 70,
    PLYRW = 48;

let plyrX = 0,
    plyrY = 0,
    ballX = 0,
    ballY = 0,
    stateX = 0,
    stateY = 0,
    points = 0;

/*
 *funcion que mueve el rectangulo que pertenece al jugador
 * lo usa comprobando si las teclas presionadas son las del
 * cursos para bajar y subir
 */
function mvPlayer(e,player,bg){
    const $plyr = d.querySelector(player),
        $bg = d.querySelector(bg);

    let limitBg = $bg.getBoundingClientRect(),
    limitPlyr = $plyr.getBoundingClientRect(); 

    if(e.keyCode===38 && limitPlyr.top>limitBg.top){
        plyrY--;
        e.preventDefault();  
    }
    else if(e.keyCode===40 && limitPlyr.bottom<limitBg.bottom){
        plyrY++;
        e.preventDefault();  
    }

    $plyr.style.transform = `translate(0px,${plyrY*30}px)`;
}

/**
 * funcion que mueve la pelota y la revota cuando detecta 
 * colisiones con el jugador o las paredes
 */
function mvBall(ball,scene,player,score){
    const $ball = d.querySelector(ball),
        $scene = d.querySelector(scene),
        $plyr = d.querySelector(player),
        $scr = d.querySelector(score);

    let limitScene = $scene.getBoundingClientRect(),
        limitBall = $ball.getBoundingClientRect(),
        limitPlyr = $plyr.getBoundingClientRect();

    
    if(stateX===0)
        ballX++;   
    else if(stateX===1)
        ballX--;

    if(stateY===0)
        ballY--;
    else if(stateY===1)
        ballY++;
    

    if(limitBall.x>(limitPlyr.x-PLYRW)){

        if(limitBall.y>(limitPlyr.y-PLYRH) && limitBall.y<(limitPlyr.y+PLYRH))
            stateX=1;
        
        else if(limitBall.x>(limitPlyr.x+PLYRW)){
            ballX=ballY=0;
            $scr.textContent= ++points;
        }
    }
    else if(limitBall.left<limitScene.left)
        stateX=0;
    
    if(limitBall.top<limitScene.top)
        stateY=1;
    
    else if (limitBall.bottom>limitScene.bottom)
        stateY=0;
        

    $ball.style.transform = `translate(${ballX*2}vh,${ballY*2}vh)`;
}


//IMPLEMENTACION

d.addEventListener("keydown", (e) => {
    mvPlayer(e,".player",".background");
})

d.addEventListener("DOMContentLoaded", (e) => {
    setInterval(() => {
        mvBall(".ball",".background",".player",".score");
    },15);
})







