"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[42258],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>k});var i=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(o),m=n,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return o?i.createElement(k,a(a({ref:t},d),{},{components:o})):i.createElement(k,a({ref:t},d))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<r;p++)a[p]=o[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},84784:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=o(87462),n=(o(67294),o(3905));const r={description:"Bridge Mosiquitto MQTT Broker to AWS IoT with Arduino Boards",title:"Bridge Mosiquitto MQTT Broker to AWS IoT with Arduino Boards",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arduino-AWS-IOT-Bridge",last_update:{date:"1/16/2023",author:"jianjing Huang"}},a="How to Bridge Mosiquitto MQTT Broker to AWS IoT with Arduino Boards",l={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Arduino-AWS-IOT-Bridge",id:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Arduino-AWS-IOT-Bridge",title:"Bridge Mosiquitto MQTT Broker to AWS IoT with Arduino Boards",description:"Bridge Mosiquitto MQTT Broker to AWS IoT with Arduino Boards",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Arduino-AWS-IOT-Bridge.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage",slug:"/Arduino-AWS-IOT-Bridge",permalink:"/Arduino-AWS-IOT-Bridge",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Arduino-AWS-IOT-Bridge.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{description:"Bridge Mosiquitto MQTT Broker to AWS IoT with Arduino Boards",title:"Bridge Mosiquitto MQTT Broker to AWS IoT with Arduino Boards",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arduino-AWS-IOT-Bridge",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"How to Debug Arduino Boards using SWD Interface",permalink:"/Software-SWD"},next:{title:"Use Arduino Borads as DAPLink Device",permalink:"/Arduino-DAPLink"}},s={},p=[{value:"Why Bridge MQTT Broker to AWS IoT",id:"why-bridge-mqtt-broker-to-aws-iot",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Building AWS Mosquitto Broker Using Docker",id:"building-aws-mosquitto-broker-using-docker",level:3},{value:"Step 1: Setup AWS Account",id:"step-1-setup-aws-account",level:4},{value:"Step 2: Clone the Repository",id:"step-2-clone-the-repository",level:4},{value:"Step 3: Install and Setup AWS CLI",id:"step-3-install-and-setup-aws-cli",level:4},{value:"Step 3: Create an IAM policy for the bridge",id:"step-3-create-an-iam-policy-for-the-bridge",level:4},{value:"Step 4: Create Certificates",id:"step-4-create-certificates",level:4},{value:"Step 5: Edit mosquitto custom config file",id:"step-5-edit-mosquitto-custom-config-file",level:4},{value:"Step 6:  Build Docker File",id:"step-6--build-docker-file",level:4},{value:"Step 7: Run Docker Image",id:"step-7-run-docker-image",level:4},{value:"Step 8: Testing the Local Broker",id:"step-8-testing-the-local-broker",level:4},{value:"Publishing Messages From Wio Terminal",id:"publishing-messages-from-wio-terminal",level:3},{value:"Installing the Dependent Libraries",id:"installing-the-dependent-libraries",level:4},{value:"Upload the Arduino Sketch",id:"upload-the-arduino-sketch",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-bridge-mosiquitto-mqtt-broker-to-aws-iot-with-arduino-boards"},"How to Bridge Mosiquitto MQTT Broker to AWS IoT with Arduino Boards"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/AWSIOT/AWSIOT.gif"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"Gateways are present in most architectural discussions, both in ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/iot/solutions/industrial-iot/"},"industrial IoT")," environments and in the connected home. Today, we'll show you how to implement the ",(0,n.kt)("a",{parentName:"p",href:"https://mosquitto.org/"},(0,n.kt)("strong",{parentName:"a"},"Mosquitto"))," Agent ",(0,n.kt)("strong",{parentName:"p"},"Bridge feature")," to enable the use of gateways through the MQTT messaging sets up bi-directional data exchange with ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/iot-core/"},(0,n.kt)("strong",{parentName:"a"},"AWS IoT Core")),". This will allow your device to communicate locally with the Mosquitto Agent and AWS IoT Core to Benefit from the power of AWS Cloud."),(0,n.kt)("p",null,"In this tutorial, ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,n.kt)("strong",{parentName:"a"},"Wio Terminal"))," will be used as example to walk through how to bridge Mosquitto MQTT Broker to AWS IoT."),(0,n.kt)("h2",{id:"why-bridge-mqtt-broker-to-aws-iot"},"Why Bridge MQTT Broker to AWS IoT"),(0,n.kt)("p",null,"If you have older IoT deployments, you may already have devices connected to an MQTT broker, such as ",(0,n.kt)("a",{parentName:"p",href:"https://mosquitto.org/"},(0,n.kt)("strong",{parentName:"a"},"Mosquitto")),". In this case, your MQTT agent can be very close to the location of the deployed sensor (local MQTT broker), or in a remote location like the Cloud. You can configure the local gateway to communicate with AWS IoT Core as the following diagram."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/AWSIOT/AWS-bridge.png"})),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"building-aws-mosquitto-broker-using-docker"},"Building AWS Mosquitto Broker Using Docker"),(0,n.kt)("h4",{id:"step-1-setup-aws-account"},"Step 1: Setup AWS Account"),(0,n.kt)("p",null,"Navigate to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/iot/latest/developerguide/iot-console-signin.html"},"AWS")," and setup the account."),(0,n.kt)("p",null,"Navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"User")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"My Security Credentials"),", and obtain ",(0,n.kt)("strong",{parentName:"p"},"Access Key ID")," and ",(0,n.kt)("strong",{parentName:"p"},"Access Key"),"."),(0,n.kt)("h4",{id:"step-2-clone-the-repository"},"Step 2: Clone the Repository"),(0,n.kt)("p",null,"Clone this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ansonhe97/aws_mosquitto_broker"},"repository")," to a location in your drive."),(0,n.kt)("h4",{id:"step-3-install-and-setup-aws-cli"},"Step 3: Install and Setup AWS CLI"),(0,n.kt)("p",null,"Install AWS CLI from ",(0,n.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/cli/latest/userguide/installing.html"},"here"),"."),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"aws configure")," in terminal and type in your Region, your Access ID and Keys, as followed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"aws configure\nAWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE\nAWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\nDefault region name [None]: eu-central-1\nDefault output format [None]: json\n")),(0,n.kt)("h4",{id:"step-3-create-an-iam-policy-for-the-bridge"},"Step 3: Create an IAM policy for the bridge"),(0,n.kt)("p",null,"Run the following command to create policy for the bridge:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'aws iot create-policy --policy-name bridge --policy-document \'{"Version": "2012-10-17","Statement": [{"Effect": "Allow","Action": "iot:*","Resource": "*"}]}\'\n')),(0,n.kt)("h4",{id:"step-4-create-certificates"},"Step 4: Create Certificates"),(0,n.kt)("p",null,"Go into the ",(0,n.kt)("inlineCode",{parentName:"p"},"aws_mosquitto_broker/config/certs")," directory and run the following to create certificates:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd aws_mosquitto_broker/config/certs\n\nsudo aws iot create-keys-and-certificate --set-as-active --certificate-pem-outfile cert.crt --private-key-outfile private.key --public-key-outfile public.key --region eu-central-1\n")),(0,n.kt)("p",null,"Then you can run the ",(0,n.kt)("inlineCode",{parentName:"p"},"aws iot list-certificates")," to check the created certificates. Copy the ARN in the form of ",(0,n.kt)("inlineCode",{parentName:"p"},"arn:aws:iot:eu-central-1:0123456789:cert/xyzxyz"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"aws iot list-certificates\n")),(0,n.kt)("p",null,"Attach the policy to your certificate. Replace the ",(0,n.kt)("inlineCode",{parentName:"p"},"{REPLACE_ARN_CERT}")," with your copied ARN ",(0,n.kt)("inlineCode",{parentName:"p"},"arn:aws:iot:eu-central-1:0123456789:cert/xyzxyz"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"aws iot attach-principal-policy --policy-name bridge --principal {REPLACE_ARN_CERT}\n")),(0,n.kt)("p",null,"Add read permissions to ",(0,n.kt)("strong",{parentName:"p"},"private key"),", ",(0,n.kt)("strong",{parentName:"p"},"public key")," and ",(0,n.kt)("strong",{parentName:"p"},"client cert")," (inside ",(0,n.kt)("inlineCode",{parentName:"p"},"certs")," folder):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chmod 644 private.key && sudo chmod 644 public.key && sudo chmod 644 cert.crt\n")),(0,n.kt)("p",null,"Download the root Amazon CA certificate also in the ",(0,n.kt)("inlineCode",{parentName:"p"},"certs")," directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo curl https://www.websecurity.digicert.com/content/dam/websitesecurity/digitalassets/desktop/pdfs/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem -o rootCA.pem\n")),(0,n.kt)("h4",{id:"step-5-edit-mosquitto-custom-config-file"},"Step 5: Edit mosquitto custom config file"),(0,n.kt)("p",null,"Rename ",(0,n.kt)("inlineCode",{parentName:"p"},"awsbridge.conf.sample")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"awsbridge.conf"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"mv awsbridge.conf.sample awsbridge.conf\n")),(0,n.kt)("p",null,"Edit ",(0,n.kt)("inlineCode",{parentName:"p"},"config/conf.d/awsbridge.conf")," and follow the awsbridge.conf instructions:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"nano config/conf.d/awsbridge.conf\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Run ",(0,n.kt)("inlineCode",{parentName:"p"},"aws iot describe-endpoint")," to get the AWS IoT endpoint."),(0,n.kt)("h4",{id:"step-6--build-docker-file"},"Step 6:  Build Docker File"),(0,n.kt)("p",null,"Go back to the root location ",(0,n.kt)("inlineCode",{parentName:"p"},"aws_mosquitto_broker")," and run the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker build -t aws_mqtt_broker .\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Make sure you have installed docker on your PC first."),(0,n.kt)("h4",{id:"step-7-run-docker-image"},"Step 7: Run Docker Image"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -ti -p 1883:1883 -p 9001:9001 --name mqtt aws_mqtt_broker\n")),(0,n.kt)("p",null,"Console / Log output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"1592301141: mosquitto version 1.4.15 (build date 2018-03-04 15:19:39+0000) starting\n1592301141: Config loaded from /mosquitto/config/mosquitto.conf.\n1592301141: Opening ipv4 listen socket on port 1883.\n1592301141: Opening ipv6 listen socket on port 1883.\n1592301141: Bridge local.bridgeawsiot doing local SUBSCRIBE on topic localgateway_to_awsiot\n1592301141: Bridge local.bridgeawsiot doing local SUBSCRIBE on topic both_directions\n1592301141: Connecting bridge awsiot (aq53tian3vbby.iot.eu-central-1.amazonaws.com:8883)\n1592301141: Bridge bridgeawsiot sending CONNECT\n1592301144: Received CONNACK on connection local.bridgeawsiot.\n1592301144: Bridge local.bridgeawsiot sending SUBSCRIBE (Mid: 1, Topic: awsiot_to_localgateway, QoS: 1)\n1592301144: Bridge local.bridgeawsiot sending UNSUBSCRIBE (Mid: 2, Topic: localgateway_to_awsiot)\n1592301144: Bridge local.bridgeawsiot sending SUBSCRIBE (Mid: 3, Topic: both_directions, QoS: 1)\n1592301144: Received SUBACK from local.bridgeawsiot\n1592301144: Received UNSUBACK from local.bridgeawsiot\n1592301145: Received SUBACK from local.bridgeawsiot\n")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/AWSIOT/dockerbroker.png"})),(0,n.kt)("h4",{id:"step-8-testing-the-local-broker"},"Step 8: Testing the Local Broker"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Publish from AWS IoT console")),(0,n.kt)("p",null,"1.- From AWS Management Console go to ",(0,n.kt)("inlineCode",{parentName:"p"},"AWS IoT Services")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Test")),(0,n.kt)("p",null,"2.- Subscribe to topics mentioned in our config file ",(0,n.kt)("inlineCode",{parentName:"p"},"awsiot_to_localgateway"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"localgateway_to_awsiot")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"both_directions"),"."),(0,n.kt)("p",null,"3.- Publish to ",(0,n.kt)("inlineCode",{parentName:"p"},"awsiot_to_localgateway")," topic (hello world)."),(0,n.kt)("p",null,"4.- Review log or console output in our local broker for something like this:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"1493564128: Received PUBLISH from local.bridgeawsiot (d0, q0, r0, m0, 'awsiot_to_localgateway', ... (45 bytes))")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Make sure that it is selected the ",(0,n.kt)("inlineCode",{parentName:"p"},"eu-central-1")," as the region."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Publish from Host")),(0,n.kt)("p",null,"Workflow: ",(0,n.kt)("inlineCode",{parentName:"p"},"Local Broker(Host PC)")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Docker Gateway")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"AWS IoT"),"."),(0,n.kt)("p",null,"Run the following in terminal to publish from host to AWS IoT:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'mosquitto_pub -h localhost -p 1883 -q 1 -d -t localgateway_to_awsiot  -i clientid1 -m "{\\"key\\": \\"helloFromLocalGateway\\"}"')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Make sure that you have ",(0,n.kt)("a",{parentName:"p",href:"https://mosquitto.org/download/"},"mosquitto")," installed on your PC.")),(0,n.kt)("h3",{id:"publishing-messages-from-wio-terminal"},"Publishing Messages From Wio Terminal"),(0,n.kt)("p",null,"Now, we can use Wio Terminal as one of the end device to publish or subscribe to topics!"),(0,n.kt)("h4",{id:"installing-the-dependent-libraries"},"Installing the Dependent Libraries"),(0,n.kt)("p",null,"This demo relies on the Wio Terminal's Wi-Fi core, please follow ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/"},(0,n.kt)("strong",{parentName:"a"},"this"))," wiki first."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"STEP.1 Install the Pubsubclient library")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Visit the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/knolleary/pubsubclient"},"pubsubclient")," repositories and download the entire repo to your local drive.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now, the FS library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,n.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"pubsubclient")," file that you've have just downloaded."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"STEP.2 Install the ArduinoJson Library")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Visit the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bblanchon/ArduinoJson"},"ArduinoJson")," repositories and download the entire repo to your local drive.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now, the ArduinoJson library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,n.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"ArduinoJson")," file that you've have just downloaded."))),(0,n.kt)("h4",{id:"upload-the-arduino-sketch"},"Upload the Arduino Sketch"),(0,n.kt)("p",null,"Download the Arduino Sketch from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_AWSIoT_Bridge/WioTerminal_AWSIoT_Bridge.ino"},(0,n.kt)("strong",{parentName:"a"},"here")),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configure the Wi-Fi settings ",(0,n.kt)("inlineCode",{parentName:"li"},"ssid")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"password"),"."),(0,n.kt)("li",{parentName:"ul"},"Change the ",(0,n.kt)("inlineCode",{parentName:"li"},"mqttserver")," to the IP Address of your MQTT Broker (Your PC's IP Address).")),(0,n.kt)("p",null,"Upload the code and open Serial Monitor to check! Now, if you press the button on Wio Terminal will publish a message to the AWS IoT and you can also see incoming messages from the AWS IoT Console."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/AWSIOT/result.png"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Make sure that the local broker docker is up and running the whole time.")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cn/blogs/iot/how-to-bridge-mosquitto-mqtt-broker-to-aws-iot/"},"How to Bridge Mosquitto MQTT Broker to AWS IoT"))),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("br",null),"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.",(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);