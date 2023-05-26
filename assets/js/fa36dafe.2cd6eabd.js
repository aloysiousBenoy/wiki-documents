"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9717],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),c=a,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},60461:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"Grove - GSR Sensor",title:"Grove - GSR Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-GSR_Sensor",last_update:{date:"1/6/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Biometric/Grove-GSR_Sensor",id:"Sensor/Grove/Grove_Sensors/Biometric/Grove-GSR_Sensor",title:"Grove - GSR Sensor",description:"Grove - GSR Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Biometric/Grove-GSR_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Biometric",slug:"/Grove-GSR_Sensor",permalink:"/Grove-GSR_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Biometric/Grove-GSR_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672963200,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{description:"Grove - GSR Sensor",title:"Grove - GSR Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-GSR_Sensor",last_update:{date:"1/6/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Fingerprint Sensor",permalink:"/Grove-Fingerprint_Sensor"},next:{title:"Grove - Human Presence Sensor (AK9753)",permalink:"/Grove-Human_Presence_Sensor-AK9753"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Specification",id:"specification",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"FAQ",id:"faq",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/GSR.jpg"})),(0,a.kt)("p",null,"GSR stands for galvanic skin response, is a method of measuring the electrical conductance of the skin. Strong emotion can cause stimulus to your sympathetic nervous system, resulting more sweat being secreted by the sweat glands. Grove - GSR allows you to spot such strong emotions by simple attaching two electrodes to two fingers on one hand. It is an interesting to create emotion related projects like sleep quality monitor."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Grove-GSR Sensor measures the resistance of the people, NOT Conductivity!")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png"}))),(0,a.kt)("h2",{id:"version"},"Version"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"),(0,a.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grove - GSR_Sensor V1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial"),(0,a.kt)("td",{parentName:"tr",align:null},"June 19, 2013")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grove - GSR_Sensor V1.2"),(0,a.kt)("td",{parentName:"tr",align:null},"Add C3 100nf between M324PW-TSSOP14 and GND"),(0,a.kt)("td",{parentName:"tr",align:null},"July 31, 2014")))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Value/Range"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"3.3V/5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sensitivity"),(0,a.kt)("td",{parentName:"tr",align:null},"Adjustable via a potentiometer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Input Signal"),(0,a.kt)("td",{parentName:"tr",align:null},"Resistance, NOT Conductivity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Output Signal"),(0,a.kt)("td",{parentName:"tr",align:null},"Voltage, analog reading")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Finger contact material"),(0,a.kt)("td",{parentName:"tr",align:null},"Nickel")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,a.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,a.kt)("h4",{id:"hardware"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 1. We need to prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - GSR"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_s.jpg"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html"},"Get ONE Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 2. Connect the Grove-GSR to ",(0,a.kt)("strong",{parentName:"li"},"A0")," on Base Shield."),(0,a.kt)("li",{parentName:"ul"},"Step 3. Plug the base Shield into Seeeduino-V4.2."),(0,a.kt)("li",{parentName:"ul"},"Step 4. Connect Seeeduino-V4.2 to PC by using a USB cable.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Hardware_connection.jpg"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If we don't have a Base Shield, don't worry, the sensor can be connected to your Arduino directly. Please follow below tables to connect with Arduino.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-GSR Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Black")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5V"),(0,a.kt)("td",{parentName:"tr",align:null},"Red")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NC"),(0,a.kt)("td",{parentName:"tr",align:null},"White")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A0"),(0,a.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 1. Copy the code into Arduino IDE and upload.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const int GSR=A0;\nint sensorValue=0;\nint gsr_average=0;\n\nvoid setup(){\n  Serial.begin(9600);\n}\n\nvoid loop(){\n  long sum=0;\n  for(int i=0;i<10;i++)           //Average the 10 measurements to remove the glitch\n      {\n      sensorValue=analogRead(GSR);\n      sum += sensorValue;\n      delay(5);\n      }\n   gsr_average = sum/10;\n   Serial.println(gsr_average);\n}\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 2. Do not Wear the GSR sensor."),(0,a.kt)("li",{parentName:"ul"},"Step 3. Click the Tools-> Serial Plotter from Arduino IDE"),(0,a.kt)("li",{parentName:"ul"},"Step 4. Use the screw driver to adjust resistor until the serial output as 512."),(0,a.kt)("li",{parentName:"ul"},"Step 5. Wear the GSR sensor."),(0,a.kt)("li",{parentName:"ul"},"Step 6. We will see the below graph. Please deep breath and see the trends.  ")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_Result.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Human Resistance")," = ((1024+2",(0,a.kt)("em",{parentName:"p"},"Serial_Port_Reading)"),"10000)/(512-Serial_Port_Reading), unit is ohm, Serial_Port_Reading is the value display on Serial Port(between 0~1023)"),(0,a.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,a.kt)("h4",{id:"hardware-1"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - GSR Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_s.jpg"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html"},"Get ONE Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry Pi."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),". Connect the Grove - GSR Sensor to to the A0 port of the Base Hat."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/With_Hat.jpg"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For step 3 you are able to connect the Grove - GSR sensor to ",(0,a.kt)("strong",{parentName:"p"},"any Analog Port")," but make sure you change the command with the corresponding port number.")),(0,a.kt)("h4",{id:"software-1"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),". Excute below commands to run the code.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd grove.py/grove\nnano grove_gsr_sensor.py\n\n")),(0,a.kt)("p",null,"Then you should copy following code in this file and hit ++ctrl+x++ to quit and save."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\nimport math\nimport sys\nimport time\nfrom grove.adc import ADC\n\n\nclass GroveGSRSensor:\n\n    def __init__(self, channel):\n        self.channel = channel\n        self.adc = ADC()\n\n    @property\n    def GSR(self):\n        value = self.adc.read(self.channel)\n        return value\n\nGrove = GroveGSRSensor\n\n\ndef main():\n    if len(sys.argv) < 2:\n        print('Usage: {} adc_channel'.format(sys.argv[0]))\n        sys.exit(1)\n\n    sensor = GroveGSRSensor(int(sys.argv[1]))\n\n    print('Detecting...')\n    while True:\n        print('GSR value: {0}'.format(sensor.GSR))\n        time.sleep(.3)\n\nif __name__ == '__main__':\n    main()\n\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),". Excute below command to run the code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\npython grove_gsr_sensor.py 0\n\n")),(0,a.kt)("admonition",{title:"success",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If everything goes well, you will be able to see the following result")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\npi@raspberrypi:~/grove.py/grove $ python grove_gsr_sensor.py 0\nDetecting...\nGSR value: 503\nGSR value: 503\nGSR value: 503\nGSR value: 503\nGSR value: 503\nGSR value: 383\nGSR value: 256\nGSR value: 314\nGSR value: 348\nGSR value: 361\nGSR value: 368\nGSR value: 371\n^CTraceback (most recent call last):\n  File "grove_gsr_sensor.py", line 69, in <module>\n    main()\n  File "grove_gsr_sensor.py", line 66, in main\n    time.sleep(.3)\nKeyboardInterrupt\n')),(0,a.kt)("p",null,"You can quit this program by simply press ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl"),"+",(0,a.kt)("inlineCode",{parentName:"p"},"c"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You may have noticed that for the analog port, the silkscreen pin number is something like ",(0,a.kt)("strong",{parentName:"p"},"A1, A0"),", however in the command we use parameter ",(0,a.kt)("strong",{parentName:"p"},"0")," and ",(0,a.kt)("strong",{parentName:"p"},"1"),", just the same as digital port. So please make sure you plug the module into the correct port, otherwise there may be pin conflicts.")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q1: What is the unit of output?")),(0,a.kt)("p",null,"A1:  We measure the signal by voltage and print to COM port as (0~1023)."),(0,a.kt)("h1",{id:"grove---gsr-v10"},"Grove - GSR v1.0"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h1",{id:"grove---gsr-v12"},"Grove - GSR v1.2"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.2.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Sensor_WiKi.pdf"},"Download Wiki PDF")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip"},"Grove - GSR v1.0 Eagle File")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.2.zip"},"Grove - GSR v1.2 Eagle File")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Lm324.pdf"},"LM324 datasheet"))),(0,a.kt)("h2",{id:"projects"},"Projects"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"eMotion - Towards a Better Future"),": We believe we can use biometric sensors, the security of the Helium platform and strength of Google Cloud to surface possible anxiety states."),(0,a.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/factoryeight/emotion-towards-a-better-future-a01489/embed",width:"350"}),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);