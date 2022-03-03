"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46116],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(i,".").concat(d)]||u[d]||s[d]||l;return n?a.createElement(k,p(p({ref:t},m),{},{components:n})):a.createElement(k,p({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45738:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return i},assets:function(){return c},toc:function(){return m},default:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),p={title:"\u53ef\u89c2\u6d4b\u6027\u80fd\u529b\u5347\u7ea7\uff0cAPI \u7f51\u5173 Apache APISIX \u96c6\u6210 OpenTelemetry",authors:[{name:"\u5e84\u6d69\u6f6e",title:"Author",url:"https://github.com/dmsolr",image_url:"https://avatars.githubusercontent.com/u/29735230?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4"}],keywords:["Apache APISIX","API Gateway","OpenTelemetry","Observability","Ecosystem"],description:"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd\u4e86  API \u7f51\u5173 Apache APISIX \u4e2d\u7684 opentelemetry \u63d2\u4ef6\u7684\u6982\u5ff5\u4ee5\u53ca\u5982\u4f55\u90e8\u7f72 opentelemetry \u63d2\u4ef6\u3002",tags:["Technology","Ecosystem","Observability"]},o=void 0,i={permalink:"/zh/blog/2022/02/28/apisix-integration-opentelemetry-plugin",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/02/28/apisix-integration-opentelemetry-plugin.md",title:"\u53ef\u89c2\u6d4b\u6027\u80fd\u529b\u5347\u7ea7\uff0cAPI \u7f51\u5173 Apache APISIX \u96c6\u6210 OpenTelemetry",description:"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd\u4e86  API \u7f51\u5173 Apache APISIX \u4e2d\u7684 opentelemetry \u63d2\u4ef6\u7684\u6982\u5ff5\u4ee5\u53ca\u5982\u4f55\u90e8\u7f72 opentelemetry \u63d2\u4ef6\u3002",date:"2022-02-28T00:00:00.000Z",formattedDate:"2022\u5e742\u670828\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"},{label:"Observability",permalink:"/zh/blog/tags/observability"}],readingTime:3.82,truncated:!0,authors:[{name:"\u5e84\u6d69\u6f6e",title:"Author",url:"https://github.com/dmsolr",image_url:"https://avatars.githubusercontent.com/u/29735230?v=4",imageURL:"https://avatars.githubusercontent.com/u/29735230?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4",imageURL:"https://avatars.githubusercontent.com/u/97138894?v=4"}],prevItem:{title:"\u5982\u4f55\u501f\u52a9 Apache APISIX \u5b9e\u73b0\u4e92\u8054\u7f51\u4fdd\u9669\u9886\u57df\u7684\u6d41\u91cf\u6cbb\u7406\uff1f",permalink:"/zh/blog/2022/03/02/zhongan-usercase-with-apache-apisix"},nextItem:{title:"API \u7f51\u5173 Apache APISIX \u96c6\u6210 Consul KV\uff0c\u670d\u52a1\u53d1\u73b0\u80fd\u529b\u518d\u5347\u7ea7",permalink:"/zh/blog/2022/02/25/consul-api-gateway"}},c={authorsImageUrls:[void 0,void 0]},m=[{value:"\u80cc\u666f\u4fe1\u606f",id:"\u80cc\u666f\u4fe1\u606f",children:[]},{value:"\u63d2\u4ef6\u4ecb\u7ecd",id:"\u63d2\u4ef6\u4ecb\u7ecd",children:[]},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u793a\u4f8b",id:"\u6d4b\u8bd5\u793a\u4f8b",children:[]},{value:"\u573a\u666f\u793a\u4f8b",id:"\u573a\u666f\u793a\u4f8b",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]},{value:"\u76f8\u5173\u9605\u8bfb",id:"\u76f8\u5173\u9605\u8bfb",children:[]}],s={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"opentelemetry")," \u63d2\u4ef6\u7684\u6982\u5ff5\u4ee5\u53ca\u5982\u4f55\u90e8\u7f72 ",(0,l.kt)("inlineCode",{parentName:"p"},"opentelemetry")," \u63d2\u4ef6\u3002")),(0,l.kt)("h2",{id:"\u80cc\u666f\u4fe1\u606f"},"\u80cc\u666f\u4fe1\u606f"),(0,l.kt)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\uff0c\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002\u4f5c\u4e3a API \u7f51\u5173\uff0cApache APISIX \u4e0d\u4ec5\u62e5\u6709\u4f17\u591a\u5b9e\u7528\u7684\u63d2\u4ef6\uff0c\u800c\u4e14\u652f\u6301\u63d2\u4ef6\u52a8\u6001\u53d8\u66f4\u548c\u70ed\u63d2\u62d4\u3002"),(0,l.kt)("p",null,"OpenTelemetry \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u9065\u6d4b\u6570\u636e\u91c7\u96c6\u548c\u5904\u7406\u7cfb\u7edf\uff0c\u5b83\u4e0d\u4ec5\u63d0\u4f9b\u4e86\u5404\u79cd SDK \u7528\u4e8e\u5e94\u7528\u7aef\u9065\u6d4b\u6570\u636e\u7684\u6536\u96c6\u548c\u4e0a\u62a5\uff0c\u4ee5\u53ca\u6570\u636e\u6536\u96c6\u7aef\u7528\u4e8e\u6570\u636e\u63a5\u6536\u3001\u52a0\u5de5\u548c\u5bfc\u51fa\uff0c\u8fd8\u652f\u6301\u901a\u8fc7\u914d\u7f6e\u5bfc\u51fa\u5230\u4efb\u610f\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5df2\u7ecf\u9002\u914d OpenTelemetry Exporter \u7684\u540e\u7aef\uff0c\u6bd4\u5982 Jaeger\u3001Zipkin\u3001OpenCensus \u7b49\u3002\u60a8\u53ef\u4ee5\u5728 opentelemetry collector contrib \u5e93\u4e2d\u67e5\u770b\u5df2\u7ecf\u9002\u914d OpenTelemetry Collector \u7684\u63d2\u4ef6\u5217\u8868\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646037628714-f542841e-ac27-4c13-a4c8-4cdef79ee501.png",alt:"error/OpenTelemetry"})),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u4ecb\u7ecd"},"\u63d2\u4ef6\u4ecb\u7ecd"),(0,l.kt)("p",null,"Apache APISIX ",(0,l.kt)("inlineCode",{parentName:"p"},"opentelemetry")," \u63d2\u4ef6\u662f\u57fa\u4e8e OpenTelemetry \u539f\u751f\u6807\u51c6\uff08",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/otlp.md#otlphttp-request"},"OTLP/HTTP"),"\uff09\u5b9e\u73b0\u7684 Tracing \u6570\u636e\u91c7\u96c6\uff0c\u5e76\u901a\u8fc7 HTTP \u534f\u8bae\u53d1\u9001\u81f3 OpenTelemetry Collector\u3002\u8be5\u529f\u80fd\u5c06\u5728 Apache APISIX 2.13.0  \u7248\u672c\u4e2d\u4e0a\u7ebf\u652f\u6301\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e OpenTelemetry \u7684 Agent/SDK \u4e0e\u540e\u7aef\u5b9e\u73b0\u65e0\u5173\uff0c\u5f53\u5e94\u7528\u96c6\u6210\u4e86 OpenTelemetry \u7684 Agent/SDK \u4e4b\u540e\uff0c\u7528\u6237\u80fd\u591f\u5728\u5e94\u7528\u4fa7\u65e0\u611f\u77e5\u7684\u60c5\u51b5\u4e0b\u8f7b\u677e\u5730\u3001\u81ea\u7531\u5730\u53d8\u66f4\u53ef\u89c2\u6d4b\u6027\u540e\u7aef\u670d\u52a1\uff0c\u6bd4\u5982\u4ece Zipkin \u5207\u6362\u6210 Jaeger\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"opentelemetry")," \u63d2\u4ef6\u5728 Apache APISIX \u4e2d\u96c6\u6210\u4e86 OpenTelemetry Agent/SDK\uff0c\u53ef\u4ee5\u5b9e\u73b0\u91c7\u96c6\u88ab\u8ffd\u8e2a\u7684\u8bf7\u6c42\u751f\u6210 trace \u540e\u8f6c\u53d1\u5230 OpenTelemetry Collector\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"opentelemetry")," \u63d2\u4ef6\u4f4d\u4e8e\u4e0a\u56fe\u4e2d\u7684 Agent \u4fa7\uff0c\u4f46\u76ee\u524d\u4ec5\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"trace")," \u534f\u8bae\uff0c\u8fd8\u4e0d\u652f\u6301 OpenTelemetry \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"logs")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"metrics")," \u534f\u8bae\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,l.kt)("h3",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u60a8\u9700\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u914d\u7f6e\u6587\u4ef6\u4e2d\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"opentelemetry")," \u63d2\u4ef6\u5e76\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"collector")," \u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u60a8\u5df2\u7ecf\u5b8c\u6210 OpenTelemetry Collector \u7684\u90e8\u7f72\uff0c\u5e76\u4e14\u542f\u7528\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-collector/blob/main/receiver/otlpreceiver/README.md"},"OTLP HTTP Receiver"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u672a\u5b8c\u6210\u90e8\u7f72\uff0c\u53ef\u53c2\u8003\u4e0b\u4e00\u8282\u7684\u573a\u666f\u793a\u4f8b\u90e8\u5206\uff0c\u5b8c\u6210 OpenTelemetry Collector \u7684\u90e8\u7f72\u3002")),(0,l.kt)("p",null,"\u5176\u4e2d OTLP HTTP Receiver \u7684\u9ed8\u8ba4\u7aef\u53e3\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"4318"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"collector")," \u7684\u5730\u5740\u4e3a OpenTelemetry Collector \u7684 HTTP Receiver \u5730\u5740\uff0c\u76f8\u5173\u5b57\u6bb5\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/next/plugins/opentelemetry/"},"Apache APISIX \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-YAML"},"plugins\n... # \u5df2\u7ecf\u542f\u7528\u7684\u5176\u5b83\u63d2\u4ef6\n- opentelemetry\nplugin_attr:\n...\nopentelemetry:\n  trace_id_source: x-request-id\n  resource:\n    service.name: APISIX\n  collector:\n    address: 127.0.0.1:4318 # OTLP HTTP Receiver \u5730\u5740\n    request_timeout: 3\n")),(0,l.kt)("h4",{id:"\u65b9\u6cd5\u4e00\uff1a\u5c06\u63d2\u4ef6\u7ed1\u5b9a\u5230\u6307\u5b9a\u8def\u7531"},"\u65b9\u6cd5\u4e00\uff1a\u5c06\u63d2\u4ef6\u7ed1\u5b9a\u5230\u6307\u5b9a\u8def\u7531"),(0,l.kt)("p",null,"\u4e3a\u4e86\u66f4\u65b9\u4fbf\u7684\u5c55\u793a\u6d4b\u8bd5\u6548\u679c\uff0c\u793a\u4f8b\u4e2d\u6682\u65f6\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"sampler")," \u8bbe\u7f6e\u4e3a\u5168\u91c7\u6837\uff0c\u4ee5\u786e\u4fdd\u6bcf\u6b21\u8bf7\u6c42\u90fd\u88ab\u8ffd\u8e2a\u540e\u4ea7\u751f ",(0,l.kt)("inlineCode",{parentName:"p"},"trace")," \u6570\u636e\uff0c\u65b9\u4fbf\u60a8\u5728 Web UI \u4e0a\u67e5\u770b ",(0,l.kt)("inlineCode",{parentName:"p"},"trace")," \u7684\u76f8\u5173\u6570\u636e\u3002\u60a8\u4e5f\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\uff0c\u8bbe\u7f6e\u76f8\u5173\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n-X PUT -d \'\n{\n  "uri": "/get",\n  "plugins": {\n      "opentelemetry": {\n          "sampler": {\n              "name": "always_on"\n          }\n      }\n  },\n  "upstream": {\n      "type": "roundrobin",\n      "nodes": {\n          "httpbin.org:80": 1\n      }\n  }\n}\'\n')),(0,l.kt)("h4",{id:"\u65b9\u5f0f\u4e8c\uff1a\u8bbe\u7f6e-global-rules"},"\u65b9\u5f0f\u4e8c\uff1a\u8bbe\u7f6e Global Rules"),(0,l.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7 Apache APISIX Plugins \u529f\u80fd\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"opentelemetry")," \u63d2\u4ef6\u3002\u5b8c\u6210\u5168\u5c40\u914d\u7f6e\u540e\uff0c\u60a8\u4ecd\u7136\u9700\u8981\u521b\u5efa\u8def\u7531\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},'curl \'http://127.0.0.1:9080/apisix/admin/global_rules/1\' \\\n-H \'X-API-KEY:  edd1c9f034335f136f87ad84b625c8f1\' \\\n-X PUT -d \'{\n  "plugins": {\n      "opentelemetry": {\n          "sampler": {\n              "name": "always_on"\n          }\n      }\n  }\n}\'\n')),(0,l.kt)("h4",{id:"\u65b9\u5f0f\u4e09\uff1a\u901a\u8fc7-additional_attributes-\u4e3a-span-\u81ea\u5b9a\u4e49\u6807\u7b7e"},"\u65b9\u5f0f\u4e09\uff1a\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"h4"},"additional_attributes")," \u4e3a Span \u81ea\u5b9a\u4e49\u6807\u7b7e"),(0,l.kt)("p",null,"\u5173\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"sampler")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"additional_attributes")," \u7684\u914d\u7f6e\u60a8\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/next/plugins/opentelemetry/"},"Apache APISIX \u5b98\u65b9\u6587\u6863"),"\uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"additional_attributes")," \u662f\u4e00\u7cfb\u5217\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Key:Value")," \u952e\u503c\u5bf9\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u4e3a Span \u81ea\u5b9a\u4e49\u6807\u7b7e\uff0c\u5e76\u4e14\u53ef\u4ee5\u8ddf\u968f Span \u5728 Web UI \u4e0a\u5c55\u793a\u3002\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"additional_attributes")," \u4e3a\u67d0\u4e2a\u8def\u7531\u7684 Span \u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"route_id")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"http_x-custom-ot-key"),"\uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1001 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n-X PUT -d \'\n{\n  "uri": "/put",\n  "plugins": {\n      "opentelemetry": {\n          "sampler": {\n              "name": "always_on"\n          },\n          "additional_attributes":[\n              "route_id",\n              "http_x-custom-ot-key"\n          ]\n      }\n  },\n  "upstream": {\n      "type": "roundrobin",\n      "nodes": {\n          "httpbin.org:80": 1\n      }\n  }\n}\'\n')),(0,l.kt)("h3",{id:"\u6d4b\u8bd5\u793a\u4f8b"},"\u6d4b\u8bd5\u793a\u4f8b"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0a\u4e09\u79cd\u65b9\u5f0f\u4e2d\u7684\u4efb\u610f\u4e00\u79cd\u65b9\u5f0f\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"opentelemetry"),"\uff0c\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528\u65b9\u5f0f\u4e09\u7684\u65b9\u6cd5\u521b\u5efa\u8def\u7531\uff0c\u521b\u5efa\u6210\u529f\u540e\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u547d\u4ee4\u8bbf\u95ee\u8def\u7531\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"curl -X PUT -H `x-custom-ot-key: test-ot-val` http://127.0.0.1:9080/put\n")),(0,l.kt)("p",null,"\u8bbf\u95ee\u6210\u529f\u4e4b\u540e\uff0c\u60a8\u53ef\u4ee5\u5728 Jaeger UI \u4e2d\u770b\u5230\u7c7b\u4f3c\u5982\u4e0b\u56fe\u6240\u793a /put \u7684 Span \u8be6\u60c5\uff0c\u5e76\u53ef\u4ee5\u770b\u5230 Tags \u5217\u8868\u4e2d\u5c55\u793a\u4e86\u8def\u7531\u4e2d\u81ea\u5b9a\u4e49\u7684 tag\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"http_x-custom-ot-key")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"route_id"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646039676695-a346734b-0498-4ff6-8882-789a61008544.png",alt:"error/Span details.png"})),(0,l.kt)("p",null,"\u60a8\u9700\u8981\u6ce8\u610f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"additional_attributes")," \u914d\u7f6e\u7684\u8bbe\u5b9a\u662f\u4ece Apache APISIX \u548c Nginx \u53d8\u91cf\u53d6\u503c\u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"attribute")," \u7684\u503c\uff0c\u56e0\u6b64 ",(0,l.kt)("inlineCode",{parentName:"p"},"additional_attributes")," \u5fc5\u987b\u662f Apache APISIX \u6216\u8005 Nginx \u7684\u6709\u6548\u53d8\u91cf\u3002\u5176\u4e2d\u4e5f\u5305\u62ec HTTP Header\uff0c\u4f46\u662f\u5728\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"http_header")," \u65f6\uff0c\u9700\u8981\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"http_")," \u4f5c\u4e3a\u53d8\u91cf\u540d\u7684\u524d\u7f00\u3002\u5982\u679c\u53d8\u91cf\u4e0d\u5b58\u5728\uff0c\u5c31\u4e0d\u4f1a\u5c55\u793a\u8fd9\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"tag")," \u4e86\u3002"),(0,l.kt)("h3",{id:"\u573a\u666f\u793a\u4f8b"},"\u573a\u666f\u793a\u4f8b"),(0,l.kt)("p",null,"\u672c\u573a\u666f\u793a\u4f8b\u901a\u8fc7\u7b80\u5355\u4fee\u6539 OpenTelemetry Collector \u5b98\u65b9\u793a\u4f8b\u90e8\u7f72 Collector\u3001Jaeger \u548c Zipkin \u4f5c\u4e3a\u540e\u7aef\u670d\u52a1\uff0c\u5e76\u4e14\u542f\u52a8\u4e24\u4e2a\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\uff08Client \u548c Server\uff09\uff0c\u5176\u4e2d Server \u63d0\u4f9b\u4e86\u4e00\u4e2a HTTP \u670d\u52a1\uff0c\u800c Client \u4f1a\u5faa\u73af\u8c03\u7528 Server \u63d0\u4f9b\u7684 HTTP \u63a5\u53e3\uff0c\u4ece\u800c\u4ea7\u751f\u5305\u62ec\u4e24\u4e2a Span \u7684\u8c03\u7528\u94fe\u3002"),(0,l.kt)("h4",{id:"\u6b65\u9aa4\u4e00\uff1a\u90e8\u7f72-opentelemetry"},"\u6b65\u9aa4\u4e00\uff1a\u90e8\u7f72 OpenTelemetry"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose")," \u4f5c\u4e3a\u793a\u4f8b\uff0c\u5176\u5b83\u90e8\u7f72\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/collector/getting-started/"},"OpenTelemetry \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u547d\u4ee4\u90e8\u7f72\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"git clone https://github.com/open-telemetry/opentelemetry-collector-contrib.git\ncd opentelemetry-collector-contrib/examples/demo\ndocker-compose up -d\n")),(0,l.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:16886"),"\uff08Jaeger UI\uff09\u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9411/zipkin"),"\uff08Zipkin UI\uff09\uff0c\u5982\u679c\u53ef\u4ee5\u6b63\u5e38\u8bbf\u95ee\uff0c\u5219\u8868\u793a\u90e8\u7f72\u6210\u529f\u3002"),(0,l.kt)("p",null,"\u4e0b\u56fe\u4e3a\u8bbf\u95ee\u6210\u529f\u793a\u4f8b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646039980335-71bbb6f7-39d5-4153-b6e7-0305f52112f3.png",alt:"error/Jaeger example.png"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646040117233-7a18f85f-4037-43e3-bc63-0ff6d1dbe5c1.png",alt:"error/Zipkin example.png"})),(0,l.kt)("h4",{id:"\u6b65\u9aa4\u4e8c\uff1a\u914d\u7f6e\u6d4b\u8bd5\u73af\u5883"},"\u6b65\u9aa4\u4e8c\uff1a\u914d\u7f6e\u6d4b\u8bd5\u73af\u5883"),(0,l.kt)("p",null,"\u5f15\u5165 Apache APISIX \u670d\u52a1\uff0c\u6700\u7ec8\u5e94\u7528\u7684\u62d3\u6251\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646040225319-819f10ab-9643-4bd7-8f99-07f9a6c84bf8.png",alt:"error/Architecture diagram.png"})),(0,l.kt)("p",null,"Trace \u6570\u636e\u4e0a\u62a5\u6d41\u7a0b\u5982\u4e0b\u3002\u5176\u4e2d\u7531\u4e8e Apache APISIX \u662f\u5355\u72ec\u90e8\u7f72\u7684\uff0c\u5e76\u4e0d\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose")," \u7684\u7f51\u7edc\u5185\uff0c\u6240\u4ee5 Apache APISIX \u662f\u901a\u8fc7\u672c\u5730\u6620\u5c04\u7684\u7aef\u53e3\uff08\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"127.0.0.1:4138"),"\uff09\u8bbf\u95ee\u5230 OpenTelemetery Collector \u7684 OTLP HTTP Receiver \u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646040470172-4d44c6ca-b890-4245-9c87-3a42d8b59f47.png",alt:"error/Trace data reporting process.png"})),(0,l.kt)("p",null,"\u60a8\u9700\u8981\u786e\u4fdd\u5df2\u7ecf\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"opentelemetry")," \u63d2\u4ef6\uff0c\u5e76\u91cd\u65b0\u52a0\u8f7d Apache APISIX\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u60a8\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u793a\u4f8b\u521b\u5efa\u4e00\u4e2a\u8def\u7531\uff0c\u5e76\u4e14\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"opentelemetry")," \u63d2\u4ef6\u8fdb\u884c\u91c7\u6837\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n  -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "opentelemetry": {\n            "sampler": {\n                "name": "always_on",\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:7080": 1\n        }\n    }\n}\'\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"./examples/demo/otel-collector-config.yaml")," \u6587\u4ef6\uff0c\u5e76\u6dfb\u52a0 OTLP HTTP Receiver\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"receivers:\n  otlp:\n    protocols:\n      grpc:\n      http:${ip:port}   # \u6dfb\u52a0 OTLP HTTP Receiver\uff0c\u9ed8\u8ba4\u7aef\u53e3\u4e3a 4318\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml"),"\u3002"))),(0,l.kt)("p",null,"\u60a8\u9700\u8981\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff0c\u628a Client \u8c03\u7528 Server \u7684\u63a5\u53e3\u5730\u5740\u4fee\u6539\u4e3a Apache APISIX \u7684\u5730\u5740\uff0c\u5c06 OTLP HTTP Receiver \u548c Server \u670d\u52a1\u7684\u7aef\u53e3\u6620\u5c04\u5230\u672c\u5730\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u662f\u4fee\u6539\u914d\u7f6e\u540e\u5b8c\u6574\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-YAML"},'version: "2"\nservices:\n\n# Jaeger\njaeger-all-in-one:\n  image: jaegertracing/all-in-one:latest\n  ports:\n    - "16686:16686" # jaeger ui \u7684\u7aef\u53e3\n    - "14268"\n    - "14250"\n\n# Zipkin\nzipkin-all-in-one:\n  image: openzipkin/zipkin:latest\n  ports:\n    - "9411:9411"\n\n# Collector\notel-collector:\n  image: ${OTELCOL_IMG}\n  command: ["--config=/etc/otel-collector-config.yaml", "${OTELCOL_ARGS}"]\n  volumes:\n    - ./otel-collector-config.yaml:/etc/otel-collector-config.yaml\n  ports:\n    - "1888:1888"   # pprof extension\n    - "8888:8888"   # Prometheus metrics exposed by the collector\n    - "8889:8889"   # Prometheus exporter metrics\n    - "13133:13133" # health_check extension\n    - "4317"        # OTLP gRPC receiver\n    - "4318:4318"   # \u6dfb\u52a0 OTLP HTTP Receiver \u7aef\u53e3\u6620\u5c04\n    - "55670:55679" # zpages extension\n  depends_on:\n    - jaeger-all-in-one\n    - zipkin-all-in-one\n\ndemo-client:\n  build:\n    dockerfile: Dockerfile\n    context: ./client\n  environment:\n    - OTEL_EXPORTER_OTLP_ENDPOINT=otel-collector:4317\n    - DEMO_SERVER_ENDPOINT=http://172.17.0.1:9080/hello # APISIX \u7684\u5730\u5740\n  depends_on:\n    - demo-server\n\ndemo-server:\n  build:\n    dockerfile: Dockerfile\n    context: ./server\n  environment:\n    - OTEL_EXPORTER_OTLP_ENDPOINT=otel-collector:4317\n  ports:\n    - "7080:7080" # \u5c06 Server \u7aef\u53e3\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\n  depends_on:\n    - otel-collector\n\nprometheus:\n  container_name: prometheus\n  image: prom/prometheus:latest\n  volumes:\n    - ./prometheus.yaml:/etc/prometheus/prometheus.yml\n  ports:\n    - "9090:9090"\n')),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"demo-client.environment.DEMO_SERVER_ENDPOINT")," \u5904\u9700\u8981\u6539\u4e3a\u60a8\u7684 Apache APISIX \u5730\u5740\uff0c\u4e14\u4fdd\u8bc1\u5728\u5bb9\u5668\u5185\u53ef\u4ee5\u6b63\u5e38\u8bbf\u95ee\u3002"),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"docekr-compose.yaml")," \u90e8\u7f72 Apache APISIX \uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-docker/blob/master/docs/en/latest/example.md"},"Apache APISIX \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,l.kt)("h4",{id:"\u6b65\u9aa4\u4e09\uff1a\u6d4b\u8bd5"},"\u6b65\u9aa4\u4e09\uff1a\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u91cd\u65b0\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u8bbf\u95ee Jaeger UI \u6216\u8005 Zipkin UI \u5373\u53ef\u770b\u5230 Trace \u4e2d\u5305\u542b\u4e86 APISIX \u7684 Span\uff0c\u5982\u4e0b\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646045290844-acfa071b-5a0d-4f7a-aa77-55838a3cb9f6.png",alt:"error/Jaeger example.png"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646045376329-e1344754-58b4-4a73-8aea-50e6a04f3b70.png",alt:"error/Zipkin example.png"})),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u6682\u65f6\u4e0d\u9700\u8981\u67d0\u4e2a\u8def\u7531\u7684 Trace \u91c7\u96c6\uff0c\u5219\u4ec5\u9700\u4fee\u6539\u8def\u7531\u914d\u7f6e\uff0c\u5c06\u914d\u7f6e\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"plugins")," \u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"opentelemetry")," \u76f8\u5173\u914d\u7f6e\u5220\u9664\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u662f\u901a\u8fc7\u7ed1\u5b9a Global Rules \u5168\u5c40\u542f\u7528\u7684\uff0c\u5219\u53ea\u80fd\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"opentelemetry")," \u5168\u5c40\u63d2\u4ef6\u7684\u914d\u7f6e\u3002\u5f97\u76ca\u4e8e Apache APISIX \u7684\u52a8\u6001\u5316\u4f18\u52bf\uff0c\u5f00\u542f\u5173\u95ed\u63d2\u4ef6\u7684\u8fc7\u7a0b\u90fd\u4e0d\u9700\u8981\u91cd\u542f Apache APISIX\uff0c\u5341\u5206\u65b9\u4fbf\u3002"),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"Apache APISIX \u5728\u96c6\u6210 OpenTelemetery \u4e4b\u540e\uff0c\u501f\u52a9 OpenTelemetry \u4e30\u5bcc\u7684\u63d2\u4ef6\u80fd\u591f\u4e0e\u5e02\u573a\u4e0a\u5927\u90e8\u5206\u4e3b\u6d41\u7684 Trace \u7cfb\u7edf\u8f7b\u677e\u5b9e\u73b0\u5bf9\u63a5\u3002\u6b64\u5916\uff0cApache APISIX \u4e5f\u5b9e\u73b0\u4e86 SkyWalking \u548c Zipkin \u539f\u751f\u6807\u51c6\u534f\u8bae\u63d2\u4ef6\uff0c\u4e5f\u5728\u79ef\u6781\u4e0e\u5404\u5927\u793e\u533a\u5408\u4f5c\u6253\u9020\u66f4\u52a0\u5f3a\u5927\u7684\u751f\u6001\u3002"),(0,l.kt)("p",null,"Apache APISIX \u9879\u76ee\u76ee\u524d\u6b63\u5728\u5f00\u53d1\u5176\u4ed6\u63d2\u4ef6\u4ee5\u652f\u6301\u96c6\u6210\u66f4\u591a\u670d\u52a1\uff0c\u5982\u679c\u60a8\u5bf9\u6b64\u6709\u5174\u8da3\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"GitHub Discussions")," \u53d1\u8d77\u8ba8\u8bba\uff0c\u6216\u901a\u8fc7",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/general/subscribe-guide"},"\u90ae\u4ef6\u5217\u8868"),"\u8fdb\u884c\u4ea4\u6d41."),(0,l.kt)("h2",{id:"\u76f8\u5173\u9605\u8bfb"},"\u76f8\u5173\u9605\u8bfb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/11/04/skywalking"},"\u6d45\u8c08 Apache APISIX \u7684\u53ef\u89c2\u6d4b\u6027"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/02/10/apisix-splunk-integration"},"\u751f\u6001\u6269\u5927\u8fdb\u884c\u4e2d\uff01API \u7f51\u5173\u96c6\u6210 Splunk HTTP Event Collector")))))}u.isMDXComponent=!0}}]);