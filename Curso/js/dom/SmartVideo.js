
const d = document;

export default function smartVideo (video){

    const $video = d.querySelectorAll(video);

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }

    let observer = new IntersectionObserver(callback, options);
    
    observer.observe($video);


}

const callback = (entries,observer) => {
  entries.forEach(entry => {
      playVideo(entry);

  })
}

async function playVideo(videoElem) {
  try {
    await videoElem.play();
  } catch(err) {
      alert("Active los permisos de autoplay");
  }
}
