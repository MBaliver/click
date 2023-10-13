document.addEventListener("DOMContentLoaded", function () {
  var copyButton = document.getElementById("copyPixButton");
  var initialButtonText = copyButton.textContent;

  copyButton.addEventListener("click", function (event) {
    var fullURL = copyButton.href;
    var lastNumbers = getLastNumbersFromURL(fullURL);

    var textArea = document.createElement("textarea");
    textArea.value = lastNumbers;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    // You can add feedback to let the user know that the URL has been copied
    copyButton.textContent = "Chave Pix Copiada!";

    // Reset the button text after a brief delay
    setTimeout(function() {
      copyButton.textContent = initialButtonText;
    }, 1500);

    event.preventDefault();
  });

  // Function to extract the last numbers from a URL
  function getLastNumbersFromURL(url) {
    var regex = /\/(\d+)$/; // Matches the last numbers following a slash
    var match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    } else {
      return "";
    }
  }
});

