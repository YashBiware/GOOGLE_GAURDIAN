console.log("🛡️ Google Guardian is active!");

// Keywords to detect (lowercase only)
const hateKeywords = [" hate ", " kill ", " racist ", " violence ", " die ", " bomb ", " attack ", " dumb "];

// Function to scan tweets
function scanTweets() {
  const tweetTextBlocks = document.querySelectorAll("article div[lang]");

  tweetTextBlocks.forEach((textElement) => {
    const parentTweet = textElement.closest("article");

    // Skip already scanned tweets
    if (parentTweet.getAttribute("data-google-guardian") === "true") return;

    const tweetText = ` ${textElement.innerText.toLowerCase()} `; // Add padding spaces

    for (const word of hateKeywords) {
      if (tweetText.includes(word)) {
        console.log("⚠️ Hate speech detected:", tweetText);

        parentTweet.style.backgroundColor = "rgba(255, 0, 0, 0.15)";
        parentTweet.style.border = "2px solid red";
        parentTweet.setAttribute("data-google-guardian", "true");

        // Add warning banner
        const warning = document.createElement("div");
        warning.innerText = "⚠️ Hate Speech Detected";
        warning.style.backgroundColor = "red";
        warning.style.color = "white";
        warning.style.fontWeight = "bold";
        warning.style.padding = "5px";
        warning.style.marginBottom = "5px";
        warning.style.borderRadius = "6px";
        warning.style.fontSize = "14px";

        textElement.parentNode.insertBefore(warning, textElement);
        break;
      }
    }
  });
}

// Initial scan and dynamic updates
window.addEventListener("load", () => {
  scanTweets();
  setInterval(scanTweets, 4000); // Re-scan every 4s for new tweets
});
