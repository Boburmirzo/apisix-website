"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79380],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=c(t),d=r,m=h["".concat(i,".").concat(d)]||h[d]||u[d]||o;return t?a.createElement(m,l(l({ref:n},s),{},{components:t})):a.createElement(m,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=h;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},43803:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return i},assets:function(){return c},toc:function(){return s},default:function(){return h}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l={title:"\u518d\u63a5\u518d\u5389\uff01Apache APISIX \u96c6\u6210 Open Policy Agent",authors:[{name:"\u767d\u6cfd\u5e73",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4"}],keywords:["Apache APISIX","Open Policy Agent","OPA","API \u7f51\u5173"],description:"\u672c\u6587\u4ee5 HTTP API \u4e3a\u4f8b\u4e3a\u5927\u5bb6\u4ecb\u7ecd `opa` \u63d2\u4ef6\uff0c\u5e76\u8be6\u7ec6\u8bf4\u660e\u5982\u4f55\u5c06 Apache APISIX \u4e0e OPA \u8fdb\u884c\u96c6\u6210\uff0c\u5b9e\u73b0\u540e\u7aef\u670d\u52a1\u7684\u8ba4\u8bc1\u6388\u6743\u89e3\u8026\u3002",tags:["Technology","Authentication"]},p=void 0,i={permalink:"/zh/blog/2021/12/24/open-policy-agent",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/12/24/open-policy-agent.md",title:"\u518d\u63a5\u518d\u5389\uff01Apache APISIX \u96c6\u6210 Open Policy Agent",description:"\u672c\u6587\u4ee5 HTTP API \u4e3a\u4f8b\u4e3a\u5927\u5bb6\u4ecb\u7ecd `opa` \u63d2\u4ef6\uff0c\u5e76\u8be6\u7ec6\u8bf4\u660e\u5982\u4f55\u5c06 Apache APISIX \u4e0e OPA \u8fdb\u884c\u96c6\u6210\uff0c\u5b9e\u73b0\u540e\u7aef\u670d\u52a1\u7684\u8ba4\u8bc1\u6388\u6743\u89e3\u8026\u3002",date:"2021-12-24T00:00:00.000Z",formattedDate:"2021\u5e7412\u670824\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Authentication",permalink:"/zh/blog/tags/authentication"}],readingTime:2.555,truncated:!0,authors:[{name:"\u767d\u6cfd\u5e73",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4",imageURL:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4",imageURL:"https://avatars.githubusercontent.com/u/36651058?v=4"}],prevItem:{title:"\u751f\u6001\u4e30\u5bcc\u6301\u7eed\u8fdb\u884c\u4e2d\uff0cApache OpenWhisk \u96c6\u6210\u95ea\u4eae\u767b\u573a",permalink:"/zh/blog/2021/12/24/apisix-integrate-openwhisk-plugin"},nextItem:{title:"\u6377\u62a5\u9891\u4f20\uff01Apache APISIX \u73b0\u5df2\u652f\u6301\u5bf9\u63a5 Google Cloud Logging",permalink:"/zh/blog/2021/12/22/google-logging"}},c={authorsImageUrls:[void 0,void 0]},s=[{value:"\u63d2\u4ef6\u4ecb\u7ecd",id:"\u63d2\u4ef6\u4ecb\u7ecd",children:[]},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[{value:"\u642d\u5efa\u6d4b\u8bd5\u73af\u5883",id:"\u642d\u5efa\u6d4b\u8bd5\u73af\u5883",children:[]},{value:"\u521b\u5efa\u8def\u7531\u5e76\u542f\u7528\u63d2\u4ef6",id:"\u521b\u5efa\u8def\u7531\u5e76\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u8bf7\u6c42",id:"\u6d4b\u8bd5\u8bf7\u6c42",children:[]},{value:"\u5173\u95ed\u63d2\u4ef6",id:"\u5173\u95ed\u63d2\u4ef6",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],u={toc:s};function h(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ee5 HTTP API \u4e3a\u4f8b\u4e3a\u5927\u5bb6\u4ecb\u7ecd ",(0,o.kt)("inlineCode",{parentName:"p"},"opa")," \u63d2\u4ef6\uff0c\u5e76\u8be6\u7ec6\u8bf4\u660e\u5982\u4f55\u5c06 Apache APISIX \u4e0e OPA \u8fdb\u884c\u96c6\u6210\uff0c\u5b9e\u73b0\u540e\u7aef\u670d\u52a1\u7684\u8ba4\u8bc1\u6388\u6743\u89e3\u8026\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1640333490845-38542a3e-5d3a-4960-b11f-69ce3a61f7fc.png",alt:"APISIX-OPA cover"})),(0,o.kt)("p",null,"Open Policy Agent\uff08OPA\uff09\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u8f7b\u91cf\u7ea7\u901a\u7528\u7b56\u7565\u5f15\u64ce\uff0c\u53ef\u4ee5\u4ee3\u66ff\u8f6f\u4ef6\u4e2d\u5185\u7f6e\u7684\u7b56\u7565\u529f\u80fd\u6a21\u5757\uff0c\u5e2e\u52a9\u7528\u6237\u5b9e\u73b0\u670d\u52a1\u4e0e\u7b56\u7565\u5f15\u64ce\u7684\u89e3\u8026\u3002\u5f97\u76ca\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/ecosystem/"},"OPA \u5b8c\u5584\u7684\u751f\u6001\u7cfb\u7edf"),"\uff0c\u7528\u6237\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u96c6\u6210 OPA \u548c\u5176\u4ed6\u670d\u52a1\uff0c\u4f8b\u5982\u7a0b\u5e8f\u5e93\u3001HTTP API \u7b49\u3002"),(0,o.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0cOPA \u9996\u5148\u901a\u8fc7\u7b56\u7565\u8bed\u8a00 Rego \u63cf\u8ff0\u7b56\u7565\uff1b\u7136\u540e\u901a\u8fc7 JSON \u5b58\u50a8\u7b56\u7565\u6570\u636e\uff0c\u4e4b\u540e\u7528\u6237\u5c31\u53ef\u4ee5\u53d1\u9001\u67e5\u8be2\u8bf7\u6c42\u3002\u6536\u5230\u67e5\u8be2\u8bf7\u6c42\u540e\uff0cOPA \u5c06\u7ed3\u5408\u7b56\u7565\u3001\u6570\u636e\u548c\u7528\u6237\u8f93\u5165\u7684\u67e5\u8be2\u8bf7\u6c42\u5185\u5bb9\u751f\u6210\u7b56\u7565\u51b3\u7b56\uff0c\u5e76\u5c06\u51b3\u7b56\u53d1\u9001\u81f3\u670d\u52a1\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1640332208554-40f574e3-0582-48f3-8e07-eb49fbd37ac7.png",alt:"OPA Workflow"})),(0,o.kt)("h2",{id:"\u63d2\u4ef6\u4ecb\u7ecd"},"\u63d2\u4ef6\u4ecb\u7ecd"),(0,o.kt)("p",null,"Apache APISIX \u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"opa")," \u63d2\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u63d2\u4ef6\uff0c\u4fbf\u6377\u5730\u5c06 OPA \u63d0\u4f9b\u7684\u7b56\u7565\u80fd\u529b\u5f15\u5165\u5230 Apache APISIX\uff0c\u5b9e\u73b0\u7075\u6d3b\u7684\u8eab\u4efd\u8ba4\u8bc1\u4e0e\u51c6\u5165\u63a7\u5236\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"opa")," \u63d2\u4ef6\u914d\u7f6e\u5728\u8def\u7531\u4e0a\u540e\uff0cApache APISIX \u4f1a\u5728\u5904\u7406\u54cd\u5e94\u8bf7\u6c42\u65f6\uff0c\u5c06\u8bf7\u6c42\u4fe1\u606f\u3001\u8fde\u63a5\u4fe1\u606f\u7b49\u7ec4\u88c5\u6210 JSON \u6570\u636e\uff0c\u5e76\u5c06\u5176\u53d1\u9001\u5230\u7b56\u7565\u51b3\u7b56 API \u5730\u5740\u3002\u53ea\u8981\u5728 OPA \u4e2d\u90e8\u7f72\u7684\u7b56\u7565\u7b26\u5408 Apache APISIX \u8bbe\u5b9a\u7684\u6570\u636e\u89c4\u8303\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5982\u901a\u8fc7\u8bf7\u6c42\u3001\u62d2\u7edd\u8bf7\u6c42\u3001\u81ea\u5b9a\u4e49\u72b6\u6001\u7801\u3001\u81ea\u5b9a\u4e49\u54cd\u5e94\u5934\u3001\u81ea\u5b9a\u4e49\u54cd\u5e94\u5934\u7b49\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u672c\u6587\u4ee5 HTTP API \u4e3a\u4f8b\u4e3a\u5927\u5bb6\u4ecb\u7ecd ",(0,o.kt)("inlineCode",{parentName:"p"},"opa")," \u63d2\u4ef6\uff0c\u5e76\u8be6\u7ec6\u8bf4\u660e\u5982\u4f55\u5c06 Apache APISIX \u4e0e OPA \u8fdb\u884c\u96c6\u6210\uff0c\u5b9e\u73b0\u540e\u7aef\u670d\u52a1\u7684\u8ba4\u8bc1\u6388\u6743\u89e3\u8026\u3002"),(0,o.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,o.kt)("h3",{id:"\u642d\u5efa\u6d4b\u8bd5\u73af\u5883"},"\u642d\u5efa\u6d4b\u8bd5\u73af\u5883"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528 Docker \u6784\u5efa OPA \u670d\u52a1\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4f7f\u7528 Docker \u8fd0\u884c OPA\ndocker run -d --name opa -p 8181:8181 openpolicyagent/opa:0.35.0 run -s\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," \u7b56\u7565\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# \u521b\u5efa\u7b56\u7565\ncurl -XPUT \'localhost:8181/v1/policies/example\' \\\n--header \'Content-Type: text/plain\' \\\n--data-raw \'package example\n\nimport input.request\nimport data.users\n\ndefault allow = false\n\nallow {\n    # \u5177\u6709\u540d\u4e3a test-header \u503c\u4e3a only-for-test\u8bf7\u6c42\u5934\n    request.headers["test-header"] == "only-for-test"\n    # \u8bf7\u6c42\u65b9\u6cd5\u4e3a GET\n    request.method == "GET"\n    # \u8bf7\u6c42\u8def\u5f84\u4ee5 /get \u5f00\u5934\n    startswith(request.path, "/get")\n    # GET \u53c2\u6570 test \u5b58\u5728\u4e14\u4e0d\u7b49\u4e8e abcd\n    request.query["test"] != "abcd"\n    # GET \u53c2\u6570 user \u5b58\u5728\n    request.query["user"]\n}\n\nreason = users[request.query["user"]].reason {\n    not allow\n    request.query["user"]\n}\n\nheaders = users[request.query["user"]].headers {\n    not allow\n    request.query["user"]\n}\n\nstatus_code = users[request.query["user"]].status_code {\n    not allow\n    request.query["user"]\n}\'\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," \u6570\u636e\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# \u521b\u5efa\u6d4b\u8bd5\u7528\u6237\u6570\u636e\ncurl -XPUT \'localhost:8181/v1/data/users\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "alice": {\n        "headers": {\n            "Location": "http://example.com/auth"\n        },\n        "status_code": 302\n    },\n    "bob": {\n        "headers": {\n            "test": "abcd",\n            "abce": "test"\n        }\n    },\n    "carla": {\n        "reason": "Give you a string reason"\n    },\n    "dylon": {\n        "headers": {\n            "Content-Type": "application/json"\n        },\n        "reason": {\n            "code": 40001,\n            "desc": "Give you a object reason"\n        }\n    }\n}\'\n')))),(0,o.kt)("h3",{id:"\u521b\u5efa\u8def\u7531\u5e76\u542f\u7528\u63d2\u4ef6"},"\u521b\u5efa\u8def\u7531\u5e76\u542f\u7528\u63d2\u4ef6"),(0,o.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u521b\u5efa\u8def\u7531\uff0c\u5e76\u542f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"opa")," \u63d2\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -XPUT \'http://127.0.0.1:9080/apisix/admin/routes/r1\' \\\n--header \'X-API-KEY: <api-key>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "uri": "/*",\n    "methods": [\n        "GET",\n        "POST",\n        "PUT",\n        "DELETE"\n    ],\n    "plugins": {\n        "opa": {\n            "host": "http://127.0.0.1:8181",\n            "policy": "example"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "httpbin.org:80": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,o.kt)("h3",{id:"\u6d4b\u8bd5\u8bf7\u6c42"},"\u6d4b\u8bd5\u8bf7\u6c42"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5411 ",(0,o.kt)("inlineCode",{parentName:"p"},"opa")," \u63d2\u4ef6\u53d1\u9001\u8bf7\u6c42\uff0c\u6d4b\u8bd5\u63d2\u4ef6\u8fd0\u884c\u72b6\u6001\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# \u5141\u8bb8\u8bf7\u6c42\ncurl -XGET \'127.0.0.1:9080/get?test=none&user=dylon\' \\\n    --header \'test-header: only-for-test\'\n{\n    "args": {\n        "test": "abcd1",\n        "user": "dylon"\n    },\n    "headers": {\n        "Test-Header": "only-for-test",\n        "with": "more"\n    },\n    "origin": "127.0.0.1",\n    "url": "http://127.0.0.1/get?test=abcd1&user=dylon"\n}\n\n# \u62d2\u7edd\u8bf7\u6c42\u5e76\u91cd\u5199\u72b6\u6001\u7801\u548c\u54cd\u5e94\u5934\ncurl -XGET \'127.0.0.1:9080/get?test=abcd&user=alice\' \\\n    --header \'test-header: only-for-test\'\n\nHTTP/1.1 302 Moved Temporarily\nDate: Mon, 20 Dec 2021 09:37:35 GMT\nContent-Type: text/html\nContent-Length: 142\nConnection: keep-alive\nLocation: http://example.com/auth\nServer: APISIX/2.11.0\n\n# \u62d2\u7edd\u8bf7\u6c42\u5e76\u8fd4\u56de\u81ea\u5b9a\u4e49\u54cd\u5e94\u5934\ncurl -XGET \'127.0.0.1:9080/get?test=abcd&user=bob\' \\\n    --header \'test-header: only-for-test\'\n\nHTTP/1.1 403 Forbidden\nDate: Mon, 20 Dec 2021 09:38:27 GMT\nContent-Type: text/html; charset=utf-8\nContent-Length: 150\nConnection: keep-alive\nabce: test\ntest: abcd\nServer: APISIX/2.11.0\n\n# \u62d2\u7edd\u8bf7\u6c42\u5e76\u8fd4\u56de\u81ea\u5b9a\u4e49\u54cd\u5e94\uff08\u5b57\u7b26\u4e32\uff09\ncurl -XGET \'127.0.0.1:9080/get?test=abcd&user=carla\' \\\n    --header \'test-header: only-for-test\'\n\nHTTP/1.1 403 Forbidden\nDate: Mon, 20 Dec 2021 09:38:58 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/2.11.0\n\nGive you a string reason\n\n# \u62d2\u7edd\u8bf7\u6c42\u5e76\u8fd4\u56de\u81ea\u5b9a\u4e49\u54cd\u5e94\uff08JSON\uff09\ncurl -XGET \'127.0.0.1:9080/get?test=abcd&user=dylon\' \\\n    --header \'test-header: only-for-test\'\n\nHTTP/1.1 403 Forbidden\nDate: Mon, 20 Dec 2021 09:42:12 GMT\nContent-Type: application/json\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/2.11.0\n\n{"code":40001,"desc":"Give you a object reason"}\n')),(0,o.kt)("h3",{id:"\u5173\u95ed\u63d2\u4ef6"},"\u5173\u95ed\u63d2\u4ef6"),(0,o.kt)("p",null,"\u5f97\u76ca\u4e8e Apache APISIX \u7684\u52a8\u6001\u5316\u7279\u6027\uff0c\u53ea\u9700\u8981\u79fb\u9664\u8def\u7531\u914d\u7f6e\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"opa")," \u63d2\u4ef6\u76f8\u5173\u914d\u7f6e\u5e76\u4fdd\u5b58\uff0c\u5373\u53ef\u5173\u95ed\u8def\u7531\u4e0a\u7684 OPA \u63d2\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u672c\u6587\u4e3a\u5927\u5bb6\u63cf\u8ff0\u4e86 Apache APISIX \u548c Open Policy Agent \u5bf9\u63a5\u7684\u8be6\u7ec6\u64cd\u4f5c\u6b65\u9aa4\uff0c\u5e0c\u671b\u901a\u8fc7\u672c\u6587\u53ef\u4ee5\u8ba9\u5927\u5bb6\u5bf9\u4e8e\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Open Policy Agent \u6709\u4e86\u66f4\u6e05\u6670\u7684\u7406\u89e3\uff0c\u65b9\u4fbf\u540e\u7eed\u8fdb\u884c\u4e0a\u624b\u5b9e\u64cd\u3002"),(0,o.kt)("p",null,"Apache APISIX \u4e0d\u4ec5\u81f4\u529b\u4e8e\u4fdd\u6301\u81ea\u8eab\u7684\u9ad8\u6027\u80fd\uff0c\u4e5f\u4e00\u76f4\u975e\u5e38\u91cd\u89c6\u5f00\u6e90\u751f\u6001\u7684\u5efa\u8bbe\u3002\u76ee\u524d Apache APISIX \u5df2\u7ecf\u62e5\u6709\u4e86 10+ \u4e2a\u8ba4\u8bc1\u6388\u6743\u76f8\u5173\u7684\u63d2\u4ef6\uff0c\u652f\u6301\u4e0e\u4e1a\u754c\u4e3b\u6d41\u7684\u8ba4\u8bc1\u6388\u6743\u670d\u52a1\u5bf9\u63a5\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6709\u5bf9\u63a5\u5176\u4ed6\u8ba4\u8bc1\u6388\u6743\u7684\u9700\u6c42\uff0c\u4e0d\u59a8\u8bbf\u95ee Apache APISIX \u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues"},"GitHub"),"\uff0c\u901a\u8fc7 issue \u7559\u4e0b\u4f60\u7684\u5efa\u8bae\uff1b\u6216\u8ba2\u9605 Apache APISIX \u7684",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/general/subscribe-guide"},"\u90ae\u4ef6\u5217\u8868"),"\uff0c\u901a\u8fc7\u90ae\u4ef6\u8868\u8fbe\u4f60\u7684\u60f3\u6cd5\u3002"))}h.isMDXComponent=!0}}]);