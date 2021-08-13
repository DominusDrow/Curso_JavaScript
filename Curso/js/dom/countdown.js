
const d = document;

export default function countdown(dateDown,count,msg){
    const $count = d.getElementById(count);

    let countInterval = setInterval(() => {
        let lCount = dateDown.getTime() - new Date().getTime(),
        days = Math.floor(lCount/(1000*60*60*24)),
        hours = new Date(lCount).getUTCHours(),
        miinutes = new Date(lCount).getUTCMinutes(),
        seconds = new Date(lCount).getUTCSeconds();

        $count.textContent = `Faltan ${days} dias ${hours} horas ${miinutes} minutos ${seconds} segundos`;
    }, 1000);


    
}