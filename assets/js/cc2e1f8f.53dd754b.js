"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5858],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>m});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),d=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||c[f]||o;return n?t.createElement(m,i(i({ref:a},p),{},{components:n})):t.createElement(m,i({ref:a},p))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61146:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=n(87462),r=(n(67294),n(3905));const o={sidebar_position:3},i="Dashboard",s={unversionedId:"guides/admin/dashboard",id:"version-2.x/guides/admin/dashboard",title:"Dashboard",description:"In this section, we will learn how to configure the Dashboard.",source:"@site/versioned_docs/version-2.x/guides/admin/dashboard.md",sourceDirName:"guides/admin",slug:"/guides/admin/dashboard",permalink:"/kafkaflow/docs/2.x/guides/admin/dashboard",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/versioned_docs/version-2.x/guides/admin/dashboard.md",tags:[],version:"2.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Web API",permalink:"/kafkaflow/docs/2.x/guides/admin/web-api"},next:{title:"Authentication",permalink:"/kafkaflow/docs/2.x/guides/authentication"}},l={},d=[{value:"Adding the Dashboard",id:"adding-the-dashboard",level:2}],p={toc:d},u="wrapper";function c(e){let{components:a,...n}=e;return(0,r.kt)(u,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,"In this section, we will learn how to configure the Dashboard."),(0,r.kt)("p",null,"KafkaFlow provides a Dashboard where you can visualize information related to your consumers and use all operations available on ",(0,r.kt)("a",{parentName:"p",href:"web-api"},"KafkaFlow.Admin.WebApi"),". "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"It is important to note that the Dashboard runs, shows information, and manages the consumers on all application instances. This means that if you have 10 machines running your application, the Dashboard will run in every instance. ",(0,r.kt)("strong",{parentName:"p"},"Any operation will affect the consumer in all the machines"),".")),(0,r.kt)("h2",{id:"adding-the-dashboard"},"Adding the Dashboard"),(0,r.kt)("p",null,"Install the following packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/KafkaFlow.Admin/"},"KafkaFlow.Admin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/KafkaFlow.Admin.WebApi/"},"KafkaFlow.Admin.WebApi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/KafkaFlow.Admin.Dashboard/"},"KafkaFlow.Admin.Dashboard"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package KafkaFlow.Microsoft.DependencyInjection\ndotnet add package KafkaFlow.Admin\ndotnet add package KafkaFlow.Admin.WebApi\ndotnet add package KafkaFlow.Admin.Dashboard\n")),(0,r.kt)("p",null,"You can configure the Dashboard during the ",(0,r.kt)("a",{parentName:"p",href:"../configuration"},"configuration"),", as shown in the following example (",(0,r.kt)("em",{parentName:"p"},"built using .NET 6"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using KafkaFlow;\nusing KafkaFlow.Admin.Dashboard;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services\n    .AddKafka(kafka => kafka\n        .AddCluster(cluster => cluster\n                .WithBrokers(new[] { "localhost:9092" })\n                .AddConsumer(consumer => consumer\n                    .Topic("mytopic")\n                    .WithGroupId("g1")\n                    .WithWorkersCount(1)\n                    .WithBufferSize(10)\n                )\n                .EnableAdminMessages("kafka-flow.admin")\n                .EnableTelemetry("kafka-flow.admin") // you can use the same topic used in EnableAdminMessages, if need it\n        ))\n    .AddControllers();\n\nvar app = builder.Build();\n\napp.MapControllers();\napp.UseKafkaFlowDashboard();\n\nvar kafkaBus = app.Services.CreateKafkaBus();\nawait kafkaBus.StartAsync();\n\nawait app.RunAsync();\n')),(0,r.kt)("p",null,"The dashboard UI will be available at ",(0,r.kt)("inlineCode",{parentName:"p"},"/kafka-flow")," and is refreshed every 5 seconds with telemetry data available at the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/kafka-flow/telemetry"),". "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/233064/124478023-1d773680-dd7b-11eb-89e4-41a1f4f36a6f.png",alt:"image"})))}c.isMDXComponent=!0}}]);