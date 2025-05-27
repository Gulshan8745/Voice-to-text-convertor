document.addEventListener("DOMContentLoaded", () => {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  const languageSelect = document.getElementById("language");
  const resultContainer = document.querySelector(".result p.resultText");
  const startListeningButton = document.querySelector(".btn.record");
  const recordButtonText = document.querySelector(".btn.record p");
  const clearButton = document.querySelector(".btn.clear");
  const downloadButton = document.querySelector(".btn.download");

  let recognizing = false;

  languages.forEach((language) => {
    const option = document.createElement("option");
    option.value = language[0].code;
    option.text = language[0].name;
    languageSelect.add(option);
  });
});
