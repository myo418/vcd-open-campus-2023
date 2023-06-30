let isMenuOpen = false;

fixStickyElementPositions();
window.addEventListener("scroll", fixStickyElementPositions);

document.getElementById("menu").onclick = () => {
  document.getElementById("menu-container").classList.add("open");
  isMenuOpen = true;
};

document.getElementById("close").onclick = () => {
  document.getElementById("menu-container").classList.remove("open");
  isMenuOpen = false;
};

function fixStickyElementPositions() {
  const elms = document.querySelectorAll(".paper");
  elms.forEach((elm) => {
    const top = elm.getAttribute("data-top")
    let dataTopPixel = getAdjustedPixel(top);
    if (dataTopPixel !== null) {
      if (window.scrollY < dataTopPixel) {
        elm.style.top = top;
        elm.style.position = "absolute";
      } else {
        elm.style.top = 0;
        elm.style.position = "fixed";
      }
    }

    if (elm.getAttribute("data-left") !== null) {
      elm.style.left = elm.getAttribute("data-left");
    }

    if (elm.getAttribute("data-right") !== null) {
      elm.style.right = elm.getAttribute("data-right");
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

