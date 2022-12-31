const d = document;
const w = window;

export default function speechSynthesis(select, text, voice) {
    const $speechSelect = d.querySelector(select),
        $speechTextarea = d.querySelector(text),
        $speechBtn = d.querySelector(voice);
    
    let utterance = new SpeechSynthesisUtterance();
    
    d.addEventListener("change", (e) => {
        if (e.target === $speechSelect) {
        utterance.voice = w.speechSynthesis.getVoices().find(
            (voice) => voice.name === e.target.value
        );
        }
    });
    
    d.addEventListener("click", (e) => {
        if (e.target === $speechBtn) {
        utterance.text = $speechTextarea.value;
        w.speechSynthesis.speak(utterance);
        }
    });

    
    try {

    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
        console.log(w.speechSynthesis.getVoices());
        $speechSelect.innerHTML = w.speechSynthesis
        .getVoices()
        .map((voice) => `<option value="${voice.name}">${voice.name}</option>`)
        .join("");
    });

    }
    catch (e) {
        $speechBtn.disabled = true;
        $speechSelect.disabled = true;
        $speechTextarea.disabled = true;
        $speechBtn.textContent = "Tu navegador no soporta esta característica";
    }
}

