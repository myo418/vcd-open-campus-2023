const container = document.getElementById("container");
generateStickyElements();

const elms = document.querySelectorAll(".paper");
fixStickyElementPositions();
window.addEventListener("scroll", fixStickyElementPositions);

function generateStickyElements() {
  const layout = {
    parts: [
      {
        x: "50vw",
        y: "15vw",
        angle: "30deg",
        type: "text",
        value: "Visual<br>Communication<br>Design",
        fontSize: "2vw",
        classes: ["font-anthony", "color-orange"],
      },
      {
        x: "60vw",
        y: "10vw",
        angle: "15deg",
        type: "text",
        value: "Open<br>CamPus",
        fontSize: "1vw",
        classes: ["font-anthony", "color-blue"],
      },
      // {x: 0, y: 0, angle: 0, type: 'image', value: 'char-de.svg', width: '100px', height: '100px'}
    ],
  };
  layout.parts.forEach((part) => {
    if (part.type === "text") {
      const sticky = document.createElement("div");
      sticky.innerHTML = part.value;
      sticky.setAttribute("data-top", part.y);
      sticky.style.top = part.y;
      sticky.style.left = part.x;
      sticky.style.transform = "rotate(" + part.angle + ")";
      sticky.style.fontSize = part.fontSize;
      sticky.classList.add("paper");
      part.classes.forEach(cls => {
        sticky.classList.add(cls);
      })
      
      container.append(sticky);
    }
  });
}

function fixStickyElementPositions() {
  const screenWidth = document.documentElement.clientWidth;
  elms.forEach((elm) => {
    const dataTop = elm.getAttribute("data-top");
    const dataTopVw = dataTop.slice(0, dataTop.length - 2);
    const dataTopPixel = (dataTopVw * screenWidth) / 100;
    if (window.scrollY < dataTopPixel) {
      elm.style.top = dataTop;
      elm.style.position = "absolute";
    } else {
      elm.style.top = 0;
      elm.style.position = "fixed";
    }
  });
}
