const d = document,
    w = window;

export default function newMenu(panel, menu, mq){

    
    const $panel = d.querySelector(panel),
        $menu = d.querySelector(menu);
    let breackPoint = w.matchMedia(mq);

    const spymenu = e => {
        if(e.matches){
            $panel.classList.add("panel-scroll-spy");
            $menu.classList.add("menu-scroll-spy")
        }
        else{
            $panel.classList.remove("panel-scroll-spy");
            $menu.classList.remove("menu-scroll-spy")
        }
            
    }

    breackPoint.addListener(spymenu);
    spymenu(breackPoint);

}

