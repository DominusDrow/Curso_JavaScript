
const d = document;

export default function countdown(dateDown,count,msg){
    const $count = d.getElementById(count);

    let countInterval = setInterval(() => {
        let lCount = dateDown.getTime() - new Date().getTime(),
        days = Math.floor(lCount/(1000*60*60*24)),
        hours = ("0"+ new Date(lCount).getUTCHours()).slice(-2),        //slice permite corta una cadana 
        miinutes = ("0"+ new Date(lCount).getUTCMinutes()).slice(-2),   //se le agrega un cero para que sean 2 dijitos
        seconds = ("0"+ Math.floor((lCount % (1000*60))/1000)).slice(-2);       //OTRA FORMA DE HACERLO 

        $count.textContent = `Faltan ${days} dias ${hours} horas ${miinutes} minutos ${seconds} segundos`;
        
        if(lCount<0){
            clearInterval(countInterval);
            $count.textContent = msg;
        } 

    }, 1000);


    
}