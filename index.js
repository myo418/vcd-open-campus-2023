let isMenuOpen = false;

fixStickyElementPositions();
window.addEventListener("scroll", fixStickyElementPositions);

document.getElementById("menu").onclick = () => {
  document.getElementById("menu-container").classList.add("open")
  isMenuOpen = true;
};

document.getElementById("close").onclick = () => {
  document.getElementById("menu-container").classList.remove("open")
  isMenuOpen = false;
};

function fixStickyElementPositions() {
  const elms = document.querySelectorAll(".paper");
  elms.forEach((elm) => {
    let dataTopPixel = getAdjustedPixel(elm.getAttribute("data-top"));
    if (dataTopPixel !== null) {
      if (window.scrollY < dataTopPixel) {
        elm.style.top = dataTopPixel + "px";
        elm.style.position = "absolute";
      } else {
        elm.style.top = 0;
        elm.style.position = "fixed";
      }
    }
    let dataLeftPixel = getAdjustedPixel(elm.getAttribute("data-left"));
    if (dataLeftPixel !== null) {
      elm.style.left = dataLeftPixel + "px";
    }
    let dataRightPixel = getAdjustedPixel(elm.getAttribute("data-right"));
    if (dataRightPixel !== null) {
      elm.style.right = dataRightPixel + "px";
    }
  });
}

function getAdjustedPixel(size) {
  if (typeof size !== "string") return null;
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
