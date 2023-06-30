generateStickyElements();

function generateStickyElements() {
  const container = document.getElementById("container");

  const layout = {
    parts: [
      {
        top: "456px",
        left: "523px",
        angle: "-12deg",
        type: "text",
        value: "Visual<br>Communication<br>Design",
        fontSize: "7vw",
        classes: ["font-anthony", "color-orange"],
      },
      {
        top: "159px",
        left: "1101px",
        angle: "26deg",
        type: "text",
        value: "Open<br>CamPus",
        fontSize: "4vw",
        classes: ["font-anthony", "outline-blue"],
      },
      {
        top: "0px",
        left: "1281px",
        angle: "14deg",
        type: "text",
        value: "2023",
        fontSize: "2vw",
        classes: ["outline-orange"],
      },
      {
        top: "50px",
        left: "50px",
        angle: "14deg",
        type: "text",
        value: "デ",
        fontSize: "2vw",
        classes: ["outline-orange"],
      },
    ],
  };
  
  layout.parts.forEach((part) => {
    if (part.type === "text") {
      const sticky = document.createElement("div");
      sticky.innerHTML = part.value;
      sticky.setAttribute("data-top", getAdjustedVw(part.top));
      sticky.style.top = getAdjustedVw(part.top);
      sticky.style.left = getAdjustedVw(part.left);
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

function getAdjustedVw(size) {
  if (typeof size !== "string") return null;
  if (size.endsWith("vw")) return size;
  if (size.endsWith("px")) {
    const pixel = size.slice(0, size.length - 2);
    return (pixel  / 1920) * 100 + "vw";
  }
  return null;
}
