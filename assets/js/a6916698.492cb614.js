"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6782],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>f});var i=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=i.createContext({}),s=function(e){var t=i.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(o),m=n,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||r;return o?i.createElement(f,a(a({ref:t},l),{},{components:o})):i.createElement(f,a({ref:t},l))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=m;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u[p]="string"==typeof e?e:n,a[1]=u;for(var s=2;s<r;s++)a[s]=o[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},71596:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var i=o(87462),n=(o(67294),o(3905));const r={description:"Build a DAPLink Deivce using Seeed Studio XIAO SAMD21",title:"Build a DAPLink Deivce using Seeed Studio XIAO SAMD21",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino-XIAO-DAPLink",last_update:{date:"1/11/2023",author:"shuxu hu"}},a="Seeed Studio XIAO SAMD 21 DAPLink",u={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/Seeeduino-XIAO-DAPLink",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/Seeeduino-XIAO-DAPLink",title:"Build a DAPLink Deivce using Seeed Studio XIAO SAMD21",description:"Build a DAPLink Deivce using Seeed Studio XIAO SAMD21",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/Seeeduino-XIAO-DAPLink.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial",slug:"/Seeeduino-XIAO-DAPLink",permalink:"/Seeeduino-XIAO-DAPLink",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/Seeeduino-XIAO-DAPLink.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Build a DAPLink Deivce using Seeed Studio XIAO SAMD21",title:"Build a DAPLink Deivce using Seeed Studio XIAO SAMD21",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino-XIAO-DAPLink",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"TinyML on Seeed Studio XIAO SAMD21",permalink:"/Seeeduino-XIAO-TinyML"},next:{title:"Connect Seeed Studio XIAO SAMD21 to your Raspberry PI",permalink:"/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI"}},d={},s=[{value:"Features",id:"features",level:2},{value:"Get Started",id:"get-started",level:2},{value:"<code>uf2</code> Method",id:"uf2-method",level:3},{value:"Connection Pinout",id:"connection-pinout",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:s};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"seeed-studio-xiao-samd-21-daplink"},"Seeed Studio XIAO SAMD 21 DAPLink"),(0,n.kt)("p",null,"Now, we have ",(0,n.kt)("strong",{parentName:"p"},"developed the DAPLink firmware running on your Arduino Boards"),"(",(0,n.kt)("em",{parentName:"p"},"SAMD Series"),") such as ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeeduino Xiao")," so that you can upload and debug development boards that support DAPLink in a most cost-effective way!"),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Debug and Flash Arm Cortex CPUs"),(0,n.kt)("li",{parentName:"ul"},"Provides a virtual serial port, eliminating the need for a usb to serial port"),(0,n.kt)("li",{parentName:"ul"},"Drag and drop to upload firmware(coming soon)")),(0,n.kt)("h2",{id:"get-started"},"Get Started"),(0,n.kt)("p",null,"Please visit the Arduino DAPLink Get Started Wiki here."),(0,n.kt)("h3",{id:"uf2-method"},(0,n.kt)("inlineCode",{parentName:"h3"},"uf2")," Method"),(0,n.kt)("p",null,"For convenience, we also provide ",(0,n.kt)("inlineCode",{parentName:"p"},"uf2")," methods of uploading Wio Terminal's firmware. Simply download the ",(0,n.kt)("inlineCode",{parentName:"p"},"uf2")," files from below."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download the ",(0,n.kt)("a",{parentName:"li",href:"http://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/simple_daplink_xiao.uf2"},(0,n.kt)("strong",{parentName:"a"},"simple_daplink_xiao"))," ",(0,n.kt)("inlineCode",{parentName:"li"},"uf2")," files.")),(0,n.kt)("p",null,"Entering the bootloader mode by sliding the power switch twice quickly. For more reference, please also see ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq"},"here"),"."),(0,n.kt)("p",null,"An external drive named ",(0,n.kt)("inlineCode",{parentName:"p"},"Arduino")," should appear in your PC. Drag the the downloaded uf2 files to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Arduino")," drive."),(0,n.kt)("h3",{id:"connection-pinout"},"Connection Pinout"),(0,n.kt)("p",null,"You may use the following for reference:"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/daplink-xiao.jpg"})),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);