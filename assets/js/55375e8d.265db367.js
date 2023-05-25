"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(n),m=l,c=h["".concat(s,".").concat(m)]||h[m]||d[m]||a;return n?i.createElement(c,r(r({ref:t},u),{},{components:n})):i.createElement(c,r({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[h]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(87462),l=(n(67294),n(3905));const a={description:"Qt for reTerminal with Python",title:"Qt for reTerminal with Python",keywords:["Edge","reTerminal Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-build-UI-using-Qt-for-Python",last_update:{date:"1/31/2023",author:"jianjing Huang"}},r=void 0,o={unversionedId:"Edge/reTerminal/Application/reTerminal-build-UI-using-Qt-for-Python",id:"Edge/reTerminal/Application/reTerminal-build-UI-using-Qt-for-Python",title:"Qt for reTerminal with Python",description:"Qt for reTerminal with Python",source:"@site/docs/Edge/reTerminal/Application/reTerminal-build-UI-using-Qt-for-Python.md",sourceDirName:"Edge/reTerminal/Application",slug:"/reTerminal-build-UI-using-Qt-for-Python",permalink:"/reTerminal-build-UI-using-Qt-for-Python",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal/Application/reTerminal-build-UI-using-Qt-for-Python.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Qt for reTerminal with Python",title:"Qt for reTerminal with Python",keywords:["Edge","reTerminal Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-build-UI-using-Qt-for-Python",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"reTerminal and Pi camera modules",permalink:"/reTerminal-piCam"},next:{title:"Flutter for reTerminal",permalink:"/reTerminal-build-UI-using-Flutter"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prepare Development Environment",id:"prepare-development-environment",level:2},{value:"On reTerminal",id:"on-reterminal",level:3},{value:"On Host PC",id:"on-host-pc",level:3},{value:"Build the Project",id:"build-the-project",level:2},{value:"Design the UI",id:"design-the-ui",level:3},{value:"Build the UI on qml",id:"build-the-ui-on-qml",level:3},{value:"Obtain Location and Size of Shapes",id:"obtain-location-and-size-of-shapes",level:4},{value:"Obtain Location and Size of Text",id:"obtain-location-and-size-of-text",level:4},{value:"Build the Fullscreen UI",id:"build-the-fullscreen-ui",level:3},{value:"Methods to Control the LEDs",id:"methods-to-control-the-leds",level:3},{value:"Prepare Python File to Run the APP",id:"prepare-python-file-to-run-the-app",level:3},{value:"Prepare a Script to Run the Python file",id:"prepare-a-script-to-run-the-python-file",level:3},{value:"Prepare a Desktop File to Launch the App",id:"prepare-a-desktop-file-to-launch-the-app",level:3},{value:"Launch the App",id:"launch-the-app",level:3},{value:"Debugging the App",id:"debugging-the-app",level:3},{value:"Direct Test",id:"direct-test",level:2},{value:"Bonus Demo",id:"bonus-demo",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function h(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/final-output.png",alt:"pir",width:"1000",height:"auto"})),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"This wiki explains how to build your own user interface using Qt for Python on the reTerminal. Here we have used PySide2 for the development. PySide2 is the official Python module from the Qt for Python project, which provides access to the complete Qt5 framework.Qt for Python allows you to build interactive user interfaces in a more user friendly way! It is also very flexible to use and has a short learning curve."),(0,l.kt)("p",null,"By following the guide below, you will be able to create an application to control the STA and USR LEDs on the reTerminal just by clicking buttons on the LCD. So let's get started!"),(0,l.kt)("h2",{id:"prepare-development-environment"},"Prepare Development Environment"),(0,l.kt)("h3",{id:"on-reterminal"},"On reTerminal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1.")," Access reTerminal using the ",(0,l.kt)("strong",{parentName:"li"},"onboard LCD, external display or SSH")," as explained ",(0,l.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet"},"here")," and type the following on a terminal window")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install qml-module-qtquick-shapes python3-pyside2.qtqml python3-pyside2.qtcore python3-pyside2.qtnetwork python3-pyside2.qtgui python3-pyside2.qtwidgets python3-pyside2.qtquick qtquickcontrols2-5-dev qml-module-qtcharts qml-module-qtquick-controls qml-module-qtquick-controls2\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2.")," Install compile tools to install the ",(0,l.kt)("strong",{parentName:"li"},"QtQuick.Studio")," component manually")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install qt5-qmake\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," We have to install QtQuick.Studio manually because default Debian and Ubuntu OS don't have this module"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 3.")," Install the ",(0,l.kt)("strong",{parentName:"li"},"QtQuick.Studio")," module")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/Pillar1989/qtquickdesigner-components.git\ncd qtquickdesigner-components\nqmake\nmake\nsudo make install\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Because the latest QtQuick.Studio module cannot work on the current Raspberry Pi OS, we had port it to Debian GNU/Linux 10 (buster)"),(0,l.kt)("p",null,"We can ignore the following prompt error."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"Some of the required modules (qtHaveModule(quick)) are not available.\nSkipped.\n")),(0,l.kt)("p",null,"Now we have finished installing the necessary packages on the reTerminal"),(0,l.kt)("h3",{id:"on-host-pc"},"On Host PC"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1.")," Download and install ",(0,l.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Microsoft Visual Studio Code"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Download the installer which is suitable for your operating system"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2.")," Click on the ",(0,l.kt)("strong",{parentName:"li"},"Extensions")," tab on the left navigation menu and type ",(0,l.kt)("strong",{parentName:"li"},"remote development")," in the search box")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 3.")," Select ",(0,l.kt)("strong",{parentName:"p"},"Remote Development")," and click ",(0,l.kt)("strong",{parentName:"p"},"Install"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 4.")," Press ",(0,l.kt)("strong",{parentName:"p"},"F1")," on the keyboard, type ",(0,l.kt)("strong",{parentName:"p"},"ssh")," and select ",(0,l.kt)("strong",{parentName:"p"},"Remote-SSH:Connect to Host...")))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 5.")," Enter the following")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pi@192.xxx.xx.xx\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," ",(0,l.kt)("strong",{parentName:"p"},"pi")," is the username and ",(0,l.kt)("strong",{parentName:"p"},"192.xxx.xx.xx")," is the IP address of the reTerminal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 6.")," Enter the password for the user")),(0,l.kt)("p",null,"Now you have sucessfully logged in to reTerminal using SSH"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 7.")," Install ",(0,l.kt)("strong",{parentName:"li"},"Python")," extension as ",(0,l.kt)("strong",{parentName:"li"},"step 2")," before")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/python-extension.png",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 8.")," Install ",(0,l.kt)("strong",{parentName:"li"},"Qt for Python")," extension")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/qt-python-extension.png",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 9.")," Navigate to ",(0,l.kt)("inlineCode",{parentName:"li"},"File > Open Folder...")," and select any folder that you want to open")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Later we will use Visual Studio Code to create files inside the reTerminal and build our project"),(0,l.kt)("p",null,"Now we have successfully finished preparing the development environment"),(0,l.kt)("h2",{id:"build-the-project"},"Build the Project"),(0,l.kt)("p",null,"Next let's move on to building the project. The workflow is as follows:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Design the UI on a ",(0,l.kt)("strong",{parentName:"li"},"graphic designer software")),(0,l.kt)("li",{parentName:"ol"},"Create a ",(0,l.kt)("strong",{parentName:"li"},".qml")," file and build the UI based on the positions of the UI elements obtained from the graphic designer software"),(0,l.kt)("li",{parentName:"ol"},"Create another ",(0,l.kt)("strong",{parentName:"li"},".qml")," for the full screen UI application"),(0,l.kt)("li",{parentName:"ol"},"Create a ",(0,l.kt)("strong",{parentName:"li"},"python")," file and write the functions that will be used to control the LEDs"),(0,l.kt)("li",{parentName:"ol"},"Create a ",(0,l.kt)("strong",{parentName:"li"},"Python")," file to run the app"),(0,l.kt)("li",{parentName:"ol"},"Create a ",(0,l.kt)("strong",{parentName:"li"},"script")," to run the python file"),(0,l.kt)("li",{parentName:"ol"},"Create a ",(0,l.kt)("strong",{parentName:"li"},"Desktop shortcut")," to open the created app by double clicking on an icon")),(0,l.kt)("p",null,"The files we need to create are as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"LedGui.qml - UI with graphical elements"),(0,l.kt)("li",{parentName:"ul"},"App.qml - Full screen UI application"),(0,l.kt)("li",{parentName:"ul"},"ledControl.py - LEDs controlling functions"),(0,l.kt)("li",{parentName:"ul"},"main.py - Run the app"),(0,l.kt)("li",{parentName:"ul"},"led_start.sh - Run the Python file"),(0,l.kt)("li",{parentName:"ul"},"led.desktop - Open the app")),(0,l.kt)("h3",{id:"design-the-ui"},"Design the UI"),(0,l.kt)("p",null,"First we need to design the UI. To do this, we will use a free online graphic designer software called ",(0,l.kt)("strong",{parentName:"p"},"Gravit Designer")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 1.")," Click ",(0,l.kt)("a",{parentName:"p",href:"https://www.designer.io/"},"this link")," to open Gravit Designer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 2.")," Click ",(0,l.kt)("strong",{parentName:"p"},"Get Started"),", create a free account or directly log in with Facebook or Google")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 3.")," Set the canvas size as ",(0,l.kt)("strong",{parentName:"p"},"1280 x 720px")," and click ",(0,l.kt)("strong",{parentName:"p"},"Create!")))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/gravit-dimensions.png",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," We set it to 1280x720px because that's the resolution of the reTerminal LCD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 4.")," Select the ",(0,l.kt)("strong",{parentName:"li"},"Rectangle")," shape")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/create-rect.png",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 5.")," Draw a rectangle for the ",(0,l.kt)("strong",{parentName:"li"},"title bar of the UI")," by holding down on the left mouse button, drag the mouse and release")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/rect-draw.jpg",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 6.")," Draw a rectangle for the ",(0,l.kt)("strong",{parentName:"p"},"title bar of the UI")," by holding down on the left mouse button, drag the mouse and release")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 7.")," Draw the following shapes for the ",(0,l.kt)("strong",{parentName:"p"},"buttons of the UI")))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/rect-buttons.png",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 8.")," Select the shape and under ",(0,l.kt)("strong",{parentName:"li"},"INSPECTOR")," tab, select ",(0,l.kt)("strong",{parentName:"li"},"Fills"))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/rect-color.png",alt:"pir",width:"500",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 9.")," Click on a color to fill the selected shape")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/rect-title-fill.png",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 10.")," Fill the remaining shapes as follows")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/gravit-colored-blocks.png",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 11.")," Add a close button")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/gravit-close.png",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 12.")," Click on the ",(0,l.kt)("strong",{parentName:"li"},"Text tool"))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/gravit-text.png",alt:"pir",width:"600",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 13."),' Place a text block and type "LED TEST"')),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-2.png",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 14.")," Click on the text block, change the size and color")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-3.png",alt:"pir",width:"350",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 15.")," Repeat the same to obtain the following")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-4.png",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("p",null,"Now we have finished designing the UI"),(0,l.kt)("h3",{id:"build-the-ui-on-qml"},"Build the UI on qml"),(0,l.kt)("p",null,"Now we will transfer the design from Gravit Designer to qml and build the UI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 1.")," Connect to reTerminal using SSH via Microsoft Visual Code, open a folder as mentioned before.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 2.")," Right click and select ",(0,l.kt)("strong",{parentName:"p"},"New Folder")))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-1.png",alt:"pir",width:"700",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 3.")," Type a name for the folder and enter the folder")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-2.png",alt:"pir",width:"500",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 4.")," Right click on the folder and select ",(0,l.kt)("strong",{parentName:"li"},"New File"))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-3.png",alt:"pir",width:"500",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 4.")," Type a name for the file with ",(0,l.kt)("strong",{parentName:"li"},".qml")," extension as follows")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-4.png",alt:"pir",width:"600",height:"auto"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Make sure the first letter is ",(0,l.kt)("strong",{parentName:"p"},"Upper Case")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 5.")," Enter the ",(0,l.kt)("strong",{parentName:"li"},".qml file")," and copy the following codes")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-qml"},'// import libraries\nimport QtQuick 2.8\nimport QtQuick.Controls 2.1\n\n/* The Item type is the base type for all visual items in Qt Quick. Here 1280 and 720 are chosen\nfor the dimensions because the resolution of reTerminal LCD is 1280x720 */\nItem {\n    // identify the qml\n    id: ledControl\n    // define width and height of the app\n    width: 1280\n    height: 720\n\n    // Rectangle block for the heading\n    Rectangle {\n        id: titleBlock\n        x: 0 // Rectangle block position in x-axis\n        y: 0 // Rectangle block position in y-axis\n        width: 1280 // Rectangle block width\n        height: 175 // Rectangle block height\n        color: "green" // Rectangle block color\n        /* You can also enter **hexadecimal values** for the color field */\n    }\n\n    // left top button (ON)\n    Button {\n        id: staGreenOn\n        x: 159\n        y: 272\n        width: 200\n        height: 91\n        text: "ON" // text inside the button\n        font.pointSize: 28 // text font\n        palette.button: "green" // button color\n        palette.buttonText: "white" // text color\n        // Used to access the button control class in the Python file and turn on the LED\n        onClicked:\n        {\n            _Setting.staGreenOn()\n        }\n    }\n\n    // left bottom button (OFF)\n    Button {\n        id: staGreenOff\n        x: 159\n        y: 496\n        width: 200\n        height: 91\n        text: "OFF"\n        font.pointSize: 28\n        palette.button: "green"\n        palette.buttonText: "white"\n        onClicked:\n        {\n            _Setting.staGreenOff()\n        }\n    }\n\n    // middle top button (ON)\n    Button {\n        id: staRedOn\n        x: 540\n        y: 272\n        width: 200\n        height: 91\n        text: "ON"\n        font.pointSize: 28\n        palette.button: "red"\n        palette.buttonText: "white"\n        onClicked:\n        {\n            _Setting.staRedOn()\n        }\n    }\n\n    // middle bottom button (OFF)\n    Button {\n        id: staRedOff\n        x: 540\n        y: 496\n        width: 200\n        height: 91\n        text: "OFF"\n        font.pointSize: 28\n        palette.button: "red"\n        palette.buttonText: "white"\n        onClicked:\n        {\n            _Setting.staRedOff()\n        }\n    }\n\n    // right top button (ON)\n    Button {\n        id: usrGreenOn\n        x: 918\n        y: 272\n        width: 200\n        height: 91\n        text: "ON"\n        font.pointSize: 28\n        palette.button: "green"\n        palette.buttonText: "white"\n        onClicked:\n        {\n            _Setting.usrGreenOn()\n        }\n    }\n\n    // right bottom button (OFF)\n    Button {\n        id: usrGreenOff\n        x: 918\n        y: 496\n        width: 200\n        height: 91\n        text: "OFF"\n        font.pointSize: 28\n        palette.button: "green"\n        palette.buttonText: "white"\n        onClicked:\n        {\n            _Setting.usrGreenOff()\n        }\n    }\n\n    // close button\n    Button {\n        id: close\n        x: 1200\n        y: 0\n        width: 80\n        height: 31\n        palette.button: "red"\n        palette.buttonText: "white"\n        text: "X"\n        onClicked:\n        {\n            _Setting.closeWindow()\n        }\n    }\n\n    // heading\n    Text {\n        id: title\n        x: 500\n        y: 37\n        color: "white"\n        text: "LED TEST"\n        font.pixelSize: 60\n    }\n\n    // STA GREEN text\n    Text {\n        id: staGreen\n        x: 135\n        y: 400\n        text: "STA GREEN"\n        font.pixelSize: 45\n    }\n\n    // STA RED text\n    Text {\n        id: staRed\n        x: 547\n        y: 400\n        text: "STA RED"\n        font.pixelSize: 45\n    }\n\n    // USR GREEN text\n    Text {\n        id: usrGreen\n        x: 891\n        y: 400\n        text: "USR GREEN"\n        font.pixelSize: 45\n    }\n}\n')),(0,l.kt)("h4",{id:"obtain-location-and-size-of-shapes"},"Obtain Location and Size of Shapes"),(0,l.kt)("p",null,"Inside the ",(0,l.kt)("strong",{parentName:"p"},"Gravit Designer"),", select a shape block and obtain the ",(0,l.kt)("strong",{parentName:"p"},"position and size")," from the ",(0,l.kt)("strong",{parentName:"p"},"INSPECTOR")," tab"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/wiki3/build-ui-4.5.png",alt:"pir",width:"350",height:"auto"})),(0,l.kt)("h4",{id:"obtain-location-and-size-of-text"},"Obtain Location and Size of Text"),(0,l.kt)("p",null,"Inside the ",(0,l.kt)("strong",{parentName:"p"},"Gravit Designer"),", select a text block and obtain the ",(0,l.kt)("strong",{parentName:"p"},"position and size")," from the ",(0,l.kt)("strong",{parentName:"p"},"INSPECTOR")," tab"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-5.jpg",alt:"pir",width:"350",height:"auto"})),(0,l.kt)("h3",{id:"build-the-fullscreen-ui"},"Build the Fullscreen UI"),(0,l.kt)("p",null,"Next, let's build the fullscreen UI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1.")," Open the Root folder that we created before and create a new ",(0,l.kt)("strong",{parentName:"li"},".qml file")," under that folder")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-6.png",alt:"pir",width:"400",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2.")," Open the ",(0,l.kt)("strong",{parentName:"li"},".qml file")," and copy the following codes")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-qml"},'// import library\nimport QtQuick.Controls 2.1\n\n// properties of the application window containing UI elements\nApplicationWindow {\n    id: application\n    width: 1280\n    height: 720\n    visible: true\n    visibility: "FullScreen"\n\n    // initialize the first window of the application\n    property var iniITEM: "LedGui.qml"\n\n    // stack-based navigation model\n    StackView {\n        id: stackview\n        initialItem: iniITEM\n    }\n}\n')),(0,l.kt)("p",null,"Now we have finished building the fullscreen app"),(0,l.kt)("h3",{id:"methods-to-control-the-leds"},"Methods to Control the LEDs"),(0,l.kt)("p",null,"Next we will create a python file to obtain the methods to control the LEDs on the reTerminal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1.")," Open the root folder that we created before and create a new ",(0,l.kt)("strong",{parentName:"li"},".py")," python file under that folder")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/python-1.png",alt:"pir",width:"400",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2.")," Enter the ",(0,l.kt)("strong",{parentName:"li"},".py")," file and copy the following codes")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# import libraries\nimport sys\nimport os\nfrom PySide2.QtCore import *\n\n# class to handle button controls\nclass Setting(QObject):\n\n    # staGreen ON/OFF\n    @Slot()\n    def staGreenOn(self):\n        # turn ON\n        os.system(\"sudo sh -c 'echo 255 > /sys/class/leds/usr_led2/brightness'\")\n    @Slot()\n    def staGreenOff(self):\n        # turn OFF\n        os.system(\"sudo sh -c 'echo 0 > /sys/class/leds/usr_led2/brightness'\")\n\n    # staRed\n    @Slot()\n    def staRedOn(self):\n        os.system(\"sudo sh -c 'echo 255 > /sys/class/leds/usr_led1/brightness'\")\n    @Slot()\n    def staRedOff(self):\n        os.system(\"sudo sh -c 'echo 0 > /sys/class/leds/usr_led1/brightness'\")\n\n    # usrGreen\n    @Slot()\n    def usrGreenOn(self):\n        os.system(\"sudo sh -c 'echo 255 > /sys/class/leds/usr_led0/brightness'\")\n    @Slot()\n    def usrGreenOff(self):\n        os.system(\"sudo sh -c 'echo 0 > /sys/class/leds/usr_led0/brightness'\")\n\n    # close\n    @Slot()\n    def closeWindow(self):\n        sys.exit()\n")),(0,l.kt)("p",null,"Now we have completed the python file used to control the LEDs"),(0,l.kt)("h3",{id:"prepare-python-file-to-run-the-app"},"Prepare Python File to Run the APP"),(0,l.kt)("p",null,"Now we need to create a Python file that can be used to run the app that we have built"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1.")," Open the Root folder that we created before and create a new ",(0,l.kt)("strong",{parentName:"li"},".py file")," under that folder")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/buildui-7.png",alt:"pir",width:"400",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2.")," Enter the created file and copy the following codes")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# import libraries\nfrom PySide2.QtQml import QQmlApplicationEngine\nfrom PySide2.QtWidgets import *\nfrom PySide2.QtCore import *\nfrom ledControl import Setting\n\n# launch the app\nif __name__ == \'__main__\':\n    app = QApplication([])\n    engine = QQmlApplicationEngine()\n    # location of the fullscreen app that we created before\n    url = QUrl("./App.qml")\n    context = engine.rootContext()\n    seting = Setting()\n    context.setContextProperty("_Setting", seting)\n    engine.load(url)\n    app.exec_()\n')),(0,l.kt)("h3",{id:"prepare-a-script-to-run-the-python-file"},"Prepare a Script to Run the Python file"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1.")," Open the Root folder that we created before and create a new ",(0,l.kt)("strong",{parentName:"li"},".sh file")," under that folder")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/buildui-8.png",alt:"pir",width:"400",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2.")," Open the created file and enter the following")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"#!/bin/bash\ncd $HOME/ledApp\nDISPLAY=:0 python3 main.py\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Here ",(0,l.kt)("strong",{parentName:"p"},"$HOME/ledApp")," is the location of the ",(0,l.kt)("strong",{parentName:"p"},"main.py")," file"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 3.")," Open a terminal window inside the reTerminal and navigate to the root directory of the app")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"example:\ncd /ledApp\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 4.")," Make the led_start.sh an executable file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"chmod +x led_start.sh\n")),(0,l.kt)("h3",{id:"prepare-a-desktop-file-to-launch-the-app"},"Prepare a Desktop File to Launch the App"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1.")," Open the Root folder that we created before and create a new ",(0,l.kt)("strong",{parentName:"li"},".desktop file")," under that folder")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/buildui-9.png",alt:"pir",width:"400",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2.")," Open the created file and enter the following")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"[Desktop Entry]\nEncoding=UTF-8\nName=LED Test\nComment=IconTest Link\nExec=/home/pi/ledApp/led_start.sh\nType=Application\nCategories=Application;Development;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," ",(0,l.kt)("strong",{parentName:"p"},"Exec")," is the location of the script that we created before"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 3.")," Open a terminal window inside the reTerminal and navigate to the root directory of the app")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"example:\ncd /ledApp\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 4.")," Make the led_start.sh an executable file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"chmod +x led.desktop\n")),(0,l.kt)("h3",{id:"launch-the-app"},"Launch the App"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 1.")," Navigate to the ",(0,l.kt)("strong",{parentName:"p"},"ledApp folder")," using the reTerminal LCD")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 2.")," Double click on the ",(0,l.kt)("strong",{parentName:"p"},"LED Test")," file"))),(0,l.kt)("p",null,"You will see the output as follows"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/final-output.png",alt:"pir",width:"1000",height:"auto"})),(0,l.kt)("p",null,"Now you can click on the buttons and you will see the LEDs light up!"),(0,l.kt)("h3",{id:"debugging-the-app"},"Debugging the App"),(0,l.kt)("p",null,"Let's go through the process of debugging your app while developing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 1.")," Log in to reTerminal via ",(0,l.kt)("strong",{parentName:"p"},"SSH")," using ",(0,l.kt)("strong",{parentName:"p"},"Microsoft Visual Studio Code")," as mentioned before")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 2.")," Log in to reTerminal via SSH using a SSH application such as ",(0,l.kt)("a",{parentName:"p",href:"https://mobaxterm.mobatek.net/"},"MobaXterm")," with ",(0,l.kt)("strong",{parentName:"p"},"X11 server feature")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," X11 is needed to forward the reTerminal display and pop up on the PC"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 3.")," After writing all the codes on Microsoft Visual Studio Code to the reTerminal, run the ",(0,l.kt)("strong",{parentName:"li"},"main.py file")," using MobaXterm")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"python3 main.py\n")),(0,l.kt)("h2",{id:"direct-test"},"Direct Test"),(0,l.kt)("p",null,"Follow the steps above to set up your environment, copy the code directly and run it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI\ncd Python_ReTerminalQt5_LED_UI\npython3 main.py\n")),(0,l.kt)("p",null,"Finally you will see the output displayed on a new window. If there are any errors in the code, they will be dislpayed in the MobaXterm terminal window."),(0,l.kt)("h2",{id:"bonus-demo"},"Bonus Demo"),(0,l.kt)("p",null,"If you want to experience a more interesting demo with Qt for Python, you can checkout ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Python_ReTerminalQt5Examples"},"this GitHub repo")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Qt-Demo.gif",alt:"pir",width:"1000",height:"auto"})),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[GitHub]")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI"},"Python_ReTerminalQt5_LED_UI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[Webpage]")," ",(0,l.kt)("a",{parentName:"li",href:"https://doc.qt.io/qt-5/index.html"},"Qt Documentation"))),(0,l.kt)("h2",{id:"tech-support"},"Tech Support"),(0,l.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,l.kt)("div",{class:"button_tech_support_container"},(0,l.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,l.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,l.kt)("div",{class:"button_tech_support_container"},(0,l.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,l.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}h.isMDXComponent=!0}}]);