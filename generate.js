generateStickyElements();

function generateStickyElements() {
  const container = document.getElementById("container");
  const texts = {
    visualCommunicationDesign: "Visual<br>Communication<br>Design",
    nozoite: "のぞいてみよう、視デづくり!",
    openCampus: 'Open<br>CamPus',
    time: '9:30-18:00',
    dateFrom: '07.15 >>>',
    dateTo: '07.16',
    summary: "武蔵野美術大学 鷹の台キャンパス 8（15日のみ）・9・10号館 〒187-8505 東京都小平市小川町1-736 Google Map<br><br>入場",
    description: ""
  }
  const classes = {
    colorBlue: 'color-blue',
    colorLightBlue: 'color-light-blue',
    colorOrange: 'color-orange',
    fontAnthony: 'font-anthony'
  }

  const layout = {
    texts: [
      // center top
      {
        top: "306px",
        left: "523px",
        angle: "-12deg",
        value: texts.visualCommunicationDesign,
        fontSize: "6vw",
        classes: [classes.fontAnthony, classes.colorOrange],
      },
      {
        top: "159px",
        left: "1101px",
        angle: "26deg",
        zIndex: 3,
        value: texts.openCampus,
        fontSize: "4vw",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "338px",
        left: "500px",
        angle: "5deg",
        zIndex: 3,
        value: texts.nozoite,
        fontSize: "1.5vw",
        classes: [classes.fontAnthony, classes.colorOrange],
      },
      {
        top: "700px",
        left: "900px",
        angle: "14deg",
        zIndex: 3,
        value: "SAT",
        fontSize: "1.5vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "730px",
        left: "800px",
        angle: "14deg",
        zIndex: 3,
        value: "07.15 >>> ",
        fontSize: "3vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "780px",
        left: "800px",
        angle: "14deg",
        zIndex: 3,
        value: "07.16",
        fontSize: "3vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "820px",
        left: "800px",
        angle: "14deg",
        zIndex: 3,
        value: "SUN",
        fontSize: "1.5vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "810px",
        left: "1000px",
        angle: "-14deg",
        zIndex: 3,
        value: texts.time,
        fontSize: "2vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "900px",
        left: "1100px",
        angle: "14deg",
        zIndex: 3,
        value: "Communication",
        fontSize: "2vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "880px",
        left: "1300px",
        angle: "-14deg",
        zIndex: 1,
        value: "視",
        fontSize: "10vw",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      // left top
      {
        top: "188px",
        left: "38px",
        angle: "10deg",
        zIndex: 2,
        value: texts.nozoite,
        fontSize: "1vw",
        classes: [classes.fontAnthony, classes.colorOrange],
      },
      {
        top: "232px",
        left: "26px",
        angle: "10deg",
        zIndex: 2,
        value: texts.nozoite,
        fontSize: "1.5vw",
        classes: [classes.fontAnthony, classes.colorOrange],
      },
      {
        top: "308px",
        left: "12px",
        angle: "5deg",
        zIndex: 3,
        value: texts.nozoite,
        fontSize: "2vw",
        classes: [classes.fontAnthony, classes.colorOrange],
      },
      {
        top: "108px",
        left: "-400px",
        angle: "120deg",
        value: texts.visualCommunicationDesign,
        fontSize: "6vw",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "308px",
        left: "-50px",
        angle: "-75deg",
        zIndex: 1,
        value: texts.openCampus,
        fontSize: "5vw",
        classes: [classes.fontAnthony, classes.colorOrange],
      },
      {
        top: "608px",
        left: "12px",
        angle: "170deg",
        value: '9:30',
        fontSize: "2vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "750px",
        left: "12px",
        angle: "130deg",
        zIndex: 1,
        value: '07.16',
        fontSize: "6vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "808px",
        left: "150px",
        angle: "-15deg",
        value: texts.time,
        fontSize: "2vw",
        classes: [classes.fontAnthony, classes.colorOrange],
      },
      {
        top: "858px",
        left: "12px",
        angle: "-10deg",
        zIndex: 2,
        value: texts.time,
        fontSize: "4vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      // right top
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
        left: "1231px",
        angle: "14deg",
        value: "2023",
        fontSize: "2vw",
        classes: [classes.colorOrange],
      },
      {
        top: "140px",
        left: "1381px",
        angle: "14deg",
        value: "2023",
        fontSize: "2vw",
        classes: [classes.colorOrange],
      },
      {
        top: "0px",
        left: "1581px",
        angle: "170deg",
        value: texts.nozoite,
        fontSize: "2vw",
        classes: [classes.colorOrange],
      },
      {
        top: "30px",
        left: "1681px",
        angle: "170deg",
        value: texts.nozoite,
        fontSize: "2vw",
        classes: [classes.colorOrange],
      },
      {
        top: "140px",
        left: "1681px",
        angle: "-150deg",
        value: "Design",
        fontSize: "2vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "540px",
        left: "1681px",
        angle: "-14deg",
        value: "デ",
        fontSize: "12vw",
        classes: [classes.colorBlue],
      },
      {
        top: "640px",
        left: "1681px",
        angle: "-34deg",
        value: "デ",
        fontSize: "8vw",
        classes: [classes.colorBlue],
      },
      {
        top: "140px",
        left: "1381px",
        angle: "14deg",
        value: texts.time,
        fontSize: "2vw",
        classes: [classes.colorOrange],
      },
      {
        top: "900px",
        left: "1681px",
        angle: "130deg",
        value: texts.time,
        fontSize: "2vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      // middle
      {
        top: "1200px",
        left: "300px",
        angle: "10deg",
        value: 'Communication',
        fontSize: "2vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "1300px",
        left: "100px",
        angle: "14deg",
        value: '2023',
        fontSize: "2vw",
        classes: [classes.colorOrange],
      },
      {
        top: "1350px",
        left: "90px",
        angle: "14deg",
        value: '2023',
        fontSize: "2vw",
        classes: [classes.colorOrange],
      },
      {
        top: "1200px",
        left: "900px",
        angle: "14deg",
        value: '2023',
        fontSize: "2vw",
        classes: [classes.colorOrange],
      },
      {
        top: "1250px",
        left: "850px",
        angle: "14deg",
        value: '2023',
        fontSize: "2vw",
        classes: [classes.colorOrange],
      },
      {
        top: "1500px",
        left: "0px",
        angle: "65deg",
        value: texts.visualCommunicationDesign,
        fontSize: "4vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "1600px",
        left: "400px",
        angle: "10deg",
        value: texts.dateFrom,
        fontSize: "4vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "1650px",
        left: "200px",
        angle: "-10deg",
        value: texts.time,
        fontSize: "4vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "1500px",
        left: "700px",
        angle: "-10deg",
        zIndex: 5,
        value: texts.nozoite,
        fontSize: "2vw",
        classes: [classes.fontAnthony, classes.colorOrange],
      },
      {
        top: "1500px",
        left: "1000px",
        angle: "-10deg",
        zIndex: 6,
        value: texts.visualCommunicationDesign,
        fontSize: "4vw",
        classes: [classes.fontAnthony, classes.colorOrange],
      },
      {
        top: "1700px",
        left: "1000px",
        angle: "-10deg",
        zIndex: 6,
        value: texts.time,
        fontSize: "4vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      // bottom
      {
        top: "1800px",
        left: "-130px",
        angle: "15deg",
        zIndex: 40,
        value: texts.dateTo,
        fontSize: "15vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "2300px",
        left: "300px",
        angle: "-15deg",
        zIndex: 40,
        value: texts.time,
        fontSize: "4vw",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },

      {
        top: "1800px",
        left: "800px",
        angle: "10deg",
        zIndex: 41,
        value: texts.visualCommunicationDesign,
        fontSize: "8vw",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
    ],
    images: [
      // top center
      {
        top: "150px",
        left: "750px",
        angle: "5deg",
        zIndex: 2,
        value: "bar-shi.svg",
        size: "16vw",
      },
      {
        top: "500px",
        left: "1000px",
        angle: "14deg",
        zIndex: 3,
        value: "bar-de.svg",
        fontSize: "6vw",
      },
      // top left
      {
        top: "0px",
        left: "150px",
        angle: "10deg",
        zIndex: 2,
        value: "bone-shi.svg",
        size: "16vw",
      },
      {
        top: "-200px",
        left: "300px",
        angle: "10deg",
        zIndex: 1,
        value: "bone-de.svg",
        size: "16vw",
      },
      // top right
      {
        top: "100px",
        left: "1700px",
        angle: "10deg",
        zIndex: 2,
        value: "bone-de.svg",
        size: "16vw",
      },
      {
        top: "500px",
        left: "1800px",
        angle: "-10deg",
        zIndex: 2,
        value: "bone-shi.svg",
        size: "16vw",
      },
      {
        top: "500px",
        left: "1700px",
        angle: "-10deg",
        zIndex: 1,
        value: "bone-de.svg",
        size: "10vw",
      },
      // bottom
      {
        top: "1300px",
        left: "1700px",
        angle: "-20deg",
        zIndex: 40,
        value: "bar-de.svg",
        size: "15vw",
      },
      {
        top: "1500px",
        left: "700px",
        angle: "-10deg",
        zIndex: 40,
        value: "bone-de.svg",
        size: "10vw",
      },
      {
        top: "1600px",
        left: "400px",
        angle: "-10deg",
        zIndex: 40,
        value: "bone-de.svg",
        size: "10vw",
      },
      {
        top: "1800px",
        left: "700px",
        angle: "110deg",
        zIndex: 40,
        value: "bar-shi.svg",
        size: "10vw",
      },
      {
        top: "2000px",
        left: "600px",
        angle: "-10deg",
        zIndex: 40,
        value: "bar-de.svg",
        size: "12vw",
      },
      {
        top: "2100px",
        left: "1500px",
        angle: "-10deg",
        zIndex: 40,
        value: "bar-de.svg",
        size: "102w",
      },

    ]
  };
  
  layout.texts.forEach((text) => {
      const sticky = document.createElement("div");
      sticky.innerHTML = text.value;
      sticky.setAttribute("data-top", getAdjustedVw(text.top));
      sticky.setAttribute("data-left", getAdjustedVw(text.left));
      sticky.style.top = getAdjustedVw(text.top);
      sticky.style.left = getAdjustedVw(text.left);
      sticky.style.zIndex = text.zIndex;
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
      sticky.setAttribute("data-left", getAdjustedVw(image.left));
      sticky.style.top = getAdjustedVw(image.top);
      sticky.style.left = getAdjustedVw(image.left);
      sticky.style.zIndex = image.zIndex;
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
