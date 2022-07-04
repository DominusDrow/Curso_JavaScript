
const d = document;

export default function smartVideo (video){

    const $video = d.querySelector(video);

    playVideo($video);

}

async function playVideo(videoElem) {
  try {
    await videoElem.play();
  } catch(err) {
      alert("No se pudo reproducir el video");
  }
}
