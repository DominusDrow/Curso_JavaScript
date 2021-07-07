
export function relojDijital($clock,btnClock,btnAlarm,clockOn){
    const w = window,
        d = document;

    d.addEventListener("click",(e) => {
       
        if(e.target.matches(btnClock)){
            let t = $clock.classList.toggle(clockOn);
            
            if(t)   d.querySelector(btnClock).textContent = "Detener reloj";
            else    d.querySelector(btnClock).textContent = "Inicar reloj";
            
            w.setInterval(() => {
                $clock.textContent = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
            }, 100);   

        }

        if(e.target.matches(btnAlarm)){

        }
    })

   

}