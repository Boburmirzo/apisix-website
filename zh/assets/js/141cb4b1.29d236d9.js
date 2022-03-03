"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76900],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,N=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return t?a.createElement(N,o(o({ref:n},l),{},{components:t})):a.createElement(N,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80229:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),o={title:"nacos"},i=void 0,c={unversionedId:"discovery/nacos",id:"version-2.10/discovery/nacos",isDocsHomePage:!1,title:"nacos",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.10/discovery/nacos.md",sourceDirName:"discovery",slug:"/discovery/nacos",permalink:"/zh/docs/apisix/2.10/discovery/nacos",editUrl:null,tags:[],version:"2.10",frontMatter:{title:"nacos"},sidebar:"version-2.10/docs",previous:{title:"consul_kv",permalink:"/zh/docs/apisix/2.10/discovery/consul_kv"},next:{title:"eureka",permalink:"/zh/docs/apisix/2.10/discovery/eureka"}},p=[{value:"\u57fa\u4e8e Nacos \u7684\u670d\u52a1\u53d1\u73b0",id:"\u57fa\u4e8e-nacos-\u7684\u670d\u52a1\u53d1\u73b0",children:[{value:"Nacos \u914d\u7f6e",id:"nacos-\u914d\u7f6e",children:[]},{value:"Upstream \u8bbe\u7f6e",id:"upstream-\u8bbe\u7f6e",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]}]}],l={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u57fa\u4e8e-nacos-\u7684\u670d\u52a1\u53d1\u73b0"},"\u57fa\u4e8e ",(0,s.kt)("a",{parentName:"h2",href:"https://nacos.io/zh-cn/docs/what-is-nacos.html"},"Nacos")," \u7684\u670d\u52a1\u53d1\u73b0"),(0,s.kt)("p",null,"Nacos \u670d\u52a1\u53d1\u73b0\u6a21\u5757\u76ee\u524d\u662f\u5b9e\u9a8c\u6027\u7684\u3002"),(0,s.kt)("p",null,"\u5f53\u524d\u6a21\u5757\u7684\u6027\u80fd\u6709\u5f85\u6539\u8fdb\uff1a"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u5e76\u884c\u53d1\u9001\u8bf7\u6c42\u3002")),(0,s.kt)("h3",{id:"nacos-\u914d\u7f6e"},"Nacos \u914d\u7f6e"),(0,s.kt)("p",null,"\u5728\u6587\u4ef6 ",(0,s.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"  \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u5230\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  nacos:\n    host:\n      - "http://${username}:${password}@${host1}:${port1}"\n    prefix: "/nacos/v1/"\n    fetch_interval: 30    # default 30 sec\n    weight: 100           # default 100\n    timeout:\n      connect: 2000       # default 2000 ms\n      send: 2000          # default 2000 ms\n      read: 5000          # default 5000 ms\n')),(0,s.kt)("p",null,"\u4e5f\u53ef\u4ee5\u8fd9\u6837\u7b80\u6d01\u914d\u7f6e\uff08\u672a\u914d\u7f6e\u9879\u4f7f\u7528\u9ed8\u8ba4\u503c\uff09\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  nacos:\n    host:\n      - "http://192.168.33.1:8848"\n')),(0,s.kt)("h3",{id:"upstream-\u8bbe\u7f6e"},"Upstream \u8bbe\u7f6e"),(0,s.kt)("p",null,'\u4f8b\u5982\uff0c\u8f6c\u53d1 URI \u5339\u914d "/nacos/*" \u7684\u8bf7\u6c42\u5230\u4e00\u4e2a\u4e0a\u6e38\u670d\u52a1\uff0c\n\u8be5\u670d\u52a1\u5728 Nacos \u4e2d\u7684\u670d\u52a1\u540d\u662f APISIX-NACOS \uff0c\u67e5\u8be2\u5730\u5740\u662f ',(0,s.kt)("a",{parentName:"p",href:"http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS"},"http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS")," \uff0c\u521b\u5efa\u8def\u7531\u65f6\u6307\u5b9a\u670d\u52a1\u53d1\u73b0\u7c7b\u578b\u4e3a nacos \u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/nacos/*",\n    "upstream": {\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos"\n    }\n}\'\n')),(0,s.kt)("p",null,"\u54cd\u5e94\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "node": {\n    "key": "\\/apisix\\/routes\\/1",\n    "value": {\n      "id": "1",\n      "create_time": 1615796097,\n      "status": 1,\n      "update_time": 1615799165,\n      "upstream": {\n        "hash_on": "vars",\n        "pass_host": "pass",\n        "scheme": "http",\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos"\n      },\n      "priority": 0,\n      "uri": "\\/nacos\\/*"\n    }\n  },\n  "action": "set"\n}\n')),(0,s.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"\u540d\u5b57"),(0,s.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,s.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009\u9879"),(0,s.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,s.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,s.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"namespace_id"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,s.kt)("td",{parentName:"tr",align:null},"public"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"group_name"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,s.kt)("td",{parentName:"tr",align:null},"DEFAULT_GROUP"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u6240\u5728\u7684\u7ec4")))),(0,s.kt)("h4",{id:"\u6307\u5b9a\u547d\u540d\u7a7a\u95f4"},"\u6307\u5b9a\u547d\u540d\u7a7a\u95f4"),(0,s.kt)("p",null,'\u4f8b\u5982\uff0c\u8f6c\u53d1 URI \u5339\u914d "/nacosWithNamespaceId/*" \u7684\u8bf7\u6c42\u5230\u4e00\u4e2a\u4e0a\u6e38\u670d\u52a1\uff0c\n\u8be5\u670d\u52a1\u5728 Nacos \u4e2d\u7684\u670d\u52a1\u540d\u662f APISIX-NACOS\uff0c\u547d\u540d\u7a7a\u95f4\u662f test_ns\uff0c\u67e5\u8be2\u5730\u5740\u662f ',(0,s.kt)("a",{parentName:"p",href:"http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS&namespaceId=test_ns"},"http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS&namespaceId=test_ns")," \uff0c\u521b\u5efa\u8def\u7531\u65f6\u6307\u5b9a\u670d\u52a1\u53d1\u73b0\u7c7b\u578b\u4e3a nacos \u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/nacosWithNamespaceId/*",\n    "upstream": {\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos",\n        "discovery_args": {\n          "namespace_id": "test_ns"\n        }\n    }\n}\'\n')),(0,s.kt)("p",null,"\u54cd\u5e94\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "node": {\n    "key": "\\/apisix\\/routes\\/2",\n    "value": {\n      "id": "2",\n      "create_time": 1615796097,\n      "status": 1,\n      "update_time": 1615799165,\n      "upstream": {\n        "hash_on": "vars",\n        "pass_host": "pass",\n        "scheme": "http",\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos",\n        "discovery_args": {\n          "namespace_id": "test_ns"\n        }\n      },\n      "priority": 0,\n      "uri": "\\/nacosWithNamespaceId\\/*"\n    }\n  },\n  "action": "set"\n}\n')),(0,s.kt)("h4",{id:"\u6307\u5b9a\u7ec4"},"\u6307\u5b9a\u7ec4"),(0,s.kt)("p",null,'\u4f8b\u5982\uff0c\u8f6c\u53d1 URI \u5339\u914d "/nacosWithGroupName/*" \u7684\u8bf7\u6c42\u5230\u4e00\u4e2a\u4e0a\u6e38\u670d\u52a1\uff0c\n\u8be5\u670d\u52a1\u5728 Nacos \u4e2d\u7684\u670d\u52a1\u540d\u662f APISIX-NACOS\uff0c\u7ec4\u540d\u662f test_group\uff0c\u67e5\u8be2\u5730\u5740\u662f ',(0,s.kt)("a",{parentName:"p",href:"http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS&groupName=test_group"},"http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS&groupName=test_group")," \uff0c\u521b\u5efa\u8def\u7531\u65f6\u6307\u5b9a\u670d\u52a1\u53d1\u73b0\u7c7b\u578b\u4e3a nacos \u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/3 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/nacosWithGroupName/*",\n    "upstream": {\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos",\n        "discovery_args": {\n          "group_name": "test_group"\n        }\n    }\n}\'\n')),(0,s.kt)("p",null,"\u54cd\u5e94\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "node": {\n    "key": "\\/apisix\\/routes\\/3",\n    "value": {\n      "id": "3",\n      "create_time": 1615796097,\n      "status": 1,\n      "update_time": 1615799165,\n      "upstream": {\n        "hash_on": "vars",\n        "pass_host": "pass",\n        "scheme": "http",\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos",\n        "discovery_args": {\n          "group_name": "test_group"\n        }\n      },\n      "priority": 0,\n      "uri": "\\/nacosWithGroupName\\/*"\n    }\n  },\n  "action": "set"\n}\n')),(0,s.kt)("h4",{id:"\u540c\u65f6\u6307\u5b9a\u547d\u540d\u7a7a\u95f4\u548c\u7ec4"},"\u540c\u65f6\u6307\u5b9a\u547d\u540d\u7a7a\u95f4\u548c\u7ec4"),(0,s.kt)("p",null,'\u4f8b\u5982\uff0c\u8f6c\u53d1 URI \u5339\u914d "/nacosWithNamespaceIdAndGroupName/*" \u7684\u8bf7\u6c42\u5230\u4e00\u4e2a\u4e0a\u6e38\u670d\u52a1\uff0c\n\u8be5\u670d\u52a1\u5728 Nacos \u4e2d\u7684\u670d\u52a1\u540d\u662f APISIX-NACOS\uff0c\u547d\u540d\u7a7a\u95f4\u662f test_ns\uff0c\u7ec4\u540d\u662f test_group\uff0c\u67e5\u8be2\u5730\u5740\u662f ',(0,s.kt)("a",{parentName:"p",href:"http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS&namespaceId=test_ns&groupName=test_group"},"http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS&namespaceId=test_ns&groupName=test_group")," \uff0c\u521b\u5efa\u8def\u7531\u65f6\u6307\u5b9a\u670d\u52a1\u53d1\u73b0\u7c7b\u578b\u4e3a nacos \u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/4 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/nacosWithNamespaceIdAndGroupName/*",\n    "upstream": {\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos",\n        "discovery_args": {\n          "namespace_id": "test_ns",\n          "group_name": "test_group"\n        }\n    }\n}\'\n')),(0,s.kt)("p",null,"\u54cd\u5e94\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "node": {\n    "key": "\\/apisix\\/routes\\/4",\n    "value": {\n      "id": "4",\n      "create_time": 1615796097,\n      "status": 1,\n      "update_time": 1615799165,\n      "upstream": {\n        "hash_on": "vars",\n        "pass_host": "pass",\n        "scheme": "http",\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos",\n        "discovery_args": {\n          "namespace_id": "test_ns",\n          "group_name": "test_group"\n        }\n      },\n      "priority": 0,\n      "uri": "\\/nacosWithNamespaceIdAndGroupName\\/*"\n    }\n  },\n  "action": "set"\n}\n')))}u.isMDXComponent=!0}}]);