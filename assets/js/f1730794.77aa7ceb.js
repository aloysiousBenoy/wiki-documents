"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[65295],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=d(a),u=n,c=k["".concat(s,".").concat(u)]||k[u]||m[u]||r;return a?i.createElement(c,l(l({ref:t},p),{},{components:a})):i.createElement(c,l({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[k]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12712:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));const r={description:"LinkIt ONE",title:"LinkIt ONE",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE",last_update:{date:"1/13/2023",author:"shuxu hu"}},l=void 0,o={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE",id:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE",title:"LinkIt ONE",description:"LinkIt ONE",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/LinkIt_ONE",permalink:"/LinkIt_ONE",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"LinkIt ONE",title:"LinkIt ONE",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove Starter kit for LinkIt Smart7688 Duo",permalink:"/Grove_Starter_kit_for_LinkIt_Smart7688_Duo"},next:{title:"LinkIt ONE Tutorial - Analog Interface",permalink:"/LinkIt_ONE_Tutorial-Analog_Interface"}},s={},d=[{value:"Features",id:"features",level:2},{value:"specifications",id:"specifications",level:2},{value:"##Application Ideas",id:"application-ideas",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Configuration Switches",id:"configuration-switches",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Procedure Overview",id:"procedure-overview",level:3},{value:"Installing Arduino IDE",id:"installing-arduino-ide",level:3},{value:"Installing Mediatek LinkIt ONE SDK",id:"installing-mediatek-linkit-one-sdk",level:3},{value:"Installing Drivers",id:"installing-drivers",level:3},{value:"Updating Firmware",id:"updating-firmware",level:3},{value:"Uploading Code (Blinky)",id:"uploading-code-blinky",level:3},{value:"Connecting Antennae",id:"connecting-antennae",level:3},{value:"Inserting SIM Card and SD Card",id:"inserting-sim-card-and-sd-card",level:3},{value:"Exploring LinkIt ONE SDK Examples",id:"exploring-linkit-one-sdk-examples",level:3},{value:"Compatible Groves and Shields for LinkIt ONE",id:"compatible-groves-and-shields-for-linkit-one",level:2},{value:"Tutorial of Sidekick Basic Kit for LinkIt ONE",id:"tutorial-of-sidekick-basic-kit-for-linkit-one",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Linkit_ONE/image/500px-Linkit-one-page.jpg",alt:"enter image description here"})),(0,n.kt)("p",null,"The LinkIt ONE development platform is an open source, high performance board for prototyping Wearables and IoT devices. It is based on the world's leading SoC for Wearables, MediaTek Aster (",(0,n.kt)("strong",{parentName:"p"},"MT2502"),") combined with high performance Wi-Fi (",(0,n.kt)("strong",{parentName:"p"},"MT5931"),") and GPS (",(0,n.kt)("strong",{parentName:"p"},"MT3332"),") chipsets to provide you with access to all the features of MediaTek LinkIt. It also provides similar pin-out features to Arduino boards, making it easy to connect various sensors, peripherals, and Arduino shields."),(0,n.kt)("p",null,"LinkIt One is an all-in-one prototyping board for IoT/wearables devices. Integrating GSM, GPRS, Wi-Fi, GPS, Bluetooth features into a basic Arduino form factor.LinkIt ONE is a co-design product by ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/"},"Seeed Studio")," and ",(0,n.kt)("a",{parentName:"p",href:"http://www.mediatek.com/"}," MediaTek"),". It brings together both parties' technology in open hardware and industrial leading reference designs for Wearables and IoT devices to create a powerful development board."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/item_detail.html?p_id=2017"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",alt:null}))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"LinkIt ONE board comes with a lot of features and its SDK(Software Development Kit) is quite comprehensive. Read this document throughly once before using the board. Being a co-design product basic level Technical Support for hardware is provided at Seeedstudio LinkIt One Forum. Advanced Technical support is available at  [MediaTek LinkIt One Forums](https://labs.mediatek.com/forums/forums/list.page).These forums have a good number of FAQs about this board.Please search solutions for your requirements/issues first before posting questions for saving your time.\n"))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Includes ARM7 EJ-S\u2122, GSM, GPRS, Wi-Fi, Bluetooth BR/EDR/BLE, GPS, Audio codec, and SD card connector on a single development board."),(0,n.kt)("li",{parentName:"ul"},"Pin-out similar to Arduino boards, including Digital I/O, Analog I/O, PWM, I2C, SPI, UART and power supply, compatible with Arduino."),(0,n.kt)("li",{parentName:"ul"},"Provides various interfaces for connecting to most sensors, peripherals, Groves, and other widgets."),(0,n.kt)("li",{parentName:"ul"},"You are what you wear. Using LinkIt ONE together with MediaTek LinkIt SDK (for Arduino) you will be able to easily turn your ideas into practical prototypes and make them a reality with the Seeed productization and agile manufacturing service.")),(0,n.kt)("h2",{id:"specifications"},"specifications"),(0,n.kt)("hr",null),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Chipset"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MT2502A (Aster, ARM7 EJ-S (TM) )")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Clock Speed"),(0,n.kt)("td",{parentName:"tr",align:"left"},"260MHz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Dimensions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.3x2.1 inches")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Flash"),(0,n.kt)("td",{parentName:"tr",align:"left"},"16MB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RAM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"4MB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DC Current Per I/O Pin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Analog Pins"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Digital Output"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.3V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Analog Input"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UART"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Software based(",(0,n.kt)("strong",{parentName:"td"},"Serial"),") ,also known as USB Modem Port and Hardware Serial(",(0,n.kt)("strong",{parentName:"td"},"Serial1"),", D0&D1)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SD Card"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Up to 32GB(Class 10)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Positioning"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPS(MT3332)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GSM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"850/900/1800/1900 MHz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GPRS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Class 12")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Wi-Fi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"802.11 b/g/n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Bluetooth"),(0,n.kt)("td",{parentName:"tr",align:"left"},"BR/EDR/BLE(Dual Mode)")))),(0,n.kt)("h2",{id:"application-ideas"},"##Application Ideas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Internet of Things"),(0,n.kt)("li",{parentName:"ul"},"Smart House"),(0,n.kt)("li",{parentName:"ul"},"Wearable Designe"),(0,n.kt)("li",{parentName:"ul"},"Industrial"),(0,n.kt)("li",{parentName:"ul"},"Sensor Hub"),(0,n.kt)("li",{parentName:"ul"},"Automation & Transportation")),(0,n.kt)("p",null,"Here are some projects for your reference. More awesome project at Recipe and ",(0,n.kt)("a",{parentName:"p",href:"https://www.instructables.com/howto/linkit+one/"},"Instructables"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Facebook Like Monitor"),(0,n.kt)("th",{parentName:"tr",align:null},"Texting Door Alarm"),(0,n.kt)("th",{parentName:"tr",align:null},"Smart Bed Alarm"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Linkit_ONE/image/project1.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Linkit_ONE/image/project2.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Linkit_ONE/image/project3.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Facebook-Like-Monitor/"},"Make it NOW!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/LinkIt-One-Texting-Door-Alarm/"},"Make it NOW!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Smart-Bed-Alarm-with-LinkIT-ONE/"},"Make it NOW!"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"AWS IoT Tutorial"),(0,n.kt)("th",{parentName:"tr",align:null},"Instructables Indicator"),(0,n.kt)("th",{parentName:"tr",align:null},"DIY an Acrylic Case"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Linkit_ONE/image/project4.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Linkit_ONE/image/project5.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Linkit_ONE/image/project6.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/An-AWS-IoT-Tutorial-With-LinkIt-ONE/"},"Make it NOW!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Make-a-Instructables-Indicator/"},"Make it NOW!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/5-Design-of-Laser-Cut-Cases-for-5-Popular-Platform/"},"Make it NOW!"))))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Linkit-ONE/image/1000px-LinkItONE_RESOURCE.png",alt:null})),(0,n.kt)("h3",{id:"configuration-switches"},"Configuration Switches"),(0,n.kt)("p",null,"There are 3 slide switches on LinkIt ONE which are used to configure the function/working mode :"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Linkit-ONE/image/300px-LinkIt_ONE_Wiki_Button.jpg",alt:null})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Switch No."),(0,n.kt)("th",{parentName:"tr",align:"left"},"Functionality"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Position 1 - Functionality"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Position 2 - Functionality"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Program Mode"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"MS"),"\uff1a In this position, when connected to PC, LinkIt One board will be shown as 10MB USB drive. The program will not execute in this mode. Any file that is copied to this drive can be read via the code."),(0,n.kt)("td",{parentName:"tr",align:"left"},"UART\uff1aThis position is used to set the board to program mode. Firmware can be uploaded in this mode.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Power"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"BAT"),"\uff1a Board powered by Li-ion Battery. To charge battery, set the switch to this position and connect the board to PC."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"USB"),"\uff1aBoard powered by USB port. Set the switch to this position when there is no battery connected to program the board.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SD/SPI"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"SPI"),"\uff1aThis position allows access of external SPI pins (D10 - D13)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"SD"),"\uff1aThis position allows the code to access SD card. This mode also disables access of SPI pins (D10-D13).")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"DO take care as you handle USB micro type-B socket, or you might break the socket off.\n"))),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("h3",{id:"procedure-overview"},"Procedure Overview"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"No."),(0,n.kt)("th",{parentName:"tr",align:"left"},"Step"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Read more"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Install Arduino IDE 1.5.7 Beta (Windows or MAC OS X version)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/LinkIt_ONE/#installing-arduino-ide"}," here"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://labs.mediatek.com/dpRegister/create"}," Register on MediaTek Labs"),"."),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Download ",(0,n.kt)("a",{parentName:"td",href:"https://labs.mediatek.com/fileMedia/download/5fed7907-b2ba-4000-bcb2-016a332a49fd"}," Linkit Developer's Guide")," and read."),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Install ",(0,n.kt)("a",{parentName:"td",href:"https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp"}," LinkIt SDK")," for Arduino IDE (Windows or MAC OS X)."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/LinkIt_ONE/#installing-mediatek-linkit-one-sdk"}," here"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Install LinkIt ONE drivers."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/LinkIt_ONE/#installing-drivers"}," here"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update the on-board firmware version."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/LinkIt_ONE/#updating-firmware"}," here"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Open Arduino IDE, Select LinkIt ONE board and start coding."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/LinkIt_ONE/#uploading-code-blinky"}," here"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Connect GSM, GPS and WiFi/BT antennae to LinkIt One board"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/LinkIt_ONE/#connecting-antennae"}," here"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Insert SIM and Micro SD Card"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/LinkIt_ONE/#inserting-sim-card-and-sd-card"}," here"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Explore examples and Happy making!"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"installing-arduino-ide"},"Installing Arduino IDE"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"}," Download latest Arduino IDE")," .For more advanced topics, follow MediaTekTM",(0,n.kt)("a",{parentName:"p",href:"https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp"},"  instructions"),"."),(0,n.kt)("h3",{id:"installing-mediatek-linkit-one-sdk"},"Installing Mediatek LinkIt ONE SDK"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download ",(0,n.kt)("a",{parentName:"li",href:"https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp"},"  LinkIt SDK for Arduin"),".At the time of writing this guide, ",(0,n.kt)("strong",{parentName:"li"},"v1.1.11")," Windows SDK (Beta) was used. Read the video guide for Windows OS and MAC OS X platforms  ",(0,n.kt)("a",{parentName:"li",href:"https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/get-started/index.gsp"}," here")),(0,n.kt)("li",{parentName:"ul"},"Extract the downloaded files to Arduino IDE folder."),(0,n.kt)("li",{parentName:"ul"},"Double-Click the .EXE file and install."),(0,n.kt)("li",{parentName:"ul"},"With the installation of LinkIt ONE SDK, Arduino IDE works a LinkIt ONE IDE.")),(0,n.kt)("h3",{id:"installing-drivers"},"Installing Drivers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Disable ",(0,n.kt)("strong",{parentName:"p"},"Driver Signature Enforcement")," if you are using Windows 8/8.1 OS. Read  ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Driver_for_Seeeduino/#installing-drivers-for-the-seeeduino-with-window8"},"instructions"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Put the MS/UART slide switch to UART position and connect LinkIt ONE to PC.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open Device Manager, the following COM ports will be displayed."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkIt_ONE_Wiki_Temp1.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Install driver from ..\\LinkIt_ONE_IDE\\drivers\\mtk folder.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After installing drivers, Device Manger should display the following two ports:"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("strong",{parentName:"p"},"MTK USB Debug Port")," used for uploading code."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"MTK USB Modem Port")," used for printing message, such as Serial.println()"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkIt_ONE_Wiki_Temp2.jpg",alt:null}),"  "),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"There is no official Windows 10 driver yet. Windows 10 users can manually select the Windows 7 driver files from **\\LinkIt_ONE_IDE\\drivers\\mtk** from **Device Manager**. This is known to work on few PCs.\n"))),(0,n.kt)("h3",{id:"updating-firmware"},"Updating Firmware"),(0,n.kt)("p",null,"The firmware of LinkIt ONE board needs to be updated once in a while. Latest LinkIt ONE SDK comes with a version of firmware."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Before starting the firmware update, make sure the slide switches are in proper position ( ",(0,n.kt)("strong",{parentName:"li"},"MS/UART")," should be in ",(0,n.kt)("strong",{parentName:"li"},"MS")," position. ",(0,n.kt)("strong",{parentName:"li"},"USB/BAT")," in ",(0,n.kt)("strong",{parentName:"li"},"USB")," position):")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkItONEUpdateFirmware2.jpg",alt:null}),"  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Run FirmwareUpdater.exe application from ..",(0,n.kt)("strong",{parentName:"li"},"\\LinkIt_ONE_IDE\\hardware\\tools\\mtk")," folder.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-LinkItONEUpdateFirmware.jpg",alt:null}),"  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click the button and then connect LinkIt ONE to PC. Wait for 1 minutes for the update to complete successfully.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-LinkItONEUpdateFirmware_ok.jpg",alt:null}),"  "),(0,n.kt)("h3",{id:"uploading-code-blinky"},"Uploading Code (Blinky)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The slide switches should be configured for firmware upload (i.e Put MS/UART in UART position and Power switch in USB position).")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkIt_ONE_Wiki_Temp3.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open ",(0,n.kt)("strong",{parentName:"li"},"File")," -> ",(0,n.kt)("strong",{parentName:"li"},"Examples")," -> ",(0,n.kt)("strong",{parentName:"li"},"Basics")," -> ",(0,n.kt)("strong",{parentName:"li"},"Blink")," in LinkIt ONE IDE."),(0,n.kt)("li",{parentName:"ul"},"Select the COM Port number corresponding to ",(0,n.kt)("strong",{parentName:"li"},"MTK USB Debug port")," in ",(0,n.kt)("strong",{parentName:"li"},"Tools")," -> ",(0,n.kt)("strong",{parentName:"li"},"Port"),"."),(0,n.kt)("li",{parentName:"ul"},"Select the board by clicking on ",(0,n.kt)("strong",{parentName:"li"},"Tools > Board > LinkIt One"))),(0,n.kt)("p",null,"If you can not find the LinkIt One, please check ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeed_Arduino_Boards/"},"How to Add Seeed boards to Arduino IDE")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Compile and upload the code."),(0,n.kt)("li",{parentName:"ul"},"LED marked ",(0,n.kt)("strong",{parentName:"li"},"L")," should blink.")),(0,n.kt)("h3",{id:"connecting-antennae"},"Connecting Antennae"),(0,n.kt)("p",null,"There are three antennae provided with LinkIt ONE. They are used for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GSM/GPRS"),(0,n.kt)("li",{parentName:"ul"},"Wi-Fi/BT"),(0,n.kt)("li",{parentName:"ul"},"GPS")),(0,n.kt)("p",null,"Connect the antenna as the following image."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-Linkit_one_antenna.jpg",alt:null})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"- While pulling the antenna from board, do it with care. Please Do not use brute force.\n- Try to use the force perpendicular to the direction of the board, otherwise you might damage the antenna pad.\n"))),(0,n.kt)("h3",{id:"inserting-sim-card-and-sd-card"},"Inserting SIM Card and SD Card"),(0,n.kt)("p",null,"LinkIt ONE accepts standard size SIM Card and Micro SD Card. Insert them as per the following image:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkItONE_SIM_SDCard_Insert.jpg",alt:null})),(0,n.kt)("h3",{id:"exploring-linkit-one-sdk-examples"},"Exploring LinkIt ONE SDK Examples"),(0,n.kt)("p",null,"LinkIt ONE SDK comes with many examples / sample code to use peripherals like GSM, GPRS, WiFi, BT, Audio, GPS etc. Explore them first and read about API documentation. API documentation are available in ",(0,n.kt)("a",{parentName:"p",href:"https://labs.mediatek.com/fileMedia/download/5fed7907-b2ba-4000-bcb2-016a332a49fd"},"  User Guide ")," and ",(0,n.kt)("a",{parentName:"p",href:"https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/api_references/Core_Digital.gsp"},"  API References site ")),(0,n.kt)("h2",{id:"compatible-groves-and-shields-for-linkit-one"},"Compatible Groves and Shields for LinkIt ONE"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We manufacture hundreds of Groves and Shields, including sensors, actuators, displays and other modules."),(0,n.kt)("li",{parentName:"ul"},"You can implement your ideas with those Groves and Shields easily."),(0,n.kt)("li",{parentName:"ul"},"But, LinkIt ONE does not support all of them."),(0,n.kt)("li",{parentName:"ul"},"We prepared a list of compatible Groves and Shields:")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Linkit_ONE/resource/LinkIt_ONE_Comparability_Test.xlsx"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-Compatible_Groves_and_Shields_for_LinkIt_ONE.png",alt:null}))),(0,n.kt)("h2",{id:"tutorial-of-sidekick-basic-kit-for-linkit-one"},"Tutorial of Sidekick Basic Kit for LinkIt ONE"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Linkit_ONE/image/350px-LinkitONESidebox.jpg",alt:"enter image description here"})),(0,n.kt)("p",null,"The Sidekick Basic Kit for LinkIt ONE is designed to be used with your LinkIt ONE board. This kit will help you quickly get along well with the platform of LinkIt. It includes many of the most popular accessories for DIY projects : like Breadboard, Jumper wires, Color LEDs, Resistors, Buzzer, etc. All these come in a handy box, which is easy to transport and mimimises clutter. The kit includes a complete guide that will familiarize you with a wide range of electronic components while you create small, simple, and easy-to-assemble circuits. There are 10 different courses outlined that will offer a best way for beginner to get familiar with LinkIt ONE."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/item_detail.html?p_id=2027"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",alt:null}))),(0,n.kt)("h2",{id:"faqs"},"FAQs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q1: Can I access to 3G or 4G network with LinkIt ONE?")),(0,n.kt)("p",null,"A1: No, but you can use GPRS network."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q2: There\u2019s nothing printed on the serial monitor after uploading GSM demo successfully.")),(0,n.kt)("p",null,"A2: Please follow below steps. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Choose Modem USB port for printing."),(0,n.kt)("li",{parentName:"ul"},"Choose the right baud rate."),(0,n.kt)("li",{parentName:"ul"},"Use another demo to test."),(0,n.kt)("li",{parentName:"ul"},"Update the firmware and then try again.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q3: The GPRS function doesn\u2019t work. I tried the sketch \u201cLGPRS\u201d without success.")),(0,n.kt)("p",null,"A3: Please follow below steps. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Please make sure that your GPRS card isn\u2019t locked."),(0,n.kt)("li",{parentName:"ul"},"Can you access to GPRS network with this card on your phone?"),(0,n.kt)("li",{parentName:"ul"},"Does the SMS work?")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q4: Why can\u2019t I upload the sketch \u201cBlink\u201d to LinkIt ONE? Is it defective?")),(0,n.kt)("p",null,"A4: Please follow below steps. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check whether the two switches are on the right side (Uart & USB)"),(0,n.kt)("li",{parentName:"ul"},"Choose the right COM Port(MTK USB DEBUG PORT)"),(0,n.kt)("li",{parentName:"ul"},"Update the firmware and try again"),(0,n.kt)("li",{parentName:"ul"},"Try on another PC"),(0,n.kt)("li",{parentName:"ul"},"Try another USB cable")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q5: Does LinkIt ONE support recording?")),(0,n.kt)("p",null,"A5: Yes, the audio jack can be the input interface of recording. Its ADC has been integrated inside MT2502A."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q6: Does the LinkIt One integrated WiFi module support Monitor mode?")),(0,n.kt)("p",null,"A6: Please refer the ",(0,n.kt)("a",{parentName:"p",href:"https://labs.mediatek.com/api/linkit-one/frames.html?frmname=topic&frmfile=index.html"},"WiFi API")," reference of LinkIt One. There is a support for RSSI for connected networks. There is no monitor mode available for non-connected WiFi networks."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q7: Can I apply 5v through the battery socket on the LinkIt ONE?")),(0,n.kt)("p",null,"A7: Sorry, you cannot use a 5V battery. The Linkit ONE board comes with a 3.7V Lithium-ion rechargeable battery. It is advised to use the battery provided with it."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q8: Where can I find information about connecting LinkIt ONE to the web using GPRS?")),(0,n.kt)("p",null,"A8: The LinkitONE IDE comes with examples to use the GPRS to connect to web. Just install the latest version of IDE and check the examples. Here is ",(0,n.kt)("a",{parentName:"p",href:"https://labs.mediatek.com/api/linkit-one/frames.html?frmname=topic&frmfile=index.html"},"GPRS API"),"."),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Linkit_ONE/resource/%5B202000437%5DLinkIt%20ONE-V1_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Schematic / Design Files:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Linkit_ONE/resource/202000437_PCBA%20Linkit%20ONE_PDF.zip"},"LinkIt ONE V1.0 Eagle File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Linkit_ONE/resource/%5B202000437%5DLinkIt%20ONE-V1_Eagle.zip"},"LinkIt ONE V1.0 Schematic in PDF"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://labs.mediatek.com/en/platform/linkit-one.html"},"MediaTek_LinkIt_SDK_for_Ardunio"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datasheets and User Guides:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://labs.mediatek.com/site/znch/access_denied/access_denied.gsp"},"LinkIt_ONE_Hardware_Reference_Design_v1_0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Linkit-ONE/resource/LinkIt_ONE_Pinout_Diagram_v1_0.pdf"},"LinkIt ONE_Pinout Diagram_v1.0\u3010PDF\u3011")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_LinkIt_ONE_Developers_Guide_v1_3.pdf"},"MediaTek_LinkIt_Developers_Guide_v1_0\u3010PDF\u3011")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_MT2502A_SOC_Data_Sheet_v1_0.pdf"},"MediaTek_MT2502A_SOC_Data_Sheet_v1_0\u3010PDF\u3011")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_MT5931_Wi-Fi_Data_Sheet_v1_0.pdf"},"MediaTek_MT5931_Wi-Fi_Data_Sheet_v1_0\u3010PDF\u3011")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_MT3332_GPS_Data_Sheet_v1_0.pdf"},"MediaTek_MT3332_GPS_Data_Sheet_v1_0\u3010PDF\u3011"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Getting Help")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://labs.mediatek.com/forums/forums/list.page"},"MediaTek LinkIt ONE Forums"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"More")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_LinkIt_ONE"},"See Also: Sidekick Base Kit for LinkIt ONE"))),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}k.isMDXComponent=!0}}]);