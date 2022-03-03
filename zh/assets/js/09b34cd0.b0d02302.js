"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79157],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,k=h["".concat(o,".").concat(m)]||h[m]||u[m]||p;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<p;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},94013:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return o},assets:function(){return c},toc:function(){return s},default:function(){return h}});var r=a(87462),n=a(63366),p=(a(67294),a(3905)),i={title:"\u793e\u533a\u53cc\u5468\u62a5\uff5c2.1-2.14 \u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",keywords:["Apache APISIX","\u793e\u533a\u5468\u62a5","APISIX","API Gateway","\u8d21\u732e\u8005"],description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u6bcf\u5468\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",tags:["Events"]},l=void 0,o={permalink:"/zh/blog/2022/02/17/weekly-report-0214",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/02/17/weekly-report-0214.md",title:"\u793e\u533a\u53cc\u5468\u62a5\uff5c2.1-2.14 \u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u6bcf\u5468\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",date:"2022-02-17T00:00:00.000Z",formattedDate:"2022\u5e742\u670817\u65e5",tags:[{label:"Events",permalink:"/zh/blog/tags/events"}],readingTime:1.13,truncated:!0,authors:[],prevItem:{title:"Nacos \u5728 API \u7f51\u5173\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u5b9e\u8df5",permalink:"/zh/blog/2022/02/21/nacos-api-gateway"},nextItem:{title:"\u540e\u7aef\u65b0\u624b\u5982\u4f55\u4ece 0 \u5230 1 \u5728 API \u7f51\u5173\u4e0a\u5f00\u53d1 file-logger \u63d2\u4ef6",permalink:"/zh/blog/2022/02/16/file-logger-api-gateway"}},c={authorsImageUrls:[]},s=[{value:"\u5bfc\u8bed",id:"\u5bfc\u8bed",children:[]},{value:"\u8d21\u732e\u8005\u7edf\u8ba1",id:"\u8d21\u732e\u8005\u7edf\u8ba1",children:[]},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #6197",id:"issue-6197",children:[]},{value:"Issue #6265",id:"issue-6265",children:[]}]},{value:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",children:[]},{value:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",children:[]}],u={toc:s};function h(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u4ece 2.1 \u5230 2.14, \u6709 25 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 55 \u4e2a commits\u3002\u611f\u8c22\u8fd9\u4e9b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u9879\u76ee\u53d8\u5f97\u66f4\u597d\uff01")),(0,p.kt)("h2",{id:"\u5bfc\u8bed"},"\u5bfc\u8bed"),(0,p.kt)("p",null,"Apache APISIX \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0c\u8fc5\u901f\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90 API \u7f51\u5173\u9879\u76ee\u3002\u8fd9\u4e9b\u6210\u5c31\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u7684\u5171\u540c\u594b\u6597\u3002"),(0,p.kt)("p",null,"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002"),(0,p.kt)("p",null,"\u6211\u4eec\u8fd8\u6574\u7406\u4e86\u4e00\u4e9b\u9002\u5408\u65b0\u6765\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u4eec\u53c2\u52a0\u7684 issue\uff01\u611f\u5174\u8da3\u7684\u540c\u5b66\u4eec\uff0c\u8d70\u8fc7\u8def\u8fc7\u4e0d\u8981\u9519\u8fc7\uff01"),(0,p.kt)("h2",{id:"\u8d21\u732e\u8005\u7edf\u8ba1"},"\u8d21\u732e\u8005\u7edf\u8ba1"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1644998110046-9b57e72b-95e0-4288-978a-2d8db16f11c8.png",alt:"\u672c\u5468\u8d21\u732e\u8005\u540d\u5355"})),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1644998110070-5b7b0085-0673-455d-adaa-727dc9e8a1ed.png",alt:"\u672c\u5468\u65b0\u664b\u8d21\u732e\u8005"})),(0,p.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,p.kt)("h3",{id:"issue-6197"},"Issue #6197"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),": ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/6197"},"https://github.com/apache/apisix/issues/6197")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1a\u76ee\u524d\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"limit-count")," \u63d2\u4ef6\u53ea\u8bbe\u7f6e\u4e86\u4e00\u79cd\u6d41\u91cf\u9650\u5236\u6a21\u5f0f\uff1a\u79d2\u6216\u5206\u949f\u3002\u4f46\u662f\uff0c\u8be5\u63d2\u4ef6\u4e0d\u652f\u6301\u540c\u65f6\u8bbe\u7f6e\u79d2\u548c\u5206\u949f\uff0c\u56e0\u4e3a\u7528\u6237\u540e\u9762\u8bbe\u7f6e\u7684\u5185\u5bb9\u4f1a\u8986\u76d6\u524d\u9762\u8bbe\u7f6e\u7684\u5185\u5bb9\uff0c\u662f\u5426\u6709\u529e\u6cd5\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff1f"),(0,p.kt)("h3",{id:"issue-6265"},"Issue #6265"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),": ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/6265"},"https://github.com/apache/apisix/issues/6265")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/ec0fc2ceaf04a20b0bd0ebdaad67296a1d3f621c/t/core/utils.t"},"t/core/utils.t")," \u4e2d\u7684\u6d4b\u8bd5\u6848\u4f8b\u76ee\u524d\u6709\u4e00\u4e9b\u4ee3\u7801\u9519\u8bef\uff0c\u6bd4\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Lua"},'         content_by_lua_block {\n             local core = require("apisix.core")\n             local resolvers = {"8.8.8.8"}\n             core.utils.set_resolver(resolvers)\n             local ip_info, err = core.utils.dns_parse("github.com")\n             if not ip_info then\n                 core.log.error("failed to parse domain: ", host, ", error: ",err)\n             end\n             ngx.say(require("toolkit.json").encode(ip_info))\n         }\n')),(0,p.kt)("p",null,"\u5728\u8fd9\u91cc\u6267\u884c\u4ee3\u7801\u65f6\uff0c\u53d8\u91cf ",(0,p.kt)("inlineCode",{parentName:"p"},"host")," \u662f\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"nil"),"\uff08\u53ef\u80fd\u6c38\u8fdc\u4e0d\u4f1a\u89e6\u53d1\uff09\u3002"),(0,p.kt)("h2",{id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"},"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6030"},"\u652f\u6301\u8bb0\u5f55 apisix_latency \u548c upstream_latency"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/jagerzhang"},"jagerzhang"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5727"},"\u65b0\u589e CSRF \u63d2\u4ef6"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/Baoyuantop"},"Baoyuantop"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5831"},"\u65b0\u589e file-logger \u63d2\u4ef6"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/guoqqqi"},"guoqqqi"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6145"},"\u65b0\u589e public-api \u63d2\u4ef6"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/bzp2010"},"bzp2010"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6119"},"\u65b0\u589e opentelemetry \u63d2\u4ef6"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/yangxikun"},"yangxikun"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6113"},"\u65b0\u589e loggly \u63d2\u4ef6"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/bisakhmondal"},"bisakhmondal"),"\uff09"))),(0,p.kt)("p",null,"Apache APISIX \u7684\u9879\u76ee\u5b98\u7f51\u548c Github \u4e0a\u7684 issue \u4e0a\u5df2\u7ecf\u79ef\u7d2f\u4e86\u6bd4\u8f83\u4e30\u5bcc\u7684\u6587\u6863\u6559\u7a0b\u548c\u4f7f\u7528\u7ecf\u9a8c\uff0c\u5982\u679c\u60a8\u9047\u5230\u95ee\u9898\u53ef\u4ee5\u7ffb\u9605\u6587\u6863\uff0c\u7528\u5173\u952e\u8bcd\u5728 issue \u4e2d\u641c\u7d22\uff0c\u4e5f\u53ef\u4ee5\u53c2\u4e0e issue \u4e0a\u7684\u8ba8\u8bba\uff0c\u63d0\u51fa\u81ea\u5df1\u7684\u60f3\u6cd5\u548c\u5b9e\u8df5\u7ecf\u9a8c\u3002"),(0,p.kt)("h2",{id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350"},"\u8fd1\u671f\u535a\u6587\u63a8\u8350"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/02/10/apisix-splunk-integration"},"\u751f\u6001\u6269\u5927\u8fdb\u884c\u4e2d\uff01Apache APISIX \u96c6\u6210 Splunk HTTP Event Collector"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u672c\u6587\u5c06\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u914d\u7f6e\u548c\u4f7f\u7528 Splunk HEC \u670d\u52a1\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/01/26/apisix-integrate-forward-auth-plugin"},"\u65b0\u63d2\u4ef6 forward-auth \u5df2\u4e0a\u7ebf\uff0c\u8ba4\u8bc1\u529f\u80fd\u53c8\u591a\u4e00\u9879\u9009\u62e9"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u672c\u6587\u5c06\u4ecb\u7ecd Apache APISIX \u4e2d\u65b0\u589e\u63d2\u4ef6 ",(0,p.kt)("inlineCode",{parentName:"p"},"forward-auth")," \u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u4e3a\u5927\u5bb6\u8be6\u7ec6\u8bf4\u660e\u5982\u4f55\u4f7f\u7528\u8fd9\u6b3e\u8bbe\u8ba1\u7b80\u6d01\u7684\u8ba4\u8bc1\u6a21\u578b\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/01/25/apisix-grpc-web-integration"},"Apache APISIX \u65b0\u6280\u80fd\uff0c\u4ee3\u7406 gRPC-Web \u8bf7\u6c42"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"Apache APISIX \u5df2\u7ecf\u652f\u6301\u4e86 gRPC \u534f\u8bae\u4ee3\u7406\uff0c\u4ee5\u53ca\u901a\u8fc7 gRPC Transcode \u63d2\u4ef6\u652f\u6301\u4e86 HTTP(s) \u5230 gRPC Server \u7684\u4ee3\u7406\u3002\u901a\u8fc7\u793e\u533a\u7684\u79ef\u6781\u8ba8\u8bba\u548c\u8d21\u732e\uff0cApache APISIX \u53c8\u62d3\u5bbd\u4e86 gRPC \u751f\u6001\u7684\u652f\u6301\u8303\u56f4\uff1a\u652f\u6301 gRPC Web \u534f\u8bae\u8bf7\u6c42\u4ee3\u7406\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/01/21/apisix-hashicorp-vault-integration"},"Apache APISIX \u96c6\u6210 HashiCorp Vault\uff0c\u751f\u6001\u7cfb\u7edf\u518d\u6dfb\u4e00\u5458"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 Vault \u63d2\u4ef6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\u3002\u5728\u4e3a\u670d\u52a1\u63d0\u4f9b\u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u7684\u5353\u8d8a\u6027\u80fd\u7684\u540c\u65f6\uff0c\u4e3a\u670d\u52a1\u7684\u5b89\u5168\u4fdd\u9a7e\u62a4\u822a\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/01/21/apisix-xrpc-details-and-miltilingual"},"\u591a\u534f\u8bae\u63a5\u5165\u6846\u67b6 xRPC \u53d1\u5e03\u5728\u5373\uff0c\u4e3a\u4f60\u89e3\u8bfb\u66f4\u591a APISIX \u751f\u6001\u7ec6\u8282"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 xRPC \u6846\u67b6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\uff0c\u540c\u65f6\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u591a\u8bed\u8a00\u5f00\u53d1\u652f\u6301\u4e2d\u7684\u7ec6\u8282\u5c55\u793a\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/01/20/upyun-public-gateway-usecase"},"CDN \u4e1a\u52a1\u573a\u666f\u4e0b\uff0c\u53c8\u62cd\u4e91\u7684\u516c\u7f51\u7f51\u5173\u573a\u666f\u5b9e\u8df5"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u5728\u4e4b\u524d\u7684\u5206\u4eab\u4e2d\uff0c\u6211\u4eec\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86\u53c8\u62cd\u4e91\u5728 Ingress \u5c42\u9762\u7684\u5e94\u7528\u3002\u800c\u8fd9\u6b21\u6211\u4eec\u4f1a\u5728\u516c\u7f51\u7f51\u5173\u573a\u666f\u4e0b\uff0c\u7ed9\u5927\u5bb6\u4ecb\u7ecd\u76ee\u524d\u53c8\u62cd\u4e91\u7684\u5e94\u7528\u5b9e\u4f8b\uff0c\u5e0c\u671b\u80fd\u5728\u4e91\u5b58\u50a8\u884c\u4e1a\u9886\u57df\uff0c\u7ed9\u5927\u5bb6\u5e26\u6765\u4e00\u4e9b\u5b9e\u7528\u7684 Apache APISIX \u573a\u666f\u5206\u4eab\u3002"))))}h.isMDXComponent=!0}}]);