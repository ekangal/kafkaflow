"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,p=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(p,i(i({ref:t},f),{},{components:n})):r.createElement(p,i({ref:t},f))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},i="ConsumerThrottlingConfigurationBuilderExtensions class",l={unversionedId:"reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/ConsumerThrottlingConfigurationBuilderExtensions",id:"reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/ConsumerThrottlingConfigurationBuilderExtensions",title:"ConsumerThrottlingConfigurationBuilderExtensions class",description:"Provides extension methods for configuring consumer throttling in KafkaFlow.",source:"@site/docs/reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/ConsumerThrottlingConfigurationBuilderExtensions.md",sourceDirName:"reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions",slug:"/reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/ConsumerThrottlingConfigurationBuilderExtensions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConsumerMiddlewareConfigurationBuilder.AddSingleTypeDeserializer&lt;TDeserializer&gt; method (1 of 4)",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerMiddlewareConfigurationBuilder/AddSingleTypeDeserializer"},next:{title:"ConsumerThrottlingConfigurationBuilderExtensions.ApplyDelay method (1 of 2)",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/ApplyDelay"}},s={},u=[{value:"Public Members",id:"public-members",level:2},{value:"See Also",id:"see-also",level:2}],f={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consumerthrottlingconfigurationbuilderextensions-class"},"ConsumerThrottlingConfigurationBuilderExtensions class"),(0,o.kt)("p",null,"Provides extension methods for configuring consumer throttling in KafkaFlow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class ConsumerThrottlingConfigurationBuilderExtensions\n")),(0,o.kt)("h2",{id:"public-members"},"Public Members"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"static\xa0",(0,o.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/ApplyDelay"},"ApplyDelay"),"(\u2026)"),(0,o.kt)("td",{parentName:"tr",align:null},"Configures an action to apply a delay when the throttling threshold is met. (2 methods)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"static\xa0",(0,o.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/OnConsumerLag"},"OnConsumerLag"),"(\u2026)"),(0,o.kt)("td",{parentName:"tr",align:null},"Configures throttling based on the lag of specified consumers. (2 methods)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"static\xa0",(0,o.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/Throttle"},"Throttle"),"(\u2026)"),(0,o.kt)("td",{parentName:"tr",align:null},"Configures consumer throttling using the specified configuration builder.")))),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"namespace\xa0",(0,o.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow"))))}d.isMDXComponent=!0}}]);