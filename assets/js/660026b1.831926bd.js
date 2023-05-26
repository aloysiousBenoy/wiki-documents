"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11966],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),c=n,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},78092:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const o={description:"A Comparison of Different Grove Temperature Sensors",title:"A Comparison of Different Grove Temperature Sensors",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/A_Comparison_of_Different_Grove_Temperature_Sensors",last_update:{date:"02/02/2023",author:"w0x7ce"},no_comments:!1},i=void 0,l={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/A_Comparison_of_Different_Grove_Temperature_Sensors",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/A_Comparison_of_Different_Grove_Temperature_Sensors",title:"A Comparison of Different Grove Temperature Sensors",description:"A Comparison of Different Grove Temperature Sensors",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/A_Comparison_of_Different_Grove_Temperature_Sensors.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/A_Comparison_of_Different_Grove_Temperature_Sensors",permalink:"/A_Comparison_of_Different_Grove_Temperature_Sensors",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/A_Comparison_of_Different_Grove_Temperature_Sensors.md",tags:[{label:"Tutorial",permalink:"/tags/tutorial"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1675296e3,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{description:"A Comparison of Different Grove Temperature Sensors",title:"A Comparison of Different Grove Temperature Sensors",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/A_Comparison_of_Different_Grove_Temperature_Sensors",last_update:{date:"02/02/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"How to Choose A Gas Sensor",permalink:"/How-to-Choose-A-Gas-Sensor"},next:{title:"GPS Modules Selection Guide",permalink:"/GPS-Modules-Selection-Guide"}},s={},m=[{value:"At first, what is the object to be measured?",id:"at-first-what-is-the-object-to-be-measured",level:3},{value:"Secondly, what is the expected range of temperature to be measured?",id:"secondly-what-is-the-expected-range-of-temperature-to-be-measured",level:3},{value:"Another consideration is, how accurate do you need it to be?",id:"another-consideration-is-how-accurate-do-you-need-it-to-be",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:m};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Temperature is a very important physical parameter to our daily lives. The measurement of temperature can be critical in industry applications and experimental test in labs, some home appliance also require measuring temperature for temperature control.\nThe Grove family provides up to ten types of sensors that can be used to measure temperature. They all featured with high reliability and the easy-to-use Grove interface, but they do have their differences and may be used for different projects and applications.\nHere in this wiki we make a list of the key features of very Grove temperature sensors, include cost, measuring range, accuracy, sensitivity, response time, long-term stability and so on. The table can be a reference for you to choose the optimal sensor for your projects."),(0,n.kt)("h1",{id:"how-to-choose-the-optimal-temperature-sensor"},"How to Choose the Optimal Temperature Sensor"),(0,n.kt)("p",null,"Before you looking at the table, there are several things that need to be considered to select a right sensor for your project."),(0,n.kt)("h3",{id:"at-first-what-is-the-object-to-be-measured"},"At first, what is the object to be measured?"),(0,n.kt)("p",null,"Is it the ambient air temperature in the room or a specific enclosure? Is it an air vent for airflow or a water tank for liquid? Or maybe an electronic system that may encounter high voltage and cause heating? Things like these would affect your choice of sensors based on cost budget, power consumption, safety factors, response time, and even the distance from sensor to instrument. For example, if you are measuring the temperature in your room, you might just need a cheap, low-cost thermometer that does not need to be very sensitive. But if your object is a greenhouse for growing plants, you might need a high accurate and sensitive sensor that precisely measures both the temperature and humidity."),(0,n.kt)("h3",{id:"secondly-what-is-the-expected-range-of-temperature-to-be-measured"},"Secondly, what is the expected range of temperature to be measured?"),(0,n.kt)("p",null,"The expected range of temperature to be measured is very important. If the object's temperature exceeds the sensor's measuring range, it may result in irreversible damage to the sensor module or even the system that is connected to the sensor."),(0,n.kt)("h3",{id:"another-consideration-is-how-accurate-do-you-need-it-to-be"},"Another consideration is, how accurate do you need it to be?"),(0,n.kt)("p",null,"Temperature sensors like thermocouples have very wide measuring range and are adequate to be used in harsh environment, but they usually lack of accuracy and long-term stability. The accuracy of measurement is critical in some cases like medical devices, wearable devices and some home facilities etc. Sensors with higher accuracy usually have higher cost and they have to be used very carefully to avoid physical damage on it (some may require not touching it with bare hand)."),(0,n.kt)("h1",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Temperature Sensor Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Interface"),(0,n.kt)("th",{parentName:"tr",align:null},"Range"),(0,n.kt)("th",{parentName:"tr",align:null},"Accuracy"),(0,n.kt)("th",{parentName:"tr",align:null},"Sensitivity"),(0,n.kt)("th",{parentName:"tr",align:null},"Datasheet"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-TemperatureAndHumidity_Sensor/"},"Temp&Humi Sensor")),(0,n.kt)("td",{parentName:"tr",align:null},"Digital"),(0,n.kt)("td",{parentName:"tr",align:null},"0~50C"),(0,n.kt)("td",{parentName:"tr",align:null},"+-2C"),(0,n.kt)("td",{parentName:"tr",align:null},"1C"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/DHT11.pdf"},"DHT11"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Temperature_and_Humidity_Sensor_Pro/"},"Temp&Humi Sensor Pro")),(0,n.kt)("td",{parentName:"tr",align:null},"Digital"),(0,n.kt)("td",{parentName:"tr",align:null},"-40~80C"),(0,n.kt)("td",{parentName:"tr",align:null},"+-0.5C"),(0,n.kt)("td",{parentName:"tr",align:null},"0.1C"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302.pdf"},"DHT22/AM2302"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Temperature_Sensor_V1.2/"},"Temperature Sensor")),(0,n.kt)("td",{parentName:"tr",align:null},"Analog"),(0,n.kt)("td",{parentName:"tr",align:null},"-40~125C"),(0,n.kt)("td",{parentName:"tr",align:null},"+-1.5C"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/NCP18WF104F03RC.pdf"},"NCP18WF104F03RC"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://datasheets.maxim-ic.com/en/ds/DS18B20.pdf"},"One Wire Temperature Sensor")),(0,n.kt)("td",{parentName:"tr",align:null},"One Wire"),(0,n.kt)("td",{parentName:"tr",align:null},"-55~125C"),(0,n.kt)("td",{parentName:"tr",align:null},"+-0.5C"),(0,n.kt)("td",{parentName:"tr",align:null},"0.5C"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://datasheets.maxim-ic.com/en/ds/DS18B20.pdf"},"DS18B20"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-High_Temperature_Sensor/"},"High Temperature Sensor")),(0,n.kt)("td",{parentName:"tr",align:null},"Analog"),(0,n.kt)("td",{parentName:"tr",align:null},"-50~600C"),(0,n.kt)("td",{parentName:"tr",align:null},"2%"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},"K Type Thermocouple")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/"},"Temperature&Humidity Sensor (High-Accuracy & Mini)")),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"0~70C"),(0,n.kt)("td",{parentName:"tr",align:null},"+-0.5C"),(0,n.kt)("td",{parentName:"tr",align:null},"1C"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/TH02_SENSOR.pdf"},"TH02"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Digital_Infrared_Temperature_Sensor/"},"DIGITAL INFRARED TEMPERATURE SENSOR")),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"-40~85C"),(0,n.kt)("td",{parentName:"tr",align:null},"+-0.5C"),(0,n.kt)("td",{parentName:"tr",align:null},"0.02C"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/MLX90615.pdf"},"MLX90615"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-TempAndHumi_Sensor-SHT31/"},"Temperature&Humidity Sensor(SHT31)")),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"-40~125C"),(0,n.kt)("td",{parentName:"tr",align:null},"+-0.3C"),(0,n.kt)("td",{parentName:"tr",align:null},"0.01C"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip"},"SHT31"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Infrared_Temperature_Sensor/"},"INFRARED TEMPERATURE SENSOR")),(0,n.kt)("td",{parentName:"tr",align:null},"Analog"),(0,n.kt)("td",{parentName:"tr",align:null},"-10~100C"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/OTP-538Udatasheet.zip"},"OTP-538U"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-TemperatureAndHumidity_Sensor-HDC1000/"},"Temperature&Humidity Sensor(HDC1000)")),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"-40~125C"),(0,n.kt)("td",{parentName:"tr",align:null},"+-0.2C"),(0,n.kt)("td",{parentName:"tr",align:null},"0.01C"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000.pdf"},"HDC1000"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Barometer_Sensor-BMP180/"},"Barometer Sensor(BMP180)")),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"-40~85C"),(0,n.kt)("td",{parentName:"tr",align:null},"+-0.5C"),(0,n.kt)("td",{parentName:"tr",align:null},"0.1C"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/BMP180.pdf"},"BMP180"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Barometer_Sensor-BMP280/"},"Barometer Sensor(BMP280)")),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"-40~85C"),(0,n.kt)("td",{parentName:"tr",align:null},"+-0.5C"),(0,n.kt)("td",{parentName:"tr",align:null},"0.01C"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf"},"BMP280"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Barometer_Sensor-BME280/"},"Temp&Humi&Barometer Sensor(BME280)")),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"-40~85C"),(0,n.kt)("td",{parentName:"tr",align:null},"+-0.5C"),(0,n.kt)("td",{parentName:"tr",align:null},"0.01C"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf"},"BME280"))))),(0,n.kt)("p",null,"More details please download below list."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/res/temperature%C2%A0sensor%20v2.xlsx"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/list.png",alt:null}))),(0,n.kt)("h1",{id:"groves"},"Groves"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Temp&Humi Sensor"),(0,n.kt)("th",{parentName:"tr",align:null},"Temp&Humi Sensor Pro"),(0,n.kt)("th",{parentName:"tr",align:null},"Thermistor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/1.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/2.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/3.jpg",alt:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html"},"GET ONE NOW!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html"},"GET ONE NOW!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html"},"GET ONE NOW!"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Thermocouple"),(0,n.kt)("th",{parentName:"tr",align:null},"TH02"),(0,n.kt)("th",{parentName:"tr",align:null},"Digital Infrared"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/4.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/5.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/6.jpg",alt:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/Grove-High-Temperature-Sensor-p-1810.html"},"GET ONE NOW!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html"},"GET ONE NOW!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html"},"GET ONE NOW!"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"SHT31"),(0,n.kt)("th",{parentName:"tr",align:null},"Infrared"),(0,n.kt)("th",{parentName:"tr",align:null},"HDC1000"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/7.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/8.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/9.jpg",alt:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-SHT31-p-2655.html"},"GET ONE NOW!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html"},"GET ONE NOW!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125"},"GET ONE NOW!"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"BMP180"),(0,n.kt)("th",{parentName:"tr",align:null},"BMP280"),(0,n.kt)("th",{parentName:"tr",align:null},"BME280"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/10.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/11.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/12.jpg",alt:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html"},"GET ONE NOW!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html"},"GET ONE NOW!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/Grove-TempHumiBarometer-Sensor-BME280-p-2653.html"},"GET ONE NOW!"))))),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);