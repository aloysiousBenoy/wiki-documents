"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||n;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var a=r(87462),i=(r(67294),r(3905));const n={description:"DS1307 RTC (Real Time Clock) for Raspberry Pi",title:"DS1307 RTC (Real Time Clock) for Raspberry Pi",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Pi_RTC-DS1307",last_update:{date:"1/11/2023",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Top_Brand/Raspberry_Pi/Pi_HAT/Pi_RTC-DS1307",id:"Top_Brand/Raspberry_Pi/Pi_HAT/Pi_RTC-DS1307",title:"DS1307 RTC (Real Time Clock) for Raspberry Pi",description:"DS1307 RTC (Real Time Clock) for Raspberry Pi",source:"@site/docs/Top_Brand/Raspberry_Pi/Pi_HAT/Pi_RTC-DS1307.md",sourceDirName:"Top_Brand/Raspberry_Pi/Pi_HAT",slug:"/Pi_RTC-DS1307",permalink:"/Pi_RTC-DS1307",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Raspberry_Pi/Pi_HAT/Pi_RTC-DS1307.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"DS1307 RTC (Real Time Clock) for Raspberry Pi",title:"DS1307 RTC (Real Time Clock) for Raspberry Pi",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Pi_RTC-DS1307",last_update:{date:"1/11/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Raspberry Pi Motor Driver Board v1.0",permalink:"/Raspberry_Pi_Motor_Driver_Board_v1.0"},next:{title:"DS3231 High Accuracy RTC (Real Time Clock) for Raspberry Pi",permalink:"/High_Accuracy_Pi_RTC-DS3231"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical applications",id:"typical-applications",level:2},{value:"Pin Out",id:"pin-out",level:2},{value:"Schemaitc",id:"schemaitc",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Materials required",id:"materials-required",level:3},{value:"Install",id:"install",level:3},{value:"Usage",id:"usage",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/main.jpg",alt:null})),(0,i.kt)("p",null,"The Pi RTC is based on the clock chip DS1307, it can provide a real-time clock(RTC) for raspberry pi via the I2C interface. Real-time clock of this module counts seconds,minutes, hours, date of the month,month, day of the week, and year with leap-year compensation valid up to 2100. The clock operates in either the 24-hour or 12-hour format with AM/PM indicator. If you want to keep this module timing when the Raspberry Pi is powered off, you need to put a 3-Volt CR1225 lithium cell in the battery-holder.  "),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    The battery is not included.\n"))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support Raspberry Pi 2/ 3 B/B+/4/Zero"),(0,i.kt)("li",{parentName:"ul"},"Suport seconds,minuutes,hours,day of week,month, year"),(0,i.kt)("li",{parentName:"ul"},"Support 24-hour or 12-hour format with AM/PM indicator"),(0,i.kt)("li",{parentName:"ul"},"56-byte, battery-backed, nonvolatile (NV) RAM for data storage"),(0,i.kt)("li",{parentName:"ul"},"Two-wire serial interface"),(0,i.kt)("li",{parentName:"ul"},"Programmable squarewave output signal"),(0,i.kt)("li",{parentName:"ul"},"Automatic power-fail detect and switch circuitry")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Item"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,i.kt)("td",{parentName:"tr",align:null},"5V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Interface"),(0,i.kt)("td",{parentName:"tr",align:null},"I2C")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I2C Address"),(0,i.kt)("td",{parentName:"tr",align:null},"0x68")))),(0,i.kt)("h2",{id:"typical-applications"},"Typical applications"),(0,i.kt)("p",null,"Any applications need Real Time on Raspberry."),(0,i.kt)("h2",{id:"pin-out"},"Pin Out"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/pin_out.jpg",alt:null})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"RX/TX is not used in this module, but the 5x2 header takes up the RX/TX pin of the Raspberry Pi, so we bring the RX/TX out and come with a 2pin header.")),(0,i.kt)("h3",{id:"schemaitc"},"Schemaitc"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bi-directional level shifter circuit")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/schematic.jpg",alt:null})),(0,i.kt)("p",null,"This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I",(0,i.kt)("sup",null,"2"),"C bus of Raspberry Pi uses 3.3V, however the chip DS1307 works at 5V, so this circuit will be needed. In the schematic above, ",(0,i.kt)("strong",{parentName:"p"},"Q1")," and ",(0,i.kt)("strong",{parentName:"p"},"Q2")," are N-Channel MOSFET ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf"},"2N7002A"),", which act as a bidirectional switch. In order to better understand this part, you can refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf"},"AN10441")),(0,i.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"materials-required"},"Materials required"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.kt)("th",{parentName:"tr",align:null},"Pi RTC(DS1307)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/thumbnail.jpg",alt:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html",target:"_blank"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now"))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy")),(0,i.kt)("h3",{id:"install"},"Install"),(0,i.kt)("p",null,"The driver we provide only applied for Raspbian Jessie/Stretch."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you do not know how to use a raspberry pi, please check ",(0,i.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/documentation/"},"here")," before start.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1. Driver Installation"))),(0,i.kt)("p",null,"Tap the following command in your terminal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/Seeed-Studio/pi-hats.git\n")),(0,i.kt)("p",null,"When the download finish, tap the following command in your terminal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd pi-hats\nsudo ./install.sh -u rtc_ds1307\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2. Power off Raspberry Pi"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo shutdown -h now\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3. Insert the HAT to Raspberry Pi"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/connect.jpg",alt:null})),(0,i.kt)("p",null,"Please make sure plug the pin 1 of this hat into the pin 1 of raspberry GPIO, just like the picture above."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4. Power up Raspberry Pi"))),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Now you can use the command to check whether the driver is installed successfully."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./install.sh -l\n")),(0,i.kt)("p",null,"If you want uninstall the driver you can use the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo ./install.sh -u\n")),(0,i.kt)("p",null,"Now let's see what the RTC module can do:"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Read hardware clock and print result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo hwclock -r\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Set the system time from the hardware clock"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo hwclock -s\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Set the hardware clock from the current system time"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo hwclock -w\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"More usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hwclock --help\n")),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/Pi%20RTC%20(DS1307).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/Pi%20RTC%20(DS1307).zip"},"Pi RTC(DS1307) Eagle Files"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"[http]")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/pi-hats"},"Seeed Pi RTC Library"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/DS1307.pdf"},"Datasheet DS1307")))),(0,i.kt)("h2",{id:"project"},"Project"),(0,i.kt)("p",null,"This is the introduction Video of this product"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);