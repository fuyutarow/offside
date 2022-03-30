// paywall = document.querySelector('div[data-atlas-trackable="paywall"]');
// paywall.parentElement.removeChild(paywall);


if (location.href.startsWith("https://www.slideshare.net")) {
  const clean = () => {
    document.querySelector("#scribd-ad-exit-modal > div.scribd-ad-modal-wrapper").remove()
    document.querySelector('#new-player > div.limit-overlay').remove()
  }
  clean()
  // setInterval(clean, 500);
}
