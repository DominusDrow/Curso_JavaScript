
//variables globales
const  d = document;
let x = 0,
    y = 0;          //las variables van acá para que puedan acumular todas las iteracioes

export function moveBall(e,ball,scene){
    const $ball = d.querySelector(ball),
        $scene = d.querySelector(scene);
        
    let limitScene = $scene.getBoundingClientRect(),
        limitBall = $ball.getBoundingClientRect();

    if(e.keyCode === 37 && limitBall.left>limitScene.left){
        x--;
    }
    else if(e.keyCode === 38 && limitBall.top>limitScene.top){
        y--;
        e.preventDefault();     //desactiva la accion por defecto de las flechas
    }   
    else if(e.keyCode === 39 && limitBall.right<limitScene.right){
        x++;
    }
    if(e.keyCode === 40 && limitBall.bottom<limitScene.bottom){
        y++;
        e.preventDefault();   
    }

    $ball.style.transform = `translate(${x*10}px,${y*10}px)`;
} 

export function shortCuts(e) {
    if(e.altKey && e.key === "a")
        alert("has mandado una alerta");
    else if(e.altKey && e.key === "p")
        prompt("has mandado un aviso");
    else if(e.altKey && e.key === "c")
        confirm("has mandado una confirmación");
}