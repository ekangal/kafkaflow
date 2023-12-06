"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),c=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=c(r),p=n,d=u["".concat(m,".").concat(p)]||u[p]||s[p]||o;return r?a.createElement(d,l(l({ref:t},f),{},{components:r})):a.createElement(d,l({ref:t},f))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},39093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},l="ITelemetryStorage.Put method",i={unversionedId:"reference/KafkaFlow.Admin/KafkaFlow.Admin/ITelemetryStorage/Put",id:"reference/KafkaFlow.Admin/KafkaFlow.Admin/ITelemetryStorage/Put",title:"ITelemetryStorage.Put method",description:"Store the metric provided",source:"@site/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/ITelemetryStorage/Put.md",sourceDirName:"reference/KafkaFlow.Admin/KafkaFlow.Admin/ITelemetryStorage",slug:"/reference/KafkaFlow.Admin/KafkaFlow.Admin/ITelemetryStorage/Put",permalink:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/ITelemetryStorage/Put",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/ITelemetryStorage/Put.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ITelemetryStorage.Get method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/ITelemetryStorage/Get"},next:{title:"ChangeConsumerWorkersCount constructor",permalink:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin.Messages/ChangeConsumerWorkersCount/"}},m={},c=[{value:"See Also",id:"see-also",level:2}],f={toc:c},u="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"itelemetrystorageput-method"},"ITelemetryStorage.Put method"),(0,n.kt)("p",null,"Store the metric provided"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public void Put(ConsumerTelemetryMetric telemetryMetric)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"telemetryMetric"),(0,n.kt)("td",{parentName:"tr",align:null},"The consumer telemetry metric")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"class\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin.Messages/ConsumerTelemetryMetric/"},"ConsumerTelemetryMetric")),(0,n.kt)("li",{parentName:"ul"},"interface\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/ITelemetryStorage/"},"ITelemetryStorage")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Admin/"},"KafkaFlow.Admin"))))}s.isMDXComponent=!0}}]);