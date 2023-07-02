let isMenuOpen = false;

fixStickyElementPositions();
window.addEventListener("scroll", fixStickyElementPositions);

document.getElementById("menu").onclick = () => {
  document.getElementById("container").classList.add("open");
  isMenuOpen = true;
  addMenuToggleAnimation();
};

document.getElementById("close").onclick = () => {
  document.getElementById("container").classList.remove("open");
  isMenuOpen = false;
  addMenuToggleAnimation();
};

function fixStickyElementPositions() {
  const elms = document.querySelectorAll(".paper");
  elms.forEach((elm) => {
    const top = elm.getAttribute("data-top");
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
  });
}

function addMenuToggleAnimation() {
  const elms = document.querySelectorAll(".paper");
  elms.forEach((elm) => {
    if (elm.getAttribute("data-left") !== null) {
      const dataLeft = elm.getAttribute("data-left");
      const elmCenter = getAdjustedPixel(elm.style.left) + elm.offsetWidth / 2;
      const isLeft = elmCenter < screen.width / 2;
      const leftTarget = toVw(-elm.offsetWidth / 4);
      const rightTarget = toVw(screen.width - elm.offsetWidth /4 );

      console.log('----')
      console.log(elm.offsetWidth)
      console.log(elmCenter)
      console.log(screen.width)
      console.log(isLeft)
      console.log(leftTarget)
      console.log(rightTarget)

      const targetLeft = isMenuOpen
        ? isLeft
          ? leftTarget
          : rightTarget
        : dataLeft;
      console.log(targetLeft)
        elm.animate(
        {
          left: [elm.clientLeft, targetLeft],
        },
        {
          fill: "forwards",
          duration: 100,
        }
      );
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

function toVw(pixel) {
  return pixel / screen.width * 100 + 'vw';
}
