"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[94353],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>k});var n=l(67294);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,n,i=function(e,t){if(null==e)return{};var l,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var d=n.createContext({}),u=function(e){var t=n.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var l=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),h=u(l),p=i,k=h["".concat(d,".").concat(p)]||h[p]||c[p]||o;return l?n.createElement(k,r(r({ref:t},s),{},{components:l})):n.createElement(k,r({ref:t},s))}));function k(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=l.length,r=new Array(o);r[0]=p;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[h]="string"==typeof e?e:i,r[1]=a;for(var u=2;u<o;u++)r[u]=l[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},79080:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=l(87462),i=(l(67294),l(3905));const o={description:"Relay_Shield_v3",title:"Relay Shield v3",tags:["Shield"],keywords:["Shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Relay_Shield_v3",last_update:{date:"01/11/2023",author:"Eico"},no_comments:!1},r=void 0,a={unversionedId:"Top_Brand/Arduino/shield/Relay_Shield_v3",id:"Top_Brand/Arduino/shield/Relay_Shield_v3",title:"Relay Shield v3",description:"Relay_Shield_v3",source:"@site/docs/Top_Brand/Arduino/shield/Relay_Shield_v3.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Relay_Shield_v3",permalink:"/Relay_Shield_v3",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Relay_Shield_v3.md",tags:[{label:"Shield",permalink:"/tags/shield"}],version:"current",lastUpdatedBy:"Eico",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Relay_Shield_v3",title:"Relay Shield v3",tags:["Shield"],keywords:["Shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Relay_Shield_v3",last_update:{date:"01/11/2023",author:"Eico"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"RS232 Shield",permalink:"/RS232_Shield"},next:{title:"SD Card shield V4.0",permalink:"/SD_Card_shield_V4.0"}},d={},u=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Shield Interface Description",id:"shield-interface-description",level:2},{value:"Relays Operation/Tutorial",id:"relays-operationtutorial",level:2},{value:"Relay Shield Example(s)/Usage",id:"relay-shield-examplesusage",level:2},{value:"Related Reading",id:"related-reading",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],s={toc:u};function h(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_L_v3.0.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"The Relay Shield provides a solution for controlling high current devices that cannot be controlled by Arduino\u2019s Digital I/O pins due to current and voltage limits."),(0,i.kt)("p",null,"The Relay Shield features four high quality relays and provides NO/NC interfaces, four dynamic LED indicators to show the on/off state of each relay, and the standardized shield form factor to provide a smooth connection to the Arduino/Seeeduino board or other Arduino compatible boards."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Relay-Shield-v3.0-p-2440.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arudino Uno/Leonardo/Seeeduino compatible; Other board or microcontroller via jumper cables"),(0,i.kt)("li",{parentName:"ul"},"Interface via digital I/O pins 4,5,6, and 7"),(0,i.kt)("li",{parentName:"ul"},"Relay screw terminals"),(0,i.kt)("li",{parentName:"ul"},"Standardized shield shape and design"),(0,i.kt)("li",{parentName:"ul"},"LED working status indicators for each relay"),(0,i.kt)("li",{parentName:"ul"},"High quality relays"),(0,i.kt)("li",{parentName:"ul"},"COM, NO (Normally Open), and NC (Normally Closed) relay pins for each relay"),(0,i.kt)("li",{parentName:"ul"},"Update pin SCL, SDA, IOREF, NC.")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("table",{align:"center"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h3",null,"Item")),(0,i.kt)("td",null,(0,i.kt)("h3",null,"Min")),(0,i.kt)("td",null,(0,i.kt)("h3",null,"Typical")),(0,i.kt)("td",null,(0,i.kt)("h3",null,"Max")),(0,i.kt)("td",null,(0,i.kt)("h3",null,"Unit"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"Supply Voltage")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"4.75")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"5")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"5.25")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"VDC"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"Working Current")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"8")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"250")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"mA"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"Switching Voltage")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"30")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"VDC"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"Switching Current")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"8")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"A"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"Frequency")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"1")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"HZ"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"Switching Power")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"70")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"W"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"Relay Life")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"100000")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"Cycle"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"ESD contact discharge ")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"\xb14")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"KV"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"ESD air discharge")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"\xb18")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"KV"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"Dimension")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"68.7X53.5X30.8")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"mm"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"Net Weight")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"55\xb12")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"-")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"g"))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"Please place 2 layers of electrical tape on the top of the Arduino's usb connector. This will prevent the relay shield from making contact."),(0,i.kt)("li",{parentName:"ol"},"Do not operate voltage more than 35V DC."))),(0,i.kt)("h2",{id:"shield-interface-description"},"Shield Interface Description"),(0,i.kt)("hr",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_v3.0.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Digital 4 \u2013 controls RELAY4\u2019s COM4 pin (located in J4)"),(0,i.kt)("li",{parentName:"ul"},"Digital 5 \u2013 controls RELAY3\u2019s COM3 pin (located in J3)"),(0,i.kt)("li",{parentName:"ul"},"Digital 6 \u2013 controls RELAY2\u2019s COM2 pin (located in J2)"),(0,i.kt)("li",{parentName:"ul"},"Digital 7 \u2013 controls RELAY1\u2019s COM1 pin (located in J1)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"J1 Interface/Terminal Pin Description:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"COM1 (Common Pin)")," : The relay pin controlled from the digital pin.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"NC1 (Normally Closed)"),": This terminal will be connected to COM1 when the RELAY1 control pin (Digital 7 I/O pin) is set low and disconnected when the RELAY1 control pin is set high.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"NO1 (Normally Open)"),": This terminal will be connected to COM1 when the RELAY1 control pin (Digital 7 I/O pin) is set high and disconnected when the RELAY1 control pin is set low."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Terminals J2-4 are similar to J1 except that they control RELAY2-RELAY4 respectively.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Only four Arduino Digital I/O pins, pins 4-7, are required to control the four different relays. Additionally the 5V and two GND Arduino pins are also required to power up the Relay Shield.")),(0,i.kt)("h2",{id:"relays-operationtutorial"},"Relays Operation/Tutorial"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Relays are basically electromagnetic switches: when the relay is energized by the control circuit (i.e. when a voltage and current is applied to the coil), the current and coil create a magnetic field which is able to attract the COM terminal towards the NO terminal, when the control circuit removes the applied voltage and current the COM terminal returns to contact the NC terminal due to a mechanical force (usually a spring)."),(0,i.kt)("p",null,"Some practical relay applications include: control of high voltage using low voltage, motor control, remote control, anti-hearing alarm, automatic temperature alarm, incubators and son on."),(0,i.kt)("p",null,"A motor control application with one relay and one motor is shown below:"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Low_Level_Control4.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/High_Level_Control3.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"In the case of the Relay Shield, the two \u201cControl Circuit\u201d terminals for each of the four relays are controlled by only one Arduino Digital I/O pin. Pins 4, 5, 6, and 7 control relays 4, 3, 2, and 1 respectively."),(0,i.kt)("h2",{id:"relay-shield-examplesusage"},"Relay Shield Example(s)/Usage"),(0,i.kt)("p",null,"Now that you know how a relay works internally, let us show you how to use the Relay Shield."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example #1: DC Motor Control")),(0,i.kt)("p",null,"1.Stack the Relay Shield onto the Arduino development board."),(0,i.kt)("p",null,"2.Connect Arduino to your PC using a USB cable."),(0,i.kt)("p",null,"3.We will use RELAY3 to control the DC motor. Connect the DC motor and Relay Shield as shown in the schematic and figure below:"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Motor-shield-schematic-drawing.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_Connector.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The external power supply in the figure above can be a battery or power supply. The external supply must be able to provide enough current and be set to the correct voltage for the motor. In our testing, we used a lithium battery as the external power supply for the motor.")),(0,i.kt)("p",null,"4.Start the Arduino IDE and upload the following code to the Arduino board:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-CPP"},"int MotorControl = 5;    // Digital Arduino Pin used to control the motor\n\n// the setup routine runs once when you press reset:\nvoid setup()  {\n  // declare pin 5 to be an output:\n  pinMode(MotorControl, OUTPUT);\n}\n\n// the loop routine runs over and over again forever:\nvoid loop()  {\n  digitalWrite(MotorControl,HIGH);// NO3 and COM3 Connected (the motor is running)\n  delay(1000); // wait 1000 milliseconds (1 second)\n  digitalWrite(MotorControl,LOW);// NO3 and COM3 Disconnected (the motor is not running)\n  delay(1000); // wait 1000 milliseconds (1 second)\n}\n")),(0,i.kt)("p",null,"When you have uploaded the code to your Arduino/Seeeduino board the motor should run one second, stop for another second and repeat the process indefinitely. When the motor is running (NO3 and COM3 are connected), the NO3 LED indicator will be lit."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example #2: How to Use More Than One Relay Shield With Only One Arduino/Seeeduino Board")),(0,i.kt)("p",null,"Because the Relay Shield uses digital pins on the Arduino to control each the relays, more than one Relay Shield can be used with the same Arduino board, to do so simply follow these steps:"),(0,i.kt)("p",null,"1.Stack one of the Relay Shields (let\u2019s call this one Relay Shield #1) onto the Arduino development board"),(0,i.kt)("p",null,"2.Connect another Relay Shield (let\u2019s call this one Relay Shield #2) using jumper cables/wires to Relay Shield #1 as shown in the figure below:"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Two-relay-shields-one-arduino.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Relay Shield #1 GND pin is connected to Relay Shield #2 GND pin"),(0,i.kt)("li",{parentName:"ul"},"Relay Shield #1 5V pin is connected to Relay Shield #2 5V pin"),(0,i.kt)("li",{parentName:"ul"},"Relay Shield #1 Digital Pins 8, 9, 10, and 11, are connected to Relay Shield #2 Digital Pins 7, 6, 5, and 4 respectively.")),(0,i.kt)("p",null,"3.Now you can control relays 1, 2, 3, and 4 in Relay Shield #2 using the Arduino\u2019s 8, 9, 10, and 11 digital I/O pins. See sample code below for controlling RELAY1 in Relay Shield #2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-CPP"},"int relay1inShield2 = 8;    // Digital Arduino Pin 8 is used to control relay 1 in Relay Shield #2\n\n// the setup routine runs once when you press reset:\nvoid setup()  {\n  // declare pin 8 to be an output:\n  pinMode(relay1inShield2, OUTPUT);\n}\n\n// the loop routine runs over and over again forever:\nvoid loop()  {\n  digitalWrite(relay1inShield2,HIGH); // relay is energized (NO is connected to COM)\n  delay(1000); // wait 1000 milliseconds (1 second)\n  digitalWrite(relay1inShield2,LOW); // NO is disconnected from COM\n  delay(1000); // wait 1000 milliseconds (1 second)\n}\n")),(0,i.kt)("h2",{id:"related-reading"},"Related Reading"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://support.seeedstudio.com/knowledgebase/articles/462030-relay-shield-sku-sld01101p"},"FAQ of Relay Shield"))),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/res/Relay_Shield_v3.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resource"},"Resource"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/res/Relay_Shield_v3.0.zip"},"Relay Shield v3.0"))),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}h.isMDXComponent=!0}}]);