let isMenuOpen = false;

fixStickyElementPositions();
window.addEventListener("scroll", fixStickyElementPositions);

for (const button of document.getElementsByClassName("menu")) {
  button.onclick = () => {
    document.getElementById("container").classList.add("open");
    document.getElementById("container-sp").classList.add("open");
    isMenuOpen = true;
    addMenuToggleAnimation();
  };
}

for (const button of document.getElementsByClassName("close")) {
  button.onclick = () => closeMenu();
}

for (const button of document.getElementsByClassName("home-button")) {
  button.onclick = () => closeMenu();
}
for (const button of document.getElementsByClassName("workshop-button")) {
  button.onclick = () => closeMenu();
}
for (const button of document.getElementsByClassName("talk-event-button")) {
  button.onclick = () => closeMenu();
}

function closeMenu() {
  document.getElementById("container").classList.remove("open");
  document.getElementById("container-sp").classList.remove("open");
  isMenuOpen = false;
  addMenuToggleAnimation();
}

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
        elm.style.top = dataTopPixel < 0 ? top : 0;
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
      const elmCenter = getAdjustedPixel(dataLeft) + elm.offsetWidth / 2;
      const isLeft = elmCenter < screen.width / 2;
      const leftTarget = toVw(-elm.offsetWidth * 0.7);
      const rightTarget = toVw(screen.width - elm.offsetWidth * 0.3);

      const targetLeft = isMenuOpen
        ? isLeft
          ? leftTarget
          : rightTarget
        : dataLeft;
      elm.animate(
        {
          left: [elm.style.left, targetLeft],
        },
        {
          fill: "forwards",
          duration: 100,
        }
      );
      elm.style.left = targetLeft;
    }
  });

  const menuButtons = document.querySelectorAll(".menu-button");
  menuButtons.forEach((elm) => {
    if (elm.getAttribute("data-left") !== null) {
      const dataLeft = elm.getAttribute("data-left");
      const elmCenter = getAdjustedPixel(dataLeft) + elm.offsetWidth / 2;
      const isLeft = elmCenter < screen.width / 2;

      const targetLeft = isMenuOpen ? dataLeft : isLeft ? "-80vw" : "180vw";
      elm.animate(
        {
          left: [elm.style.left, targetLeft],
        },
        {
          fill: "forwards",
          duration: 200,
        }
      );
      elm.style.left = targetLeft;
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
  return (pixel / screen.width) * 100 + "vw";
}
