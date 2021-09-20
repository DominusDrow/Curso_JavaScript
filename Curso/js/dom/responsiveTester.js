
const d = document,
    w = window;

export default function responsiveTester (site,w,h,open,close){
    const $site = d.getElementById(site),
        $with = d.getElementById(w),
        $high = d.getElementById(h),
        $btnO = d.getElementById(open),
        $btnC = d.getElementById(close);
       

    d.addEventListener("click", e => {
        if(e.target.matches(`#${open}`)){
            window.open("http://youtube.com");
        }
            
    })

}