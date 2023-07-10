generateStickyElements();

function generateStickyElements() {
  const texts = {
    visualCommunicationDesign: "Visual<br>Communication<br>Design",
    openCampus: "Open<br>CamPus",
    time: "9:30-16:30",
    dateFrom: "07.15 >>>",
    dateTo: "07.16",
  };
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
    meeting: "text-meeting.svg",
    nyushi: "text-nyushi.svg",
    recipe: "text-recipe.svg",
    shigo: "text-shigo.svg",
  };
  const classes = {
    colorBlue: "color-blue",
    colorLightBlue: "color-light-blue",
    colorOrange: "color-orange",
    outlineBlue: "outline-blue",
    outlineOrange: "outline-orange",
    fontAnthony: "font-anthony",
    fontAnthonyMultiLine: "font-anthony-multi-line",
    face: "face",
  };

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
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "932px",
        left: "470px",
        angle: "4.5deg",
        zIndex: 3,
        value: texts.dateFrom,
        fontSize: "120px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "1047px",
        left: "540px",
        angle: "-2deg",
        zIndex: 4,
        value: texts.dateTo,
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
        zIndex: 41,
        value: "Talk Event",
        fontSize: "160px",
        classes: [classes.fontAnthony, classes.colorOrange],
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
    spTexts: [
      // top
      {
        top: "43.42px",
        left: "-196.58px",
        angle: "134.79deg",
        value: texts.visualCommunicationDesign,
        fontSize: "47px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "41.82px",
        left: "236.55px",
        angle: "-147deg",
        zIndex: 1,
        value: "Design",
        fontSize: "46.5px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "169.64px",
        left: "316.91px",
        angle: "4.62deg",
        value: "Visual",
        fontSize: "46.5px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      // center
      {
        top: "241.78px",
        left: "226.45px",
        angle: "25.38deg",
        zIndex: 12,
        value: texts.openCampus,
        fontSize: "43.5px",
        classes: [classes.fontAnthonyMultiLine, classes.outlineBlue],
      },
      {
        top: "319.65px",
        left: "15.59px",
        angle: "-14deg",
        zIndex: 10,
        value: texts.visualCommunicationDesign,
        fontSize: "43.5px",
        classes: [classes.fontAnthonyMultiLine, classes.colorOrange],
      },
      {
        top: "456.5px",
        left: "133.43px",
        angle: "-2deg",
        zIndex: 13,
        value: "SAT",
        fontSize: "20px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "466.99px",
        left: "20.08px",
        angle: "4.5deg",
        zIndex: 12,
        value: "07.15 >>> ",
        fontSize: "45px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "512.18px",
        left: "45.19px",
        angle: "-2deg",
        zIndex: 13,
        value: "07.16",
        fontSize: "45px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "549.52px",
        left: "131.01px",
        angle: "-10deg",
        zIndex: 14,
        value: texts.time,
        fontSize: "20px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      // middle
      {
        top: "653.03px",
        left: "-96.59px",
        angle: "-133.1deg",
        zIndex: 21,
        value: texts.dateFrom,
        fontSize: "48px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "775.2px",
        left: "-21.22px",
        angle: "-19.47deg",
        zIndex: 21,
        value: texts.dateFrom,
        fontSize: "60px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "632.79px",
        left: "232.38px",
        angle: "4.62deg",
        zIndex: 21,
        value: "Communication",
        fontSize: "25px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "805.32px",
        left: "143.2px",
        angle: "-17.72deg",
        zIndex: 21,
        value: "Communication",
        fontSize: "56px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "1836.82px",
        left: "-186.58px",
        angle: "-12.18deg",
        zIndex: 24,
        value: texts.visualCommunicationDesign,
        fontSize: "70px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      // workshop
      {
        top: "2462.33px",
        left: "38.48px",
        angle: "4.25deg",
        zIndex: 32,
        value: "Workshop",
        fontSize: "68px",
        classes: [classes.fontAnthony, classes.colorOrange],
      },
      // talk event
      {
        top: "3167.28px",
        left: "15.36px",
        angle: "-5.95deg",
        zIndex: 40,
        value: "Talk Event",
        fontSize: "72px",
        classes: [classes.fontAnthony, classes.colorOrange],
      },
      {
        top: "3911.92px",
        left: "207.64px",
        angle: "164.1deg",
        zIndex: 41,
        value: "Communication",
        fontSize: "28px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "4243.71px",
        left: "-127.47px",
        angle: "-19.47deg",
        zIndex: 41,
        value: texts.dateFrom,
        fontSize: "69px",
        classes: [classes.fontAnthony, classes.colorBlue],
      },
      {
        top: "4227.31px",
        left: "-73.85px",
        angle: "-28.82deg",
        zIndex: 40,
        value: texts.openCampus,
        fontSize: "66px",
        classes: [classes.fontAnthony, classes.outlineOrange],
      },
      // bottom
      {
        top: "4352.08px",
        left: "235.95px",
        angle: "-11.94deg",
        zIndex: 51,
        value: texts.openCampus,
        fontSize: "120px",
        classes: [classes.fontAnthony, classes.outlineOrange],
      },
      {
        top: "4529.52px",
        left: "9.73px",
        angle: "173.28deg",
        zIndex: 54,
        value: texts.openCampus,
        fontSize: "42px",
        classes: [classes.fontAnthony, classes.outlineOrange],
      },
      {
        top: "4548.83px",
        left: "61.23px",
        angle: "-25.2deg",
        zIndex: 54,
        value: texts.visualCommunicationDesign,
        fontSize: "72px",
        classes: [classes.fontAnthony, classes.colorBlue],
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
        size: "362px",
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
        size: "24.5vw",
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
        classes: [classes.face],
      },
      {
        top: "3675px",
        left: "1083px",
        angle: "10deg",
        zIndex: 30,
        value: "face-2.svg",
        size: "426px",
        classes: [classes.face],
      },
      {
        top: "4285px",
        left: "293px",
        angle: "6deg",
        zIndex: 30,
        value: "face-3.svg",
        size: "430px",
        classes: [classes.face],
      },
      {
        top: "3959px",
        left: "1355px",
        angle: "12deg",
        zIndex: 30,
        value: "face-4.svg",
        size: "709px",
        classes: [classes.face],
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
        zIndex: 41,
        value: "text-nyushi.svg",
        size: "336.55px",
      },
      {
        top: "5206.78px",
        left: "1202.95px",
        angle: "-6.73deg",
        zIndex: 41,
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
        zIndex: 45,
        value: images.barDe,
        size: "606.51px",
      },
      {
        top: "5688.32px",
        left: "1673.68px",
        angle: "-27.3deg",
        zIndex: 45,
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
      // {
      //   top: "6810.49px",
      //   left: "-174.41px",
      //   angle: "-23.77deg",
      //   zIndex: 40,
      //   value: images.barDe,
      //   size: "950.83px",
      // },
      // {
      //   top: "7092.03px",
      //   left: "1273.6px",
      //   angle: "23.52deg",
      //   zIndex: 40,
      //   value: images.barShi,
      //   size: "736.45px",
      // },
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
    ],
    spImages: [
      // top
      {
        top: "117.27px",
        left: "-73.55px",
        angle: "12.56deg",
        zIndex: 2,
        value: images.nozoite,
        size: "141.04px",
      },
      {
        top: "136.84px",
        left: "-106.84px",
        angle: "12.56deg",
        zIndex: 2,
        value: images.nozoite,
        size: "184.07px",
      },
      {
        top: "162.52px",
        left: "-125px",
        angle: "22.55deg",
        zIndex: 2,
        value: images.nozoite,
        size: "217.1px",
      },
      {
        top: "25.95px",
        left: "23.33px",
        angle: "4.13deg",
        zIndex: 1,
        value: images.boneShi,
        size: "96.09px",
      },
      {
        top: "-6.92px",
        left: "83.26px",
        angle: "29.87deg",
        zIndex: 2,
        value: images.roundDe,
        size: "99.28px",
      },
      {
        top: "10.89px",
        left: "123.82px",
        angle: "12.5deg",
        zIndex: 3,
        value: images.year,
        size: "141.38px",
      },
      {
        top: "45.43px",
        left: "116.42px",
        angle: "12.5deg",
        zIndex: 3,
        value: images.year,
        size: "101.77px",
      },
      {
        top: "78.11px",
        left: "161.81px",
        angle: "12.5deg",
        zIndex: 3,
        value: images.year,
        size: "49.45px",
      },
      {
        top: "-4.73px",
        left: "199.3px",
        angle: "-167deg",
        value: images.nozoite,
        size: "181.57px",
      },
      {
        top: "25.01px",
        left: "200.47px",
        angle: "-167deg",
        value: images.nozoite,
        size: "207.31px",
      },
      {
        top: "74.68px",
        left: "287.41px",
        angle: "24.33deg",
        zIndex: 2,
        value: images.boneDe,
        size: "116.48px",
      },
      // center
      {
        top: "197.36px",
        left: "100.55px",
        angle: "7deg",
        zIndex: 11,
        value: images.barShi,
        size: "129px",
      },
      {
        top: "412.74px",
        left: "188.83px",
        angle: "22deg",
        zIndex: 11,
        value: images.barDe,
        size: "131.38px",
      },
      {
        top: "321.86px",
        left: "18.09px",
        angle: "7deg",
        zIndex: 12,
        value: images.nozoite,
        size: "134.72px",
      },
      {
        top: "398.5px",
        left: "253.69px",
        angle: "7.5deg",
        zIndex: 12,
        value: images.place,
        size: "119.26px",
      },
      // middle
      {
        top: "677.08px",
        left: "-29.59px",
        angle: "-126.6deg",
        zIndex: 20,
        value: images.barShi,
        size: "217.12px",
      },
      {
        top: "598px",
        left: "343.07px",
        angle: "-27.3deg",
        zIndex: 20,
        value: images.roundShi,
        size: "91.91px",
      },
      {
        top: "739.26px",
        left: "169.04px",
        angle: "-160.33deg",
        zIndex: 21,
        value: images.nozoite,
        size: "526.15px",
      },
      {
        top: "1197.02px",
        left: "125.34px",
        angle: "62.52deg",
        zIndex: 22,
        value: images.boneShi,
        size: "163.32px",
      },
      {
        top: "1270.78px",
        left: "-121.61px",
        angle: "25.68deg",
        zIndex: 22,
        value: images.roundDe,
        size: "220.37px",
      },
      {
        top: "1783.56px",
        left: "238.6px",
        angle: "-126.6deg",
        zIndex: 23,
        value: images.barShi,
        size: "302.02px",
      },
      {
        top: "2026.07px",
        left: "43.14px",
        angle: "-163.56deg",
        zIndex: 23,
        value: images.barDe,
        size: "184.45px",
      },
      // workshop
      {
        top: "2277.5px",
        left: "-78.64px",
        angle: "-22.4deg",
        zIndex: 30,
        value: "face-1.svg",
        size: "243.73px",
        classes: [classes.face],
      },
      {
        top: "2231.66px",
        left: "222.27px",
        angle: "9.84deg",
        zIndex: 30,
        value: "face-2.svg",
        size: "166.73px",
        classes: [classes.face],
      },
      {
        top: "2794.7px",
        left: "-35.13px",
        angle: "6.04deg",
        zIndex: 32,
        value: "face-3.svg",
        size: "238.92px",
        classes: [classes.face],
      },
      {
        top: "2681.25px",
        left: "142.65px",
        angle: "12.15deg",
        zIndex: 31,
        value: "face-4.svg",
        size: "405.16px",
        classes: [classes.face],
      },
      // talk event
      {
        top: "3243.78px",
        left: "245.23px",
        angle: "4.34deg",
        zIndex: 42,
        value: images.meeting,
        size: "129.64px",
      },
      {
        top: "3399.53px",
        left: "125.94px",
        angle: "3.88deg",
        zIndex: 43,
        value: images.nyushi,
        size: "236.2px",
      },
      {
        top: "3387.67px",
        left: "-155.97px",
        angle: "68.76deg",
        zIndex: 41,
        value: images.barDe,
        size: "245.3px",
      },
      {
        top: "3635.56px",
        left: "11.16px",
        angle: "-2.56deg",
        zIndex: 43,
        value: images.recipe,
        size: "338.7px",
      },
      {
        top: "3980.36px",
        left: "126.29px",
        angle: "2.53deg",
        zIndex: 43,
        value: images.shigo,
        size: "232.48px",
      },
      {
        top: "3953.8px",
        left: "243.08px",
        angle: "-165.12deg",
        zIndex: 40,
        value: images.place,
        size: "282.38px",
      },
      // bottom
      {
        top: "4360px",
        left: "81.7px",
        angle: "-126.6deg",
        zIndex: 50,
        value: images.barShi,
        size: "171.19px",
      },
      // {
      //   top: "4536.76px",
      //   left: "-244.45px",
      //   angle: "-23.77deg",
      //   zIndex: 50,
      //   value: images.barDe,
      //   size: "361.35px",
      // },
      {
        top: "4431.79px",
        left: "-298.82px",
        angle: "-160.33deg",
        zIndex: 52,
        value: images.nozoite,
        size: "653.95px",
      },
      {
        top: "4532.16px",
        left: "-209.93px",
        angle: "-137.44deg",
        zIndex: 52,
        value: images.nozoite,
        size: "333.36px",
      },
      {
        top: "4573.55px",
        left: "-201.36px",
        angle: "-147.43deg",
        zIndex: 53,
        value: images.nozoite,
        size: "282.64px",
      },
      {
        top: "4602.41px",
        left: "-196.8px",
        angle: "-147.43deg",
        zIndex: 53,
        value: images.nozoite,
        size: "216.57px",
      },
      // {
      //   top: "4643.76px",
      //   left: "305.85px",
      //   angle: "23.52deg",
      //   zIndex: 53,
      //   value: images.barShi,
      //   size: "279.88px",
      // },
    ],
  };

  const container = document.getElementById("container");
  const spContainer = document.getElementById("container-sp");

  layout.texts.forEach((text) => {
    container.append(getTextDiv(text, getAdjustedVw));
  });

  layout.spTexts.forEach((text) => {
    spContainer.append(getTextDiv(text, getAdjustedSpVw));
  });

  layout.images.forEach((image) => {
    container.append(getImgDiv(image, getAdjustedVw));
  });
  layout.spImages.forEach((image) => {
    spContainer.append(getImgDiv(image, getAdjustedSpVw));
  });
}

function getTextDiv(data, vwFunc) {
  const sticky = document.createElement("div");
  sticky.innerHTML = data.value;
  sticky.setAttribute("data-top", vwFunc(data.top));
  sticky.setAttribute("data-left", vwFunc(data.left));
  sticky.style.top = vwFunc(data.top);
  sticky.style.left = vwFunc(data.left);
  sticky.style.zIndex = data.zIndex;
  sticky.style.transform = `rotate(${data.angle})`;
  sticky.style.fontSize = vwFunc(data.fontSize);
  sticky.classList.add("paper");
  sticky.id = data.id;
  data.classes.forEach((cls) => {
    sticky.classList.add(cls);
  });

  return sticky;
}

function getImgDiv(image, vwFunc) {
  const sticky = document.createElement("img");
  sticky.setAttribute("data-top", vwFunc(image.top));
  sticky.setAttribute("data-left", vwFunc(image.left));
  sticky.style.top = vwFunc(image.top);
  sticky.style.left = vwFunc(image.left);
  sticky.style.zIndex = image.zIndex;
  sticky.style.transform = `rotate(${image.angle})`;
  sticky.style.width = vwFunc(image.size);
  sticky.src = "./images/" + image.value;
  sticky.classList.add("paper");
  image.classes && image.classes.forEach((cls) => {
    sticky.classList.add(cls);
  });

  return sticky;
}

function getAdjustedVw(size) {
  if (typeof size !== "string") return null;
  if (size.endsWith("vw")) return size;
  if (size.endsWith("px")) {
    const pixel = size.slice(0, size.length - 2);
    return (pixel / 1920) * 100 + "vw";
  }
  return null;
}

function getAdjustedSpVw(size) {
  if (typeof size !== "string") return null;
  if (size.endsWith("vw")) return size;
  if (size.endsWith("px")) {
    const pixel = size.slice(0, size.length - 2);
    return (pixel / 390) * 100 + "vw";
  }
  return null;
}
