"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6842],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>k});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=t.createContext({}),u=function(e){var r=t.useContext(d),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=u(e.components);return t.createElement(d.Provider,{value:r},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=u(a),p=n,k=f["".concat(d,".").concat(p)]||f[p]||s[p]||i;return a?t.createElement(k,l(l({ref:r},c),{},{components:a})):t.createElement(k,l({ref:r},c))}));function k(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[f]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},26229:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=a(87462),n=(a(67294),a(3905));const i={},l="ProducerMiddlewareConfigurationBuilder class",o={unversionedId:"reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/ProducerMiddlewareConfigurationBuilder",id:"reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/ProducerMiddlewareConfigurationBuilder",title:"ProducerMiddlewareConfigurationBuilder class",description:"No needed",source:"@site/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/ProducerMiddlewareConfigurationBuilder.md",sourceDirName:"reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder",slug:"/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/ProducerMiddlewareConfigurationBuilder.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ProducerCustomFactory delegate",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ProducerCustomFactory/"},next:{title:"ProducerMiddlewareConfigurationBuilder.AddSerializer&lt;TSerializer&gt; method (1 of 4)",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSerializer"}},d={},u=[{value:"Public Members",id:"public-members",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:u},f="wrapper";function s(e){let{components:r,...a}=e;return(0,n.kt)(f,(0,t.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"producermiddlewareconfigurationbuilder-class"},"ProducerMiddlewareConfigurationBuilder class"),(0,n.kt)("p",null,"No needed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class ProducerMiddlewareConfigurationBuilder\n")),(0,n.kt)("h2",{id:"public-members"},"Public Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"name"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"static\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSerializer"},"AddSerializer","<","TSerializer",">"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Registers a middleware to serialize messages (2 methods)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"static\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSerializer"},"AddSerializer","<","TSerializer,TResolver",">"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Registers a middleware to serialize messages (2 methods)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"static\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSingleTypeSerializer"},"AddSingleTypeSerializer","<","TSerializer",">"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Register a middleware to serialize the message to a fixed type (2 methods)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"static\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSingleTypeSerializer"},"AddSingleTypeSerializer","<","TMessage,TSerializer",">"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Register a middleware to serialize the message to a fixed type (2 methods)")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow"))))}s.isMDXComponent=!0}}]);