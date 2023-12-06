"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9431],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>k});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},m=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},f="mdxType",i={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),f=u(t),p=a,k=f["".concat(c,".").concat(p)]||f[p]||i[p]||o;return t?n.createElement(k,s(s({ref:r},m),{},{components:t})):n.createElement(k,s({ref:r},m))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[f]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},76955:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>i,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={},s="IConsumerAccessor indexer",l={unversionedId:"reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/Item",id:"reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/Item",title:"IConsumerAccessor indexer",description:"Gets a consumer by its name",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/Item.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor",slug:"/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/Item",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/Item",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/Item.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IConsumerAccessor.GetConsumer method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/GetConsumer"},next:{title:"IConsumerFlowManager interface",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerFlowManager/"}},c={},u=[{value:"See Also",id:"see-also",level:2}],m={toc:u},f="wrapper";function i(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iconsumeraccessor-indexer"},"IConsumerAccessor indexer"),(0,a.kt)("p",null,"Gets a consumer by its name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public IMessageConsumer this[string name] { get; }\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"consumer name")))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"interface\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/"},"IMessageConsumer")),(0,a.kt)("li",{parentName:"ul"},"interface\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/"},"IConsumerAccessor")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Consumers"))))}i.isMDXComponent=!0}}]);