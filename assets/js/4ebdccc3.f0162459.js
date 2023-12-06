"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6319],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),c=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},m=function(e){var r=c(e.components);return a.createElement(i.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(t),y=n,u=p["".concat(i,".").concat(y)]||p[y]||f[y]||o;return t?a.createElement(u,l(l({ref:r},m),{},{components:t})):a.createElement(u,l({ref:r},m))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=y;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},58948:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const o={},l="ISchemaRegistryTypeNameResolver interface",s={unversionedId:"reference/KafkaFlow.SchemaRegistry/KafkaFlow/ISchemaRegistryTypeNameResolver/ISchemaRegistryTypeNameResolver",id:"reference/KafkaFlow.SchemaRegistry/KafkaFlow/ISchemaRegistryTypeNameResolver/ISchemaRegistryTypeNameResolver",title:"ISchemaRegistryTypeNameResolver interface",description:"An interface to implement a type name resolver to messages serialized with schema registry serializers",source:"@site/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ISchemaRegistryTypeNameResolver/ISchemaRegistryTypeNameResolver.md",sourceDirName:"reference/KafkaFlow.SchemaRegistry/KafkaFlow/ISchemaRegistryTypeNameResolver",slug:"/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ISchemaRegistryTypeNameResolver/",permalink:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ISchemaRegistryTypeNameResolver/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ISchemaRegistryTypeNameResolver/ISchemaRegistryTypeNameResolver.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConfluentSerializerWrapper.SerializeAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ConfluentSerializerWrapper/SerializeAsync"},next:{title:"ISchemaRegistryTypeNameResolver.ResolveAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ISchemaRegistryTypeNameResolver/ResolveAsync"}},i={},c=[{value:"Members",id:"members",level:2},{value:"See Also",id:"see-also",level:2}],m={toc:c},p="wrapper";function f(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ischemaregistrytypenameresolver-interface"},"ISchemaRegistryTypeNameResolver interface"),(0,n.kt)("p",null,"An interface to implement a type name resolver to messages serialized with schema registry serializers"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface ISchemaRegistryTypeNameResolver\n")),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"name"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ISchemaRegistryTypeNameResolver/ResolveAsync"},"ResolveAsync"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Resolve the message type name of a schema")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/"},"KafkaFlow"))))}f.isMDXComponent=!0}}]);