fixStickyElementPositions();
window.addEventListener("scroll", fixStickyElementPositions);

function fixStickyElementPositions() {
  const elms = document.querySelectorAll(".paper");
  elms.forEach((elm) => {
    const dataTop = elm.getAttribute("data-top");
    let dataTopPixel = getAdjustedPixel(dataTop);
    if (dataTopPixel === null) return;

    if (window.scrollY < dataTopPixel) {
      elm.style.top = dataTopPixel + "px";
      elm.style.position = "absolute";
    } else {
      elm.style.top = 0;
      elm.style.position = "fixed";
    }
  });
}

function getAdjustedPixel(size) {
  const screenWidth = document.documentElement.clientWidth;
  if (size.endsWith("px")) {
    const dataTopPxAs1920 = size.slice(0, size.length - 2);
    return (dataTopPxAs1920 * screenWidth) / 1920;
  } else if (size.endsWith("vw")) {
    const dataTopVw = size.slice(0, size.length - 2);
    return (dataTopVw * screenWidth) / 100;
  } else {
    return null;
  }
}
