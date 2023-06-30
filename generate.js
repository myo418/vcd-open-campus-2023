generateStickyElements();

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

function generateStickyElements() {
  const container = document.getElementById("container");

  const layout = {
    parts: [
      {
        x: "523px",
        y: "456px",
        angle: "-12deg",
        type: "text",
        value: "Visual<br>Communication<br>Design",
        fontSize: "7vw",
        classes: ["font-anthony", "color-orange"],
      },
      {
        x: "1101px",
        y: "159px",
        angle: "26deg",
        type: "text",
        value: "Open<br>CamPus",
        fontSize: "4vw",
        classes: ["font-anthony", "outline-blue"],
      },
      {
        x: "1281px",
        y: "0px",
        angle: "14deg",
        type: "text",
        value: "2023",
        fontSize: "4vw",
        classes: ["outline-orange"],
      },
      // {x: 0, y: 0, angle: 0, type: 'image', value: 'char-de.svg', width: '100px', height: '100px'}
    ],
  };
  
  layout.parts.forEach((part) => {
    if (part.type === "text") {
      const sticky = document.createElement("div");
      sticky.innerHTML = part.value;
      sticky.setAttribute("data-top", part.y);
      sticky.style.top = getAdjustedPixel(part.y) + "px";
      sticky.style.left = getAdjustedPixel(part.x) + "px";
      sticky.style.transform = `rotate(${part.angle})`;
      sticky.style.fontSize = part.fontSize;
      sticky.classList.add("paper");
      part.classes.forEach((cls) => {
        sticky.classList.add(cls);
      });

      container.append(sticky);
    }
  });
}

