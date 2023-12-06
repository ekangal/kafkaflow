"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5742],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>p});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function m(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),l=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):m(m({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),f=a,p=c["".concat(i,".").concat(f)]||c[f]||d[f]||o;return r?t.createElement(p,m(m({ref:n},u),{},{components:r})):t.createElement(p,m({ref:n},u))}));function p(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,m=new Array(o);m[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:a,m[1]=s;for(var l=2;l<o;l++)m[l]=r[l];return t.createElement.apply(null,m)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},71165:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>m,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(87462),a=(r(67294),r(3905));const o={},m="IConsumerAdmin.PauseConsumerAsync method",s={unversionedId:"reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/PauseConsumerAsync",id:"reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/PauseConsumerAsync",title:"IConsumerAdmin.PauseConsumerAsync method",description:"Pause the consumer",source:"@site/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/PauseConsumerAsync.md",sourceDirName:"reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin",slug:"/reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/PauseConsumerAsync",permalink:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/PauseConsumerAsync",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/PauseConsumerAsync.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IConsumerAdmin.ChangeWorkersCountAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/ChangeWorkersCountAsync"},next:{title:"IConsumerAdmin.PauseConsumerGroupAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/PauseConsumerGroupAsync"}},i={},l=[{value:"See Also",id:"see-also",level:2}],u={toc:l},c="wrapper";function d(e){let{components:n,...r}=e;return(0,a.kt)(c,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iconsumeradminpauseconsumerasync-method"},"IConsumerAdmin.PauseConsumerAsync method"),(0,a.kt)("p",null,"Pause the consumer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public Task PauseConsumerAsync(string consumerName, IEnumerable<string> topics)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"consumerName"),(0,a.kt)("td",{parentName:"tr",align:null},"The consumer unique name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topics"),(0,a.kt)("td",{parentName:"tr",align:null},"The topic names to pause")))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"interface\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/"},"IConsumerAdmin")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Admin/"},"KafkaFlow.Admin"))))}d.isMDXComponent=!0}}]);