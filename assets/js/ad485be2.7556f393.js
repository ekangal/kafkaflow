"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3183],{3905:(e,r,a)=>{a.d(r,{Zo:()=>u,kt:()=>k});var t=a(67294);function l(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){l(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,l=function(e,r){if(null==e)return{};var a,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(l[a]=e[a]);return l}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=t.createContext({}),s=function(e){var r=t.useContext(d),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},u=function(e){var r=s(e.components);return t.createElement(d.Provider,{value:r},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),p=l,k=c["".concat(d,".").concat(p)]||c[p]||f[p]||i;return a?t.createElement(k,n(n({ref:r},u),{},{components:a})):t.createElement(k,n({ref:r},u))}));function k(e,r){var a=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var i=a.length,n=new Array(i);n[0]=p;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[c]="string"==typeof e?e:l,n[1]=o;for(var s=2;s<i;s++)n[s]=a[s];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},81092:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>n,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=a(87462),l=(a(67294),a(3905));const i={},n="ProducerMiddlewareConfigurationBuilder.AddSerializer&lt;TSerializer&gt; method (1 of 4)",o={unversionedId:"reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSerializer",id:"reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSerializer",title:"ProducerMiddlewareConfigurationBuilder.AddSerializer&lt;TSerializer&gt; method (1 of 4)",description:"Registers a middleware to serialize messages",source:"@site/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSerializer.md",sourceDirName:"reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder",slug:"/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSerializer",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSerializer",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSerializer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ProducerMiddlewareConfigurationBuilder class",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/"},next:{title:"ProducerMiddlewareConfigurationBuilder.AddSingleTypeSerializer&lt;TSerializer&gt; method (1 of 4)",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSingleTypeSerializer"}},d={},s=[{value:"See Also",id:"see-also",level:2},{value:"See Also",id:"see-also-1",level:2},{value:"See Also",id:"see-also-2",level:2},{value:"See Also",id:"see-also-3",level:2}],u={toc:s},c="wrapper";function f(e){let{components:r,...a}=e;return(0,l.kt)(c,(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"producermiddlewareconfigurationbuilderaddserializertserializer-method-1-of-4"},"ProducerMiddlewareConfigurationBuilder.AddSerializer","<","TSerializer",">"," method (1 of 4)"),(0,l.kt)("p",null,"Registers a middleware to serialize messages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IProducerMiddlewareConfigurationBuilder AddSerializer<TSerializer>(\n    this IProducerMiddlewareConfigurationBuilder middlewares)\n    where TSerializer : class, ISerializer\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSerializer"),(0,l.kt)("td",{parentName:"tr",align:null},"A class that implements ISerializer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,l.kt)("td",{parentName:"tr",align:null},"The middleware configuration builder")))),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"class\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/"},"ProducerMiddlewareConfigurationBuilder")),(0,l.kt)("li",{parentName:"ul"},"namespace\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow"))),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"producermiddlewareconfigurationbuilderaddserializertserializer-method-2-of-4"},"ProducerMiddlewareConfigurationBuilder.AddSerializer","<","TSerializer",">"," method (2 of 4)"),(0,l.kt)("p",null,"Registers a middleware to serialize messages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IProducerMiddlewareConfigurationBuilder AddSerializer<TSerializer>(\n    this IProducerMiddlewareConfigurationBuilder middlewares, \n    Factory<TSerializer> serializerFactory)\n    where TSerializer : class, ISerializer\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSerializer"),(0,l.kt)("td",{parentName:"tr",align:null},"A class that implements ISerializer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,l.kt)("td",{parentName:"tr",align:null},"The middleware configuration builder")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serializerFactory"),(0,l.kt)("td",{parentName:"tr",align:null},"A factory to create a ISerializer")))),(0,l.kt)("h2",{id:"see-also-1"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"class\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/"},"ProducerMiddlewareConfigurationBuilder")),(0,l.kt)("li",{parentName:"ul"},"namespace\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow"))),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"producermiddlewareconfigurationbuilderaddserializertserializertresolver-method-3-of-4"},"ProducerMiddlewareConfigurationBuilder.AddSerializer","<","TSerializer,TResolver",">"," method (3 of 4)"),(0,l.kt)("p",null,"Registers a middleware to serialize messages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IProducerMiddlewareConfigurationBuilder AddSerializer<TSerializer, TResolver>(\n    this IProducerMiddlewareConfigurationBuilder middlewares)\n    where TSerializer : class, ISerializer\n    where TResolver : class, IMessageTypeResolver\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSerializer"),(0,l.kt)("td",{parentName:"tr",align:null},"A class that implements ISerializer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TResolver"),(0,l.kt)("td",{parentName:"tr",align:null},"A class that implements ",(0,l.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/"},(0,l.kt)("inlineCode",{parentName:"a"},"IMessageTypeResolver")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,l.kt)("td",{parentName:"tr",align:null},"The middleware configuration builder")))),(0,l.kt)("h2",{id:"see-also-2"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"interface\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/"},"IMessageTypeResolver")),(0,l.kt)("li",{parentName:"ul"},"class\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/"},"ProducerMiddlewareConfigurationBuilder")),(0,l.kt)("li",{parentName:"ul"},"namespace\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow"))),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"producermiddlewareconfigurationbuilderaddserializertserializertresolver-method-4-of-4"},"ProducerMiddlewareConfigurationBuilder.AddSerializer","<","TSerializer,TResolver",">"," method (4 of 4)"),(0,l.kt)("p",null,"Registers a middleware to serialize messages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IProducerMiddlewareConfigurationBuilder AddSerializer<TSerializer, TResolver>(\n    this IProducerMiddlewareConfigurationBuilder middlewares, \n    Factory<TSerializer> serializerFactory, Factory<TResolver> resolverFactory)\n    where TSerializer : class, ISerializer\n    where TResolver : class, IMessageTypeResolver\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSerializer"),(0,l.kt)("td",{parentName:"tr",align:null},"A class that implements ISerializer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TResolver"),(0,l.kt)("td",{parentName:"tr",align:null},"A class that implements ",(0,l.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/"},(0,l.kt)("inlineCode",{parentName:"a"},"IMessageTypeResolver")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,l.kt)("td",{parentName:"tr",align:null},"The middleware configuration builder")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serializerFactory"),(0,l.kt)("td",{parentName:"tr",align:null},"A factory to create a ISerializer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resolverFactory"),(0,l.kt)("td",{parentName:"tr",align:null},"A factory to create a ",(0,l.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/"},(0,l.kt)("inlineCode",{parentName:"a"},"IMessageTypeResolver")))))),(0,l.kt)("h2",{id:"see-also-3"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"interface\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/"},"IMessageTypeResolver")),(0,l.kt)("li",{parentName:"ul"},"class\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ProducerMiddlewareConfigurationBuilder/"},"ProducerMiddlewareConfigurationBuilder")),(0,l.kt)("li",{parentName:"ul"},"namespace\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow"))))}f.isMDXComponent=!0}}]);