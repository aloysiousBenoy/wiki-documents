"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24637],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(o),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||n;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<n;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},85162:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(67294),a=o(86010);const n="tabItem_Ymn6";function i(e){let{children:t,hidden:o,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(n,i),hidden:o},t)}},74866:(e,t,o)=>{o.d(t,{Z:()=>N});var r=o(87462),a=o(67294),n=o(86010),i=o(12466),l=o(16550),s=o(91980),d=o(67392),p=o(50012);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:o,attributes:r,default:a}}=e;return{value:t,label:o,attributes:r,default:a}}))}function c(e){const{values:t,children:o}=e;return(0,a.useMemo)((()=>{const e=t??u(o);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function m(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:o}=e;const r=(0,l.k6)(),n=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,s._X)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function b(e){const{defaultValue:t,queryString:o=!1,groupId:r}=e,n=c(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=o.find((e=>e.default))??o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[s,d]=h({queryString:o,groupId:r}),[u,b]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,p.Nk)(o);return[r,(0,a.useCallback)((e=>{o&&n.set(e)}),[o,n])]}({groupId:r}),g=(()=>{const e=s??u;return m({value:e,tabValues:n})?e:null})();(0,a.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,n]),tabValues:n}}var g=o(72389);const k="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:t,block:o,selectedValue:l,selectValue:s,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const t=e.currentTarget,o=p.indexOf(t),r=d[o].value;r!==l&&(u(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const o=p.indexOf(e.currentTarget)+1;t=p[o]??p[0];break}case"ArrowLeft":{const o=p.indexOf(e.currentTarget)-1;t=p[o]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":o},t)},d.map((e=>{let{value:t,label:o,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},i,{className:(0,n.Z)("tabs__item",f,i?.className,{"tabs__item--active":l===t})}),o??t)})))}function y(e){let{lazy:t,children:o,selectedValue:r}=e;const n=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return a.createElement("div",{className:(0,n.Z)("tabs-container",k)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},1060:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=o(87462),a=(o(67294),o(3905)),n=o(74866),i=o(85162);const l={description:"EdgeBox RPi 200 boot From External Media",title:"EdgeBox RPi 200 boot From External Media",keywords:["Edge","EdgeBox-RPi-200"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/EdgeBox-RPi-200-boot-from-external-media",last_update:{date:"6/14/2023",author:"Peter Pan"}},s=void 0,d={unversionedId:"Edge/Edge_Series/Edge_Box_RPi_200/Edgebox-rpi-200-boot-from-external-media",id:"Edge/Edge_Series/Edge_Box_RPi_200/Edgebox-rpi-200-boot-from-external-media",title:"EdgeBox RPi 200 boot From External Media",description:"EdgeBox RPi 200 boot From External Media",source:"@site/docs/Edge/Edge_Series/Edge_Box_RPi_200/Edgebox-rpi-200-boot-from-external-media.md",sourceDirName:"Edge/Edge_Series/Edge_Box_RPi_200",slug:"/EdgeBox-RPi-200-boot-from-external-media",permalink:"/EdgeBox-RPi-200-boot-from-external-media",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Edge_Series/Edge_Box_RPi_200/Edgebox-rpi-200-boot-from-external-media.md",tags:[],version:"current",lastUpdatedBy:"Peter Pan",lastUpdatedAt:1686700800,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{description:"EdgeBox RPi 200 boot From External Media",title:"EdgeBox RPi 200 boot From External Media",keywords:["Edge","EdgeBox-RPi-200"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/EdgeBox-RPi-200-boot-from-external-media",last_update:{date:"6/14/2023",author:"Peter Pan"}},sidebar:"ProductSidebar",previous:{title:"reServer J2032 Flash NVIDIA JetPack\u2122 OS",permalink:"/reServer_J2032_Flash_Jetpack"},next:{title:"Codesys for Edge Box RPi 200",permalink:"/Edgebox-rpi-200-codesys"}},p={},u=[{value:"Edgebox-RPI-200",id:"edgebox-rpi-200",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup you bootable device",id:"setup-you-bootable-device",level:3},{value:"Setup a Bootable USB Device with EdgeBox-RPI-200 factory default OS",id:"setup-a-bootable-usb-device-with-edgebox-rpi-200-factory-default-os",level:4},{value:"Boot From USB",id:"boot-from-usb",level:4},{value:"Check the boot media",id:"check-the-boot-media",level:5},{value:"Install the NVMe drive",id:"install-the-nvme-drive",level:4},{value:"Create a bootable NVMe Drive",id:"create-a-bootable-nvme-drive",level:4},{value:"Check the boot media",id:"check-the-boot-media-1",level:5},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:u};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"edgebox-rpi-200"},"Edgebox-RPI-200"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg\n"})),(0,a.kt)("p",null,"EdgeBox-RPi-200 series are all-in-one Raspberry Pi-based industrial edge computing controllers, combining multiple industrial purposes. Designed as high-scalability and rugged industrial hardware, mounted with rich IO resources and supported by the great Raspberry Pi industrial software ecosystem, it is an ideal choice for smart automation and Industrial Internet of Things(IIoT) solutions."),(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.kt)("admonition",{title:"Before you Proceed: ",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Since we have updated the EEPROM of Raspberry Pi Compute Module 4 from the batch released after 30/03/2023, Which the boot order has changed to ",(0,a.kt)("inlineCode",{parentName:"p"},"NVME > USB-MSD > BCM-USB-MSD > SD CARD/eMMC > NETWORK > RESTART"),", for more information please visit the ",(0,a.kt)("a",{parentName:"p",href:"/Raspberry_pi_CM4_update_eeprom/"},"Update EEPROM for Compute Module 4")," page. "),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"If you have purchased the Edgebox-RPI-200 prior than 30/03/2023, and you want to follow the guide to update EEPROM or to Flash Operating System on Edgebox-RPI-200, you will need to get a minimum development board which contains function for selecting the boot mode for Raspberry Pi CM4 which the ",(0,a.kt)("a",{parentName:"strong",href:"https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html"},"Dual Gigabit Ethernet NICs Carrier Board")," is perfect for this.")),(0,a.kt)("p",{parentName:"admonition"},"Therefore, this Guide is only apply to the ",(0,a.kt)("inlineCode",{parentName:"p"},"EdgeBox-RPi-200 released after  30/03/2023"),", where you can locate this information from the ",(0,a.kt)("inlineCode",{parentName:"p"},"S/N number")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"the product label sticker")," the number highlighted in the image below ",(0,a.kt)("inlineCode",{parentName:"p"},"2312")," indicate that ",(0,a.kt)("inlineCode",{parentName:"p"},"23")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"production year 2023")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"12")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"production week 12")," of 2023."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Edge_Box/label.jpg",alt:"pir",width:"500",height:"auto"}))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 x PC Host computer (Ubuntu OS)"),(0,a.kt)("li",{parentName:"ul"},"1 x ",(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html"},"EdgeBox-RPI-200")),(0,a.kt)("li",{parentName:"ul"},"1x Storage Device:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Option 1: 1 x USB storage Drive (16Gb or above) "),(0,a.kt)("li",{parentName:"ul"},"Option 2: 1 x ",(0,a.kt)("strong",{parentName:"li"},"M.2 NVMe Drive"))))),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"The following steps will wipe out your Storage Device, so please be careful with the Storage Device you are trying to use and make sure it can be formated.")),(0,a.kt)("h3",{id:"setup-you-bootable-device"},"Setup you bootable device"),(0,a.kt)(n.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"USB Storage",label:"USB Storage",mdxType:"TabItem"},(0,a.kt)("h4",{id:"setup-a-bootable-usb-device-with-edgebox-rpi-200-factory-default-os"},"Setup a Bootable USB Device with EdgeBox-RPI-200 factory default OS"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We have backed-up the original OS image and released file on Sourceforge, you can visit to ",(0,a.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/edgebox-rpi-200/files/edgeboxrpi200.img/download"},"this page")," to retrive the image file.")),(0,a.kt)("p",null,"Please follow ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Raspberry_Pi_3_Model_B/"},"the steps here")," on how to setup a Bootable Raspbian OS Device, by using the ",(0,a.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/software/"},"Raspberry Pi official Imager")),(0,a.kt)("h4",{id:"boot-from-usb"},"Boot From USB"),(0,a.kt)("p",null,"Before you plug-in power to the EdgeBox-RPI-200, you should insert the USB Storage Device you have prepared from above steps. "),(0,a.kt)("p",null,"Then plug in power and wait for the device to boot up."),(0,a.kt)("p",null,"Now your EdgeBox-RPI-200 should have been booted from USB Storage."),(0,a.kt)("h5",{id:"check-the-boot-media"},"Check the boot media"),(0,a.kt)("p",null,"You can check which media has EdgeBox-RPI-200 been booted by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"lsblk")," command."),(0,a.kt)("p",null,"You should output as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pi@raspberrypi:~ lsblk\nNAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT\nsda            8:0    1  7.2G  0 disk \n|-sda1         8:1    1  256M  0 part /boot\n`-sda2         8:2    1    7G  0 part /\nmmcblk0      179:0    0 14.6G  0 disk \n|-mmcblk0p1  179:1    0  256M  0 part \n`-mmcblk0p2  179:2    0 14.3G  0 part \nmmcblk0boot0 179:32   0    4M  1 disk \nmmcblk0boot1 179:64   0    4M  1 disk \n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you see the output as following, which you probably does for the first time boot:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pi@raspberrypi:~ $ lsblk\nNAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT\nsda            8:0    1  7.2G  0 disk \n|-sda1         8:1    1  256M  0 part /boot\n`-sda2         8:2    1  4.6G  0 part \nmmcblk0      179:0    0 14.6G  0 disk \n|-mmcblk0p1  179:1    0  256M  0 part \n`-mmcblk0p2  179:2    0 14.3G  0 part /\nmmcblk0boot0 179:32   0    4M  1 disk \nmmcblk0boot1 179:64   0    4M  1 disk \n")),(0,a.kt)("p",{parentName:"admonition"},"You will need to change the ",(0,a.kt)("inlineCode",{parentName:"p"},"root=")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/boot/cmdline.txt")," to point to the correct storage device to mount the root directory as ",(0,a.kt)("inlineCode",{parentName:"p"},"root=/dev/sda2"),", so your ",(0,a.kt)("inlineCode",{parentName:"p"},"/boot/cmdline.txt")," should looks like this:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"console=serial0,115200 console=tty1 root=/dev/sda2 rootfstype=ext4 elevator=deadline \nfsck.repair=yes rootwait quiet splash plymouth.ignore-serial-consoles\n")),(0,a.kt)("p",{parentName:"admonition"},"Then reboot."))),(0,a.kt)(i.Z,{value:"NVMe Drive",label:"NVMe Drive",mdxType:"TabItem"},(0,a.kt)("h4",{id:"install-the-nvme-drive"},"Install the NVMe drive"),(0,a.kt)("p",null,"Please install the NVMe Drive in the M.2 Slot"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Edge_Box/install-nvme.jpg",alt:"pir",width:"500",height:"auto"})),(0,a.kt)("h4",{id:"create-a-bootable-nvme-drive"},"Create a bootable NVMe Drive"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Make sure the NVMe Drive is formated and does not contain any bootable partitions ")),(0,a.kt)("p",null,"please plug in power and wait for the device to boot up."),(0,a.kt)("p",null,"Then please use SSH to access the EdgeBox-RPI-200, Here is ",(0,a.kt)("a",{parentName:"p",href:"/reterminal-dm-flash-OS/#access-reterminal-dm-via-ssh"},"the guide"),"."),(0,a.kt)("p",null,"Once you gain the SSH access, you can follow the steps below:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 1:")," Check if the NVMe Drive is loaded correctly"),(0,a.kt)("p",null,"Please enter ",(0,a.kt)("inlineCode",{parentName:"p"},"lsblk")," command. you should see following output, where ",(0,a.kt)("inlineCode",{parentName:"p"},"nvme0n1")," is the device name for NVMe drive. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pi@raspberrypi:~ $ lsblk\nNAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nmmcblk0      179:0    0  14.6G  0 disk \n|-mmcblk0p1  179:1    0   256M  0 part /boot\n`-mmcblk0p2  179:2    0  14.3G  0 part /\nmmcblk0boot0 179:32   0     4M  1 disk \nmmcblk0boot1 179:64   0     4M  1 disk \nnvme0n1      259:0    0 119.2G  0 disk \n|-nvme0n1p1  259:1    0   200M  0 part \n`-nvme0n1p2  259:2    0   119G  0 part \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 2:")," Download the EdgeBox-RPI-200 image file"),(0,a.kt)("p",null,"Please enter the following command to download the image file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img -O edgeboxrpi200.img\n")),(0,a.kt)("p",null,"You should see the downloading progress like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pi@raspberrypi:~/Downloads $ wget https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img -O edgeboxrpi200.img\n--2023-06-27 16:34:07--  https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img\nResolving altushost-swe.dl.sourceforge.net (altushost-swe.dl.sourceforge.net)... 79.142.76.130\nConnecting to altushost-swe.dl.sourceforge.net (altushost-swe.dl.sourceforge.net)|79.142.76.130|:443... connected.\nHTTP request sent, awaiting response... 200 OK\nLength: 5230625280 (4.9G) [application/octet-stream]\nSaving to: 'edgeboxrpi200.img'\n\nedgeboxrpi200.img                     3%[=>                                                                 ] 151.13M  14.2MB/s    eta 6m 4s\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 3:")," Using ",(0,a.kt)("inlineCode",{parentName:"p"},"DD")," tool to flash the OS image onto the NVMe Drive"),(0,a.kt)("p",null,"Please enter following command, where ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," as the input file should be name of the image file ",(0,a.kt)("inlineCode",{parentName:"p"},"edgeboxrpi200.img"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"of")," as the NVMe drive name ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/nvme0n1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dd if=edgeboxrpi200.img of=/dev/nvme0n1 bs=4MB status=progress oflag=sync\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 4:")," Reboot"),(0,a.kt)("p",null,"Please enter following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,a.kt)("h5",{id:"check-the-boot-media-1"},"Check the boot media"),(0,a.kt)("p",null,"Now your EdgeBox-RPI-200 should have been booted from NVMe Storage device."),(0,a.kt)("p",null,"You can check which media has EdgeBox-RPI-200 been booted by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"lsblk")," command."),(0,a.kt)("p",null,"Where boot directory ",(0,a.kt)("inlineCode",{parentName:"p"},"/boot"),"  is mounted on the ",(0,a.kt)("inlineCode",{parentName:"p"},"nvme0n1p1")," partition and root directory ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," is mounted on the ",(0,a.kt)("inlineCode",{parentName:"p"},"nvme0n1p2")," partition."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pi@raspberrypi:~ $ lsblk   \nNAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nmmcblk0      179:0    0  14.6G  0 disk \n|-mmcblk0p1  179:1    0   256M  0 part \n`-mmcblk0p2  179:2    0  14.3G  0 part \nmmcblk0boot0 179:32   0     4M  1 disk \nmmcblk0boot1 179:64   0     4M  1 disk \nnvme0n1      259:0    0 119.2G  0 disk \n|-nvme0n1p1  259:1    0   256M  0 part /boot\n`-nvme0n1p2  259:2    0   119G  0 part /\n")))),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);