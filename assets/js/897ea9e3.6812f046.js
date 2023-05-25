"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79090],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=p(a),c=l,m=k["".concat(s,".").concat(c)]||k[c]||d[c]||n;return a?o.createElement(m,r(r({ref:t},u),{},{components:a})):o.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[k]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<n;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},22835:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=a(87462),l=(a(67294),a(3905));const n={description:"ODYSSEY - X86J41x5",title:"Firmware Upgrade",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86J4105-Updating-Firmware",last_update:{date:"03/16/2023",author:"Lakshantha"}},r=void 0,i={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Updating-Firmware",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Updating-Firmware",title:"Firmware Upgrade",description:"ODYSSEY - X86J41x5",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Updating-Firmware.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation",slug:"/ODYSSEY-X86J4105-Updating-Firmware",permalink:"/ODYSSEY-X86J4105-Updating-Firmware",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Updating-Firmware.md",tags:[{label:"ODYSSEY",permalink:"/tags/odyssey"}],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1678924800,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{description:"ODYSSEY - X86J41x5",title:"Firmware Upgrade",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86J4105-Updating-Firmware",last_update:{date:"03/16/2023",author:"Lakshantha"}},sidebar:"ProductSidebar",previous:{title:"Original OS",permalink:"/ODYSSEY-X86J4105-Installing-OS"},next:{title:"Jellyfin Media Server Installation",permalink:"/Jellyfin-on-Docker-Ubuntu-X86"}},s={},p=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"How to Upgrade the BIOS",id:"how-to-upgrade-the-bios",level:2},{value:"Current Latest BIOS Version and Changelog",id:"current-latest-bios-version-and-changelog",level:3},{value:"Latest BIOS Firmware",id:"latest-bios-firmware",level:3},{value:"Step 1 - Download the newest version of BIOS",id:"step-1---download-the-newest-version-of-bios",level:3},{value:"Step 2 -  Prepare bootable USB",id:"step-2----prepare-bootable-usb",level:3},{value:"Step 3 - Upgrading BIOS",id:"step-3---upgrading-bios",level:3},{value:"Step 4 - Reboot",id:"step-4---reboot",level:3},{value:"Step 5 - Wait Patiently",id:"step-5---wait-patiently",level:3},{value:"How to update the Embedded Controller",id:"how-to-update-the-embedded-controller",level:2},{value:"Latest EC Firmware",id:"latest-ec-firmware",level:3},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This tutorial demonstrates how to update the BIOS and EC (Embedded Controller) firmware for the ODYSSEY - X86."),(0,l.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A Working Computer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A USB Drive")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A Monitor")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A Keyboard"))),(0,l.kt)("h2",{id:"how-to-upgrade-the-bios"},"How to Upgrade the BIOS"),(0,l.kt)("p",null,"BIOS is also like an OS and can be upgraded to fix bugs and enhance performance of the ODYSSEY - X86J41x5. Here is the instruction how to upgrade the BIOS version on ODYSSEY - X86J41x5."),(0,l.kt)("h3",{id:"current-latest-bios-version-and-changelog"},"Current Latest BIOS Version and Changelog"),(0,l.kt)("div",{className:"tips",style:{display:"table",tableLayout:"fixed",backgroundColor:"#fbd373",height:"auto",width:"100%"}},(0,l.kt)("div",{className:"left-icon",style:{display:"table-cell",verticalAlign:"middle",backgroundColor:"#FC4A1A",paddingTop:10,boxSizing:"border-box",height:"auto",width:38,textAlign:"center"}},(0,l.kt)("img",{style:{width:26,verticalAlign:"middle"},src:"https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg",alt:"attention icon"})),(0,l.kt)("div",{className:"right-desc",style:{display:"table-cell",verticalAlign:"middle",paddingLeft:15,boxSizing:"border-box",width:"calc(95% - 38px)"}},(0,l.kt)("p",{style:{color:"#000000",fontWeight:"bold",marginTop:10}},"Important Notes"),(0,l.kt)("p",{style:{color:"#000000",fontSize:14}}," 1. It ",(0,l.kt)("b",null,"wipes the old BIOS settings"),", and so you would need to ",(0,l.kt)("b",null,"re-activate")," your Windows(if using Windows) again (wipes the activation key, needs Internet to activate again). ",(0,l.kt)("br",null),(0,l.kt)("br",null)," 2. If you have the ",(0,l.kt)("b",null,"non-EMMC version of ODYSSEY-X86"),", before updating the BIOS, Please make sure to ",(0,l.kt)("b",null,"disable eMMC in the BIOS Settings")," Before and After the updates."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You may check in the BIOS main page for BIOS and EC Firmware's versions.")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-OS/SD-BS-CJ41G-300-101-H.jpg"})),(0,l.kt)("h3",{id:"latest-bios-firmware"},"Latest BIOS Firmware"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-K.zip"},"SD-BS-CJ41G-300-101-K 07/26/2022 15:00:00"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Improve overall stability.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," If you want the above BIOS with ",(0,l.kt)("strong",{parentName:"p"},"bifurcation feature enabled"),", please contact ",(0,l.kt)("a",{parentName:"p",href:"mailto:techsupport@seeed.io"},"techsupport@seeed.io")),(0,l.kt)("p",null,"With bifurcation feature, you will be able to use the M.2 M-Key for 4 PCIe x1. This enables you to connect four different PCIe x1 devices to the M.2 such as multiple network ports, multiple SSDs and other expansion devices. With the normal BIOS without bifurcation feature, M.2 M-Key can be used for only one PCIe x4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"History BIOS:"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-H.zip"},"SD-BS-CJ41G-300-101-H 08/16/2021 15:00:00"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"SHA256:")," 9ea30178b4ef8453c6f24f037b4b3352ac6d214c7c22f94985428bcb23a178c2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Improve overall stability."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-F.zip"},"SD-BS-CJ41G-300-101-F 04/16/2021 01:20:07")))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SHA256:")," 53711DBF9FB6ABE564BE1C7A870840F8B87CAA42239448869D87C08C1BDF0EC5"))),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"Improve overall stability."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-C.zip"},"SD-BS-CJ41G-300-101-C 03/11/2021 16:28:07")))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SHA256:")," 12f4ce1ab81008525138fcd7d830e18dc13936f3ce4a51e17c314fc55debe480"))),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"Fix bug: loads into other OS other than Windows when set to load others."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-M-101-K.zip"},"SD-BS-CJ41G-M-101-K 12/31/2020 20:34:37")))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SHA256:")," 7208d39c4f77a4837a0a1072dce45c7bc8feba28597522ea036778a9c09aa61a"))),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"Added ",(0,l.kt)("strong",{parentName:"li"},"Secure Boot"),"."),(0,l.kt)("li",{parentName:"ol"},"Added ",(0,l.kt)("strong",{parentName:"li"},"Wake on LAN"),"."),(0,l.kt)("li",{parentName:"ol"},"Fix reboot into BIOS settings page under Linux environment (Eg. ",(0,l.kt)("inlineCode",{parentName:"li"},"systemctl reboot --firmware-setup"),")."),(0,l.kt)("li",{parentName:"ol"},"Fix Linux Wake on Lan light issue."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"http://files.seeedstudio.com/wiki/X86-BIOS/SD-BS-CJ41G-M-101-G.zip"},"SD-BS-CJ41G-M-101-G 08/31/2020 14:01:20")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"SHA256:")," eb932b69435d26a5b076c485c90e4289a697681ac092c18e85c86804e3fe4206")),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"Under BIOS Menu, ",(0,l.kt)("strong",{parentName:"li"},"Setup")," -> ",(0,l.kt)("strong",{parentName:"li"},"Chipset")," -> ",(0,l.kt)("strong",{parentName:"li"},"Fan Control"),", added ",(0,l.kt)("strong",{parentName:"li"},"Always On")," options."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-M-101-E.zip"},"SD-BS-CJ41G-M-101-E 01/07/2020 14:03:11")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"SHA256:")," 98bb25d6d32250fb10bf047f5902630b82a8560020fb4336d7723b4dfb3f9df2")),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"Fix the problem of incomplete display of startup Seeed logo screen."))),(0,l.kt)("p",null,"!!!Note\nLatest BIOS support ",(0,l.kt)("strong",{parentName:"p"},"auto-flash feature"),", where you only need to place the files in the ",(0,l.kt)("strong",{parentName:"p"},"root location of FAT32 format USB")," and ",(0,l.kt)("strong",{parentName:"p"},"select the USB-drive as boot up")," option. It will automatic enters flashing."),(0,l.kt)("h3",{id:"step-1---download-the-newest-version-of-bios"},"Step 1 - Download the newest version of BIOS"),(0,l.kt)("p",null,"Download the latest version of BIOS from ",(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-H.zip"},(0,l.kt)("strong",{parentName:"a"},"here")),"."),(0,l.kt)("h3",{id:"step-2----prepare-bootable-usb"},"Step 2 -  Prepare bootable USB"),(0,l.kt)("p",null,"Just like creating a bootable USB for installing OS, format the USB into ",(0,l.kt)("inlineCode",{parentName:"p"},"FAT32")," file system. This time, just unzip the downloaded file and copy the contents into the USB."),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios-files.png\n"})),(0,l.kt)("h3",{id:"step-3---upgrading-bios"},"Step 3 - Upgrading BIOS"),(0,l.kt)("div",{className:"tips",style:{display:"table",tableLayout:"fixed",backgroundColor:"#F5A9A9",height:"auto",width:"100%"}},(0,l.kt)("div",{className:"left-icon",style:{display:"table-cell",verticalAlign:"middle",backgroundColor:"#DF0101",paddingTop:10,boxSizing:"border-box",height:"auto",width:38,textAlign:"center"}},(0,l.kt)("img",{style:{width:26,verticalAlign:"middle"},src:"https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg",alt:"attention icon"})),(0,l.kt)("div",{className:"right-desc",style:{display:"table-cell",verticalAlign:"middle",paddingLeft:15,boxSizing:"border-box",width:"calc(95% - 38px)"}},(0,l.kt)("p",{style:{color:"#000000",fontWeight:"bold",marginTop:10}},"Attention"),(0,l.kt)("p",{style:{color:"#000000",fontSize:14}},"The first boot up from the BIOS upgrade is ",(0,l.kt)("b",null,"relatively long"),", please be patient to wait, and the installed OS will launch eventually. It will take ",(0,l.kt)("b",null,"around 3 ~ 5 minutes"),"."))),(0,l.kt)("p",null,"Plug the USB into ODYSSEY - X86J41x5 and boot up and follow steps below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Keep pressing ",(0,l.kt)("inlineCode",{parentName:"li"},"F7")," Key to Enter ",(0,l.kt)("strong",{parentName:"li"},"Boot Manager Screen"),". Select the ",(0,l.kt)("inlineCode",{parentName:"li"},"UEFI: Built-in EFI Shell")," as boot device and press ",(0,l.kt)("inlineCode",{parentName:"li"},"Enter"),".")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios1.jpg"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Wait a couple of seconds to enter the EFI shell")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios2.jpg"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You will see the following message")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios3.jpg"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type ",(0,l.kt)("strong",{parentName:"li"},"BIOS.nsh")," and press ",(0,l.kt)("strong",{parentName:"li"},"ENTER")," to start the update process")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios4.jpg"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If the BIOS update was successful, you will see the following output")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios5.jpg"})),(0,l.kt)("h3",{id:"step-4---reboot"},"Step 4 - Reboot"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"When the BIOS is upgraded, ",(0,l.kt)("strong",{parentName:"p"},"press the ON/OFF button"),", and you should see the blue light goes off.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Unplug the DC power jack and RTC battery")," from the ODYSSEY-X86.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Wait a couple of minutes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Plug the RTC battery and DC power jack back to the ODYSSEY-X86.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Press the ON/OFF button and wait patiently"),". You should see the blue light goes on."))),(0,l.kt)("h3",{id:"step-5---wait-patiently"},"Step 5 - Wait Patiently"),(0,l.kt)("p",null,"Please wait patiently and ",(0,l.kt)("strong",{parentName:"p"},"DO NOT")," unplug power (or the hardware) to corrupt the updating process. The process will take ",(0,l.kt)("strong",{parentName:"p"},"6 ~ 8 minutes"),", feel free for a coffee break!"),(0,l.kt)("div",{className:"tips",style:{display:"table",tableLayout:"fixed",backgroundColor:"#F5A9A9",height:"auto",width:"100%"}},(0,l.kt)("div",{className:"left-icon",style:{display:"table-cell",verticalAlign:"middle",backgroundColor:"#DF0101",paddingTop:10,boxSizing:"border-box",height:"auto",width:38,textAlign:"center"}},(0,l.kt)("img",{style:{width:26,verticalAlign:"middle"},src:"https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg",alt:"attention icon"})),(0,l.kt)("div",{className:"right-desc",style:{display:"table-cell",verticalAlign:"middle",paddingLeft:15,boxSizing:"border-box",width:"calc(95% - 38px)"}},(0,l.kt)("p",{style:{color:"#000000",fontWeight:"bold",marginTop:10}},"Attention"),(0,l.kt)("p",{style:{color:"#000000",fontSize:14}},"The first boot up from the BIOS upgrade is ",(0,l.kt)("b",null,"relatively long"),", please be patient to wait, and the installed OS will launch eventually. It will take ",(0,l.kt)("b",null,"around 6 ~ 8 minutes"),"."))),(0,l.kt)("h2",{id:"how-to-update-the-embedded-controller"},"How to update the Embedded Controller"),(0,l.kt)("p",null,"The X86 also has a embedded controller that can be updated. Updating the EC has the same procedure as updating BIOS(auto-update):"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download the firmware files.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Save them in the root location of a FAT32 formatted USB drive.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start ODYSSEY-X86 and press ",(0,l.kt)("strong",{parentName:"p"},"F7")," to enter ",(0,l.kt)("strong",{parentName:"p"},"Boot Select Mode"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Choose the connected flash drive (if there are 2 options for the flash drive, choose the one that starts with ",(0,l.kt)("strong",{parentName:"p"},"UEFI"),")")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Wait and it will automatically start the flashing process.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Reboot the device when it's done."))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("iframe",{width:720,height:480,src:"https://www.youtube.com/embed/r7M4T-HOZ20",frameBorder:0,allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,l.kt)("h3",{id:"latest-ec-firmware"},"Latest EC Firmware"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-R.zip"},(0,l.kt)("strong",{parentName:"a"},"SD-EC-CJ41G-M-101-R 07/26/2022 17:00:00"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Fixing bug"),": Increase overall stability.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"History EC Firmware:"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-Q.zip"},(0,l.kt)("strong",{parentName:"a"},"SD-EC-CJ41G-M-101-Q 10/12/2021 17:00:00"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SHA256:")," 6009005FF61A64A580F0862343CED1E1E8B4DE8625E326510582063D6E20BCE4")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Fixing bug"),": Increase overall stability.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-O.zip"},(0,l.kt)("strong",{parentName:"a"},"SD-EC-CJ41G-M-101-O 08/16/2021 15:00:00"))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SHA256:")," a08605b8b76bda6a50b64e64c4a9b256297d393f7139ffb2525cc93b28556f13"))),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Fixing bug"),": Increase overall stability."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-M.zip"},(0,l.kt)("strong",{parentName:"a"},"SD-EC-CJ41G-M-101-M 04/16/2021 01:20:07")))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SHA256:")," DB6E1F77D6EB4B9A79DDAF6E7A55052B7BE6E63B8339C7B948FF111E5C9CA8AD"))),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Fixing bug"),": Increase overall stability."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-K.zip"},(0,l.kt)("strong",{parentName:"a"},"SD-EC-CJ41G-M-101-K 03/23/2021 10:57:32")))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SHA256:")," 5e479185398121b1913ada3cff03264ea1522196b53f34c9ace77bd1f3ecc47e"))),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Fixing bug"),": Increase stability of the EC firmware."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-J.zip"},(0,l.kt)("strong",{parentName:"a"},"SD-EC-CJ41G-M-101-J 02/02/2021 15:39:11")))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SHA256:")," 4ab099f45439f8f6ec14e25ae50a64f878eed4c998e39000e17f2047df6bbb83"))),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Fixing bug"),": Shutting down during BIOS setting page causes the ODYSSEY needs to reset the power in order to turn back on."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-I.zip"},(0,l.kt)("strong",{parentName:"a"},"SD-EC-CJ41G-M-101-I 12/31/2020 20:34:37")))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SHA256:")," 94f664401120183238c5eaa41ea267b240dd5836fa879c568bf3275bca508c52"))),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"Optimize FAN control logic"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-C.zip"},"SD-EC-CJ41G-M-101-C 08/31/2020 14:01:20")))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SHA256:")," 4b7ed82357eb608c3ec00f6f5f0358a35e63b327ae33855eb5e7608814f8df6a"))),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"Optimize the problem of incorrect starting and turning temperature of the Fan."))),(0,l.kt)("h2",{id:"tech-support"},"Tech Support"),(0,l.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,l.kt)("div",{class:"button_tech_support_container"},(0,l.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,l.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,l.kt)("div",{class:"button_tech_support_container"},(0,l.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,l.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}k.isMDXComponent=!0}}]);