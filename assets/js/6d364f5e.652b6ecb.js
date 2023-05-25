"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9521],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),c=a,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},74817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"Grove - Hall Sensor",title:"Grove - Hall Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Hall_Sensor",last_update:{date:"2/22/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Hall_Sensor",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Hall_Sensor",title:"Grove - Hall Sensor",description:"Grove - Hall Sensor",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Hall_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-Hall_Sensor",permalink:"/Grove-Hall_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Hall_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{description:"Grove - Hall Sensor",title:"Grove - Hall Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Hall_Sensor",last_update:{date:"2/22/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - I2C Motor Driver (TB6612FNG)",permalink:"/Grove-I2C_Motor_Driver-TB6612FNG"},next:{title:"Grove - DS1307 RTC (Real Time Clock) for Arduino",permalink:"/Grove-RTC"}},s={},p=[{value:"Version Tracker",id:"version-tracker",level:2},{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Demonstration",id:"demonstration",level:4},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/Grove-Hall_Sensor_New.jpg",alt:null})),(0,a.kt)("p",null,"The Hall sensor is based on Hall Effect, which is the production of a voltage difference across an electrical conductor, transverse to an electric current in the conductor and a magnetic field perpendicular to the current. There is a continuous-time switch on this Grove. The output of these devices switches low (turns on) when a magnetic field (south polarity) perpendicular to the Hall sensor exceeds the operate point threshold BOP, and it switches high (turn off) when the magnetic field disappears. The twig can be used to measure RPM."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/grove-hall-sensor-p-965.html"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,a.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Revision"),(0,a.kt)("th",{parentName:"tr",align:null},"Descriptions"),(0,a.kt)("th",{parentName:"tr",align:null},"Release"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grove - Hall Sensor v0.9b"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial public release"),(0,a.kt)("td",{parentName:"tr",align:null},"3,Oct,2011")))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Grove Compatible Interface"),(0,a.kt)("li",{parentName:"ul"},"400ns transition period for rise and fall."),(0,a.kt)("li",{parentName:"ul"},"Continuous-time hall effect sensor"),(0,a.kt)("li",{parentName:"ul"},"Reverse battery protection")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,a.kt)("h2",{id:"specifications"},"Specifications"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Min"),(0,a.kt)("th",{parentName:"tr",align:null},"Typical"),(0,a.kt)("th",{parentName:"tr",align:null},"Max"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Supply Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"3.8"),(0,a.kt)("td",{parentName:"tr",align:null},"5.0"),(0,a.kt)("td",{parentName:"tr",align:null},"24"),(0,a.kt)("td",{parentName:"tr",align:null},"V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Supply Current"),(0,a.kt)("td",{parentName:"tr",align:null},"4.1"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"24"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,a.kt)("td",{parentName:"tr",align:null},"-40"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"85"),(0,a.kt)("td",{parentName:"tr",align:null},"\xbaC")))),(0,a.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,a.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RPM meter."),(0,a.kt)("li",{parentName:"ul"},"Simple dc motor.")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we firmly recommend you to see ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,a.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,a.kt)("h4",{id:"demonstration"},"Demonstration"),(0,a.kt)("p",null,"The Hall Sensor is used by utilizing the external interrupts available on the arduino/seeeduino. In this example we are using interrupt 0, found on digital pin 2. For other interrupts, see the ",(0,a.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Reference/AttachInterrupt"},"attachInterrupt()"),"."),(0,a.kt)("h4",{id:"hardware"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - Hall Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/Grove-Hall_Sensor_New%20_small.jpg",alt:"enter image description here"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/grove-hall-sensor-p-965.html"},"Get One Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove - Hall Sensor to port D2 of Grove-Base Shield."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect Grove - Hall Sensor to Seeeduino as below.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - Hall Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5V"),(0,a.kt)("td",{parentName:"tr",align:null},"Red")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Black")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Not Conencted"),(0,a.kt)("td",{parentName:"tr",align:null},"White")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"D2"),(0,a.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1."),"  Download the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove-Hall_Sensor_Demo_Code.zip"},"Hall Sensor Code"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2."),"  Open one of two code. For example Demo ",(0,a.kt)("strong",{parentName:"p"},"MagnetControlLED"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3."),"  Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),"."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"/****************************************************************************/ \n// Function: When a magnet whose south pole is facing up is approaching to \n//     the onboard sensor, the LED will be turned on.Otherwise, the \n//     LED will be turned off.\n// Hardware: Grove - Hall Sensor, Grove - LED\n// Arduino IDE: Arduino-1.0\n// Author:  FrankieChu  \n// Date:   Jan 20,2013\n// Version: v1.0\n// by www.seeedstudio.com\n//\n//  This library is free software; you can redistribute it and/or\n//  modify it under the terms of the GNU Lesser General Public\n//  License as published by the Free Software Foundation; either\n//  version 2.1 of the License, or (at your option) any later version.\n//\n//  This library is distributed in the hope that it will be useful,\n//  but WITHOUT ANY WARRANTY; without even the implied warranty of\n//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n//  Lesser General Public License for more details.\n//\n//  You should have received a copy of the GNU Lesser General Public\n//  License along with this library; if not, write to the Free Software\n//  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA\n//\n/*macro definitions of magnetic pin and LED pin*/\n#define HALL_SENSOR 2\n#define LED 4//the Grove - LED is connected to D4 of Arduino\n\nvoid setup()\n{\n  pinsInit();\n}\n \nvoid loop() \n{\n if(isNearMagnet())//if the hall sensor is near the magnet?\n {\n  turnOnLED();\n }\n else\n {\n  turnOffLED();\n }\n}\nvoid pinsInit()\n{\n pinMode(HALL_SENSOR, INPUT);\n pinMode(LED,OUTPUT);\n}\n\n/*If the hall sensor is near the magnet whose south pole is facing up, */\n/*it will return ture, otherwise it will return false.    */\nboolean isNearMagnet()\n{\n int sensorValue = digitalRead(HALL_SENSOR);\n if(sensorValue == LOW)//if the sensor value is LOW?\n {\n  return true;//yes,return ture\n }\n else\n {\n  return false;//no,return false\n }\n}\nvoid turnOnLED()\n{\n digitalWrite(LED,HIGH);\n}\nvoid turnOffLED()\n{\n digitalWrite(LED,LOW);\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4."),"  When a magnet whose south pole is facing up is approaching to the onboard sensor, the LED will be turned on. Otherwise, the LED will be turned off.")),(0,a.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,a.kt)("h4",{id:"hardware-1"},"Hardware"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Connect a Grove - Hall Sensor to port D2, and connect a Grove - Red LED to port D4 of a Base Shield."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,a.kt)("h4",{id:"software-1"},"Software"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,a.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If this is your first time using Codecraft, see also ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/"},"Guide for Codecraft using Arduino"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/cc_Hall_Sensor.png",alt:"cc"})),(0,a.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,a.kt)("admonition",{title:"Success",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When the code finishes uploaded, the LED will goes on when Hall Sensor detects changes in the magnetic field.")),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Twig_Hall_Sensor_v0.9b.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Eagle]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Twig_Hall_Sensor_v0.9b.zip"},"Grove-Hall Sensor Schematic"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Demo]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove-Hall_Sensor_Demo_Code.zip"},"Hall Sensor Demo Code"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Datasheet]")," ",(0,a.kt)("a",{parentName:"p",href:"http://www.allegromicro.com/en/Products/Part_Numbers/1101/1101.pdf"},"A1101 datasheet"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Codecraft]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove_Hall_Sensor_CDC_File.zip"},"CDC File")))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);