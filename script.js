const API_URL = "https://your-api-endpoint.com/analyze"; // Replace with your actual API

function startAnalysis() {
  const userInput = prompt("Enter your text for analysis:");
  if (!userInput) {
    alert("Please enter some text!");
    return;
  }

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: userInput })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.hateSpeech ? "⚠️ Hate speech detected!" : "✅ Clean content.");
  })
  .catch(() => alert("Something went wrong!"));
}

function analyzeText() {
  const inputText = document.getElementById("inputText").value;
  const resultElement = document.getElementById("result");

  resultElement.innerText = "Analyzing...";

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: inputText })
  })
  .then(res => res.json())
  .then(data => {
    resultElement.innerText = data.hateSpeech ? "⚠️ Hate Speech Detected!" : "✅ Text is clean.";
  })
  .catch(() => {
    resultElement.innerText = "❌ Error analyzing text.";
  });
}
