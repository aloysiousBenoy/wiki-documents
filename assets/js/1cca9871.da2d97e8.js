"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Grove - Passive Buzzer",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Passive-Buzzer/",slug:"/Grove-Passive-Buzzer",last_update:{date:"01/09/2022",author:"gunengyu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Passive-Buzzer",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Passive-Buzzer",title:"Grove - Passive Buzzer",description:'This is a 3-5V passive buzzer. You can change the PMW frequency to award different beep sound to get a "buzzer music". Also, the buzzer can be set as an alarm for security applications. So get one and start your own project!',source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Passive-Buzzer.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-Passive-Buzzer",permalink:"/Grove-Passive-Buzzer",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Passive-Buzzer.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641686400,formattedLastUpdatedAt:"Jan 9, 2022",frontMatter:{title:"Grove - Passive Buzzer",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Passive-Buzzer/",slug:"/Grove-Passive-Buzzer",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Buzzer",permalink:"/Grove-Buzzer"},next:{title:"Grove - Chainable RGB LED",permalink:"/Grove-Chainable_RGB_LED"}},s={},u=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Platform Supported",id:"platform-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Materials Required",id:"materials-required",level:4},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Software",id:"software",level:4},{value:"Code example1 - simply get the beep sound",id:"code-example1---simply-get-the-beep-sound",level:4},{value:"Code example2 - Use buzzer to play music",id:"code-example2---use-buzzer-to-play-music",level:4},{value:"Play with Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Materials Requied",id:"materials-requied",level:4},{value:"Hardware Connection",id:"hardware-connection-1",level:4},{value:"Software Code",id:"software-code",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/107020109/img/107020109_wiki.png",alt:null})),(0,a.kt)("p",null,'This is a 3-5V passive buzzer. You can change the PMW frequency to award different beep sound to get a "buzzer music". Also, the buzzer can be set as an alarm for security applications. So get one and start your own project!'),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png",width:200,height:38,border:0}))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Passive: Tunable passive buzzer"),(0,a.kt)("li",{parentName:"ul"},"Interface: Grove")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Voltage range"),(0,a.kt)("td",{parentName:"tr",align:null},"3V\u20135V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Resonant Frequency"),(0,a.kt)("td",{parentName:"tr",align:null},"2700 Hz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sound output"),(0,a.kt)("td",{parentName:"tr",align:null},"> 80dB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Working temperature"),(0,a.kt)("td",{parentName:"tr",align:null},"-20-70 \xb0C")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,a.kt)("td",{parentName:"tr",align:null},"20mm ",(0,a.kt)("em",{parentName:"td"},"20mm")," 10mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Weight"),(0,a.kt)("td",{parentName:"tr",align:null},"3g")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Battery"),(0,a.kt)("td",{parentName:"tr",align:null},"Exclude")))),(0,a.kt)("h2",{id:"platform-supported"},"Platform Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,a.kt)("h4",{id:"materials-required"},"Materials Required"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino XIAO"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Breadboard"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Passive Buzzer"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg",alt:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Get one now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Breadboard-p-4034.html"},"Get one now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html"},"Get one now"))))),(0,a.kt)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/107020109/img/wiki_buzzer_xiao.jpg",alt:null})),(0,a.kt)("p",null,"The Grove interface on the breadboard and on the Grove Passive Buzzer are connected by the Grove cable."),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step1")," Copy the code below to the Arduino IDE and upload. If you do not know how to update the code, please check ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,a.kt)("h4",{id:"code-example1---simply-get-the-beep-sound"},"Code example1 - simply get the beep sound"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"int buzzer = 5; // Buzzer connect with Pin 5\nint frequency = 2700; //reach the Resonant Frequency\nint cycle = 1000000/frequency;  \nvoid setup()\n{\nSerial.begin(9600); // set the baud rate\npinMode(buzzer,OUTPUT); // set buzzer as output\n}\n\nvoid loop() \n{\n  digitalWrite(buzzer,HIGH);\n  delayMicroseconds(cycle/2);\n  digitalWrite(buzzer,LOW);\n  delayMicroseconds(cycle/2);  // run the PMW cycle\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step2")," After uploading the code tp the board, you will hear thr buzzer beep.")),(0,a.kt)("h4",{id:"code-example2---use-buzzer-to-play-music"},"Code example2 - Use buzzer to play music"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},' //set the corresponding notes with frequency\n #define NOTE_D0 0\n #define NOTE_D1 294\n #define NOTE_D2 330\n #define NOTE_D3 350\n #define NOTE_D4 393\n #define NOTE_D5 441\n #define NOTE_D6 495\n #define NOTE_D7 556\n \n #define NOTE_DL1 147\n #define NOTE_DL2 165\n #define NOTE_DL3 175\n #define NOTE_DL4 196\n #define NOTE_DL5 221\n #define NOTE_DL6 248\n #define NOTE_DL7 278\n \n #define NOTE_DH1 589\n #define NOTE_DH2 661\n #define NOTE_DH3 700\n #define NOTE_DH4 786\n #define NOTE_DH5 882\n #define NOTE_DH6 990\n #define NOTE_DH7 112\n \n #define WHOLE 1\n #define HALF 0.5\n #define QUARTER 0.25\n #define EIGHTH 0.25\n #define SIXTEENTH 0.625\n \n //the note part of the whole song\n int tune[] =\n {\n   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_D6, NOTE_D0,\n   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_DH1, NOTE_D6, NOTE_D0, NOTE_D6,\n   NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6, NOTE_D0, NOTE_D6,\n   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_DH1, NOTE_D6, NOTE_D0,\n \n   NOTE_D1, NOTE_D1, NOTE_D3,\n   NOTE_D1, NOTE_D1, NOTE_D3, NOTE_D0,\n   NOTE_D6, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6,\n   NOTE_D5, NOTE_D1, NOTE_D3, NOTE_D0,\n   NOTE_DH1, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6,\n   NOTE_D5, NOTE_D1, NOTE_D2, NOTE_D0,\n   NOTE_D7, NOTE_D7, NOTE_D5, NOTE_D3,\n   NOTE_D5,\n   NOTE_DH1, NOTE_D0, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D5, NOTE_D6, NOTE_D6,\n   NOTE_D0, NOTE_D5, NOTE_D1, NOTE_D3, NOTE_D0,\n   NOTE_DH1, NOTE_D0, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D5, NOTE_D6, NOTE_D6,\n   NOTE_D0, NOTE_D5, NOTE_D1, NOTE_D2, NOTE_D0,\n   NOTE_D3, NOTE_D3, NOTE_D1, NOTE_DL6,\n   NOTE_D1,\n   NOTE_D3, NOTE_D5, NOTE_D6, NOTE_D6,\n   NOTE_D3, NOTE_D5, NOTE_D6, NOTE_D6,\n   NOTE_DH1, NOTE_D0, NOTE_D7, NOTE_D5,\n   NOTE_D6,\n };\n \n //the duration time of each note\n float duration[] =\n {\n   1, 1, 0.5, 0.5, 1,\n   0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5,\n   0.5, 1, 0.5, 1, 0.5, 0.5,\n   0.5, 0.5, 0.5, 0.5, 1, 1,\n \n   1, 1, 1 + 1,\n   0.5, 1, 1 + 0.5, 1,\n   1, 1, 0.5, 0.5, 1,\n   0.5, 1, 1 + 0.5, 1,\n   0.5, 0.5, 0.5, 0.5, 1 + 1,\n   0.5, 1, 1 + 0.5, 1,\n   1 + 1, 0.5, 0.5, 1,\n   1 + 1 + 1 + 1,\n   0.5, 0.5, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25,\n   0.5, 1, 0.5, 1, 1,\n   0.5, 0.5, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25,\n   0.5, 1, 0.5, 1, 1,\n   1 + 1, 0.5, 0.5, 1,\n   1 + 1 + 1 + 1,\n   0.5, 1, 0.5, 1 + 1,\n   0.5, 1, 0.5, 1 + 1,\n   1 + 1, 0.5, 0.5, 1,\n   1 + 1 + 1 + 1\n };\n \n int length;//define the number of notes\n int buzzer = 5; //set the buzzer Pin\n void setup()\n {\n   pinMode(buzzer, OUTPUT); // set the buzzer as output mode\n   length = sizeof(tune) / sizeof(tune[0]); //count the number of note\n }\n \n void loop()\n {\n    for (int x = 0; x < length; x++) //"sing" the note one by one\n    {\n     tone(buzzer, tune[x]); //output the "x" note\n     delay(400 * duration[x]); //rythem of the music,it can be tuned fast and slow by change the number"400"\n     noTone(buzzer);//stop the current note and go to the next note\n    } \n    delay(5000);//after playing the whole song, delay for 5 sec\n }    \n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step3")," After uploading the code to the board, you can hear a music from the buzzer.")),(0,a.kt)("h3",{id:"play-with-raspberry-pi"},"Play with Raspberry Pi"),(0,a.kt)("h4",{id:"materials-requied"},"Materials Requied"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi 4B(4GB)"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Digital PIR Motion Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg",alt:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html"},"Get one now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html"},"Get one now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html"},"Get one now"))))),(0,a.kt)("h4",{id:"hardware-connection-1"},"Hardware Connection"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/107020109/img/Hardware_connection_raspberry_buzzer.jpg",alt:null})),(0,a.kt)("p",null,'Connect the Buzzer with "PWM" on the Grove Base Hat.'),(0,a.kt)("h4",{id:"software-code"},"Software Code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1")," Install Grove.py on your Raspberry.")),(0,a.kt)("p",null,"One-click installation, quick start, what ever you call, with the single command below, we can install/update all dependencies and latest grove.py."),(0,a.kt)("p",null,":::attention\nIf you are using ",(0,a.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you ",(0,a.kt)("strong",{parentName:"p"},"cannot use this command line"),".\n:::"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -\n")),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    if everything goes well, you will see the following notice.\n\n    ```\n    Successfully installed grove.py-0.5\n    #######################################################\n    Lastest Grove.py from github install complete   !!!!!\n    #######################################################\n    ``` -\n"))),(0,a.kt)("p",null,"Besides the one-click installation, you can also install all the dependencies and latest grove.py step by step."),(0,a.kt)("p",null,":::attention\nIf you are using ",(0,a.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you have to use this command line ",(0,a.kt)("strong",{parentName:"p"},"only with Python3"),".\n:::"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"git clone https://github.com/Seeed-Studio/grove.py\ncd grove.py\n# Python2\nsudo pip install .\n# Python3\nsudo pip3 install .\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2")," Create a python file for the code.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd grove.py\nnano example.py\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3")," Copy the following code to the python file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!/usr/bin/env python\nimport time\nfrom mraa import getGpioLookup\nfrom upm import pyupm_buzzer as upmBuzzer\n\ndef main():\n    # Grove - Buzzer connected to PWM port\n    buzzer = upmBuzzer.Buzzer(getGpioLookup('GPIO12'))\n\n    CHORDS = [upmBuzzer.BUZZER_DO\uff0c upmBuzzer.BUZZER_RE\uff0c upmBuzzer.BUZZER_MI\uff0c \n        upmBuzzer.BUZZER_FA\uff0c upmBuzzer.BUZZER_SOL\uff0c upmBuzzer.BUZZER_LA\uff0c \n        upmBuzzer.BUZZER_SI]\n    for i in range(0\uff0c len(CHORDS)):\n        buzzer.playSound(CHORDS[i]\uff0c 500000)\n        time.sleep(0.1)\n\n    del buzzer\n    print('application exiting...')\n\nif __name__ == '__main__':\n    main()\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4")," Run the program")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo chmod +x example.py\nsudo ./example.py\n")),(0,a.kt)("p",null,'If everything goes well, you can hear"do,re,mi,fa,so.la.xi".'),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/products/107020109/document/Grove_Passive_Buzzer_eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resource"},"Resource"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/107020109/document/MLT_8530_datasheet.pdf"},"MLT_8530_DATASHEET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/107020109/document/Grove_Passive_Buzzer_SCH_190925.pdf"},"Hardware schematic"))),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);