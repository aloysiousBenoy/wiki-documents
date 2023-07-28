"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[807],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>k});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=u(o),m=i,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return o?n.createElement(k,a(a({ref:t},l),{},{components:o})):n.createElement(k,a({ref:t},l))}));function k(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:i,a[1]=d;for(var u=2;u<r;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},59951:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var n=o(87462),i=(o(67294),o(3905));const r={description:"How to Add Seeed boards to Arduino IDE",title:"How to Add Seeed boards to Arduino IDE",keywords:["Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeed_Arduino_Boards",last_update:{date:"02/02/2023",author:"w0x7ce"}},a=void 0,d={unversionedId:"Sensor/Seeeduino Series/Seeed_Arduino_Boards",id:"Sensor/Seeeduino Series/Seeed_Arduino_Boards",title:"How to Add Seeed boards to Arduino IDE",description:"How to Add Seeed boards to Arduino IDE",source:"@site/docs/Sensor/Seeeduino Series/Seeed_Arduino_Boards.md",sourceDirName:"Sensor/Seeeduino Series",slug:"/Seeed_Arduino_Boards",permalink:"/Seeed_Arduino_Boards",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Seeed_Arduino_Boards.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1675296e3,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{description:"How to Add Seeed boards to Arduino IDE",title:"How to Add Seeed boards to Arduino IDE",keywords:["Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeed_Arduino_Boards",last_update:{date:"02/02/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with Seeeduino",permalink:"/Getting_Started_with_Seeeduino"},next:{title:"Seeeduino Buying Guide",permalink:"/Seeeduino_Buying_Guide"}},s={},u=[{value:"Step 1. Download the latest Arduino IDE",id:"step-1-download-the-latest-arduino-ide",level:2},{value:"Step 2. Setting your Arduino IDE",id:"step-2-setting-your-arduino-ide",level:2},{value:"Step 3. Board Manager",id:"step-3-board-manager",level:2},{value:"Step 4. Select a board",id:"step-4-select-a-board",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:u};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Seeed had designed so many boards that work with Arduino IDE, include,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO/"},"Seeeduino XIAO")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},"Seeeduino Wio Terminal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Lotus_Cortex-M0-/"},"Seeeduino Lotus Cortex-M0+")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_LoRAWAN/"},"Seeeduino LoRaWAN"),"/GPS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino-Cortex-M0/"},"Seeeduino Cortex M0"))),(0,i.kt)("admonition",{title:"attention",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The board mentioned above is the AT SAMD21 Microcontroller series,Please copy the below url to ",(0,i.kt)("em",{parentName:"p"},"Additional Boards Manager URLs")," in the step2 .")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Seeeduino ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_v3.0/"},"V3"),"/",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_v4.0/"},"4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Lotus/"},"Seeeduino Lotus")),(0,i.kt)("li",{parentName:"ul"},"Seeeduino Stalker ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Stalker_v2.3/"},"V2.3"),"/",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_v3.0/"},"3"),"/",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Stalker_V3.1/"},"3.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Lite/"},"Seeeduino Lite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Mega/"},"Seeeduino Mega")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Mega_Protoshield_Kit/"},"Seeeduino Mega Protoshield Kit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_GPRS/"},"Seeeduino GPRS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Ethernet/"},"Seeeduino Ethernet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Cloud/"},"Seeeduino Cloud")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino-Nano/"},"Seeeduino Nano")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino-Crypto-ATmega4809-ECC608/"},"Seeeduino Crypto (ATmega4809 ECC608)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/LinkIt_ONE/"},"LinkIt ONE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/RePhone/"},"RePhone Series"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The board mentioned above from Seeeduino V3 to RePhone Series isn't the AT SAMD21 Microcontroller series,Please copy the below url to ",(0,i.kt)("em",{parentName:"p"},"Additional Boards Manager URLs")," in the step2.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json\n")),(0,i.kt)("p",null,"Thanks to the new features of Arduino IDE, it's easy to add those board to your Arduino IDE now."),(0,i.kt)("p",null,"There're few step to be followed."),(0,i.kt)("h2",{id:"step-1-download-the-latest-arduino-ide"},"Step 1. Download the latest Arduino IDE"),(0,i.kt)("p",null,"You need a Arduino IDE that after version 1.6.4, please download one if there's no Arduino IDE in your computer."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png",alt:null}))),(0,i.kt)("h2",{id:"step-2-setting-your-arduino-ide"},"Step 2. Setting your Arduino IDE"),(0,i.kt)("p",null,"Open your Arudino IDE, click on ",(0,i.kt)("strong",{parentName:"p"},"File > Preferences"),", and copy below url to ",(0,i.kt)("em",{parentName:"p"},"Additional Boards Manager URLs")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png",alt:null})),(0,i.kt)("h2",{id:"step-3-board-manager"},"Step 3. Board Manager"),(0,i.kt)("p",null,"Click on ",(0,i.kt)("strong",{parentName:"p"},"Toos > Board > Board Manager"),"."),(0,i.kt)("p",null,"Now you can search the board by name, if you need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"LinkIt ONE"),", then just search ",(0,i.kt)("inlineCode",{parentName:"p"},"LinkIt"),"; and if you need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"RePhone Series"),",\njust tap ",(0,i.kt)("inlineCode",{parentName:"p"},"RePhone"),". In this wiki, we will take ",(0,i.kt)("inlineCode",{parentName:"p"},"Seeeduino Stalker V3")," example."),(0,i.kt)("p",null,"Click Seeeduino Stalker V3 then an ",(0,i.kt)("strong",{parentName:"p"},"Install")," button appear, click on it to finish the step, this process takes about 5 minutes to half an hour, which depend on the speed of your network."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/img/add_board.png",alt:null})),(0,i.kt)("h2",{id:"step-4-select-a-board"},"Step 4. Select a board"),(0,i.kt)("p",null,"After Step 3 was successful, a board named Seeeduino Stalker V3 will show up at the boards list."),(0,i.kt)("p",null,"Click on ",(0,i.kt)("strong",{parentName:"p"},"Tools > Board"),", ",(0,i.kt)("em",{parentName:"p"},"Seeeduino Stalker V3")," is available now."),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);