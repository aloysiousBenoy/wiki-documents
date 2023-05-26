"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[36516],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66977:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={title:"LoRaWAN\xae Gateway Module WM1302",nointro:null,keywords:["wio","docusaurus"],image:"https://wiki.seeedstudio.com/wio_gps_board/",slug:"/WM1302_module",last_update:{date:"01/30/2023",author:"hushuxu"}},i=void 0,l={unversionedId:"Sensor/Wio_Series/Wio_WM1302/WM1302_module",id:"Sensor/Wio_Series/Wio_WM1302/WM1302_module",title:"LoRaWAN\xae Gateway Module WM1302",description:"--\x3e",source:"@site/docs/Sensor/Wio_Series/Wio_WM1302/WM1302_module.md",sourceDirName:"Sensor/Wio_Series/Wio_WM1302",slug:"/WM1302_module",permalink:"/WM1302_module",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_WM1302/WM1302_module.md",tags:[],version:"current",lastUpdatedBy:"hushuxu",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{title:"LoRaWAN\xae Gateway Module WM1302",nointro:null,keywords:["wio","docusaurus"],image:"https://wiki.seeedstudio.com/wio_gps_board/",slug:"/WM1302_module",last_update:{date:"01/30/2023",author:"hushuxu"}},sidebar:"ProductSidebar",previous:{title:"Wio-E5 STM32WLE5JC Module",permalink:"/LoRa-E5_STM32WLE5JC_Module"},next:{title:"WM1302 Pi Hat for Raspberry Pi",permalink:"/WM1302_Pi_HAT"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Harware Overview",id:"harware-overview",level:2},{value:"Diagram:",id:"diagram",level:3},{value:"Specification",id:"specification",level:2},{value:"Application",id:"application",level:2},{value:"Dimension",id:"dimension",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Difference between SPI version and USB version",id:"difference-between-spi-version-and-usb-version",level:3},{value:"Quick Start with WM1302",id:"quick-start-with-wm1302",level:3},{value:"Hardware Required",id:"hardware-required",level:4},{value:"Software Required",id:"software-required",level:4},{value:"Step1. Mounting WM1302 Raspberry Pi Hat and install WM1302 module",id:"step1-mounting-wm1302-raspberry-pi-hat-and-install-wm1302-module",level:4},{value:"Step3. Get and compile SX1302 source code",id:"step3-get-and-compile-sx1302-source-code",level:4},{value:"Step4. Run Semtech SX1302 packet forwarder",id:"step4-run-semtech-sx1302-packet-forwarder",level:4},{value:"Sources",id:"sources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html"},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))," "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"LoRaWAN\xae is a mark used under license from the LoRa Alliance\xae.\nThe LoRa\xae Mark is a trademark of Semtech Corporation or its subsidiaries.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"    We has recently released the Wio-E5 Series based on Wio-E5 module. Click [here](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) to meet new members of the LoRa-E5 family from the [Wio-E5 Module](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/) [Grove module](https://wiki.seeedstudio.com/Grove_LoRa_E5_New_Version/), [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) to [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/). To learn more on creating a LoRaWAN\xae End Node with STM32Cube MCU Package for STM32WL series(SDK), to join and to send data to LoRaWAN\xae Network, read more on wiki pages for [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) and [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/).\n"))),(0,o.kt)("p",null,"WM1302 module is a new generation of LoRaWAN\xae gateway module with mini-PCIe form-factor. Based on the Semtech\xae SX1302 baseband LoRaWAN\xae chip, WM1302 unlocks the greater potential capacity of long-range wireless transmission for gateway products. It features higher sensitivity, less power consumption, and lower operating temperature than the previous SX1301 and SX1308 LoRa\xae chip. "),(0,o.kt)("p",null,"WM1302 LoRaWAN\xae gateway module has SPI and USB versions on both US915 and EU868 frequency bands, enable you to have a wide-range of LoRaWAN\xae frequency plans options to choose including EU868, US915, AS923, AS920, AU915, KR920, and IN865."),(0,o.kt)("p",null,"WM1302 module is CE, FCC and Telec certified, which helps simplify the development and certification process of the LoRaWAN\xae gateway devices."),(0,o.kt)("p",null,"WM1302 is designed for M2M and IoT applications and can be widely applied in LPWAN gateway supported scenarios. It would be a perfect choice for you to significantly reduce the technical difficulties and time-consumption when developing the LoRa\xae gateway devices, including LoRaWAN\xae gateway, hotspots, etc."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Powered by Semtech\xae SX1302 baseband LoRa\xae chip"),", extremely low power consumption and high performance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Mini-PCIe form factor with the standard 52-pin golden finger"),", easy to integrate with various gateway devices. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ultra-low operating temperature"),", no additional heat dissipation needed, reducing the size of LoRaWAN\xae gateway."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"High sensitivity")," down to -139 dBm @SF12 with SX1250 TX/RX front-end; TX power up to 26 dBm @3.3V."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Certified with CE, FCC, and TELEC"),". Simplify the final product certification process.")),(0,o.kt)("h2",{id:"harware-overview"},"Harware Overview"),(0,o.kt)("h3",{id:"diagram"},"Diagram:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg",alt:"pir",width:600,height:"auto"})),"### Pinout:",(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/WM1302_module/WM1302_2.jpeg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("table",{class:"tg"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{class:"tg-4onr"},"Region"),(0,o.kt)("th",{class:"tg-ev79"},"EU868"),(0,o.kt)("th",{class:"tg-ev79"},"US915"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-4onr"},"Frequency"),(0,o.kt)("td",{class:"tg-f42p"},"863-870MHz"),(0,o.kt)("td",{class:"tg-f42p"},"902-928MHz")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-4onr"},"Sensitivity"),(0,o.kt)("td",{class:"tg-f42p"},"-125dBm @125K/SF7",(0,o.kt)("br",null),"-139dBm @125K/SF12"),(0,o.kt)("td",{class:"tg-f42p"},"-125dBm @125K/SF7",(0,o.kt)("br",null),"-139dBm @125K/SF12")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-4onr"},"TX Power"),(0,o.kt)("td",{class:"tg-f42p"},"26 dBm (with 3.3V power supply)"),(0,o.kt)("td",{class:"tg-f42p"},"25 dBm (with 3.3V power supply)")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-4onr"},"LEDs"),(0,o.kt)("td",{class:"tg-f42p",colspan:"2"},"Power: Green Config: Red TX: Green RX: Blue")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-4onr"},"Form Factor"),(0,o.kt)("td",{class:"tg-f42p",colspan:"2"},"Mini PCIe, 52pin Golden Finger")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-4onr"},"Power Consumption (SPI version)"),(0,o.kt)("td",{class:"tg-f42p",colspan:"2"},"Standby: 7.5 mA",(0,o.kt)("br",null),"TX maximum power: 415 mA",(0,o.kt)("br",null),"RX: 40 mA")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-4onr"},"Power Consumption (USB version)"),(0,o.kt)("td",{class:"tg-f42p",colspan:"2"},"Standby: 20 mA",(0,o.kt)("br",null),"TX maximum power: 425 mA",(0,o.kt)("br",null),"RX: 53 mA")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-4onr"},"LBT(Listen Before Talk)"),(0,o.kt)("td",{class:"tg-f42p",colspan:"2"},"Support")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-4onr"},"Antenna Connector"),(0,o.kt)("td",{class:"tg-f42p",colspan:"2"},"U.FL")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-4onr"},"Operating Temperature"),(0,o.kt)("td",{class:"tg-f42p",colspan:"2"},"-40\xb0C to 85\xb0C")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-4onr"},"Dimensions"),(0,o.kt)("td",{class:"tg-f42p",colspan:"2"},"30 mm (width) \xd7 50.95 mm (length)")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-4onr"},"Certification"),(0,o.kt)("td",{class:"tg-f42p",colspan:"2"},"CE")))),(0,o.kt)("h2",{id:"application"},"Application"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LPWAN Gateway devices development")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Any long-distance wireless communication application development")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LoRa\xae and LoRaWAN\xae application learn and research"))),(0,o.kt)("h2",{id:"dimension"},"Dimension"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"difference-between-spi-version-and-usb-version"},"Difference between SPI version and USB version"),(0,o.kt)("p",null,"For WM1302 LoRaWAN\xae Gateway Module SPI version, the Semtech SX1302 and SX126x chip are conntected to Raspberry Pi via the same SPI bus with different chip select(CS) pin."),(0,o.kt)("p",null,"For WM1302 LoRaWAN\xae Gateway Module USB version, the Semtech SX1302 and SX126x chip are conntected to a STM32L4 MCU, and this factory programmed MCU will work as a USB device, becoming a bridge between Raspberry Pi and SX1302/SX126x."),(0,o.kt)("h3",{id:"quick-start-with-wm1302"},"Quick Start with WM1302"),(0,o.kt)("h4",{id:"hardware-required"},"Hardware Required"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"WM1302 LoRaWAN\xae Gateway Module")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Raspberry Pi boards with 40-pin GPIO header(e.g. Raspberry Pi 4B or Raspberry 3B+)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"WM1302 Pi Hat for Raspberry Pi")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Power Adapter for Raspberry Pi")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A LoRa\xae antenna")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A 8G or larger SD card and a card reader")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Type C USB cable if using WM1302 LoRaWAN\xae Gateway Module USB version "))),(0,o.kt)("h4",{id:"software-required"},"Software Required"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/software/operating-systems/"},"Lastest Raspberry Pi OS image"),": Raspberry Pi OS Lite is recommended")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"Balena Etcher"),": To flash Raspberry Pi OS image to SD card")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.putty.org/"},"putty"),": To connect to Raspberry Pi via SSH on Windows"))),(0,o.kt)("h4",{id:"step1-mounting-wm1302-raspberry-pi-hat-and-install-wm1302-module"},"Step1. Mounting WM1302 Raspberry Pi Hat and install WM1302 module"),(0,o.kt)("p",null,"It is easy to mount the Pi Hat on Raspberry Pi 40 Pin Header. Power off Raspberry Pi first, insert WM1302 module to the Pi Hat as the following picture and screw it down."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg",alt:"pir",width:600,height:"auto"})),"If USB version WM1302 module is using, please also connect its Type C port to the Raspberry Pi USB port with a Type C USB cable.",(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg",alt:"pir",width:600,height:"auto"})),"#### Step2. Enable the Raspbian I2C and SPI interface",(0,o.kt)("p",null,"WM1302 module communicates with Raspberry Pi with SPI and I2C. But these two interfaces are not enabled by default in Raspbian, so developer need to enable them before using WM1302. Here, we introduce a command line way to enable SPI and I2C interface."),(0,o.kt)("p",null,"First, login in Raspberry Pi via SSH or using a monitor(don't use serial console as the GPS module on the Pi Hat takes over the Pi's hardware UART pins), then type ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo raspi-config")," in command line to open Rasberry Pi Software Configuration Tool:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo raspi-config\n")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png",alt:"pir",width:600,height:"auto"})),"1. Select `Interface Options`",(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"SPI"),", then select ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes")," to enable it")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"I2C"),", then select ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes")," to enable it")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Serial Port"),", then select ",(0,o.kt)("inlineCode",{parentName:"p"},"No"),' for "Would you like a login shell..." and select ',(0,o.kt)("inlineCode",{parentName:"p"},"Yes"),' for "Would you like the serial port hardware..."')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After this, please reboot Raspberry Pi to make sure these settings work."))),(0,o.kt)("h4",{id:"step3-get-and-compile-sx1302-source-code"},"Step3. Get and compile SX1302 source code"),(0,o.kt)("p",null,"Now let's install ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," and download ",(0,o.kt)("inlineCode",{parentName:"p"},"sx1302_hal"),"(library and programs for SX1302 LoRa Gateway) from github:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt install -y git\ncd ~\ngit clone https://github.com/Lora-net/sx1302_hal\n")),(0,o.kt)("p",null,"Move to ",(0,o.kt)("inlineCode",{parentName:"p"},"sx1302_hal")," folder and compile everything:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~/sx1302_hal\nmake\n")),(0,o.kt)("h4",{id:"step4-run-semtech-sx1302-packet-forwarder"},"Step4. Run Semtech SX1302 packet forwarder"),(0,o.kt)("p",null,"Firstly, modify ",(0,o.kt)("inlineCode",{parentName:"p"},"reset pin")," for SX1302 and SX1261 in ",(0,o.kt)("inlineCode",{parentName:"p"},"reset_lgw.sh")," script, with text editor ",(0,o.kt)("inlineCode",{parentName:"p"},"nano"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nano tools/reset_lgw.sh\n")),(0,o.kt)("p",null,"The following code is shown at the head of text editor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# GPIO mapping has to be adapted with HW\n#\n\nSX1302_RESET_PIN=23     # SX1302 reset\nSX1302_POWER_EN_PIN=18  # SX1302 power enable\nSX1261_RESET_PIN=22     # SX1261 reset (LBT / Spectral Scan)\nAD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)\n")),(0,o.kt)("p",null,"Use the navigation keys to move the cursor, change ",(0,o.kt)("inlineCode",{parentName:"p"},"SX1302_RESET_PIN=23")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"SX1302_RESET_PIN=17")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SX1261_RESET_PIN=22")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"SX1261_RESET_PIN=5"),", as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# GPIO mapping has to be adapted with HW\n#\n\nSX1302_RESET_PIN=17     # SX1302 reset\nSX1302_POWER_EN_PIN=18  # SX1302 power enable\nSX1261_RESET_PIN=5     # SX1261 reset (LBT / Spectral Scan)\nAD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)\n")),(0,o.kt)("p",null,"Save these changes by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL + x"),", and then ",(0,o.kt)("inlineCode",{parentName:"p"},"y"),", finally pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter")," to close the text editor."),(0,o.kt)("p",null,"Copy ",(0,o.kt)("inlineCode",{parentName:"p"},"reset_lgw.sh")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"packet_forwarder")," folder, then run ",(0,o.kt)("inlineCode",{parentName:"p"},"lora_pkt_fwd"),". Please note that you should select a ",(0,o.kt)("inlineCode",{parentName:"p"},"global_conf.json.sx1250.xxxx")," config file based on the module you are using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cp tools/reset_lgw.sh packet_forwarder/\ncd packet_forwarder\n\n# Please select one of the following comands based on your module\n# for WM1302 LoRaWAN Gateway Module (SPI) - EU868\n./lora_pkt_fwd -c global_conf.json.sx1250.EU868\n\n# for WM1302 LoRaWAN Gateway Module (USB) - EU868\n./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB\n\n# for WM1302 LoRaWAN Gateway Module (SPI) - US915\n./lora_pkt_fwd -c global_conf.json.sx1250.US915\n\n# for WM1302 LoRaWAN Gateway Module (USB) - US915\n./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB\n")),(0,o.kt)("p",null,"Now, packet forwarder are able to run correctly. But there are still something to do if developers need to forward lora\xae packet to their LoRa\xae Server(e.g. TTN or chripstack). "),(0,o.kt)("p",null,"To achieve this target, developers must add the Raspberry Pi Gateway to Lora Server first. Take ",(0,o.kt)("a",{parentName:"p",href:"https://www.thethingsindustries.com/docs/getting-started/"},"TTNv3")," as an example, login ",(0,o.kt)("a",{parentName:"p",href:"https://eu1.cloud.thethings.network/console"},"TTNv3 console"),", click ",(0,o.kt)("inlineCode",{parentName:"p"},"Go to gateways")," and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add gateway"),", in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add gateway")," page you will find dozens of settings to fill. What you need to focus on are ",(0,o.kt)("inlineCode",{parentName:"p"},"Gateway EUI")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Gateway Server address")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Frequency plan"),", the others just leave it to the default."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Gateway EUI"),": A 64 bit extended unique identifier for your gateway, we set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"AA555A0000000000")," in this wiki")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Gateway Server address"),":  The server addresss which gateway will connect to, copy this to clipboard, developers need to save this to the config file later")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Frequency plan"),":  If using EU868 module, choose ",(0,o.kt)("inlineCode",{parentName:"p"},"Europe 863-870 MHz (SF9 for RX2)"),", if using US915 module, choose ",(0,o.kt)("inlineCode",{parentName:"p"},"United States 902-928 MHz, FSB 2")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png",alt:"pir",width:600,height:"auto"})),"After adding gateway, back to the Raspberry Pi, press `CTRL + c` to stop `lora_pkt_fwd`, then edit the `global_conf.json.sx1250.xxxx` config file you used just now, with text editor `nano`:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Please select one of the following comands based on your module\n# for WM1302 LoRaWAN Gateway Module (SPI) - EU868\nnano global_conf.json.sx1250.EU868\n\n# for WM1302 LoRaWAN Gateway Module (USB) - EU868\nnano global_conf.json.sx1250.EU868.USB\n\n# for WM1302 LoRaWAN Gateway Module (SPI) - US915\nnano global_conf.json.sx1250.US915\n\n# for WM1302 LoRaWAN Gateway Module (USB) - US915\nnano global_conf.json.sx1250.US915.USB\n")),(0,o.kt)("p",null,"Basically, you only need to modify these parameters: ",(0,o.kt)("inlineCode",{parentName:"p"},'"server_address" "serv_port_up" "serv_port_down"'),", which can be found at the tail of the config file. Copy ",(0,o.kt)("inlineCode",{parentName:"p"},"Gateway Server address")," to ",(0,o.kt)("inlineCode",{parentName:"p"},'"server_address"'),", change ",(0,o.kt)("inlineCode",{parentName:"p"},'"serv_port_up"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"serv_port_down"')," to ",(0,o.kt)("inlineCode",{parentName:"p"},"1700"),", these parameters should be edited like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"gateway_conf": {\n    "gateway_ID": "AA555A0000000000",\n    /* change with default server address/ports */\n    "server_address": "eu1.cloud.thethings.network",\n    "serv_port_up": 1700,\n    "serv_port_down": 1700,\n')),(0,o.kt)("p",null,"Save these changes by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL + x"),", and then ",(0,o.kt)("inlineCode",{parentName:"p"},"y"),", finally pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter")," to close the text editor. "),(0,o.kt)("p",null,"Restart ",(0,o.kt)("inlineCode",{parentName:"p"},"lora_pkt_fwd"),", you will find your Raspberry Pi Gateway are conntected to TTNv3."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Please select one of the following comands based on your module\n# for WM1302 LoRaWAN Gateway Module (SPI) - EU868\n./lora_pkt_fwd -c global_conf.json.sx1250.EU868\n\n# for WM1302 LoRaWAN Gateway Module (USB) - EU868\n./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB\n\n# for WM1302 LoRaWAN Gateway Module (SPI) - US915\n./lora_pkt_fwd -c global_conf.json.sx1250.US915\n\n# for WM1302 LoRaWAN Gateway Module (USB) - US915\n./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB\n")),(0,o.kt)("h2",{id:"sources"},"Sources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R000000Hkyg/U8CIV3e9yI9T_aILFMxuzLNs_6_0Io1WIaksrNYyCMQ"},"Semtech SX1302 datasheet"))),(0,o.kt)("p",null,"Certificates"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/114992549/SHEA587_EU_Cert.pdf"},"WM1302(USB) CE Certificate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/114992549/SHEA588_EU_Cert.pdf"},"WM1302(SPI) CE Certificate"))),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);