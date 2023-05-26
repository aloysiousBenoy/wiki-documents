"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=i,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},14960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={description:"Flutter for reTerminal",title:"Flutter for reTerminal",keywords:["Edge","reTerminal Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-build-UI-using-Flutter",last_update:{date:"1/31/2023",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Edge/reTerminal/Application/reTerminal-build-UI-using-Flutter",id:"Edge/reTerminal/Application/reTerminal-build-UI-using-Flutter",title:"Flutter for reTerminal",description:"Flutter for reTerminal",source:"@site/docs/Edge/reTerminal/Application/reTerminal-build-UI-using-Flutter.md",sourceDirName:"Edge/reTerminal/Application",slug:"/reTerminal-build-UI-using-Flutter",permalink:"/reTerminal-build-UI-using-Flutter",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal/Application/reTerminal-build-UI-using-Flutter.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Flutter for reTerminal",title:"Flutter for reTerminal",keywords:["Edge","reTerminal Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-build-UI-using-Flutter",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Qt for reTerminal with Python",permalink:"/reTerminal-build-UI-using-Qt-for-Python"},next:{title:"Electron for reTerminal",permalink:"/reTerminal-build-UI-using-Electron"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Prepare Development Environment",id:"prepare-development-environment",level:2},{value:"On reTerminal",id:"on-reterminal",level:3},{value:"On Host PC",id:"on-host-pc",level:3},{value:"Smart Lamp Flutter Application",id:"smart-lamp-flutter-application",level:2},{value:"Hardware Connections",id:"hardware-connections",level:3},{value:"Create and Initialize the Application",id:"create-and-initialize-the-application",level:3},{value:"Create the main.dart (main app)",id:"create-the-maindart-main-app",level:3},{value:"Flutter Widgets Used",id:"flutter-widgets-used",level:4},{value:"Google Material Icons",id:"google-material-icons",level:4},{value:"Install the GPIO Library",id:"install-the-gpio-library",level:3},{value:"Test the App",id:"test-the-app",level:3},{value:"Build the Application and Transfer to reTerminal",id:"build-the-application-and-transfer-to-reterminal",level:3},{value:"Launch the Application on reTerminal",id:"launch-the-application-on-reterminal",level:2},{value:"Bonus Demo",id:"bonus-demo",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This wiki explains how to build your own user interface using Flutter. Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. This means that you can use one programming language and one codebase to create two different apps (for iOS, Android and more)."),(0,i.kt)("p",null,"To develop with Flutter, you need a programming language called Dart. Dart is an open-source, general-purpose, object-oriented programming language with C-style syntax developed by Google."),(0,i.kt)("p",null,"Here we will use Flutter to develop an application on the PC and then run the application on reTerminal using flutter-pi. flutter-pi is a light-weight Flutter Engine Embedder for Raspberry Pi that runs without X. That means you don't need to boot into Raspberry Pi OS Desktop & have X11 and LXDE load up. You just need to boot into the command-line and run your application."),(0,i.kt)("p",null,"By following the guide below, you will be able to create an application to control the GPIO pins on the reTerminal just by clicking buttons on the LCD. So let's get started!"),(0,i.kt)("h2",{id:"prepare-development-environment"},"Prepare Development Environment"),(0,i.kt)("h3",{id:"on-reterminal"},"On reTerminal"),(0,i.kt)("p",null,"First we need to install ",(0,i.kt)("strong",{parentName:"p"},"flutter-pi")," on the reTerminal."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Click ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardera/flutter-pi"},"here")," to access the GitHub repo of flutter-pi")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Log in to reTerminal as explained in ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet"},"this wiki")," and install ",(0,i.kt)("strong",{parentName:"li"},"flutter engine binaries")," on the reTerminal")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone --depth 1 https://github.com/ardera/flutter-engine-binaries-for-arm.git engine-binaries\ncd engine-binaries\nsudo ./install.sh\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Install cmake, graphics, system libraries and fonts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install cmake libgl1-mesa-dev libgles2-mesa-dev libegl1-mesa-dev libdrm-dev libgbm-dev ttf-mscorefonts-installer fontconfig libsystemd-dev libinput-dev libudev-dev  libxkbcommon-dev\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Update the system fonts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo fc-cache\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," Clone flutter-pi and cd into the cloned directory")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ardera/flutter-pi\ncd flutter-pi\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 5.")," Compile flutter-pi")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir build && cd build\ncmake ..\nmake -j`nproc`\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 6.")," Install flutter-pi")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo make install\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 7.")," Open raspi-config")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo raspi-config\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 8.")," Switch to console mode by navigating to ",(0,i.kt)("inlineCode",{parentName:"p"},"System Options > Boot / Auto Login")," and select ",(0,i.kt)("strong",{parentName:"p"},"Console or Console (Autologin)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 9.")," Enable the V3D graphics driver by navigating to ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced Options > GL Driver > GL (Fake KMS)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 10.")," Configure the GPU memory by navigating to ",(0,i.kt)("inlineCode",{parentName:"p"},"Performance Options -> GPU Memory")," and enter ",(0,i.kt)("strong",{parentName:"p"},"64"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 11.")," Press ",(0,i.kt)("strong",{parentName:"p"},"ESC")," on the keyboard to leave ",(0,i.kt)("strong",{parentName:"p"},"rasp-config")," window")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 12.")," Give the reTerminal permission to use 3D acceleration. (NOTE: potential security hazard. If you don't want to do this, launch flutter-pi using ",(0,i.kt)("strong",{parentName:"p"},"sudo")," instead.)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"usermod -a -G render pi\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 13.")," Reboot reTerminal")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,i.kt)("p",null,"Now we have finished installing the necessary tools on the reTerminal"),(0,i.kt)("h3",{id:"on-host-pc"},"On Host PC"),(0,i.kt)("p",null,"Next we need to prepare our host PC for development. Here we will install ",(0,i.kt)("strong",{parentName:"p"},"Flutter SDK")," which contains necessary packages for Flutter development, ",(0,i.kt)("strong",{parentName:"p"},"Android Studio")," for code editing and ",(0,i.kt)("strong",{parentName:"p"},"Android Emulator")," to run and test the codes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download and install ",(0,i.kt)("a",{parentName:"p",href:"https://flutter.dev/docs/get-started/install"},"Flutter SDK")," according to your operating system")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Type the following on a terminal window to check whether Flutter SDK is installed successfully"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"flutter --version\n")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/flutter-version.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Download and install ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio"},"Android Studio")," according to your operating system")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 4.")," Open Android Studio and navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Configure > Plugins")))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-6.png",alt:"pir",width:"650",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 5.")," Under ",(0,i.kt)("strong",{parentName:"li"},"Marketplace"),", type ",(0,i.kt)("strong",{parentName:"li"},"flutter")," in the search box and click ",(0,i.kt)("strong",{parentName:"li"},"Install"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-7.png",alt:"pir",width:"650",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 6.")," Click ",(0,i.kt)("strong",{parentName:"li"},"Install")," in the prompt window to install ",(0,i.kt)("strong",{parentName:"li"},"Dart")," plugin as well")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-8.png",alt:"pir",width:"650",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 7.")," Click ",(0,i.kt)("strong",{parentName:"li"},"Restart IDE")," to restart IDE with the installed plugins")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-9.png",alt:"pir",width:"650",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 8.")," Once the IDE opens again, navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"Configure > AVD Manager"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/android-studio-open.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 9.")," Click ",(0,i.kt)("strong",{parentName:"li"},"Create Virtual Device"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-1.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 10.")," Click ",(0,i.kt)("strong",{parentName:"li"},"New Hardware Profile"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-2.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 11.")," Configure the settings as follows"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Device Name: reTerminal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Device Type: Phone/ Tablet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Screen:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Screen size: 5inch"),(0,i.kt)("li",{parentName:"ul"},"Resolution: 1280 x 720"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Memory: RAM: 2048MB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Input: ","[\u2713]"," Has Hardware Buttons (Back/Home/Menu)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Supported device states: ","[\u2713]"," Landscape"))))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-3.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 12.")," Click ",(0,i.kt)("strong",{parentName:"p"},"Finish")," and then click ",(0,i.kt)("strong",{parentName:"p"},"Next"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 13.")," Select the latest Android Image and click ",(0,i.kt)("strong",{parentName:"p"},"Next")))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-4.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 14.")," Under ",(0,i.kt)("strong",{parentName:"li"},"Emulated Performance"),", select ",(0,i.kt)("strong",{parentName:"li"},"Hardware - GLES 2.0")," for accelerated performance")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-5.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 15.")," Finally click ",(0,i.kt)("strong",{parentName:"li"},"Finish"))),(0,i.kt)("p",null,"Now we have successfully finished preparing the development environment"),(0,i.kt)("h2",{id:"smart-lamp-flutter-application"},"Smart Lamp Flutter Application"),(0,i.kt)("h3",{id:"hardware-connections"},"Hardware Connections"),(0,i.kt)("p",null,"We will connect an LED to the GPIO 24 of the reTerminal for testing purposes. Later you can add a relay and control home appliances using the GPIO!"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," A resistor is needed between the GPIO pin and the LED or otherwise the LED will burn out."),(0,i.kt)("h3",{id:"create-and-initialize-the-application"},"Create and Initialize the Application"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Open Android Studio and click ",(0,i.kt)("strong",{parentName:"li"},"Create New Flutter Project"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-10.png",alt:"pir",width:"550",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," The ",(0,i.kt)("strong",{parentName:"li"},"Flutter SDK path")," will be automatically configured")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-11.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," If the Flutter SDK path is not listed in this window, you can manually point to the location of the Flutter SDK"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Fill the details for the project as follows and click ",(0,i.kt)("strong",{parentName:"li"},"Finish"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-12.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("p",null,"Now your sample project will open with ",(0,i.kt)("strong",{parentName:"p"},"main.dart")),(0,i.kt)("h3",{id:"create-the-maindart-main-app"},"Create the main.dart (main app)"),(0,i.kt)("p",null,"We will use the ",(0,i.kt)("strong",{parentName:"p"},"main.dart")," file inside the ",(0,i.kt)("strong",{parentName:"p"},"lib")," folder to create the Flutter application"),(0,i.kt)("p",null,"Open the ",(0,i.kt)("strong",{parentName:"p"},"main.dart")," file and copy the following codes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"//library imports\nimport 'package:flutter/material.dart';\nimport 'package:flutter_gpiod/flutter_gpiod.dart';\n\n//entry point for the app\nvoid main() {\n  runApp(MyApp());\n}\n\n// This is the main application widget.\nclass MyApp extends StatelessWidget {\n  // Function for GPIO control\n  void ledState(state) {\n    // Retrieve the list of GPIO chips.\n    final chips = FlutterGpiod.instance.chips;\n\n    // Retrieve the line with index 24 of the first chip.\n    // This is BCM pin 24 for the Raspberry Pi.\n    final chip = chips.singleWhere(\n          (chip) => chip.label == 'pinctrl-bcm2711',\n      orElse: () =>\n          chips.singleWhere((chip) => chip.label == 'pinctrl-bcm2835'),\n    );\n\n    final line2 = chip.lines[24];\n\n    // Request BCM 24 as output.\n    line2.requestOutput(consumer: \"flutter_gpiod test\", initialValue: false);\n    line2.setValue(state);\n    line2.release();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    // MaterialApp widget\n    return MaterialApp(\n      // Hide the debug banner at the top right corner\n      debugShowCheckedModeBanner: false,\n      // Scaffold widget\n      home: Scaffold(\n        // background color of the app.\n        // Here after you type \"Colors.\", Android Studio will recommend the available colors. \n        // Also you can hover the mouse over to check the different color variations assigned \n        // by numbers enclosed by [ ].\n        backgroundColor: Colors.grey[700],\n        // AppBar widget\n        appBar: AppBar(\n          // background color of the appbar\n          backgroundColor: Colors.black,\n          // center align text inside appbar widget\n          title: Center(\n            child: Text(\n              'LIVING ROOM',\n            ),\n          ),\n        ),\n        body: Center(\n          // Row widge\n          child: Row(\n            mainAxisSize: MainAxisSize.min,\n            children: [\n              // ON Button function\n              ElevatedButton(\n                child: Text('ON'),\n                onPressed: () {\n                  print('ON');\n                  ledState(true);\n                },\n                // ON Button styling\n                style: ElevatedButton.styleFrom(\n                    primary: Colors.orange[700],\n                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),\n                    textStyle:\n                    TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),\n              ),\n              // Google Material Icon of a Light Bulb\n              Icon(\n                Icons.lightbulb_outline,\n                color: Colors.white,\n                size: 200,\n              ),\n              // OFF Button function\n              ElevatedButton(\n                child: Text('OFF'),\n                onPressed: () {\n                  print('OFF');\n                  ledState(false);\n                },\n                // OFF Button styling\n                style: ElevatedButton.styleFrom(\n                    primary: Colors.orange[300],\n                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),\n                    textStyle:\n                    TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n")),(0,i.kt)("h4",{id:"flutter-widgets-used"},"Flutter Widgets Used"),(0,i.kt)("p",null,"Flutter widgets are built using a modern framework that takes inspiration from React. The central idea is that you build your UI out of widgets. Widgets describe what their view should look like given their current configuration and state."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"StatelessWidget:")," Stateless widgets are useful when part of the user interface you are describing does not depend on anything other than the configuration information in the object itself and the BuildContext in which the widget is inflated."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MaterialApp:")," MaterialApp widget is a widget that wraps a number of widgets that are commonly required for material design applications."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Scaffold:")," A Scaffold Widget provides a framework which implements the basic material design visual layout structure of the flutter app. It provides APIs for showing drawers, snack bars and bottom sheets"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Appbar:")," Appbar is a widget that contains the toolbar in flutter application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Row:")," Row widget is used to display its children in a horizontal array. We will use the UI elements inside this widget"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ElevatedButton:")," ElevatedButton widget consist of a button that can be used to press and react accordingly"),(0,i.kt)("h4",{id:"google-material-icons"},"Google Material Icons"),(0,i.kt)("p",null,"We have used a ",(0,i.kt)("strong",{parentName:"p"},"lightbuilb")," icon inside the app from ",(0,i.kt)("strong",{parentName:"p"},"Google Material Icons"),". To dive into more Google Material Icons, follow ",(0,i.kt)("a",{parentName:"p",href:"https://fonts.google.com/icons"},"this link"),", search for a button, choose the button and view the flutter code for the button"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-14.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("h3",{id:"install-the-gpio-library"},"Install the GPIO Library"),(0,i.kt)("p",null,"Next we will move on to installing the GPIO control library into our Flutter application. Here we will use a GPIO library called ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/packages/flutter_gpiod/versions/0.4.0-nullsafety"},"flutter_gpiod")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," To install the GPIO library, go into the ",(0,i.kt)("strong",{parentName:"li"},"pubspec.yaml")," file inside your Flutter project and add the following under ",(0,i.kt)("strong",{parentName:"li"},"dependencies:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  flutter_gpiod: ^0.4.0-nullsafety\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Save the file and click on ",(0,i.kt)("strong",{parentName:"li"},"Pub get"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-17.jpg",alt:"pir",width:"520",height:"auto"})),(0,i.kt)("h3",{id:"test-the-app"},"Test the App"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Open the ",(0,i.kt)("strong",{parentName:"p"},"main.dart")," file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," click ",(0,i.kt)("strong",{parentName:"p"},"no device selected")," button and select the Android Device that we created before"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-13.1.jpg",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("p",null,"You will now see the following output"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-5.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Click the ",(0,i.kt)("strong",{parentName:"li"},"play button")," to run the application")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-14.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("p",null,"You will now see the following application running on the Android Emulator"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("h3",{id:"build-the-application-and-transfer-to-reterminal"},"Build the Application and Transfer to reTerminal"),(0,i.kt)("p",null,"Next we will build our Flutter application and transfer it to the reTerminal"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Open a terminal window inside Android Studio by navigating to ",(0,i.kt)("inlineCode",{parentName:"p"},"View > Tool Windows > Terminal"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Type the following to prepare for the build"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"flutter clean\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Build the project")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"flutter build bundle\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," Turn on the reTerminal")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," You will notice that the reTerminal is booted into command-line mode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 5.")," Transfer the built project to reTerminal")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"scp -r ./build/flutter_assets pi@<ip_address_of_reTerminal>:/home/pi/testapp\n")),(0,i.kt)("h2",{id:"launch-the-application-on-reterminal"},"Launch the Application on reTerminal"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Type the following on the command-line of reTerminal")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"flutter-pi /home/pi/testapp\n")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("p",null,"When you press the ",(0,i.kt)("strong",{parentName:"p"},"ON")," and ",(0,i.kt)("strong",{parentName:"p"},"OFF")," buttons, you will notice the LED which is connected to GPIO 24 will start to react accordingly!"),(0,i.kt)("p",null,"You can also extend this by adding a relay to the GPIO pins and control home appliances and build a complete smart home solution on the reTerminal!"),(0,i.kt)("h2",{id:"bonus-demo"},"Bonus Demo"),(0,i.kt)("p",null,"If you want to experience a more interesting demo with Flutter, you can checkout ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lakshanthad/Flutter_reTerminal_Smart_Home_UI"},"this GitHub repo")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif",alt:"pir",width:"800",height:"auto"})),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[GitHub]")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ardera/flutter-pi"},"flutter-pi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Webpage]")," ",(0,i.kt)("a",{parentName:"li",href:"https://flutter.dev/docs"},"Official Flutter Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[GitHub]")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/lakshanthad/Flutter_reTerminal_LED_UI"},"Flutter Demo Source Code"))),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);