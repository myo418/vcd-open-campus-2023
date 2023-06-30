generateStickyElements();

function generateStickyElements() {
  const container = document.getElementById("container");
  const texts = {
    visualCommunicationDesign: "Visual<br>Communication<br>Design",
    nozoite: "のぞいてみよう、視デづくり!"
  }
  const classes = {
    colorBlue: 'color-blue',
    colorOrange: 'color-orange',
    fontAnthony: 'font-anthony'
  }

  const layout = {
    texts: [
      {
        top: "306px",
        left: "523px",
        angle: "-12deg",
        value: texts.visualCommunicationDesign,
        fontSize: "6vw",
        classes: [classes.fontAnthony, classes.colorOrange],
      },
      {
        top: "188px",
        left: "38px",
        angle: "10deg",
        value: texts.nozoite,
        fontSize: "1vw",
        classes: [classes.fontAnthony, classes.colorOrange],
      },
      {
        top: "232px",
        left: "26px",
        angle: "10deg",
        value: texts.nozoite,
        fontSize: "1.5vw",
        classes: [classes.fontAnthony, classes.colorOrange],
      },
      {
        top: "308px",
        left: "12px",
        angle: "5deg",
        value: texts.nozoite,
        fontSize: "2vw",
        classes: [classes.fontAnthony, classes.colorOrange],
      },
      {
        top: "159px",
        left: "1101px",
        angle: "26deg",
        value: "Open<br>CamPus",
        fontSize: "4vw",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "-10px",
        left: "1281px",
        angle: "14deg",
        value: "2023",
        fontSize: "2vw",
        classes: [classes.colorOrange],
      },
      {
        top: "60px",
        left: "1281px",
        angle: "14deg",
        value: "2023",
        fontSize: "2vw",
        classes: [classes.colorOrange],
      },
      {
        top: "140px",
        left: "1281px",
        angle: "14deg",
        value: "2023",
        fontSize: "2vw",
        classes: [classes.colorOrange],
      },
      {
        top: "50px",
        left: "50px",
        angle: "14deg",
        value: "デ",
        fontSize: "2vw",
        classes: [classes.colorOrange],
      },
    ],
    images: [
      {
        top: "100px",
        left: "900px",
        angle: "5deg",
        value: "bar-shi.svg",
        size: "4vw",
      }
    ]
  };
  
  layout.texts.forEach((text) => {
      const sticky = document.createElement("div");
      sticky.innerHTML = text.value;
      sticky.setAttribute("data-top", getAdjustedVw(text.top));
      sticky.style.top = getAdjustedVw(text.top);
      sticky.style.left = getAdjustedVw(text.left);
      sticky.style.transform = `rotate(${text.angle})`;
      sticky.style.fontSize = text.fontSize;
      sticky.classList.add("paper");
      text.classes.forEach((cls) => {
        sticky.classList.add(cls);
      });

      container.append(sticky);
  });

  layout.images.forEach((image) => {
      const sticky = document.createElement("img");
      sticky.setAttribute("data-top", getAdjustedVw(image.top));
      sticky.style.top = getAdjustedVw(image.top);
      sticky.style.left = getAdjustedVw(image.left);
      sticky.style.transform = `rotate(${image.angle})`;
      sticky.style.width = image.size;
      sticky.style.height = image.size;
      sticky.src = './images/' + image.value
      sticky.classList.add("paper");

      container.append(sticky);
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
