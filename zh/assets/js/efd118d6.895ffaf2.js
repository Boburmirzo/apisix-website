"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98165],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),i=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=i(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=i(n),k=a,h=m["".concat(c,".").concat(k)]||m[k]||u[k]||o;return n?r.createElement(h,l(l({ref:e},s),{},{components:n})):r.createElement(h,l({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18804:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return i},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l={title:"Apache APISIX \u548c Envoy \u6027\u80fd\u5927\u6bd4\u62fc",author:"\u738b\u9662\u751f",authorURL:"https://github.com/membphis",authorImageURL:"https://avatars.githubusercontent.com/u/6814606?v=4",keywords:["APISIX","Envoy","Apache APISIX","Service Mesh","API Gateway","\u6027\u80fd"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728\u4e00\u5b9a\u6761\u4ef6\u4e0b\uff0cApache APISIX \u548c Envoy \u7684\u6027\u80fd\u5bf9\u6bd4\uff0c\u603b\u4f53\u6765\u8bf4 APISIX \u5728\u54cd\u5e94\u5ef6\u8fdf\u548c QPS \u5c42\u9762\u90fd\u7565\u4f18\u4e8e Envoy\uff0c \u7531\u4e8e NGINX \u7684\u591a worker \u7684\u534f\u4f5c\u65b9\u5f0f\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u66f4\u6709\u4f18\u52bf\uff0cAPISIX \u5728\u5f00\u542f\u591a\u4e2a worker \u8fdb\u7a0b\u540e\u6027\u80fd\u63d0\u5347\u8f83 Enovy \u66f4\u4e3a\u660e\u663e\uff1bAPISIX \u5728\u6027\u80fd\u548c\u5ef6\u8fdf\u4e0a\u7684\u8868\u73b0\u4f7f\u5b83\u5728\u5904\u7406\u5357\u5317\u5411\u6d41\u91cf\u4e0a\u5177\u6709\u6d77\u91cf\u7684\u541e\u5410\u80fd\u529b\uff0c\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u573a\u666f\u6765\u9009\u62e9\u5408\u7406\u7684\u7ec4\u4ef6\u914d\u5408\u63d2\u4ef6\u6784\u5efa\u81ea\u5df1\u7684\u670d\u52a1\u3002",tags:["Technology"]},p=void 0,c={permalink:"/zh/blog/2021/06/10/Apache-APISIX-and-Envoy-performance-comparison",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/06/10/Apache-APISIX-and-Envoy-performance-comparison.md",title:"Apache APISIX \u548c Envoy \u6027\u80fd\u5927\u6bd4\u62fc",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728\u4e00\u5b9a\u6761\u4ef6\u4e0b\uff0cApache APISIX \u548c Envoy \u7684\u6027\u80fd\u5bf9\u6bd4\uff0c\u603b\u4f53\u6765\u8bf4 APISIX \u5728\u54cd\u5e94\u5ef6\u8fdf\u548c QPS \u5c42\u9762\u90fd\u7565\u4f18\u4e8e Envoy\uff0c \u7531\u4e8e NGINX \u7684\u591a worker \u7684\u534f\u4f5c\u65b9\u5f0f\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u66f4\u6709\u4f18\u52bf\uff0cAPISIX \u5728\u5f00\u542f\u591a\u4e2a worker \u8fdb\u7a0b\u540e\u6027\u80fd\u63d0\u5347\u8f83 Enovy \u66f4\u4e3a\u660e\u663e\uff1bAPISIX \u5728\u6027\u80fd\u548c\u5ef6\u8fdf\u4e0a\u7684\u8868\u73b0\u4f7f\u5b83\u5728\u5904\u7406\u5357\u5317\u5411\u6d41\u91cf\u4e0a\u5177\u6709\u6d77\u91cf\u7684\u541e\u5410\u80fd\u529b\uff0c\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u573a\u666f\u6765\u9009\u62e9\u5408\u7406\u7684\u7ec4\u4ef6\u914d\u5408\u63d2\u4ef6\u6784\u5efa\u81ea\u5df1\u7684\u670d\u52a1\u3002",date:"2021-06-10T00:00:00.000Z",formattedDate:"2021\u5e746\u670810\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"}],readingTime:2.125,truncated:!0,authors:[{name:"\u738b\u9662\u751f",url:"https://github.com/membphis",imageURL:"https://avatars.githubusercontent.com/u/6814606?v=4"}],prevItem:{title:"Chaos Mesh \u52a9\u529b Apache APISIX \u63d0\u5347\u7a33\u5b9a\u6027",permalink:"/zh/blog/2021/06/16/Chaos-Mesh-helps-Apache-APISIX-improve-stability"},nextItem:{title:"Apache APISIX not affected by NGINX CVE-2021-23017",permalink:"/zh/blog/blog/2021/06/07/apache-apisix-not-affected-by-nginx-cve-2021-23017"}},i={authorsImageUrls:[void 0]},s=[],u={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728\u4e00\u5b9a\u6761\u4ef6\u4e0b\uff0cApache APISIX \u548c Envoy \u7684\u6027\u80fd\u5bf9\u6bd4\uff0c\u603b\u4f53\u6765\u8bf4 Apache APISIX \u5728\u54cd\u5e94\u5ef6\u8fdf\u548c QPS \u5c42\u9762\u90fd\u7565\u4f18\u4e8e Envoy\uff0cApache APISIX \u5728\u5f00\u542f\u591a\u4e2a worker \u8fdb\u7a0b\u540e\u6027\u80fd\u63d0\u5347\u8f83 Enovy \u66f4\u4e3a\u660e\u663e\uff1b\u800c\u4e14 Apache APISIX \u5728\u6027\u80fd\u548c\u5ef6\u8fdf\u4e0a\u7684\u8868\u73b0\u4f7f\u5b83\u5728\u5904\u7406\u5357\u5317\u5411\u6d41\u91cf\u4e0a\u5177\u6709\u6d77\u91cf\u7684\u541e\u5410\u80fd\u529b\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://www.apiseven.com/zh/blog/Apache-APISIX-and-Envoy-performance-comparison"},"https://www.apiseven.com/zh/blog/Apache-APISIX-and-Envoy-performance-comparison"))),(0,o.kt)("p",null,"\u5728 CNCF \u7ec4\u7ec7\u7684\u4e00\u573a\u6280\u672f\u5206\u4eab\u4f1a\u4e0a\uff0c\u7b2c\u4e00\u6b21\u542c\u5230\u4e86 Envoy \u8fd9\u4e48\u4e00\u4e2a\u4e1c\u897f\uff0c\u5206\u4eab\u7684\u5609\u5bbe\u5df4\u62c9\u5df4\u62c9\u8bb2\u4e86\u4e00\u5927\u5806\uff0c\u5565\u90fd\u6ca1\u8bb0\u4f4f\uff0c\u5c31\u8bb0\u4f4f\u4e86\u4e00\u4e2a\u7279\u522b\u65b0\u9896\u7684\u6982\u5ff5\u201c\u901a\u4fe1\u603b\u7ebf\u201d\uff0c\u540e\u9762 google \u4e86\u4e0b Envoy \u8fd9\u4e2a\u4e1c\u897f\u5230\u5e95\u662f\u4ec0\u4e48\uff0c\u53d1\u73b0\u5b98\u7f51\u4e0a\u5982\u662f\u63cf\u8ff0\uff1a"),(0,o.kt)("p",null,"\u201cEnvoy \u662f\u4e13\u4e3a\u5927\u578b\u73b0\u4ee3 SOA\uff08\u9762\u5411\u670d\u52a1\u67b6\u6784\uff09\u67b6\u6784\u8bbe\u8ba1\u7684 L7 \u4ee3\u7406\u548c\u901a\u4fe1\u603b\u7ebf\u201d"),(0,o.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c Envoy \u662f\u4e3a\u4e86\u89e3\u51b3 Service Mesh \u9886\u57df\u800c\u8bde\u751f\u4e00\u6b3e L7 \u4ee3\u7406\u8f6f\u4ef6\uff0c\u8fd9\u91cc\u6211\u7f51\u4e0a\u627e\u4e86\u4e00\u5f20\u56fe\uff0c\u6211\u7406\u89e3\u7684 Envoy \u5927\u6982\u662f\u5982\u4e0b\u7684\u90e8\u7f72\u67b6\u6784\u3002\uff08\u5982\u679c\u9519\u4e86\u8bf7\u5927\u4f6c\u6307\u6559\uff09"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210617001.png",alt:"Envoy arch"})),(0,o.kt)("p",null,"\u65e2\u7136\u662f L7 \u7684\u4ee3\u7406\u8f6f\u4ef6\u561b\uff0c\u4f5c\u4e3a\u5e38\u5e74\u6df7\u8ff9 OpenResty \u793e\u533a\u7684\u8001\u53f8\u673a\uff0c\u81ea\u7136\u5fcd\u4e0d\u4f4f\u628a\u5b83\u62ff\u6765\u641e\u4e00\u641e\uff0c\u5bf9\u6bd4\u5bf9\u6bd4\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u9009\u62e9\u7684\u6bd4\u8bd5\u5bf9\u8c61\u662f Apache APISIX\uff0c\u5b83\u662f\u57fa\u4e8e OpenResty \u5b9e\u73b0\u7684 API \u7f51\u5173\u3002\uff08\u5176\u5b9e\u4e5f\u5c31\u662f L7 \u4ee3\u7406\u7136\u540e\u52a0\u4e86\u8def\u7531\u3001\u8ba4\u8bc1\uff0c\u9650\u6d41\u3001\u52a8\u6001\u4e0a\u6e38\u7b49\u7b49\u4e4b\u7c7b\u7684\u529f\u80fd\uff09"),(0,o.kt)("p",null,"\u4e3a\u4ec0\u4e48\u9009\u62e9\u5b83\u5462\uff0c\u56e0\u4e3a\u6709\u4e00\u6b21\u793e\u533a\u5206\u4eab\u7684\u65f6\u5019\u542c\u8bf4\u8fd9\u8d27\u7684\u8def\u7531\u5b9e\u73b0\u975e\u5e38\u68d2\uff0c\u6b63\u597d\u6211\u4eec\u7684\u73b0\u5728\u4e1a\u52a1\u7684\u8def\u7531\u7cfb\u7edf\u4e71\u4e03\u516b\u7cdf\uff0c\u6252\u62c9\u4e86\u4e0b APISIX \u7684\u6e90\u7801\uff0c\u53d1\u73b0\u786e\u5b9e\u662f 6 \u5230\u98de\u8d77\uff0c\u540a\u6253\u6211\u770b\u5230\u8fc7\u7684\u540c\u7c7b\u4ea7\u54c1\uff0c \u6240\u4ee5\u5370\u8c61\u6df1\u523b\uff0c\u5c31\u5b83\u4e86\uff01"),(0,o.kt)("p",null,"\u8fd9\u91cc\u9644\u4e0a\u4e00\u5f20\u5728 APISIX \u5b98\u7f51\u6252\u62c9\u7684\u56fe\uff0c\u771f\u662f\u4e00\u56fe\u80dc\u5343\u8a00\uff0c\u4e00\u770b\u5c31\u77e5\u9053\u8fd9\u73a9\u610f\u513f\u662f\u600e\u4e48\u5de5\u4f5c\u7684\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210617002.png",alt:"APISIX arch"})),(0,o.kt)("p",null,"\u5f00\u641e\u5427\uff0c\u9996\u5148\u6211\u4eec\u53bb\u5b98\u7f51\u627e\u5230\u4e24\u4e2a\u4ea7\u54c1\u7684\u6700\u7248\u672c\uff1a"),(0,o.kt)("p",null,"Apache APISIX 1.5 \u548c Envoy 1.14"),(0,o.kt)("p",null,"\uff08\u7b14\u8005\u5728\u5199\u8fd9\u7bc7\u6587\u7ae0\u65f6\u7684\u6700\u65b0\u7248\uff09"),(0,o.kt)("h4",{id:"\u6784\u5efa\u73af\u5883\u51c6\u5907"},"\u6784\u5efa\u73af\u5883\u51c6\u5907"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u538b\u529b\u6d4b\u8bd5\u5ba2\u6237\u7aef\uff1awrk\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u4e3b\u8981\u6307\u6807\u5305\u62ec\uff1a\u7f51\u5173\u5ef6\u8fdf\u3001QPS \u548c\u662f\u5426\u7ebf\u6027\u6269\u5c55\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u73af\u5883\uff1a\u5fae\u8f6f\u4e91 Linux (ubuntu 18.04)\uff0c Standard D13 v2 (8 vcpus, 56 GiB memory)\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u65b9\u5f0f 1\uff1a\u91c7\u7528\u5355\u6838\u8fd0\u884c\u6a2a\u5411\u5bf9\u6bd4\uff08\u56e0\u4e3a\u5b83\u4eec\u90fd\u662f\u57fa\u4e8e epoll \u7684 IO \u6a21\u578b\uff0c\u6240\u4ee5\u7528\u5355\u6838\u538b\u6d4b\u9a8c\u8bc1\u5b83\u4eec\u7684\u5904\u7406\u80fd\u529b\uff09\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u65b9\u5f0f 2\uff1a\u91c7\u7528\u591a\u6838\u8fd0\u884c\u6a2a\u5411\u5bf9\u6bd4\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u9a8c\u8bc1\u4e24\u8005\u5728\u6dfb\u52a0\u591a\uff08\u8fdb\u7a0b|\u7ebf\u7a0b\uff09\u7684\u573a\u666f\u4e0b\u5176\u6574\u4f53\u5904\u7406\u80fd\u529b\u662f\u5426\u80fd\u591f\u7ebf\u6027\u589e\u957f\uff1b")),(0,o.kt)("h4",{id:"\u6d4b\u8bd5\u573a\u666f"},"\u6d4b\u8bd5\u573a\u666f"),(0,o.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u7528 NGINX \u642d\u5efa\u4e86\u4e00\u4e2a\u4e0a\u6e38\u670d\u52a1\u5668\uff0c\u914d\u7f6e 2 \u4e2a worker\uff0c\u63a5\u6536\u5230\u8bf7\u6c42\u76f4\u63a5\u5e94\u7b54 4k \u5185\u5bb9\uff0c\u53c2\u8003\u914d\u7f6e\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'server {\n  listen 1980;\n\n  access_log off;\n  location = /hello {\n    echo_duplicate 400 "1234567890";\n  }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u67b6\u6784\u793a\u610f\u56fe\u5982\u4e0b\uff1a\uff08\u7eff\u8272\u6b63\u5e38\u8d1f\u8f7d\uff0c\u672a\u8dd1\u6ee1\u3002\u7ea2\u8272\u4e3a\u9ad8\u538b\u8d1f\u8f7d\uff0c\u8981\u628a\u8fdb\u7a0b\u8d44\u6e90\u8dd1\u6ee1\uff0c\u4e3b\u8981\u662f CPU\uff09")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210617003.png",alt:"test result"})),(0,o.kt)("h4",{id:"\u8def\u7531\u914d\u7f6e"},"\u8def\u7531\u914d\u7f6e"),(0,o.kt)("p",null,"\u9996\u5148\u6211\u4eec\u627e\u5230 APISIX \u7684\u5165\u95e8\u914d\u7f6e\u6307\u5357\uff0c\u6211\u4eec\u6dfb\u52a0\u4e00\u6761\u5230 /hello \u7684\u8def\u7531\uff0c\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -X PUT -d \'{\u3001\n    "uri": "/hello",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }}\'\n')),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u91cc\u6ca1\u5e76\u6ca1\u6709\u5f00\u59cb proxy_cache \u548c proxy_mirror \u63d2\u4ef6\uff0c\u56e0\u4e3a Enovy \u5e76\u6ca1\u6709\u7c7b\u4f3c\u7684\u529f\u80fd\uff1b"),(0,o.kt)("p",null,"\u7136\u540e\u6211\u4eec\u53c2\u8003 Envoy \u5b98\u65b9\u538b\u6d4b\u6307\u5bfc \u4e3a Envoy \u6dfb\u52a0\u4e00\u6761\u8def\u7531\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'static_resources:\n  listeners:\n  - name: listener_0\n    address:\n      socket_address: { address: "0.0.0.0", port_value: 10000 }\n\n    filter_chains:\n    - filters:\n      - name: envoy.http_connection_manager\n        config:\n          generate_request_id: false,\n          stat_prefix: ingress_http\n          route_config:\n            name: local_route\n            virtual_hosts:\n            - name: local_service\n              domains: ["*"]\n              routes:\n              - match: { prefix: "/hello" }\n                route: { cluster: service_test }\n          http_filters:\n          - name: envoy.router\n            config:\n              dynamic_stats: false\n  clusters:\n  - name: service_test\n    connect_timeout: 0.25s\n    type: LOGICAL_DNS\n    dns_lookup_family: V4_ONLY\n    lb_policy: ROUND_ROBIN\n    hosts: [{ socket_address: { address: "127.0.0.1", port_value: 1980 }}]\n    circuit_breakers:\n      thresholds:\n        - priority: DEFAULT\n          max_connections: 1000000000\n          max_pending_requests: 1000000000\n          max_requests: 1000000000\n          max_retries: 1000000000\n        - priority: HIGH\n        max_connections: 1000000000\n        max_pending_requests: 1000000000\n        max_requests: 1000000000\n        max_retries: 1000000000\n')),(0,o.kt)("p",null,"\u4e0a\u9762\u7684 generate",(0,o.kt)("em",{parentName:"p"},"request_id\u3001dynamic_stats \u548c circuit_breakers \u90e8\u5206\uff0c\u5728 Envoy \u5185\u90e8\u662f\u9ed8\u8ba4\u5f00\u542f\uff0c\u4f46\u672c\u6b21\u538b\u6d4b\u7528\u4e0d\u5230\uff0c\u9700\u8981\u663e\u5f0f\u5173\u95ed\u6216\u8bbe\u7f6e\u8d85\u5927\u9608\u503c\u4ece\u800c\u63d0\u5347\u6027\u80fd\u3002\uff08\u8c01\u80fd\u7ed9\u6211\u89e3\u91ca\u4e0b\u4e3a\u4ec0\u4e48\u8fd9\u73a9\u610f\u513f\u914d\u7f6e\u8fd9\u4e48\u590d\u6742 -"),"-!\uff09"),(0,o.kt)("h4",{id:"\u538b\u6d4b\u7ed3\u679c"},"\u538b\u6d4b\u7ed3\u679c"),(0,o.kt)("p",null,"\u5355\u6761\u8def\u7531\uff0c\u4e0d\u5f00\u542f\u4efb\u4f55\u63d2\u4ef6\u3002\u5f00\u542f\u4e0d\u540c CPU \u6570\u91cf\uff0c\u8fdb\u884c\u6ee1\u8f7d\u538b\u529b\u6d4b\u8bd5\u3002\u8bf4\u660e\uff1a\u5bf9\u4e8e NGINX \u53eb worker \u6570\u91cf\uff0cEnvoy \u662f concurrent \uff0c\u4e3a\u4e86\u7edf\u4e00\u540e\u9762\u90fd\u53eb worker \u6570\u91cf\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"\u8fdb\u7a0b\u6570")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"APISIX QPS")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"APISIX Latency")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Envoy QPS")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Envoy Latency")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"1 worker")),(0,o.kt)("td",{parentName:"tr",align:"left"},"18608.4"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0.96"),(0,o.kt)("td",{parentName:"tr",align:"left"},"15625.56"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.02")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"2 workers")),(0,o.kt)("td",{parentName:"tr",align:"left"},"34975.8"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.01"),(0,o.kt)("td",{parentName:"tr",align:"left"},"29058.135"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"3 workers")),(0,o.kt)("td",{parentName:"tr",align:"left"},"52334.8"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.02"),(0,o.kt)("td",{parentName:"tr",align:"left"},"42561.125"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.12")))),(0,o.kt)("p",null,"\u6ce8\uff1a\u539f\u59cb\u6570\u636e\u516c\u5f00\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/aifeiasdf/9fc4585f6404e3a0a70c568c2a14b9c9"},"gist")," \u9884\u89c8\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210617004.png",alt:"test result"})),(0,o.kt)("p",null,"QPS\uff1a\u6bcf\u79d2\u949f\u5b8c\u6210\u7684\u8bf7\u6c42\u6570\uff0c\u6570\u91cf\u8d8a\u591a\u8d8a\u597d\uff0c\u6570\u503c\u8d8a\u5927\u4ee3\u8868\u5355\u4f4d\u65f6\u95f4\u5185\u53ef\u4ee5\u5b8c\u6210\u7684\u8bf7\u6c42\u6570\u91cf\u8d8a\u591a\u3002\u4ece QPS \u7ed3\u679c\u770b\uff0cAPISIX \u6027\u80fd\u662f Envoy \u7684 120% \u5de6\u53f3\uff0c\u6838\u5fc3\u6570\u8d8a\u591a QPS \u5dee\u8ddd\u8d8a\u5927\u3002"),(0,o.kt)("p",null,"Latency\uff1a\u6bcf\u8bf7\u6c42\u7684\u5ef6\u8fdf\u65f6\u95f4\uff0c\u6570\u503c\u8d8a\u5c0f\u8d8a\u597d\u3002\u5b83\u4ee3\u8868\u6bcf\u8bf7\u6c42\u4ece\u53d1\u51fa\u540e\u9700\u8981\u7ecf\u8fc7\u591a\u957f\u65f6\u95f4\u53ef\u4ee5\u63a5\u6536\u5230\u5e94\u7b54\u3002\u5bf9\u4e8e\u53cd\u5411\u4ee3\u7406\u573a\u666f\uff0c\u8be5\u6570\u503c\u8d8a\u5c0f\uff0c\u5bf9\u8bf7\u6c42\u7684\u5f71\u54cd\u4e5f\u5c31\u6700\u5c0f\u3002\u4ece\u7ed3\u679c\u4e0a\u770b\uff0cEnvoy \u7684\u6bcf\u8bf7\u6c42\u5ef6\u8fdf\u8981\u6bd4 APISIX \u591a 6-10% \uff0c\u6838\u5fc3\u6570\u91cf\u8d8a\u591a\u5ef6\u8fdf\u8d8a\u5927\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u4e24\u8005\u5728\u5355\u5de5\u4f5c\u7ebf\u7a0b|\u8fdb\u7a0b\u7684\u6a21\u5f0f\u4e0b\uff0cQPS \u548c Latency \u4e24\u4e2a\u6307\u6807\u5dee\u8ddd\u4e0d\u5927\uff0c\u4f46\u662f\u968f\u7740\u5de5\u4f5c\u7ebf\u7a0b|\u8fdb\u7a0b\u7684\u589e\u52a0\u4ed6\u4eec\u7684\u5dee\u8ddd\u9010\u6e10\u653e\u5927\uff0c\u8fd9\u91cc\u6211\u5206\u6790\u53ef\u80fd\u6709\u4ee5\u4e0b\u4e24\u65b9\u9762\u7684\u539f\u56e0\uff0cNGINX \u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u7528\u591a worker \u548c\u7cfb\u7edf\u7684 IO \u6a21\u578b\u8fdb\u884c\u4ea4\u4e92\u662f\u4e0d\u662f\u4f1a\u66f4\u6709\u4f18\u52bf\uff0c\u53e6\u5916\u4e00\u65b9\u9762\uff0c\u4e5f\u53ef\u80fd\u662f NGINX \u81ea\u8eab\u5728\u5b9e\u73b0\u4e0a\u9762\u5bf9\u5185\u5b58\u548c CPU \u7684\u4f7f\u7528\u6bd4\u8f83\u201c\u62a0\u95e8\u201d\uff0c\u8fd9\u6837\u7d2f\u79ef\u8d77\u6765\u7684\u6027\u80fd\u4f18\u52bf\uff0c\u4ee5\u540e\u8be6\u7ec6\u8bc4\u4f30\u8bc4\u4f30\u3002"),(0,o.kt)("h4",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u603b\u4f53\u6765\u8bf4 APISIX \u5728\u54cd\u5e94\u5ef6\u8fdf\u548c QPS \u5c42\u9762\u90fd\u7565\u4f18\u4e8e Envoy\uff0c \u7531\u4e8e NGINX \u7684\u591a worker \u7684\u534f\u4f5c\u65b9\u5f0f\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u66f4\u6709\u4f18\u52bf\uff0c\u5f97\u76ca\u4e8e\u6b64\uff0cAPISIX \u5728\u5f00\u542f\u591a\u4e2a worker \u8fdb\u7a0b\u540e\u6027\u80fd\u63d0\u5347\u8f83 Enovy \u66f4\u4e3a\u660e\u663e\uff1b\u4f46\u662f\u4e24\u8005\u5e76\u4e0d\u51b2\u7a81\uff0c Envoy \u7684\u603b\u7ebf\u8bbe\u8ba1\u4f7f\u5b83\u5728\u5904\u7406\u4e1c\u897f\u5411\u6d41\u91cf\u4e0a\u6709\u72ec\u7279\u7684\u4f18\u52bf\uff0c APISIX \u5728\u6027\u80fd\u548c\u5ef6\u8fdf\u4e0a\u7684\u8868\u73b0\u4f7f\u5b83\u5728\u5904\u7406\u5357\u5317\u5411\u6d41\u91cf\u4e0a\u5177\u6709\u6d77\u91cf\u7684\u541e\u5410\u80fd\u529b\uff0c\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u573a\u666f\u6765\u9009\u62e9\u5408\u7406\u7684\u7ec4\u4ef6\u914d\u5408\u63d2\u4ef6\u6784\u5efa\u81ea\u5df1\u7684\u670d\u52a1\u624d\u662f\u6b63\u89e3\u3002"))}m.isMDXComponent=!0}}]);