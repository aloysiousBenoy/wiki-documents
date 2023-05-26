"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99274],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var r=i(67294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,l=function(e,t){if(null==e)return{};var i,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=r.createContext({}),d=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(i),h=l,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||n;return i?r.createElement(m,a(a({ref:t},u),{},{components:i})):r.createElement(m,a({ref:t},u))}));function m(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=i.length,a=new Array(n);a[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,a[1]=o;for(var d=2;d<n;d++)a[d]=i[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},10497:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var r=i(87462),l=(i(67294),i(3905));const n={description:"Bees Shield",title:"Bees Shield",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Bees_Shield",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,o={unversionedId:"Seeed_Elderly/Bee/Bees_Shield",id:"Seeed_Elderly/Bee/Bees_Shield",title:"Bees Shield",description:"Bees Shield",source:"@site/docs/Seeed_Elderly/Bee/Bees_Shield.md",sourceDirName:"Seeed_Elderly/Bee",slug:"/Bees_Shield",permalink:"/Bees_Shield",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Bee/Bees_Shield.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Bees Shield",title:"Bees Shield",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Bees_Shield",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Zigbee Networking with XBee Series 2 and Seeed Products",permalink:"/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products"},next:{title:"UartSBee V3.1",permalink:"/UartSBee_V3.1"}},s={},d=[{value:"Versions",id:"versions",level:2},{value:"Features",id:"features",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Work with Bee1",id:"work-with-bee1",level:3},{value:"Connection",id:"connection",level:4},{value:"Software",id:"software",level:4},{value:"Work with Bee2",id:"work-with-bee2",level:3},{value:"Connection",id:"connection-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Wireless Arduino programming with Bee2",id:"wireless-arduino-programming-with-bee2",level:3},{value:"Connection",id:"connection-2",level:4},{value:"Software",id:"software-2",level:4},{value:"Expansion function",id:"expansion-function",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:d};function p(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bees_Shield/img/bees%20shield.jpg",alt:"enter image description here"})),(0,l.kt)("p",null,"Bees_Shield will make interfacing multiple Bee-style (XBee, GPRS Bee, Bluetooth Bee and etc) easier than ever before. Aside from two Bee-style 20p 2.0 pitch sockets, it also has a large prototyping area, and a customizable software serial port for easier prototyping."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Bees-Shield-p-672.html"},(0,l.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",alt:"Get one now"}))),(0,l.kt)("h2",{id:"versions"},"Versions"),(0,l.kt)("hr",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Revision"),(0,l.kt)("th",{parentName:"tr",align:null},"Descriptions"),(0,l.kt)("th",{parentName:"tr",align:null},"Release"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v2.12"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial public release"),(0,l.kt)("td",{parentName:"tr",align:null},"June 08, 2010")))),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dual Bee type socket"),(0,l.kt)("li",{parentName:"ul"},"3 indicator LED(ON/Sleep, RSSI, ASSOC) for each Xbee"),(0,l.kt)("li",{parentName:"ul"},"Full size with free drills"),(0,l.kt)("li",{parentName:"ul"},"Reset button for each Xbee"),(0,l.kt)("li",{parentName:"ul"},"Reset button for base board"),(0,l.kt)("li",{parentName:"ul"},"Provide maximal 500mA under 3.3V"),(0,l.kt)("li",{parentName:"ul"},"Full break out for each Bee"),(0,l.kt)("li",{parentName:"ul"},"Switchable of communication with FTDI-USB /Base board")),(0,l.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bees_Shield/img/Bees%20Shield%20Hardware.jpg",alt:null})),(0,l.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"work-with-bee1"},"Work with Bee1"),(0,l.kt)("h4",{id:"connection"},"Connection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Plug the Xbee module into the Bee 1 socket, setting the jumpers as below. We use Bee1 SoftwareSerial for communication.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Arduino Pins"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Bee1 Pins"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Digital Pin7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Bee1_TX")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Digital Pin8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Bee1_RX")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Plug Bees Shield into Arduino."),(0,l.kt)("li",{parentName:"ul"},"Connect Arduino to PC via a USB cable.")),(0,l.kt)("h4",{id:"software"},"Software"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy and Upload the code to Ardunio.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#include <SoftwareSerial.h>\nSoftwareSerial mySerial(7, 8);\n\nvoid setup() {\n  Serial.begin(9600);\n  Serial.println("Goodnight moon!");\n\n  // set the data rate for the SoftwareSerial port\n  mySerial.begin(9600);\n  mySerial.println("Hello, world?");\n}\n\nvoid loop() {\n  // run over and over\n  if (mySerial.available())\n    Serial.write(mySerial.read());\n  if (Serial.available())\n    mySerial.write(Serial.read());\n}\n\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When it's uploaded, open the serial to monitor.")),(0,l.kt)("h3",{id:"work-with-bee2"},"Work with Bee2"),(0,l.kt)("h4",{id:"connection-1"},"Connection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Plug the RFbee module into the Bee 2 socket, toggle switch to USB side.")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"Toggle switch to the Atmega's side if you are not uploading a sketch to the Bee2. It does NOT work if the arduino is using ATmega168 \u2013 we need at least ATmega328 to pass serial communication through.\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Plug Bees Shield into Arduino."),(0,l.kt)("li",{parentName:"ul"},"Connect Arduino to PC via a USB cable.")),(0,l.kt)("h4",{id:"software-1"},"Software"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Please Copy and Upload the code to Ardunio to disable Uart0 port of Atmega IC first.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"void setup() {\n   DDRD=0x00;\n}\n\nvoid loop() {}\n\n")),(0,l.kt)("h3",{id:"wireless-arduino-programming-with-bee2"},"Wireless Arduino programming with Bee2"),(0,l.kt)("h4",{id:"connection-2"},"Connection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Solder the JP1 block on the board for wireless programming."),(0,l.kt)("li",{parentName:"ul"},"Plug Bees Shield into Arduino.")),(0,l.kt)("h4",{id:"software-2"},"Software"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download ",(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Bees_Shield/res/Xbee%20setting%20profiles.zip"},"Xbee setting profile")," to transmitter Xbee by using X-CTU."),(0,l.kt)("li",{parentName:"ul"},"Let's use the wireless programming.")),(0,l.kt)("h4",{id:"expansion-function"},"Expansion function"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"First we have to solder two 8-pin female headers and two 6-pin female headers on the Bees shield."),(0,l.kt)("li",{parentName:"ul"},"After the expansion we can insert small shield like music shield on the Bees shield and we can control it wirelessly.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bees_Shield/img/Bees-Shield-expan2.jpg",alt:null})),(0,l.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,l.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield_V2.12_Eagle_files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield_V2.12_Eagle_files.zip"},"Bees_Shield Eagle File ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield%20Sch.pdf"},"Bees_Shield schematics")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield%20PCB.pdf"},"Bees_Shield PCB")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[Tools]")," ",(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Bees_Shield/res/Xbee%20setting%20profiles.zip"},"Xbee setting profiles"))),(0,l.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,l.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,l.kt)("div",{class:"button_tech_support_container"},(0,l.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,l.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,l.kt)("div",{class:"button_tech_support_container"},(0,l.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,l.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);