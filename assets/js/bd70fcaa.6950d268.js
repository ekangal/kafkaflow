"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1321],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>S});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var f=a.createContext({}),c=function(e){var r=a.useContext(f),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return a.createElement(f.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,f=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=n,S=u["".concat(f,".").concat(m)]||u[m]||p[m]||l;return t?a.createElement(S,i(i({ref:r},s),{},{components:t})):a.createElement(S,i({ref:r},s))}));function S(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var f in r)hasOwnProperty.call(r,f)&&(o[f]=r[f]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},14307:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const l={},i="ConfluentAvroSerializer constructor",o={unversionedId:"reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow.Serializer.SchemaRegistry/ConfluentAvroSerializer/ConfluentAvroSerializer",id:"reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow.Serializer.SchemaRegistry/ConfluentAvroSerializer/ConfluentAvroSerializer",title:"ConfluentAvroSerializer constructor",description:"Initializes a new instance of the ConfluentAvroSerializer class.",source:"@site/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow.Serializer.SchemaRegistry/ConfluentAvroSerializer/ConfluentAvroSerializer.md",sourceDirName:"reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow.Serializer.SchemaRegistry/ConfluentAvroSerializer",slug:"/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow.Serializer.SchemaRegistry/ConfluentAvroSerializer/",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow.Serializer.SchemaRegistry/ConfluentAvroSerializer/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow.Serializer.SchemaRegistry/ConfluentAvroSerializer/ConfluentAvroSerializer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConfluentAvroDeserializer.DeserializeAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow.Serializer.SchemaRegistry/ConfluentAvroDeserializer/DeserializeAsync"},next:{title:"ConfluentAvroSerializer.SerializeAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow.Serializer.SchemaRegistry/ConfluentAvroSerializer/SerializeAsync"}},f={},c=[{value:"See Also",id:"see-also",level:2}],s={toc:c},u="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"confluentavroserializer-constructor"},"ConfluentAvroSerializer constructor"),(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",{parentName:"p",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow.Serializer.SchemaRegistry/ConfluentAvroSerializer/"},(0,n.kt)("inlineCode",{parentName:"a"},"ConfluentAvroSerializer"))," class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public ConfluentAvroSerializer(IDependencyResolver resolver, \n    AvroSerializerConfig serializerConfig = null)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resolver"),(0,n.kt)("td",{parentName:"tr",align:null},"The IDependencyResolver to be used by the framework")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"serializerConfig"),(0,n.kt)("td",{parentName:"tr",align:null},"Avro serializer configuration")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"class\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/KafkaFlow.Serializer.SchemaRegistry/ConfluentAvroSerializer/"},"ConfluentAvroSerializer")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentAvro/"},"KafkaFlow.Serializer.SchemaRegistry"))))}p.isMDXComponent=!0}}]);