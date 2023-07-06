generateStickyElements();

function generateStickyElements() {
  const container = document.getElementById("container");
  const texts = {
    visualCommunicationDesign: "Visual<br>Communication<br>Design",
    nozoite: "のぞいてみよう、視デづくり!",
    openCampus: 'Open<br>CamPus',
    time: '9:30-16:30',
    dateFrom: '07.15 >>>',
    dateTo: '07.16',
    summary: "武蔵野美術大学 鷹の台キャンパス 8（15日のみ）・9・10号館 〒187-8505 東京都小平市小川町1-736 Google Map<br><br>入場",
    description: ""
  }
  const images = {
    barShi: "bar-shi.svg",
    barDe: "bar-de.svg",
    boneShi: "bone-shi.svg",
    boneDe: "bone-de.svg",
    roundShi: "round-shi.svg",
    roundDe: "round-de.svg",
    nozoite: "text-nozoite.svg",
    register: "text-register.svg",
    year: "text-year.svg",
    place: "text-place.svg",
    time: "text-time.svg",
  }
  const classes = {
    colorBlue: 'color-blue',
    colorLightBlue: 'color-light-blue',
    colorOrange: 'color-orange',
    outlineBlue: 'outline-blue',
    outlineOrange: 'outline-orange',
    fontAnthony: 'font-anthony',
    fontAnthonyMultiLine: 'font-anthony-multi-line'
  }

  const layout = {
    texts: [
      // center top
      {
        top: "525px",
        left: "458px",
        angle: "-14deg",
        value: texts.visualCommunicationDesign,
        fontSize: "120px",
        classes: [classes.fontAnthonyMultiLine, classes.colorOrange],
      },
      {
        top: "316px",
        left: "1034px",
        angle: "26deg",
        zIndex: 3,
        value: texts.openCampus,
        fontSize: "120px",
        classes: [classes.fontAnthonyMultiLine, classes.outlineBlue],
      },
      {
        top: "903px",
        left: "783px",
        angle: "-2deg",
        zIndex: 4,
        value: "SAT",
        fontSize: "55px",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "932px",
        left: "470px",
        angle: "4.5deg",
        zIndex: 3,
        value: "07.15 >>> ",
        fontSize: "120px",
        classes: [classes.fontAnthony, classes.colorLightBlue],
      },
      {
        top: "1047px",
        left: "540px",
        angle: "-2deg",
        zIndex: 4,
        value: "07.16",
        fontSize: "120px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "1169px",
        left: "501px",
        angle: "-2deg",
        zIndex: 5,
        value: "SUN",
        fontSize: "55px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "1156px",
        left: "776px",
        angle: "-10deg",
        zIndex: 3,
        value: texts.time,
        fontSize: "55px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      // left top
      {
        top: "76px",
        left: "-275px",
        angle: "120deg",
        value: texts.visualCommunicationDesign,
        fontSize: "120px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "413px",
        left: "-66px",
        angle: "-42deg",
        zIndex: 4,
        value: texts.openCampus,
        fontSize: "60px",
        classes: [classes.fontAnthony, classes.outlineOrange],
      },
      {
        top: "934px",
        left: "-426px",
        angle: "130deg",
        zIndex: 1,
        value: texts.dateFrom,
        fontSize: "220px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      // right top
      {
        top: "87px",
        left: "1488px",
        angle: "-147deg",
        zIndex: 1,
        value: "Design",
        fontSize: "120px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "427px",
        left: "1701px",
        angle: "4.5deg",
        zIndex: 1,
        value: "Visual",
        fontSize: "120px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      // middle 1 left
      {
        top: "1402px",
        left: "147px",
        angle: "-133deg",
        zIndex: 11,
        value: texts.dateFrom,
        fontSize: "100px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "1644px",
        left: "22px",
        angle: "18deg",
        zIndex: 11,
        value: texts.time,
        fontSize: "55px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "1656px",
        left: "303px",
        angle: "-19deg",
        zIndex: 11,
        value: texts.dateFrom,
        fontSize: "120px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      // middle 1 right
      {
        top: "1390px",
        left: "1157px",
        angle: "4.5deg",
        zIndex: 11,
        value: "Communication",
        fontSize: "82px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      // middle 2
      {
        top: "2102px",
        left: "58px",
        angle: "-29deg",
        zIndex: 20,
        value: texts.openCampus,
        fontSize: "120px",
        classes: [classes.fontAnthonyMultiLine, classes.outlineOrange],
      },
      {
        top: "2437px",
        left: "991px",
        angle: "5deg",
        zIndex: 20,
        value: texts.time,
        fontSize: "320px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "2581px",
        left: "893px",
        angle: "-17deg",
        zIndex: 21,
        value: "Communication",
        fontSize: "180px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "2612px",
        left: "-30px",
        angle: "-12deg",
        zIndex: 23,
        value: texts.visualCommunicationDesign,
        fontSize: "170px",
        classes: [classes.fontAnthonyMultiLine, classes.colorBlue],
      },
      // workshop
      {
        top: "4033px",
        left: "519px",
        angle: "-15deg",
        zIndex: 31,
        value: "Workshop",
        fontSize: "160px",
        classes: [classes.fontAnthony, classes.colorOrange],
        id: "workshop"
      },
      {
        top: "4569px",
        left: "-21px",
        angle: "-133deg",
        zIndex: 30,
        value: texts.dateFrom,
        fontSize: "100px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "4744px",
        left: "1772px",
        angle: "-175deg",
        zIndex: 32,
        value: texts.dateFrom,
        fontSize: "220px",
        classes: [classes.fontAnthonyMultiLine, classes.colorBlue],
      },
      // talk event
      {
        top: "5009px",
        left: "569px",
        angle: "6deg",
        zIndex: 31,
        value: "Talk Event",
        fontSize: "160px",
        classes: [classes.fontAnthony, classes.colorOrange],
        id: "talk-event"
      },
      // bottom      
      {
        top: "6089.93px",
        left: "-187.84px",
        angle: "-19.47deg",
        zIndex: 47,
        value: texts.dateFrom,
        fontSize: "120px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "6060.4px",
        left: "-91.28px",
        angle: "-28.82deg",
        zIndex: 46,
        value: texts.openCampus,
        fontSize: "120px",
        classes: [classes.fontAnthonyMultiLine, classes.outlineOrange],
      },
      {
        top: "6694.11px",
        left: "-117.33px",
        angle: "4.62deg",
        zIndex: 40,
        value: "Communication",
        fontSize: "80px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "6791.46px",
        left: "494.4px",
        angle: "173.28deg",
        zIndex: 48,
        value: texts.openCampus,
        fontSize: "110px",
        classes: [classes.fontAnthonyMultiLine, classes.outlineOrange],
      },
      {
        top: "6258.57px",
        left: "1585.34px",
        angle: "105.69deg",
        zIndex: 40,
        value: texts.dateTo,
        fontSize: "210px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "6324.54px",
        left: "1089.67px",
        angle: "-11.94deg",
        zIndex: 42,
        value: texts.openCampus,
        fontSize: "320px",
        classes: [classes.fontAnthonyMultiLine, classes.outlineOrange],
      },
      {
        top: "6842.26px",
        left: "629.92px",
        angle: "-25.2deg",
        zIndex: 44,
        value: texts.visualCommunicationDesign,
        fontSize: "190px",
        classes: [classes.fontAnthonyMultiLine, classes.colorBlue],
      },
    ],
    images: [
      // top center
      {
        top: "188px",
        left: "692px",
        angle: "7deg",
        zIndex: 2,
        value: images.barShi,
        size: "356px",
      },
      {
        top: "782px",
        left: "936px",
        angle: "22deg",
        zIndex: 3,
        value: images.barDe,
        fontSize: "362px",
      },
      {
        top: "531px",
        left: "465px",
        angle: "7deg",
        zIndex: 3,
        value: images.nozoite,
        size: "372px",
      },
      {
        top: "743px",
        left: "1115px",
        angle: "7.5deg",
        zIndex: 3,
        value: images.place,
        size: "329px",
      },
      // top left
      {
        top: "246px",
        left: "62px",
        angle: "-3deg",
        zIndex: 2,
        value: images.nozoite,
        size: "18.5vw",
      },
      {
        top: "301px",
        left: "-6px",
        angle: "-3deg",
        zIndex: 3,
        value: images.nozoite,
        ize: "24.5vw",
      },
      {
        top: "366px",
        left: "-33px",
        angle: "7deg",
        zIndex: 2,
        value: images.nozoite,
        size: "29vw",
      },
      {
        top: "-32px",
        left: "268px",
        angle: "-20deg",
        zIndex: 2,
        value: images.boneShi,
        size: "245px",
      },
      {
        top: "-154px",
        left: "393px",
        angle: "15deg",
        zIndex: 3,
        value: images.roundDe,
        size: "254px",
      },
      {
        top: "950px",
        left: "-115px",
        angle: "-17deg",
        value: images.time,
        size: "409px",
      },
      // top right
      {
        top: "-10px",
        left: "1181px",
        angle: "12.5deg",
        zIndex: 3,
        value: images.year,
        size: "377px",
      },
      {
        top: "96px",
        left: "1167px",
        angle: "12.5deg",
        zIndex: 3,
        value: images.year,
        size: "271px",
      },
      {
        top: "183px",
        left: "1288px",
        angle: "12.5deg",
        zIndex: 3,
        value: images.year,
        size: "132px",
      },
      {
        top: "174px",
        left: "1623px",
        angle: "24deg",
        zIndex: 2,
        value: images.boneDe,
        size: "310px",
      },
      {
        top: "-37px",
        left: "1388px",
        angle: "-167deg",
        value: images.nozoite,
        size: "483px",
      },
      {
        top: "41px",
        left: "1391px",
        angle: "-167deg",
        value: images.nozoite,
        size: "552px",
      },
      {
        top: "646px",
        left: "1637px",
        angle: "-49deg",
        value: images.barDe,
        size: "607px",
      },
      // middle 1 left
      {
        top: "1377px",
        left: "-6px",
        angle: "26deg",
        zIndex: 10,
        value: images.roundDe,
        size: "253px",
      },
      {
        top: "1452px",
        left: "286px",
        angle: "-127deg",
        zIndex: 10,
        value: images.barShi,
        size: "450px",
      },
      // middle 1 right
      {
        top: "1303px",
        left: "1519px",
        angle: "-27deg",
        zIndex: 10,
        value: images.roundShi,
        size: "301px",
      },
      {
        top: "1764px",
        left: "946px",
        angle: "-160deg",
        zIndex: 10,
        value: images.nozoite,
        size: "1720px",
      },
      // middle 2
      {
        top: "2213px",
        left: "652px",
        angle: "63deg",
        zIndex: 20,
        value: images.boneShi,
        size: "244px",
      },
      {
        top: "2616px",
        left: "1264px",
        angle: "-127deg",
        zIndex: 23,
        value: images.barShi,
        size: "736px",
      },
      // workshop
      {
        top: "3627px",
        left: "-69px",
        angle: "-22deg",
        zIndex: 30,
        value: "face-1.svg",
        size: "679px",
      },
      {
        top: "3675px",
        left: "1083px",
        angle: "10deg",
        zIndex: 30,
        value: "face-2.svg",
        size: "426px",
      },
      {
        top: "4285px",
        left: "293px",
        angle: "6deg",
        zIndex: 30,
        value: "face-3.svg",
        size: "430px",
      },
      {
        top: "3959px",
        left: "1355px",
        angle: "12deg",
        zIndex: 30,
        value: "face-4.svg",
        size: "709px",
      },
      {
        top: "4555px",
        left: "-91px",
        angle: "13deg",
        zIndex: 33,
        value: images.year,
        size: "376px",
      },
      {
        top: "4823px",
        left: "-185.5px",
        angle: "-167deg",
        zIndex: 33,
        value: images.nozoite,
        size: "552px",
      },
      // talk event
      {
        top: "5197.01px",
        left: "517.51px",
        angle: "4.18deg",
        zIndex: 43,
        value: "text-nyushi.svg",
        size: "336.55px",
      },
      {
        top: "5206.78px",
        left: "1202.95px",
        angle: "-6.73deg",
        zIndex: 43,
        value: "text-meeting.svg",
        size: "325px",
      },
      {
        top: "5556.77px",
        left: "443.65px",
        angle: "-2.26deg",
        zIndex: 43,
        value: "text-recipe.svg",
        size: "482.59px",
      },
      {
        top: "5574.51px",
        left: "1020.42px",
        angle: "2.84deg",
        zIndex: 43,
        value: "text-shigo.svg",
        size: "332.19px",
      },
      {
        top: "5272.83px",
        left: "-422.14px",
        angle: "68.76deg",
        zIndex: 33,
        value: images.barDe,
        size: "606.51px",
      },
      {
        top: "5688.32px",
        left: "1673.68px",
        angle: "-27.3deg",
        zIndex: 33,
        value: images.roundShi,
        size: "300.58px",
      },
      // bottom
      {
        top: "6299.59px",
        left: "-67.21px",
        angle: "25.68deg",
        zIndex: 40,
        value: images.roundDe,
        size: "252.6px",
      },
      {
        top: "6345.37px",
        left: "683.79px",
        angle: "-126.6deg",
        zIndex: 40,
        value: images.barShi,
        size: "450.46px",
      },
      {
        top: "6446.81px",
        left: "1689.46px",
        angle: "-62.42deg",
        zIndex: 40,
        value: images.roundDe,
        size: "438.86px",
      },
      {
        top: "6810.49px",
        left: "-174.41px",
        angle: "-23.77deg",
        zIndex: 40,
        value: images.barDe,
        size: "950.83px",
      },
      {
        top: "7092.03px",
        left: "1273.6px",
        angle: "23.52deg",
        zIndex: 40,
        value: images.barShi,
        size: "736.45px",
      },
      {
        top: "6534.3px",
        left: "-317.49px",
        angle: "-160.33deg",
        zIndex: 45,
        value: images.nozoite,
        size: "1720.74px",
      },
      {
        top: "6798.4px",
        left: "-83.57px",
        angle: "-137.44deg",
        zIndex: 46,
        value: images.nozoite,
        size: "877.18px",
      },
      {
        top: "6907.31px",
        left: "-61.04px",
        angle: "-147.43deg",
        zIndex: 47,
        value: images.nozoite,
        size: "743.72px",
      },
      {
        top: "6983.23px",
        left: "-49.03px",
        angle: "-147.43deg",
        zIndex: 47,
        value: images.nozoite,
        size: "569.87px",
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
      sticky.id = text.id;
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
      sticky.style.width = getAdjustedVw(image.size);
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
