
export function relojDijital(clock,btnClock,btnClockOff,clockOn){
    const d = document;

    let $clock = d.querySelector(clock),
        temp;       //esto debe ir afuera para que se pueda utilizar en todo el ambito 
    
    d.addEventListener("click",(e) => {

        if(e.target.matches(btnClock)){
            $clock.classList.add(clockOn);
                   
            temp = setInterval(() => {
                $clock.textContent = `${new Date().toLocaleTimeString()}`;
            }, 100);
            e.target.disabled = true;
        }

        if(e.target.matches(btnClockOff)){
            clearInterval(temp);
            $clock.classList.remove(clockOn);
            $clock.textContent = null;
            d.querySelector(btnClock).disabled = false;
        }
    })

}


export function alarmaDijital(sound,btnAlarm,btnAlarmOff){
    const d = document,
        $alarm = d.createElement("audio");
    $alarm.src = sound;

    d.addEventListener("click", (e) => {

        if(e.target.matches(btnAlarm)){
            setTimeout(() => {
                $alarm.play();
            }, 500);
            e.target.disabled = true;
        }

        if(e.target.matches(btnAlarmOff)){
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnAlarm).disabled = false;
        }
    })




    
     
    
}