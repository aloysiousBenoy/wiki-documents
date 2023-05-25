"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=s,m=c["".concat(o,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:s,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},23692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const r={description:"ODYSSEY - X86J4105",title:"OPNsense Installation",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86-OPNsense",last_update:{date:"01/03/2023",author:"w0x7ce"}},i=void 0,l={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86-OPNsense",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86-OPNsense",title:"OPNsense Installation",description:"ODYSSEY - X86J4105",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86-OPNsense.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation",slug:"/ODYSSEY-X86-OPNsense",permalink:"/ODYSSEY-X86-OPNsense",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86-OPNsense.md",tags:[{label:"ODYSSEY",permalink:"/tags/odyssey"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"ODYSSEY - X86J4105",title:"OPNsense Installation",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86-OPNsense",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"OpenWRT Installation",permalink:"/ODYSSEY-X86J4105-Installing-openwrt"},next:{title:"pfSense Installation",permalink:"/ODYSSEY-X86J4105-pfSense"}},o={},p=[{value:"What is OPNsense?",id:"what-is-opnsense",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Flash OPNsense image to a USB flash drive",id:"flash-opnsense-image-to-a-usb-flash-drive",level:3},{value:"Boot OPNsense from flash drive and install on external drive",id:"boot-opnsense-from-flash-drive-and-install-on-external-drive",level:3},{value:"Set up OPNsense",id:"set-up-opnsense",level:3},{value:"Change LAN interface IP address",id:"change-lan-interface-ip-address",level:4},{value:"Hardware Configuration",id:"hardware-configuration",level:4},{value:"OPNsense GUI",id:"opnsense-gui",level:4},{value:"Community",id:"community",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/1.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("p",null,"This guide explains how to turn your ODYSSEY-X86 into a software router and firewall by installing OPNsense. Let's get started!"),(0,s.kt)("h2",{id:"what-is-opnsense"},"What is OPNsense?"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://opnsense.org"},"OPNsense")," is an open source firewall and routing software based on FreeBSD operating system which is developed by Deciso. It is a fork of pfSense, which in turn was forked from m0n0wall. It was launched in January 2015. OPNsense has a web-based GUI and supports x86-64 platform. Not only it can act as a firewall, but also it has traffic shaping, load balancing, and virtual private network capabilities. Also other features can be added via plugins."),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/25.png",alt:"pir",width:300,height:"auto"})),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html"},"ODYSSEY-X86"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"USB Flash Drive (>1GB)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"2 Ethernet cables and a router with access to internet")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"External storage media (If you use ODYSSEY-X86 with built-in eMMC, you can use that as well)"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"NVMe SSD or"),(0,s.kt)("li",{parentName:"ul"},"SATA SSD or"),(0,s.kt)("li",{parentName:"ul"},"SATA HDD or"),(0,s.kt)("li",{parentName:"ul"},"Micro-SD Card or"),(0,s.kt)("li",{parentName:"ul"},"USB Flash Drive (>1GB)")))),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("p",null,"Now let's go through the process of installing OPNsense on ODYSSEY-X86."),(0,s.kt)("h3",{id:"flash-opnsense-image-to-a-usb-flash-drive"},"Flash OPNsense image to a USB flash drive"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Step 1.")," Visit ",(0,s.kt)("a",{parentName:"p",href:"https://opnsense.org/download"},"this link")," to open the download page of OPNsense")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Step 2.")," Select ",(0,s.kt)("strong",{parentName:"p"},"amd64")," as the Architecture, ",(0,s.kt)("strong",{parentName:"p"},"vga")," as the image type, choose ",(0,s.kt)("strong",{parentName:"p"},"any")," Mirror Location and click ",(0,s.kt)("strong",{parentName:"p"},"Download")))),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/2.png",alt:"pir",width:550,height:"auto"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Step 3.")," Extract the ",(0,s.kt)("strong",{parentName:"p"},".bz2")," file to get an ",(0,s.kt)("strong",{parentName:"p"},".img")," file")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Step 4.")," Download and install ",(0,s.kt)("strong",{parentName:"p"},"BalenaEtcher")," according to your OS by visiting ",(0,s.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher"},"this link")," and open it"))),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/3.jpg",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 5.")," Connect a USB flash drive to your PC, click ",(0,s.kt)("strong",{parentName:"li"},"Flash from file"),", select the downloaded/ extracted file from before, click ",(0,s.kt)("strong",{parentName:"li"},"Select target"),", choose the connected USB flash drive and click ",(0,s.kt)("strong",{parentName:"li"},"Flash"))),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/4.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("h3",{id:"boot-opnsense-from-flash-drive-and-install-on-external-drive"},"Boot OPNsense from flash drive and install on external drive"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Step 1.")," Connect the USB flash drive that we flashed the OPNsense image before to one the of the USB ports on the ODYSSEY-X86")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Step 2.")," Attach an external storage drive to install OPNsense. ODYSSEY-X86 has a number of storage options such as:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"NVMe SSD"),(0,s.kt)("li",{parentName:"ul"},"SATA SSD"),(0,s.kt)("li",{parentName:"ul"},"SATA HDD"),(0,s.kt)("li",{parentName:"ul"},"Micro-SD Card"),(0,s.kt)("li",{parentName:"ul"},"USB Flash Drive (>1GB)")))),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png",alt:"pir",width:650,height:"auto"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 3.")," Turn on ODYSSEY-X86 and continuosly press ",(0,s.kt)("strong",{parentName:"li"},"DELETE")," key to enter BIOS")),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/5.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 4.")," Go to ",(0,s.kt)("strong",{parentName:"li"},"Boot")," tab, select ",(0,s.kt)("strong",{parentName:"li"},"Boot Option #1")," and select ",(0,s.kt)("strong",{parentName:"li"},"UEFI: USB, Partition 1"))),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/6.jpg",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 5.")," Go to ",(0,s.kt)("strong",{parentName:"li"},"Save & Exit")," tab, select ",(0,s.kt)("strong",{parentName:"li"},"Save Changes and Reset")," and select ",(0,s.kt)("strong",{parentName:"li"},"Yes")," for the pop up window")),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/8.jpg",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("p",null,"Now ODYSSEY-X86 will boot from the USB flash drive into OPNsense and you will see the following output if it boots successfully"),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/9.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Step 6.")," Type ",(0,s.kt)("strong",{parentName:"p"},"installer")," at the ",(0,s.kt)("strong",{parentName:"p"},"login:")," prompt and type ",(0,s.kt)("strong",{parentName:"p"},"opnsense")," as the password to enter the installation page")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Step 7.")," Select ",(0,s.kt)("strong",{parentName:"p"},"Continue with default keymap")," (default option) and press ",(0,s.kt)("strong",{parentName:"p"},"ENTER")))),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/10.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 8.")," Select ",(0,s.kt)("strong",{parentName:"li"},"Install (UFS)")," (default option) and press ",(0,s.kt)("strong",{parentName:"li"},"ENTER"))),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/11.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 9.")," Select the connected external drive and press ",(0,s.kt)("strong",{parentName:"li"},"ENTER"))),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/12.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("p",null,"Now it will start installing OPNsense on the connected external drive"),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/13.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 10.")," Once the installation is complete, it will ask you to change ",(0,s.kt)("strong",{parentName:"li"},"the root password"),". This is ",(0,s.kt)("strong",{parentName:"li"},"recommended"),". Press ",(0,s.kt)("strong",{parentName:"li"},"ENTER")," on the window and change the root password")),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/14.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/15.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 11.")," Select ",(0,s.kt)("strong",{parentName:"li"},"Complete Install")," and press ",(0,s.kt)("strong",{parentName:"li"},"ENTER")," to reboot")),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/16.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 12.")," When the system starts booting again, remove the USB Flash Drive, enter BIOS, select the connected external drive as the boot device and boot again")),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/17.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("p",null,"Now ODYSSEY-X86 will boot from the external drive into OPNsense and you will see the following output if it boots successfully"),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/9.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("h3",{id:"set-up-opnsense"},"Set up OPNsense"),(0,s.kt)("h4",{id:"change-lan-interface-ip-address"},"Change LAN interface IP address"),(0,s.kt)("p",null,"By default OPNsense will assign the LAN interface to ",(0,s.kt)("strong",{parentName:"p"},"192.168.1.1")," with ",(0,s.kt)("strong",{parentName:"p"},"DHCP server")," enabled. If you router IP address is also 192.168.1.1 (most routers have this IP), you might want to change the LAN IP of OPNsense. So we need to do that first."),(0,s.kt)("p",null,"However, if your router has a different IP address from 192.168.1.1, you can skip this section and move to ",(0,s.kt)("strong",{parentName:"p"},"Hardware Configuration section")," which is the section after this"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 1.")," Login to the ",(0,s.kt)("strong",{parentName:"li"},"root account")," by typing ",(0,s.kt)("strong",{parentName:"li"},"root")," at the ",(0,s.kt)("strong",{parentName:"li"},"login:")," prompt followed by the password that you specified before")),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/18.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Step 2.")," Set the configuration as follows"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Type ",(0,s.kt)("strong",{parentName:"li"},"2")," to set interface IP address"),(0,s.kt)("li",{parentName:"ul"},"Type ",(0,s.kt)("strong",{parentName:"li"},"1")," to select LAN as the interface to configure"),(0,s.kt)("li",{parentName:"ul"},"Type ",(0,s.kt)("strong",{parentName:"li"},"N")," to NOT configure IPv4 address LAN interface via DHCP"),(0,s.kt)("li",{parentName:"ul"},"Type ",(0,s.kt)("strong",{parentName:"li"},"192.168.2.1")," as the new LAN IPv4 address (You can enter any IP address of your choice here)"),(0,s.kt)("li",{parentName:"ul"},"Type ",(0,s.kt)("strong",{parentName:"li"},"24")," as the new LAN IPv4 subnet bit count"),(0,s.kt)("li",{parentName:"ul"},"Press ",(0,s.kt)("strong",{parentName:"li"},"ENTER")," to configure for LAN, not for WAN"),(0,s.kt)("li",{parentName:"ul"},"Press ",(0,s.kt)("strong",{parentName:"li"},"ENTER")," to skip configuring IPv6 address LAN interface via WAN tracking"),(0,s.kt)("li",{parentName:"ul"},"Type ",(0,s.kt)("strong",{parentName:"li"},"y")," to enable DHCP server on LAN"),(0,s.kt)("li",{parentName:"ul"},"Type ",(0,s.kt)("strong",{parentName:"li"},"192.168.2.1")," as the start address of the IPv4 client address range"),(0,s.kt)("li",{parentName:"ul"},"Type ",(0,s.kt)("strong",{parentName:"li"},"192.168.2.254")," as the end address of the IPv4 client address range"),(0,s.kt)("li",{parentName:"ul"},"Type ",(0,s.kt)("strong",{parentName:"li"},"N")," to NOT change the web GUI protocol from HTTPS to HTTP"),(0,s.kt)("li",{parentName:"ul"},"Type ",(0,s.kt)("strong",{parentName:"li"},"N")," to NOT generate a new welf-signed web GUI certificate"),(0,s.kt)("li",{parentName:"ul"},"Type ",(0,s.kt)("strong",{parentName:"li"},"N")," to NOT restore web GUI access defaults")))),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/20.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("p",null,"After that you will see the following output"),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/21.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("h4",{id:"hardware-configuration"},"Hardware Configuration"),(0,s.kt)("p",null,"Connect the 2 Ethernet ports of the ODYSSEY-X86 to a PC (client) and a router via 2 Ethernet cables as follows"),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/22.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("p",null,"After this, your PC will be able to connect to the internet via the newly setup OPNsense router!"),(0,s.kt)("h4",{id:"opnsense-gui"},"OPNsense GUI"),(0,s.kt)("p",null,"Type ",(0,s.kt)("strong",{parentName:"p"},"192.168.2.1")," on a web browser and login to the web GUI of OPNsense by entering the root account details you specified before"),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/24.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/1.png",alt:"pir",width:1e3,height:"auto"})),(0,s.kt)("p",null,"Here you can confgure many settings according to your needs by visiting ",(0,s.kt)("a",{parentName:"p",href:"https://docs.docker.com"},"OPNsense offficial documentation"),"!"),(0,s.kt)("h2",{id:"community"},"Community"),(0,s.kt)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/_IzyJTcnPu8",title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"[Web Page]")," ",(0,s.kt)("a",{parentName:"li",href:"https://docs.docker.com"},"OPNsense Offficial Documentation"))),(0,s.kt)("h2",{id:"tech-support"},"Tech Support"),(0,s.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,s.kt)("div",{class:"button_tech_support_container"},(0,s.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,s.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,s.kt)("div",{class:"button_tech_support_container"},(0,s.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,s.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);