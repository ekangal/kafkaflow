"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9341],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},i=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,i=f(e,["components","mdxType","originalType","parentName"]),u=c(t),p=a,d=u["".concat(l,".").concat(p)]||u[p]||m[p]||s;return t?n.createElement(d,o(o({ref:r},i),{},{components:t})):n.createElement(d,o({ref:r},i))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=p;var f={};for(var l in r)hasOwnProperty.call(r,l)&&(f[l]=r[l]);f.originalType=e,f[u]="string"==typeof e?e:a,o[1]=f;for(var c=2;c<s;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},45771:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>f,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const s={},o="IMessageConsumer.OverrideOffsetsAndRestartAsync method",f={unversionedId:"reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/OverrideOffsetsAndRestartAsync",id:"reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/OverrideOffsetsAndRestartAsync",title:"IMessageConsumer.OverrideOffsetsAndRestartAsync method",description:"Overrides the offsets of the given partitions and restart the consumer",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/OverrideOffsetsAndRestartAsync.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer",slug:"/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/OverrideOffsetsAndRestartAsync",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/OverrideOffsetsAndRestartAsync",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/OverrideOffsetsAndRestartAsync.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IMessageConsumer.MemberId property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/MemberId"},next:{title:"IMessageConsumer.Pause method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/Pause"}},l={},c=[{value:"See Also",id:"see-also",level:2}],i={toc:c},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"imessageconsumeroverrideoffsetsandrestartasync-method"},"IMessageConsumer.OverrideOffsetsAndRestartAsync method"),(0,a.kt)("p",null,"Overrides the offsets of the given partitions and restart the consumer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public Task OverrideOffsetsAndRestartAsync(IReadOnlyCollection<TopicPartitionOffset> offsets)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"offsets"),(0,a.kt)("td",{parentName:"tr",align:null},"The offset values")))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"interface\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/"},"IMessageConsumer")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Consumers"))))}m.isMDXComponent=!0}}]);