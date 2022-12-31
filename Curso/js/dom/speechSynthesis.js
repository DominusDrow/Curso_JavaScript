const d = document;

export default function speechSynthesis(select, text, voice) {
    const $speechSelect = d.querySelector(select),
        $speechTextarea = d.querySelector(text),
        $speechBtn = d.querySelector(voice);
    
    let utterance = new SpeechSynthesisUtterance();
    
    d.addEventListener("change", (e) => {
        if (e.target === $speechSelect) {
        utterance.voice = speechSynthesis.getVoices().find(
            (voice) => voice.name === e.target.value
        );
        }
    });
    
    d.addEventListener("click", (e) => {
        if (e.target === $speechBtn) {
        utterance.text = $speechTextarea.value;
        speechSynthesis.speak(utterance);
        }
    });
    
    try {

    speechSynthesis.addEventListener("voiceschanged", (e) => {
        console.log(speechSynthesis.getVoices());
        $speechSelect.innerHTML = speechSynthesis
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

