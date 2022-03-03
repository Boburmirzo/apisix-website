"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25194],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,g=u["".concat(c,".").concat(d)]||u[d]||h[d]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41083:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r={title:"Applying Plugin Orchestration in Apache APISIX",slug:"/blog/2021/07/27/use-of-plugin-orchestration-in-apache-apisix",author:"Zhiyuan Ju",authorURL:"https://github.com/juzhiyuan",authorImageURL:"https://avatars.githubusercontent.com/u/2106987?v=4",keywords:["Apache APISIX","Plugin Orchestration","Apache APISIX Dashboard","API Gateway"],description:'Read this article to learn about Apache APISIX and basic usage scenarios, and how Apache APISIX integrates "drag and drop" plugin orchestration capabilities in a low-code trend.',tags:["Practical Case"]},s=void 0,c={permalink:"/blog/blog/2021/07/27/use-of-plugin-orchestration-in-apache-apisix",source:"@site/blog/2021/07/27/use-of-plugin-orchestration-in-Apache-APISIX.md",title:"Applying Plugin Orchestration in Apache APISIX",description:'Read this article to learn about Apache APISIX and basic usage scenarios, and how Apache APISIX integrates "drag and drop" plugin orchestration capabilities in a low-code trend.',date:"2021-07-27T00:00:00.000Z",formattedDate:"July 27, 2021",tags:[{label:"Practical Case",permalink:"/blog/tags/practical-case"}],readingTime:7.59,truncated:!0,authors:[{name:"Zhiyuan Ju",url:"https://github.com/juzhiyuan",imageURL:"https://avatars.githubusercontent.com/u/2106987?v=4"}],prevItem:{title:"Release Apache APISIX 2.8.0",permalink:"/blog/2021/07/28/release-apache-apisix-2.8"},nextItem:{title:"ApacheCon Asia 2021: Apache APISIX Technical Topics",permalink:"/blog/2021/07/25/apachecon-asia"}},l={authorsImageUrls:[void 0]},p=[{value:"What is Apache APISIX?",id:"what-is-apache-apisix",children:[]},{value:"What is Plugin Orchestration?",id:"what-is-plugin-orchestration",children:[]},{value:"How Plugin Orchestration Works?",id:"how-plugin-orchestration-works",children:[{value:"Apache APISIX",id:"apache-apisix",children:[]},{value:"Apache APISIX Dashboard",id:"apache-apisix-dashboard",children:[]}]},{value:"Future Plans",id:"future-plans",children:[]}],h={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Read this article to learn about Apache APISIX and basic usage scenarios, and how Apache APISIX integrates "drag and drop" plugin orchestration capabilities in a low-code trend.')),(0,o.kt)("h2",{id:"what-is-apache-apisix"},"What is Apache APISIX?"),(0,o.kt)("p",null,"Apache APISIX is a dynamic, real-time, high-performance API gateway. Apache APISIX provides rich traffic management features such as load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and more. It has more than 50 built-in plugins covering authentication, security, traffic control, Serverless, observability, and other aspects to meet the common usage scenarios of enterprise customers."),(0,o.kt)("p",null,"As shown in the architecture diagram below, Apache APISIX is divided into two parts: the data plane (left side) and the control plane (right side): the control plane sends down the configuration to ETCD, and the data plane handles internal and external traffic with the help of rich plug-ins."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639466553989-ecae1a31-8121-4390-a830-f386b9b12322.png",alt:"Apache APISIX architecture"})),(0,o.kt)("p",null,"Apache APISIX exposes a set of interfaces that allow us to bind plugins to the API. If we want to add speed-limiting capabilities to the API, we can simply bind the ",(0,o.kt)("inlineCode",{parentName:"p"},"limit-req")," plugin to the API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT http://127.0.0.1:9080/apisix/admin/routes/1 -d \'\n\n {\n   "uri": "/get",\n   "methods": ["GET"],\n   "upstream": {\n     "type": "roundrobin",\n     "nodes": {\n       "httpbin.org:80": 1\n     }\n   },\n   "plugins": {\n     "limit-req": {\n       "rate": 1,\n       "burst": 2,\n       "rejected_code": 503,\n       "key": "remote_addr"\n     }\n   }\n }\'\n')),(0,o.kt)("p",null,"After a successful call, the request will be speed-limited when it reaches the API."),(0,o.kt)("p",null,'This example uses limit-req to implement API speed limit (which is a specific function of Apache APISIX), but how to do it for the scenario of "decide the subsequent request processing logic based on the processing result of a plugin"? Currently, the existing plugin mechanism can not meet this demand, which then leads to the ability of plugin orchestration to solve this problem.'),(0,o.kt)("h2",{id:"what-is-plugin-orchestration"},"What is Plugin Orchestration?"),(0,o.kt)("p",null,"Plugin orchestration is a form of low-code that can help enterprises reduce usage costs and increase operation and maintenance efficiency, and is an indispensable capability in the process of digital transformation. With the plugin orchestration capability in the low-code API gateway Apache APISIX, we can easily orchestrate 50+ plugins in a \u201cdrag-and-drop\u201d way, and the orchestrated plugins can share contextual information to realize scenario-based requirements."),(0,o.kt)("p",null,"Extending the above API speed limit scenario: the request is authenticated using the key-auth plugin, and if the authentication passes, the kafka-logger plugin takes over and logs; if the authentication fails (the plugin returns a 401 status code), the limit-req plugin is used to limit the speed."),(0,o.kt)("p",null,"See the following video on how to do it."),(0,o.kt)("iframe",{height:"350",width:"100%",src:"https://api7-website-1301662268.file.myqcloud.com/202107/%E6%8F%92%E4%BB%B6%E7%BC%96%E6%8E%92.mp4",frameborder:"0"}),(0,o.kt)("p",null,"In this video, the Web interface lists the currently available plugins and drawing boards, and we can drag and drop the plugins onto the drawing boards to arrange them and fill in the data bound to the plugins, and then the whole process is completed. In the whole process."),(0,o.kt)("p",null,"The Web interface lists the currently available plugins and drawing boards, and we can drag and drop the plugins onto the drawing boards to arrange them and fill in the data bound to the plugins, and then the whole process is completed. In the whole process."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"operation visualization: we can use the interface visualization in addition to the creation of API, but also through the ability to orchestrate intuitive and clear scenario design.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"process reusable: by importing and exporting the JSON data of the drawing board, you can easily reuse the project data generated by orchestration.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Combine to create new "plugins": treat each scene as a plugin, and combine different plugins by using conditional components to create "plugins".'))),(0,o.kt)("h2",{id:"how-plugin-orchestration-works"},"How Plugin Orchestration Works?"),(0,o.kt)("p",null,"So how does Apache APISIX combine with low-code capabilities? This requires the data side Apache APISIX and the control side Apache APISIX Dashboard to work together. The overall process is as follows."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639466624894-039f4e63-fd21-403a-94c5-6efc8425eb0f.png",alt:"Apache APISIX plugin orchestration flow"})),(0,o.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,o.kt)("p",null,"In Apache APISIX, we have added ",(0,o.kt)("inlineCode",{parentName:"p"},"script")," execution logic to the Route entity, which can be used to receive and execute Lua functions generated by Dashboard, and it supports calling existing plugins to reuse the code. In addition, it also works on various stages of the HTTP request lifecycle, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"access"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"header_filer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"body_filter"),", etc. The system will automatically execute the script function corresponding to the stage code at the corresponding stage, see the following ",(0,o.kt)("inlineCode",{parentName:"p"},"script")," example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'{\n\n  "script": "local _M = {} \\n function _M.access(api_ctx) \\n ngx.log(ngx.INFO,\\"hit access phase\\") \\n end \\nreturn _M"\n\n}\n')),(0,o.kt)("h3",{id:"apache-apisix-dashboard"},"Apache APISIX Dashboard"),(0,o.kt)("p",null,"Dashboard contains two sub-components, Web and ManagerAPI: Web provides a visual interface to configure the API gateway; ManagerAPI provides a RESTful API for the Web or other clients to call in order to operate the configuration center (ETCD by default) and thus indirectly control Apache APISIX."),(0,o.kt)("p",null,"In order to generate legal and efficient script functions, ManagerAPI chose the DAG directed acyclic graph data structure for the underlying design and developed the ",(0,o.kt)("inlineCode",{parentName:"p"},"dag-to-lua")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/api7/dag-to-lua"},"project"),": it takes the root node as the start node and decides the next flow plugin based on the judgment It uses the root node as the start node and decides the next flow plugin based on the judgment condition, which will effectively avoid logical dead loops. The following is a diagram of the DAG data structure."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639466682723-dcfd5c1b-9ae7-42b4-b3c2-c00aaf7a5996.png",alt:"Apache APISIX plugin orchestration DAG data structure"})),(0,o.kt)("p",null,"Corresponding to the script parameters received by ManagerAPI, the example is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "conf": {\n    "1-2-3": {\n      "name": "plugin-a",\n      "conf": {\n        ...\n\n      }\n    },\n\n    "4-5-6": {\n      "name": "plugin-b",\n      "conf": {\n        ...\n      }\n    },\n    "7-8-9": {\n      "name": "plugin-c",\n      "conf": {\n        ...\n      }\n    }\n  },\n\n  "rule": {\n    "root": "1-2-3", # initial node ID\n    "1-2-3": [\n      [\n        "code == 200",\n        "4-5-6"\n      ], [\n        "",\n        "7-8-9"\n      ]\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"After the client converts the final orchestrated data into the above format, ManagerAPI generates Lua functions with the help of the dag-to-lua project and hands them over to Apache APISIX for execution."),(0,o.kt)("p",null,"On the Web side, after selection, comparison and project validation, we chose Ant Group's open source X6 graph editing engine as the underlying framework for the Web part of the plugin orchestration. In addition to perfect and clear documentation, a series of out-of-the-box interactive components and node customizability are the reasons we chose it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639466742487-269ebd5a-4f6c-47c3-a941-1275a4b3d178.png",alt:"X6 introduction"})),(0,o.kt)("p",null,"In the process of orchestration implementation, we abstract the concept of generic components and plug-in components: generic components are start nodes, end nodes and conditional judgment nodes, while plug-in components are every available Apache APISIX plug-in, and the process of plug-in orchestration is completed by dragging and dropping these components into the drawing board. As shown in the figure."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639466805116-0e1c9a83-e5d0-40c1-8a76-8cb1402a491c.png",alt:"Apache APISIX dashboard plugin orchestration demo1"})),(0,o.kt)("p",null,"During the drag and drop process, we need to restrict a series of boundary conditions, here are a few examples."),(0,o.kt)("p",null,'When the plugin is not configured, the system will show the error message "There are unconfigured components", which allows you to visually see which plugin does not have configuration data.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639466853301-a67de136-633d-4b5d-9062-ac17bf625063.png",alt:"Apache APISIX dashboard plugin orchestration demo2"})),(0,o.kt)("p",null,"When an API is edited, if the API is already bound with plugin data, when using the plugin orchestration mode, a warning message will appear after detection, and the system can only proceed if the user explicitly confirms that he/she wants to use the orchestration mode. This can effectively prevent the API data from being manipulated by mistake."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639466907551-07ec82f9-8988-4a66-a5f2-d3944d4f239c.png",alt:"Apache APISIX dashboard plugin orchestration demo3"})),(0,o.kt)("p",null,"In addition, there are cases such as the start element can only have one output and the conditional judgment element can only have one input. Imagine: if the system allows users to operate without restrictions, unreasonable plugin combinations will be meaningless and generate unpredictable errors, so the continuous enrichment of boundary conditions is also an important consideration when designing the plugin arrangement."),(0,o.kt)("p",null,"When we finish the orchestration, we will use the API exposed by X6 to generate the JSON data of the flowchart, then convert it into the DAG data needed by the system, and finally generate Lua functions."),(0,o.kt)("h2",{id:"future-plans"},"Future Plans"),(0,o.kt)("p",null,"The drag-and-drop approach makes it easier for users to combine plugins to meet different scenarios to enhance the scalability and operation and maintenance experience of API gateways. In the process of actual use, there are the following issues that can continue to be optimized."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The current boundary judgment conditions of the components are not rich enough, by continuing to improve these conditions to reduce unreasonable combinations of orchestration.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"There are not many orchestration examples at present, and providing more reference examples can facilitate developers to learn and users to use.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The current Apache APISIX uses the code defined by the plugin for status return (exceptions return the status code, the request is terminated), can support more HTTP Response field or even modify the plugin definition to extend the plugin orchestration capabilities, such as the following plugin definition."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"local _M = {\n  version = 0.1,\n  priority = 2500,\n  type = 'auth',\n  name = plugin_name,\n  schema = schema,\n  # A new result field has been added to store the results of plugin runs and pass them on to the next plugin\n  result = {\n    code = {\n      type = \"int\"\n    }\n  }\n}\n")))}u.isMDXComponent=!0}}]);