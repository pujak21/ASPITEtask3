document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector(".textarea");
    const button = document.getElementById("button");

    if (text && button) {
        button.addEventListener('click', function () {
            const speechSynth = window.speechSynthesis;
            const enteredText = text.value;
            const error = document.getElementById("error");

            if (!enteredText.trim().length) {
                error.textContent = "Nothing to Convert! Enter text in the text area.";
            } else {
                error.textContent = "";
                const newUtterance = new SpeechSynthesisUtterance(enteredText);
                speechSynth.speak(newUtterance);
                button.textContent = "Sound is Playing...";

                newUtterance.onend = function () {
                    button.textContent = "Convert to Speech";
                };
            }
        });
    } else {
        console.error("Text area or button not found in the DOM.");
    }
});




