(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75483],{73177:(e,t,s)=>{var r={"./Wiki_Platform_GT_Logo.jpg":1353,"./knowledge_base1.png":238,"./knowledge_base2.png":59964,"./knowledge_base3.png":57385,"./knowledge_base4.png":16810,"./tech_support1.png":24885,"./tech_support2.png":18498,"./tech_support3.png":65672,"./tech_support4.png":80329};function a(e){var t=o(e);return s(t)}function o(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=73177},88824:(e,t,s)=>{"use strict";s.d(t,{c:()=>l});var r=s(67294),a=s(52263);const o=["zero","one","two","few","many","other"];function n(e){return o.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:n(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:n(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function l(){const e=c();return{selectMessage:(t,s)=>function(e,t,s){const r=e.split("|");if(1===r.length)return r[0];r.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=s.select(t),o=s.pluralForms.indexOf(a);return r[Math.min(o,r.length-1)]}(s,t,e)}}},35543:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var r=s(67294),a=s(87462),o=s(86010);const n={svgIcon:"svgIcon_R3jO",small:"small_SUAn",medium:"medium_GxVq",large:"large_TyPU",primary:"primary_V8Cc",secondary:"secondary_WyIo",success:"success_lY5U",error:"error_eHdq",warning:"warning_IB04",inherit:"inherit_2ln5"};function i(e){const{svgClass:t,colorAttr:s,children:i,color:c="inherit",size:l="medium",viewBox:u="0 0 24 24",...d}=e;return r.createElement("svg",(0,a.Z)({viewBox:u,color:s,"aria-hidden":!0,className:(0,o.Z)(n.svgIcon,n[c],n[l],t)},d),i)}function c(e){return r.createElement(i,e,r.createElement("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}))}},58351:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>U,prepareUserState:()=>L});var r=s(67294),a=s(86010),o=s(7452),n=s(95999);const i={knowledgebase:"knowledgebase_c4Iy",wrapper:"wrapper_pvRh",header:"header_x2xQ",filters_header:"filters_header_eYTv",filters_number:"filters_number_lK6O",filters:"filters_ouit",cards:"cards_Fms0",card_item:"card_item_Fyjo",card__body:"card__body_KpWo",card__title:"card__title_GSFb",source:"source_YsQZ",cardFooter:"cardFooter_869V",card_tag:"card_tag_Z9yC",source_container:"source_container__udi",showcaseCardBody:"showcaseCardBody_TQeU",filterCheckbox:"filterCheckbox_yZe4",checkboxList:"checkboxList_L5u5",checkboxListItem:"checkboxListItem_dA_Y",showcaseList:"showcaseList_RAsq",showcaseFavorite:"showcaseFavorite_yy6b",showcaseFavoriteHeader:"showcaseFavoriteHeader_2LzP",svgIconFavoriteXs:"svgIconFavoriteXs_aueQ",svgIconFavorite:"svgIconFavorite_bmza",searchContainer:"searchContainer_vPuq",searchContainer_wrapper:"searchContainer_wrapper_cJzo",showcaseCardSrcBtn:"showcaseCardSrcBtn_qrgh"};var c=s(39960),l=s(57397);const u=[{title:"AgileTs",description:"Global State and Logic Framework for reactive Applications",preview:"Wiki_Platform_GT_Logo.jpg",website:"https://agile-ts.org/",source:"https://github.com/agile-ts/documentation",tags:["Edge","Sensing"]},{title:"AI-Speaker",description:"Local, reliable, fast and private Audio and IoT gate.",preview:"Wiki_Platform_GT_Logo.jpg",website:"https://ai-speaker.com/",source:"https://github.com/sviete/AIS-WWW",tags:["Edge"]},{title:"Aide Jeune",description:"French Discord server that helps young people who have been bullied or feel bad about themselves",preview:"Wiki_Platform_GT_Logo.jpg",website:"https://aidejeune.fr",source:null,tags:[]},{title:"Akara's blog",description:"Tech_Support frontend blog for learning",preview:"Wiki_Platform_GT_Logo.jpg",website:"https://messiahhh.github.io/blog/",source:"https://github.com/messiahhh/blog",tags:["Edge","Tech_Support"]},{title:"Algolia DocSearch",description:"The best search experience for docs, integrates in minutes, for free",preview:"Wiki_Platform_GT_Logo.jpg",website:"https://docsearch.algolia.com/",source:"https://github.com/algolia/docsearch/tree/main/packages/website",tags:["Frequent","Edge","MCU"]},{title:"Apache APISIX",description:"A Dynamic, Real-Time, High-Performance Cloud-Native API Gateway",preview:"Wiki_Platform_GT_Logo.jpg",website:"https://apisix.apache.org/",source:"https://github.com/apache/apisix-website",tags:["Edge","SBC","Project"]},{title:"Apex FP",description:"Functional programming library for Salesforce Apex",preview:"Wiki_Platform_GT_Logo.jpg",website:"https://www.apexfp.org",source:"https://github.com/ipavlic/apex-fp/tree/master/website",tags:["Edge"]},{title:"Astronomer",description:"Enterprise-grade framework for Apache Airflow. MCUion-ready Airflow environments with just a few clicks",preview:"astronomer.png",website:"https://docs.astronomer.io",source:"https://github.com/astronomer/docs",tags:["MCU","Network","Edge"]}],d=[{list:[{title1:"- How to troubleshoot the black screen issue on reTerminal",website1:"https://wiki.seeedstudio.com/reterminal_black_screen",title2:"- How to flash Raspberry Pi OS/ 64-bit Ubuntu OS or Other OS to eMMC",website2:"https://wiki.seeedstudio.com/flash_different_os_to_emmc",title3:"- Log in to Raspberry Pi OS/++Ubuntu OS or Other OS using SSH over Wi-Fi/ Ethernet",website3:"https://wiki.seeedstudio.com/log_rpios_use_ssh_over_wifi_ethernet",preview:"knowledge_base1.png",source:"https://wiki.seeedstudio.com/reTerminal-new_FAQ",tags:["Edge","SBC"]},{title1:"- How to check the battery voltage",website1:"https://wiki.seeedstudio.com/check_battery_voltage",title2:"- Note on XIAO ESP32C3 IO allocation",website2:"https://wiki.seeedstudio.com/exp32c3_d9_d6_d8",title3:"- What to do when upload fails/the program runs abnormally/the device port is not found?",website3:"https://wiki.seeedstudio.com/noport_upload_fails",preview:"knowledge_base2.png",source:"https://wiki.seeedstudio.com/XIAO_FAQ",tags:["Sensing","MCU"]}]},{list:[{title1:"- Re-Installing the Original Windows",website1:"https://wiki.seeedstudio.com/Troubleshooting_BIOS-Related_Issues",title2:"- Troubleshooting BIOS-Related Issues(WiFi/Bluetooth/Fan/Auto Power-On/Boot Guard/GPIO)",website2:"https://wiki.seeedstudio.com/reinstall_the_Original_Windows",title3:"- Arduino IDE doesnt recognize the onboard microcontroller on ODYSSEY - X86J4105/ X86J4125",website3:"https://wiki.seeedstudio.com/not_recognize-onboard-microcontroller",preview:"knowledge_base3.png",source:"https://wiki.seeedstudio.com/ODYSSEY_FAQ",tags:["Edge","SBC","X86"]},{title1:"- The remaining space in the eMMC in the received reComputer is only about 2GB, how can I solve the problem of insufficient space?",website1:"https://wiki.seeedstudio.com/solution_of_insufficient_space",title2:"- Troubleshooting Installation",website2:"https://wiki.seeedstudio.com/Troubleshooting_Installation",preview:"knowledge_base4.png",source:"https://wiki.seeedstudio.com/Jetson_FAQ",tags:["Edge"]}]},{title:"Tech Support",describe:"Seeed Studio Tech Support Platform",list:[{title:"--\x3e Ideas Exchange",title1:"Join extensive product usage discussion, and share experiences, getting help from our community and technical experts.",preview:"tech_support1.png",website:"https://forum.seeedstudio.com/",tags:["Tech_Support"]},{title:"--\x3e Expert Supports",title1:"Get professional email supports and direct expert helps, by sending us Email about your product problems.",preview:"tech_support2.png",website:"https://www.seeedstudio.com/contacts",tags:["Tech_Support"]},{title:"--\x3eCollective Chatting",title1:"Join our active\xa0Discord community\xa0channel, and get latest Seeed Studio news, for real-time chatting with Seeed Studio Team.",preview:"tech_support3.png",website:"https://discord.gg/eWkprNDMU7",tags:["Tech_Support"]},{title:"--\x3e Wiki Suggentions",title1:"Collaborate with our wiki development team, and suggest improvements, by leaving your comments and feedbacks about website.",preview:"tech_support4.png",website:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",tags:["Tech_Support"]}]}],p={Frequent:{label:(0,n.I)({message:"Frequent"}),description:(0,n.I)({message:"Our favorite Docusaurus sites that you must absolutely check out!",id:"showcase.tag.favorite.description"}),color:"#e9669e"},Sensing:{label:(0,n.I)({message:"Sensing"}),description:(0,n.I)({message:"Beautiful Docusaurus sites, polished and standing out from the initial template!",id:"showcase.tag.design.description"}),color:"#a44fb7"},MCU:{label:(0,n.I)({message:"MCU"}),description:(0,n.I)({message:"Docusaurus sites associated to a commercial prouct!",id:"showcase.tag.product.description"}),color:"#dfd545"},SBC:{label:(0,n.I)({message:"SBC"}),description:(0,n.I)({message:"Translated Docusaurus sites using the internationalization support with more than 1 locale.",id:"showcase.tag.i18n.description"}),color:"#127f82"},X86:{label:(0,n.I)({message:"X86"}),description:(0,n.I)({message:"Docusaurus sites of Seeed (formerly Facebook) projects",id:"showcase.tag.Seeed.description"}),color:"#4267b2"},Edge:{label:(0,n.I)({message:"Edge"}),description:(0,n.I)({message:"Open-Source Docusaurus sites can be useful for inspiration!",id:"showcase.tag.opensource.description"}),color:"#39ca30"},Network:{label:(0,n.I)({message:"Network"}),description:(0,n.I)({message:"Docusaurus sites using the versioning feature of the docs plugin to manage multiple versions.",id:"showcase.tag.versioning.description"}),color:"#fe6829"},Cloud:{label:(0,n.I)({message:"Cloud"}),description:(0,n.I)({message:"Docusaurus sites using the right-to-left reading direction support.",id:"showcase.tag.rtl.description"}),color:"#ffcfc3"},Project:{label:(0,n.I)({message:"Project"}),description:(0,n.I)({message:"Very large Docusaurus sites, including many more pages than the average!",id:"showcase.tag.large.description"}),color:"#8c2f00"},Tech_Support:{label:(0,n.I)({message:"Tech Support"}),description:(0,n.I)({message:"personal websites, blogs and digital gardens built with Docusaurus",id:"showcase.tag.personal.description"}),color:"#14cfc3"}},m=Object.keys(p);!function(){let e=u;e=(0,l.M)(e,(e=>e.title.toLowerCase())),e=(0,l.M)(e,(e=>!e.tags.includes("Frequent")))}();!function(){let e=u;e=(0,l.M)(e,(e=>e.title.toLowerCase())),e=(0,l.M)(e,(e=>!e.tags.includes("Frequent")))}();var g=s(16550),h=s(10412),b=s(87462);const f="checkboxLabel_hD1R",_="contribution_input_w7q5",w="tags";function v(e){return new URLSearchParams(e).getAll(w)}function E(e,t){let{id:s,icon:o,label:n,tag:i,...c}=e;const u=(0,g.TH)(),d=(0,g.k6)(),[p,m]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=v(u.search);m(e.includes(i))}),[i,u]);const h=(0,r.useCallback)((()=>{const e=v(u.search),t=(0,l.$)(e,i),s=function(e,t){const s=new URLSearchParams(e);return s.delete(w),t.forEach((e=>s.append(w,e))),s.toString()}(u.search,t);d.push({...u,search:s,state:L()})}),[i,u,d]);return r.createElement(r.Fragment,null,r.createElement("input",(0,b.Z)({type:"checkbox",id:s,className:(0,a.Z)(_,"screen-reader-only"),onKeyDown:e=>{"Enter"===e.key&&h()},onFocus:e=>{e.relatedTarget&&e.target.nextElementSibling?.dispatchEvent(new KeyboardEvent("focus"))},onBlur:e=>{e.target.nextElementSibling?.dispatchEvent(new KeyboardEvent("blur"))},onChange:h,checked:p},c)),r.createElement("label",{ref:t,htmlFor:s,className:f},n,o))}const k=r.forwardRef(E);var S=s(35543);const y={checkboxLabel:"checkboxLabel_YJdA",contribution_input:"contribution_input_wTvV"},C="operator";function I(e){return new URLSearchParams(e).get(C)??"OR"}function x(){const e="showcase_filter_toggle",t=(0,g.TH)(),s=(0,g.k6)(),[o,n]=(0,r.useState)(!1);(0,r.useEffect)((()=>{n("AND"===I(t.search))}),[t]);const i=(0,r.useCallback)((()=>{n((e=>!e));const e=new URLSearchParams(t.search);e.delete(C),o||e.append(C,"AND"),s.push({...t,search:e.toString(),state:L()})}),[o,t,s]);return r.createElement("div",null,r.createElement("input",{type:"checkbox",id:e,className:(0,a.Z)(y.contribution_input,"screen-reader-only"),"aria-label":"Toggle between or and and for the tags you selected",onChange:i,onKeyDown:e=>{"Enter"===e.key&&i()},"\xdf":!0,checked:o}),r.createElement("label",{htmlFor:e,className:(0,a.Z)(y.checkboxLabel,"shadow--md")},r.createElement("span",{className:y.checkboxLabelOr},"OR"),r.createElement("span",{className:y.checkboxLabelAnd},"AND")))}var T=s(88824);const N="name";function F(){return r.createElement("section",{className:i.header},r.createElement("h1",null," Help Center"),r.createElement("p",null,"Welcome! You can find frequently asked questions and troubled articales about product created by Seeed Studio here."))}function L(){if(h.Z.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:document.activeElement?.id}}function A(e){return new URLSearchParams(e).get(N)}function O(){const e=(0,g.TH)(),[t,s]=(0,r.useState)("OR"),[a,o]=(0,r.useState)([]),[n,i]=(0,r.useState)(null);return(0,r.useEffect)((()=>{o(v(e.search)),s(I(e.search)),i(A(e.search)),function(e){const{scrollTopPosition:t,focusedElementId:s}=e??{scrollTopPosition:0,focusedElementId:void 0};document.getElementById(s)?.focus(),window.scrollTo({top:t})}(e.state)}),[e]),(0,r.useMemo)((()=>{const e=function(e,t,s,r){let a=[];if(r?d.forEach((e=>{const t=e.list.filter((e=>e.title.toLowerCase().includes(r.toLowerCase())));a.push({...e,list:t})})):a=d,0===t.length)return a;let o=[],n=[];return a.forEach((e=>{const r=e.list.filter((e=>0!==e.tags.length&&("AND"===s?t.every((t=>e.tags.includes(t))):(t.some((t=>e.tags.includes(t))),t.some((t=>e.tags.includes(t)))))));o.push({...e,list:r}),n=[...n,...r]})),console.log(n.length,o,"templateList"),t?o:d}(0,a,t,n);return console.log(999,e),e}),[a,t,n])}function P(){const e=O();let t=0;e.forEach((e=>{t+=e.list&&e.list.length}));const s=function(){const{selectMessage:e}=(0,T.c)();return t=>e(t,(0,n.I)({id:"showcase.filters.resultCount",description:'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"1 site|{sitesCount} sites"},{sitesCount:t}))}();return r.createElement("section",{className:i.filters},r.createElement("div",{className:"margin-top--lg "},r.createElement(M,null)),r.createElement("div",{className:(0,a.Z)("margin-bottom--sm",i.filterCheckbox)},r.createElement("div",null,r.createElement("h2",null,"Filters"),r.createElement("span",null,s(t))),r.createElement(x,null)),r.createElement("ul",null,m.map(((e,t)=>{const{label:s,description:a,color:o}=p[e];return r.createElement("li",{key:e,className:i.checkboxListItem,onClick:()=>{}},r.createElement(k,{tag:e,id:e,label:s,icon:"favorite"===e?r.createElement(S.Z,{svgClass:i.svgIconFavoriteXs}):r.createElement("span",{style:{backgroundColor:o,width:10,height:10,borderRadius:"50%",marginLeft:8}})}))}))))}function D(e){let{tags:t}=e;const s=t.map((e=>({tag:e,...p[e]}))),a=(0,l.M)(s,(e=>m.indexOf(e.tag)));return r.createElement(r.Fragment,null,a.map(((e,t)=>{e.tag;return r.createElement("div",{key:t,className:i.card_tag},e.tag,r.createElement("span",{style:{backgroundColor:e.color,width:7,height:7,display:"inline-block",borderRadius:"50%",marginLeft:6}}))})))}function M(){const e=(0,g.k6)(),t=(0,g.TH)(),[s,a]=(0,r.useState)(null);return(0,r.useEffect)((()=>{a(A(t.search))}),[t]),r.createElement("div",{className:i.searchContainer},r.createElement("input",{id:"searchbar",placeholder:(0,n.I)({message:"Search for site name...",id:"showcase.searchBar.placeholder"}),value:s??void 0,onInput:s=>{a(s.currentTarget.value);const r=new URLSearchParams(t.search);r.delete(N),s.currentTarget.value&&r.set(N,s.currentTarget.value),e.push({...t,search:r.toString(),state:L()}),setTimeout((()=>{document.getElementById("searchbar")?.focus()}),0)}}))}function R(){const e=O();let t=0;return e.forEach((e=>{t+=e.list&&e.list.length})),0===t?r.createElement("section",{className:"margin-top--lg margin-bottom--xl"},r.createElement("div",{className:"container padding-vert--md text--center"},r.createElement("h2",null,"No result"))):r.createElement("div",{className:"margin-top--lg margin-bottom--xl"},r.createElement("div",{className:i.searchContainer_wrapper}),e.map(((e,t)=>e.list&&e.list.length?r.createElement("div",{key:t,className:i.card_container},r.createElement("h2",{className:i.card_title},e.title),r.createElement("h4",{className:i.card_describe},e.describe),r.createElement("section",{className:(0,a.Z)(" margin-bottom--xl",i.cards)},e.list&&e.list.map(((e,t)=>{const o=s(73177)(`./${e.preview}`).default;return r.createElement("li",{className:i.card_item,key:t},r.createElement("div",{className:i.card_image},r.createElement("img",{src:o,alt:e.title})),r.createElement("div",{className:i.card__body},r.createElement("div",{className:i.card__title},r.createElement("a",{href:e.website,target:"_blank",rel:"noopener noreferrer"},e.title)),r.createElement("div",{className:i.card__title1},r.createElement("a",{href:e.website1,target:"_blank",rel:"noopener noreferrer"},e.title1)),r.createElement("div",{className:i.card__title2},r.createElement("a",{href:e.website2,target:"_blank",rel:"noopener noreferrer"},e.title2)),r.createElement("div",{className:i.card__title3},r.createElement("a",{href:e.website3,target:"_blank",rel:"noopener noreferrer"},e.title3)),r.createElement("div",{className:i.card__title4},r.createElement("a",{href:e.website4,target:"_blank",rel:"noopener noreferrer"},e.title4)),r.createElement("div",{className:i.card__title5},r.createElement("a",{href:e.website5,target:"_blank",rel:"noopener noreferrer"},e.title5))),r.createElement("ul",{className:(0,a.Z)("card__footer",i.cardFooter)},r.createElement(D,{tags:e.tags})),e.source&&r.createElement("div",{className:i.source_container},r.createElement(c.Z,{href:e.source,className:(0,a.Z)("button button--secondary button--sm",i.showcaseCardSrcBtn)},r.createElement(n.Z,{id:"showcase.card.sourceLink"},"See More"))))})))):r.createElement("div",{key:t}))))}function U(){return r.createElement(o.Z,null,r.createElement("div",{className:i.knowledgebase},r.createElement("div",{className:i.wrapper},r.createElement(F,null),r.createElement(P,null),r.createElement(R,null))))}},57397:(e,t,s)=>{"use strict";function r(e,t){const s=[...e];return s.sort(((e,s)=>t(e)>t(s)?1:t(s)>t(e)?-1:0)),s}function a(e,t){const s=e.indexOf(t);if(-1===s)return e.concat(t);const r=[...e];return r.splice(s,1),r}s.d(t,{$:()=>a,M:()=>r})},1353:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r=s.p+"assets/images/Wiki_Platform_GT_Logo-8e0be512d6c9ef1644a0229e0fe2c2ab.jpg"},238:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r=s.p+"assets/images/knowledge_base1-85a1d90b83a521a0a0e39432ddd32bd4.png"},59964:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r=s.p+"assets/images/knowledge_base2-250605d9bafb24bb2602965a8de6ed07.png"},57385:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r=s.p+"assets/images/knowledge_base3-8390ba1430ab017da43d0991e65b22ab.png"},16810:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r=s.p+"assets/images/knowledge_base4-3c9edb208422e4b1831c32050a0bede5.png"},24885:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r=s.p+"assets/images/tech_support1-b4736fe6afce1d1a0dc021f2f5243013.png"},18498:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r=s.p+"assets/images/tech_support2-333a152491916356457a37c0ed2073ff.png"},65672:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r=s.p+"assets/images/tech_support3-5937c20c9e96186778778e1129b6ad0e.png"},80329:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r=s.p+"assets/images/tech_support4-bf620921b1e3d7463043edcc84960b54.png"}}]);