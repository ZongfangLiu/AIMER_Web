function copyBibTeX() {
  const bibtexElement = document.getElementById("bibtex-code");
  const button = document.querySelector(".copy-bibtex-btn");
  const copyText = button ? button.querySelector(".copy-text") : null;

  if (!bibtexElement || !button || !copyText) {
    return;
  }

  navigator.clipboard.writeText(bibtexElement.textContent).then(function() {
    button.classList.add("copied");
    copyText.textContent = "Copied";

    window.setTimeout(function() {
      button.classList.remove("copied");
      copyText.textContent = "Copy";
    }, 1800);
  }).catch(function() {
    const textArea = document.createElement("textarea");
    textArea.value = bibtexElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    button.classList.add("copied");
    copyText.textContent = "Copied";
    window.setTimeout(function() {
      button.classList.remove("copied");
      copyText.textContent = "Copy";
    }, 1800);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const copyButton = document.querySelector(".copy-bibtex-btn");
  if (copyButton) {
    copyButton.addEventListener("click", copyBibTeX);
  }

  if (typeof bulmaCarousel !== "undefined") {
    bulmaCarousel.attach("#results-carousel", {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      autoplay: false
    });
  }
});
