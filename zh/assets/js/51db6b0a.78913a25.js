"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29711],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return I}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),I=r,k=m["".concat(o,".").concat(I)]||m[I]||A[I]||l;return a?n.createElement(k,p(p({ref:t},u),{},{components:a})):n.createElement(k,p({ref:t},u))}));function I(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<l;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},69106:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return o},assets:function(){return c},toc:function(){return u},default:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),p={title:"Apache APISIX \u5728 Airwallex \u7684\u5e94\u7528 | \u4e13\u8bbf Airwallex \u6280\u672f\u5e73\u53f0\u8d1f\u8d23\u4eba\u674e\u6768",author:"Apache APISIX \u793e\u533a",keywords:["APISIX","Airwallex","\u7a7a\u4e2d\u4e91\u6c47","\u91d1\u878d","\u6570\u636e\u4e3b\u6743"],description:"\u672c\u6587\u91c7\u8bbf\u4e86 Airwallex \u7a7a\u4e2d\u4e91\u6c47 Technical Platform Lead \u674e\u6768\uff0c\u674e\u6768\u8d1f\u8d23\u516c\u53f8\u6280\u672f\u5e73\u53f0\u7684\u6f14\u8fdb\u3002\u91c7\u8bbf\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u4e86 Airwallex \u7a7a\u4e2d\u4e91\u6c47\u5728\u505a\u6280\u672f\u9009\u578b\u65f6\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX\u3001Apache APISIX \u5728 Airwallex \u7a7a\u4e2d\u4e91\u6c47\u7684\u4f7f\u7528\u573a\u666f\u3001Apache APISIX \u5728\u751f\u4ea7\u73af\u5883\u7684\u8868\u73b0\u7b49\u3002",tags:["Interview"]},i=void 0,o={permalink:"/zh/blog/2021/08/17/interview-airwallex",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/08/17/interview-airwallex.md",title:"Apache APISIX \u5728 Airwallex \u7684\u5e94\u7528 | \u4e13\u8bbf Airwallex \u6280\u672f\u5e73\u53f0\u8d1f\u8d23\u4eba\u674e\u6768",description:"\u672c\u6587\u91c7\u8bbf\u4e86 Airwallex \u7a7a\u4e2d\u4e91\u6c47 Technical Platform Lead \u674e\u6768\uff0c\u674e\u6768\u8d1f\u8d23\u516c\u53f8\u6280\u672f\u5e73\u53f0\u7684\u6f14\u8fdb\u3002\u91c7\u8bbf\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u4e86 Airwallex \u7a7a\u4e2d\u4e91\u6c47\u5728\u505a\u6280\u672f\u9009\u578b\u65f6\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX\u3001Apache APISIX \u5728 Airwallex \u7a7a\u4e2d\u4e91\u6c47\u7684\u4f7f\u7528\u573a\u666f\u3001Apache APISIX \u5728\u751f\u4ea7\u73af\u5883\u7684\u8868\u73b0\u7b49\u3002",date:"2021-08-17T00:00:00.000Z",formattedDate:"2021\u5e748\u670817\u65e5",tags:[{label:"Interview",permalink:"/zh/blog/tags/interview"}],readingTime:1.17,truncated:!0,authors:[{name:"Apache APISIX \u793e\u533a"}],prevItem:{title:"\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Casbin \u8fdb\u884c\u6388\u6743",permalink:"/zh/blog/2021/08/18/Auth-with-Casbin-in-Apache-APISIX"},nextItem:{title:"Using the Apache APISIX OpenID Connect Plugin for Okta Centralized Authentication",permalink:"/zh/blog/blog/2021/08/16/using-the-apache-apisix-openid-connect-plugin-for-centralized-authentication"}},c={authorsImageUrls:[void 0]},u=[],A={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},A,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u91c7\u8bbf\u4e86 Airwallex \u7a7a\u4e2d\u4e91\u6c47 Technical Platform Lead \u674e\u6768\uff0c\u674e\u6768\u8d1f\u8d23\u516c\u53f8\u6280\u672f\u5e73\u53f0\u7684\u6f14\u8fdb\u3002\u91c7\u8bbf\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u4e86 Airwallex \u7a7a\u4e2d\u4e91\u6c47\u5728\u505a\u6280\u672f\u9009\u578b\u65f6\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX\u3001Apache APISIX \u5728 Airwallex \u7a7a\u4e2d\u4e91\u6c47\u7684\u4f7f\u7528\u573a\u666f\u3001Apache APISIX \u5728\u751f\u4ea7\u73af\u5883\u7684\u8868\u73b0\u7b49\u3002")),(0,l.kt)("p",null,"\u6211\u4eec\u6709\u5e78\u91c7\u8bbf\u5230\u4e86 Airwallex \u7684\u6280\u672f\u5e73\u53f0\u8d1f\u8d23\u4eba\u674e\u6768\uff0c\u5728\u91c7\u8bbf\u4e2d\uff0c\u674e\u6768\u8c08\u5230\u4e86\u4e3a\u4ec0\u4e48\u5728\u6280\u672f\u9009\u578b\u65f6\u9009\u62e9 Apache APISIX\uff0c\u4ee5\u53ca Apache APISIX \u5728 Airwallex \u7684\u5e94\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q\uff1a\u674e\u535a\u58eb\uff0c\u60a8\u597d\uff0c\u8bf7\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b\u81ea\u5df1\u548c\u76ee\u524d\u4ece\u4e8b\u7684\u5de5\u4f5c\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u674e\u6768\uff1a")," \u4f60\u597d\uff0c\u6211\u53eb\u674e\u6768\uff08Jan Li\uff09\uff0c\u54f2\u5b66\u535a\u58eb\uff0cApache APISIX Committer\uff0cAirwallex \u7a7a\u4e2d\u4e91\u6c47 Technical Platform Lead\uff0c\u8d1f\u8d23\u516c\u53f8\u6280\u672f\u5e73\u53f0\u7684\u6f14\u8fdb\u3002\u5728\u52a0\u5165 Airwallex \u4e4b\u524d\uff0c\u66fe\u5728\u4e07\u5411\u533a\u5757\u94fe\u9886\u5bfc\u8fd0\u94fe\u76df\u3002\u5728\u4e07\u5411\u533a\u5757\u94fe\u4e4b\u524d\uff0c\u66fe\u5728\u82b1\u65d7\u96c6\u56e2\u9886\u5bfc OTC \u884d\u751f\u54c1\u98ce\u63a7\u5e73\u53f0\u3002"),(0,l.kt)("p",null,"Airwallex \u7a7a\u4e2d\u4e91\u6c47\u662f\u4e00\u5bb6\u5168\u7403\u91d1\u878d\u79d1\u6280\u516c\u53f8\uff0c\u8d4b\u80fd\u5404\u7c7b\u89c4\u6a21\u7684\u4f01\u4e1a\u8de8\u5883\u8fd0\u8425\uff0c\u4ee5\u6b64\u52a9\u529b\u5168\u7403\u7ecf\u6d4e\u53d1\u5c55\u3002\u4ee5\u6280\u672f\u4e3a\u6838\u5fc3\uff0cAirwallex\uff08\u7a7a\u4e2d\u4e91\u6c47\uff09\u6784\u5efa\u4e86\u4e13\u6709\u7684\u5168\u7403\u91d1\u878d\u57fa\u7840\u8bbe\u65bd\u5e73\u53f0\uff0c\u5168\u7403\u652f\u4ed8\u7f51\u7edc\u5df2\u8986\u76d6 130 \u591a\u4e2a\u56fd\u5bb6\u548c\u5730\u533a\u7684 50 \u4f59\u79cd\u8d27\u5e01\uff0c\u4e3a\u5404\u7c7b\u89c4\u6a21\u7684\u4f01\u4e1a\u63d0\u4f9b\u6570\u5b57\u5316\u7684\u91d1\u878d\u79d1\u6280\u4ea7\u54c1\uff0c\u5728\u5168\u7403\u4e92\u8054\u7684\u4fe1\u606f\u5316\u65f6\u4ee3\uff0c\u4ee5\u66f4\u9ad8\u6548\u3001\u5b89\u5168\u7684\u65b9\u5f0f\u5e2e\u52a9\u4f01\u4e1a\u5728\u5168\u4e16\u754c\u9ad8\u901f\u53d1\u5c55\u3002\u81ea 2015 \u5e74\u6210\u7acb\u4ee5\u6765\uff0cAirwallex \u7a7a\u4e2d\u4e91\u6c47\u5df2\u83b7\u5f97\u6765\u81ea\u9876\u7ea7\u6295\u8d44\u673a\u6784\u8d85 5 \u4ebf\u7f8e\u5143\u878d\u8d44\uff0c\u76ee\u524d\u5728\u5168\u7403\u5171\u6709 12 \u4e2a\u529e\u516c\u5ba4\u53ca\u8d85\u8fc7 900 \u540d\u5458\u5de5\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210816001.png",alt:"Airwallex LiYang"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q\uff1a\u5728\u505a\u6280\u672f\u9009\u578b\u7684\u65f6\u5019\uff0c\u662f\u4ec0\u4e48\u539f\u56e0\u8ba9\u60a8/\u60a8\u7684\u6280\u672f\u56e2\u961f\u9009\u62e9\u4f7f\u7528 Apache APISIX\uff1f")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u674e\u6768"),"\uff1aAPI \u7f51\u5173\u662f\u6781\u5176\u91cd\u8981\u7684\u57fa\u7840\u6280\u672f\u7ec4\u4ef6\uff0c\u5728\u6280\u672f\u9009\u578b\u65f6\u6211\u4eec\u4e3b\u8981\u4ece 6 \u4e2a\u7ef4\u5ea6\u6bd4\u8f83\u4e86\u4e3b\u8981\u7684\u7f51\u5173\u4ea7\u54c1\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u7a33\u5b9a\u6027"),"\uff1aAPI \u7f51\u5173\u7684\u7a33\u5b9a\u6027\u81f3\u5173\u91cd\u8981\uff0c\u5728\u4e16\u754c\u6392\u540d\u524d 1000 \u7684\u7f51\u7ad9\u4e2d\uff0c\u6709 62.1% \u662f Nginx \u7cfb\u7684\uff0c\u8fd9\u8bf4\u660e Nginx \u7cfb web server \u662f\u7ecf\u8fc7\u4e86\u751f\u4ea7\u73af\u5883\u590d\u6742\u591a\u6837\u573a\u666f\u8003\u9a8c\u7684\uff1bApache APISIX \u5168\u52a8\u6001\u7684\u8bbe\u8ba1\u4e5f\u4f7f\u5f97\u5b83\u80fd\u591f\u5728\u4fee\u6539\u8def\u7531\u65f6\u4e0d\u5fc5 reload\uff0cclient \u7684\u957f\u94fe\u63a5\u4e5f\u5f97\u4ee5\u4fdd\u6301\uff1b\u6211\u4eec\u4e5f\u5bf9 Apache APISIX \u8fdb\u884c\u4e86\u538b\u529b\u6d4b\u8bd5\uff0c\u5728 CPU \u8fbe\u5230 70% \u4ee5\u4e0a\u65f6 Apache APISIX \u4ecd\u80fd\u7a33\u5b9a\u8fd0\u8f6c\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u6027\u80fd"),"\uff1a\u6bcf\u4e2a API \u8bf7\u6c42\u90fd\u4f1a\u7ecf\u8fc7 API \u7f51\u5173\uff0c\u51cf\u5c0f\u7f51\u5173\u6027\u80fd\u635f\u8017\u80fd\u5927\u5927\u964d\u4f4e\u516c\u53f8 API \u6574\u4f53\u54cd\u5e94\u65f6\u95f4\u3002\u5728 PoC \u4e2d\u6211\u4eec\u6bd4\u8f83\u4e86\u4e3b\u8981\u7684\u7f51\u5173\u4ea7\u54c1\uff0cApache APISIX \u7684\u54cd\u5e94\u5ef6\u8fdf\u6bd4\u5176\u5b83\u7f51\u5173\u4f4e 50% \u4ee5\u4e0a\uff1bApache APISIX \u6570\u636e\u9762\u7684\u8bbe\u8ba1\u4e5f\u4f7f\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5b9e\u4f8b\u90fd\u76f8\u4e92\u72ec\u7acb\uff0c\u8fd9\u4e5f\u4f7f\u5f97\u5b83\u5929\u751f\u652f\u6301\u6c34\u5e73\u6269\u5c55\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u53ef\u6269\u5c55\u6027"),"\uff1a API \u7f51\u5173\u6a21\u5f0f\u662f\u975e\u5e38\u91cd\u8981\u7684\u5fae\u670d\u52a1\u67b6\u6784\u6a21\u5f0f\uff0c\u7b26\u5408 API \u7f51\u5173\u6a21\u5f0f\u7684 API \u7f51\u5173\u5fc5\u987b\u652f\u6301\u4f01\u4e1a\u590d\u6742\u7684\u9274\u6743\u3001\u6743\u9650\u63a7\u5236\u3001\u670d\u52a1\u53d1\u73b0\u3001\u9650\u6d41\u3001\u964d\u7ea7\u3001\u8d1f\u8f7d\u5747\u8861\u3001\u767d\u540d\u5355\u3001\u52a8\u6001\u8def\u7531\u7b49\u529f\u80fd\uff0c\u6240\u4ee5\u652f\u6301\u600e\u6837\u7684\u5b9a\u5236\u662f\u9009\u62e9 API \u7f51\u5173\u65f6\u975e\u5e38\u5173\u952e\u7684\u8003\u91cf\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u793e\u533a\u6d3b\u8dc3\u5ea6"),"\uff1a\u65b0\u7684\u6280\u672f\u4e0e\u9700\u6c42\u5c42\u51fa\u4e0d\u7a77\uff0c\u4e00\u4e2a\u6d3b\u8dc3\u7684\u793e\u533a\u662f API \u7f51\u5173\u8ddf\u4e0a\u6280\u672f\u6f14\u8fdb\u6b65\u4f10\u7684\u5173\u952e\u3002\u65e9\u5728 Apache APISIX \u8fd8\u662f Apache \u5b75\u5316\u9879\u76ee\u65f6\uff0c\u5176\u793e\u533a\u5c31\u5df2\u7ecf\u975e\u5e38\u6d3b\u8dc3\uff0c\u4ece contributor \u6570\u91cf\u3001issue \u54cd\u5e94\u65f6\u95f4\u3001Pull Request \u6570\u91cf\u4e09\u4e2a\u6307\u6807\u6765\u770b\u90fd\u662f\u975e\u5e38\u6d3b\u8dc3\u7684\u793e\u533a\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u79c1\u6709\u90e8\u7f72"),"\uff1aAPI \u7f51\u5173\u4f5c\u4e3a\u4f01\u4e1a\u6838\u5fc3\u6280\u672f\u67b6\u6784\u7ec4\u4ef6\uff0c\u4f01\u4e1a\u5e94\u8be5\u628a\u5b83\u90e8\u7f72\u5728\u81ea\u5df1\u7684\u79c1\u6709\u7f51\u7edc\u8fb9\u7f18\u3002Apache APISIX \u5177\u6709\u826f\u597d\u7684\u73af\u5883\u9002\u5e94\u6027\uff0c\u80fd\u591f\u88ab\u8f7b\u6613\u5730\u90e8\u7f72\u5728\u5305\u62ec\u4e91\u8ba1\u7b97\u5e73\u53f0\u5728\u5185\u7684\u5404\u79cd\u73af\u5883\u4e0a\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u5f00\u6e90\u534f\u8bae"),"\uff1aApache 2.0 \u8d4b\u4e88\u4e86\u5b9a\u5236 APISIX \u7684\u4f01\u4e1a\u76f8\u5f53\u5927\u7684\u6280\u672f\u81ea\u7531\u5ea6\u3002"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q\uff1aApache APISIX \u7528\u5728\u4e86\u54ea\u4e9b\u573a\u666f\uff1f\u89e3\u51b3\u4e86\u54ea\u4e9b\u95ee\u9898\uff1f")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u674e\u6768"),"\uff1a\u6211\u4eec\u628a Apache APISIX \u7528\u4f5c\u5fae\u670d\u52a1\u7f51\u5173\u6a21\u5f0f\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u5b83\u88ab\u90e8\u7f72\u5728\u7f51\u7edc\u8fb9\u7f18\uff0c\u4e3a\u6240\u6709\u8fdb\u5165 Airwallex \u7684\u6d41\u91cf\u63d0\u4f9b\u901a\u7528\u7f51\u5173\u529f\u80fd\uff0c\u89e3\u51b3\u7684\u95ee\u9898\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6570\u636e\u4e3b\u6743\u95ee\u9898\uff1a\u5bf9\u4e8e\u8de8\u56fd\u8fd0\u8425\u7684\u91d1\u878d\u57fa\u7840\u8bbe\u65bd\uff0c\u6570\u636e\u4e3b\u6743\u662f\u975e\u5e38\u5173\u952e\u7684\u76d1\u7ba1\u8981\u6c42\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u5229\u7528 Apache APISIX \u52a8\u6001\u4e0a\u6e38\u9009\u62e9\u7684\u529f\u80fd\u5f00\u53d1\u4e86\u7b26\u5408\u76d1\u7ba1\u7684\u52a8\u6001\u8def\u7531\u63d2\u4ef6\u3002\u52a8\u6001\u8def\u7531\u80fd\u591f\u6839\u636e\u7528\u6237\u8bf7\u6c42\u7684\u7279\u5f81\u667a\u80fd\u9009\u62e9\u4e0a\u6e38\u6765\u8fdb\u884c\u8bf7\u6c42\u5206\u53d1\uff0c\u5c06\u590d\u6742\u7684\u591a\u6570\u636e\u4e2d\u5fc3\u534f\u540c\u95ee\u9898\u4ece\u670d\u52a1\u5c42\u62bd\u8c61\u5230\u7f51\u5173\u5c42\u3002\u52a8\u6001\u8def\u7531\u5b9e\u8d28\u662f\u8981\u56de\u7b54\u4e24\u4e2a\u95ee\u9898\uff1a\u5982\u4f55\u5bf9\u4e0a\u6e38\u8fdb\u884c\u5206\u7ec4\uff1f\u5982\u4f55\u5339\u914d\u8bf7\u6c42\u4e0e\u5206\u7ec4\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5fae\u670d\u52a1\u9694\u79bb\uff1aAirwallex \u5e0c\u671b\u5404\u5fae\u670d\u52a1\u7684\u5de5\u7a0b\u56e2\u961f\u80fd\u591f\u81ea\u4e3b\u63a7\u5236\u81ea\u5df1\u7684\u670d\u52a1\uff0c\u6709\u6548\u964d\u4f4e\u6c9f\u901a\u534f\u8c03\u7684\u6210\u672c\uff0c\u63d0\u9ad8\u5de5\u7a0b\u6548\u80fd\u3002\u8fd9\u4e00\u67b6\u6784\u7406\u5ff5\u8981\u6c42\u88ab\u5404\u56e2\u961f\u5171\u4eab\u7684\u57fa\u7840\u67b6\u6784\u7ec4\u4ef6\uff0c\u6bd4\u5982\uff1a API Gateway \u90fd\u80fd\u652f\u6301\u591a\u79df\u6237\u9694\u79bb\u3002\u5728\u4fdd\u8bc1\u6574\u4e2a\u7cfb\u7edf\u7684\u5f3a\u58ee\u6027\u548c\u6210\u672c\u53ef\u63a7\u7684\u540c\u65f6\uff0c\u5141\u8bb8\u4e1a\u52a1\u56e2\u961f\u6839\u636e\u81ea\u8eab\u7684\u9700\u8981\u5bf9\u7f51\u5173\u529f\u80fd\u8fdb\u884c\u914d\u7f6e\u548c\u6269\u5c55\uff0c\u4fdd\u6301\u5fae\u670d\u52a1\u56e2\u961f\u4e0e\u670d\u52a1\u7684\u72ec\u7acb\u6027\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u79df\u6237\u7ea7\u9650\u6d41\uff1a\u5728\u591a\u79df\u6237\u73af\u5883\u4e2d\uff0c\u6bcf\u4e2a\u79df\u6237\u7684\u6d41\u91cf\u7279\u5f81\u662f\u4e0d\u540c\u7684\u3002\u5bf9\u4e0d\u540c\u7684\u79df\u6237\u8fdb\u884c\u540c\u6837\u7684\u9650\u6d41\u65e0\u6cd5\u6ee1\u8db3\u5546\u4e1a\u4e0a\u7684\u9700\u6c42\uff0c\u79df\u6237\u7ea7\u9650\u6d41\u80fd\u591f\u6839\u636e\u7528\u6237\u7279\u5f81\u505a\u66f4\u6070\u5f53\u7684\u9650\u6d41\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u79df\u6237\u7ea7\u767d\u540d\u5355\uff1a\u5728\u591a\u79df\u6237\u73af\u5883\u4e2d\uff0c\u6bcf\u4e2a\u79df\u6237\u7684\u8bbf\u95ee IP \u662f\u4e0d\u540c\u7684\u3002\u5355\u4e00\u7684\u767d\u540d\u5355\u63a7\u5236\u65e0\u6cd5\u6ee1\u8db3\u79df\u6237\u7ea7\u5b89\u5168\u7ba1\u7406\u7684\u9700\u8981\uff0c\u79df\u6237\u7ea7\u767d\u540d\u5355\u4f7f\u5f97\u6bcf\u4e2a\u79df\u6237\u53ef\u4ee5\u63a7\u5236\u81ea\u5df1\u7684\u767d\u540d\u5355\uff0c\u4e5f\u4e0d\u7528\u62c5\u5fc3\u767d\u540d\u5355\u4e2d\u7684\u5176\u5b83\u7528\u6237\u8bbf\u95ee\u81ea\u5df1\u7684\u8d44\u6e90\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Authentication\uff1aAPI \u7f51\u5173\u4e0d\u4ec5\u8981\u652f\u6301\u8bf7\u6c42 authentication\uff0c\u8fd8\u9700\u8981\u652f\u6301\u52a8\u6001\u66f4\u65b0\u5bc6\u94a5\uff0c\u7ecf\u5e38\u66f4\u65b0\u5bc6\u94a5\u662f\u4fdd\u8bc1\u7528\u6237\u8d44\u6e90\u5b89\u5168\u7684\u5173\u952e\u4e00\u73af\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Authorization\uff1a\u4f01\u4e1a\u7ea7\u5e94\u7528\u7684\u6743\u9650\u7ba1\u7406\u662f\u975e\u5e38\u590d\u6742\u7684\uff0c\u4e0d\u540c\u7684\u5e94\u7528\u573a\u666f\u6709\u7740\u622a\u7136\u4e0d\u540c\u7684\u6743\u9650\u7ba1\u7406\u6a21\u578b\u3002API \u7f51\u5173\u53ef\u4ee5\u6839\u636e\u8def\u7531\u914d\u7f6e\u9a8c\u8bc1\u8bf7\u6c42\u7528\u6237\u662f\u5426\u6709\u8db3\u591f\u7684\u6743\u9650\u8bbf\u95ee\u63a5\u53e3\uff0c\u7b2c\u4e00\u65f6\u95f4\u62e6\u622a\u975e\u6cd5\u7684\u6d41\u91cf\u3002"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210816002.png",alt:"Airwallex arch"})),(0,l.kt)("p",null,"\u5185\u5bb9\u6bd4\u8f83\u591a\u7b80\u5316\u4e00\u4e0b\uff0c\u53ef\u4ee5\u66f4\u6e05\u695a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/20210816003.png",alt:"Airwallex arch"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q:\u5728 Apache APISIX \u5347\u7ea7\u8fc7\u7a0b\u4e2d\u662f\u5426\u987a\u5229\uff1f\u5206\u4eab\u4e00\u4e0b\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u7684\u611f\u53d7\u6216\u8005\u6545\u4e8b\u3002")),(0,l.kt)("p",null,"\u4e3a\u4e86\u80fd\u591f\u968f\u65f6\u5347\u7ea7\u5230\u65b0\u7248\u672c\u7684 Apache APISIX\uff0c\u6211\u4eec\u628a\u4e3b\u8981\u7684\u529f\u80fd\u90fd\u5b9e\u73b0\u4e3a\u5b9a\u5236\u5316\u63d2\u4ef6\u3002\u8fd9\u610f\u5473\u7740\u6211\u4eec\u7684\u4ee3\u7801\u5e93\u4e0d\u53ef\u80fd\u4e0e Apache APISIX \u4e3b Repo \u6838\u5fc3\u4ee3\u7801\u4ea7\u751f\u51b2\u7a81\uff0c\u8fd9\u5e2e\u52a9\u6211\u4eec\u907f\u514d\u4e86\u53ef\u80fd\u9047\u5230\u7684\u4ee3\u7801\u51b2\u7a81\u3002\u4f46\u6709\u65f6\u6211\u4eec\u4e5f\u9700\u8981\u4fee\u6539\u6838\u5fc3\u4ee3\u7801\uff0c\u6b64\u65f6\u6211\u4eec\u4f1a\u5c3d\u91cf\u5728\u5f00\u6e90\u793e\u533a\u5b9e\u73b0\u8fd9\u4e9b\u529f\u80fd\u3002\u5728\u5f00\u6e90\u793e\u533a\u8ba8\u8bba\u8fd9\u4e9b\u529f\u80fd\u7684\u65f6\u5019\uff0c\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u4eec\u975e\u5e38\u70ed\u5fc3\u53c2\u4e0e\u8ba8\u8bba\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u90fd\u80fd\u5f88\u5feb\u89e3\u51b3\u6211\u4eec\u7684\u95ee\u9898\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q:Apache APISIX \u5728\u751f\u4ea7\u73af\u5883\u8fd0\u884c\u591a\u4e45\u4e86\uff1f\u5728\u7ebf\u4e0a\u8868\u73b0\u5982\u4f55\uff1f")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u674e\u6768"),"\uff1a\u751f\u4ea7\u73af\u5883\u8fd0\u884c\u4e86 15 \u4e2a\u6708\u4e86\uff0c\u5728\u5f00\u542f\u52a8\u6001\u8def\u7531\u3001\u79df\u6237\u7ea7\u9650\u6d41\u3001\u79df\u6237\u7ea7\u767d\u540d\u5355\u3001Authentication\u3001Authorization \u7b49\u529f\u80fd\u7684\u60c5\u51b5\u4e0b 99% \u54cd\u5e94\u5ef6\u8fdf\u5728 23ms \u4ee5\u5185\uff0c\u6574\u4f53\u8868\u73b0\u975e\u5e38\u7a33\u5b9a\u3002\u5f97\u76ca\u4e8e Apache APISIX \u4f18\u79c0\u7684\u63d2\u4ef6\u673a\u5236\uff0c\u53ef\u4ee5\u4fdd\u969c\u6211\u4eec\u5728\u51e0\u4e4e\u4e0d\u4fee\u6539\u5b83\u6838\u5fc3\u4ee3\u7801\u60c5\u51b5\u4e0b\uff0c\u589e\u52a0\u7b26\u5408\u4e1a\u52a1\u9700\u6c42\u7684\u79c1\u6709\u63d2\u4ef6\u3002\u5b8c\u5907\u7684\u6d4b\u8bd5\u4f53\u7cfb\u4e5f\u8fdb\u4e00\u6b65\u4fdd\u969c\u4e86\u8f6f\u4ef6\u8d28\u91cf\uff0c\u53ef\u4ee5\u653e\u5fc3\u589e\u52a0\u63d2\u4ef6\u4e2a\u6027\u5316\u8981\u6c42\u7684\u540c\u65f6\uff0c\u4fdd\u8bc1\u4e0d\u7834\u574f\u539f\u6709\u6838\u5fc3\u903b\u8f91\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q\uff1aApache APISIX \u6709\u54ea\u4e9b\u4e0d\u8db3\uff0c\u5e0c\u671b\u793e\u533a\u4e00\u8d77\u5efa\u8bbe\u5b8c\u5584\uff1f")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u674e\u6768"),"\uff1aApache APISIX \u7684\u6570\u636e\u9762\u8bbe\u8ba1\u4e3a\u5b83\u5e26\u6765\u4e86\u65e0\u635f\u7684\u6c34\u5e73\u6269\u5c55\u548c\u6781\u81f4\u7684\u6027\u80fd\uff0c\u4f46\u8fd9\u4e5f\u4f7f\u5f97\u8def\u7531\u914d\u7f6e\u5f88\u96be\u505a\u5230\u5411\u524d\u517c\u5bb9\uff0c\u4e3a\u65b0\u7248\u672c\u7684\u53d1\u5e03\u5e26\u6765\u4e86\u4e00\u4e9b\u534f\u8c03\u4e0a\u7684\u56f0\u96be\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q\uff1a\u540e\u7eed\u6709\u4ec0\u4e48\u8ba1\u5212\uff1f")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u674e\u6768"),"\uff1a\u540e\u7eed\u8ba1\u5212\u4e3b\u8981\u5305\u62ec\u4e09\u4e2a\u65b9\u9762\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7528\u591a\u5c42\u7f51\u7edc\u5c06\u4e0d\u540c\u7684\u7f51\u5173\u903b\u8f91\u62c6\u5206\u5230\u4e0d\u540c\u7684\u5206\u5c42\u4e2d\uff0c\u6bd4\u5982\u6839\u636e\u6570\u636e\u4e3b\u6743\u5206\u53d1\u6d41\u91cf\u4e0e\u5176\u5b83\u7f51\u5173\u903b\u8f91\u5c5e\u4e8e\u4e0d\u540c\u7684\u7f51\u7edc\u5206\u5c42\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6613\u8bfb\u6613\u7528\u7684\u8def\u7531\u7ba1\u7406\u5bf9 API \u7f51\u5173\u7684\u6210\u8d25\u975e\u5e38\u5173\u952e\uff0c\u867d\u7136\u7f51\u5173\u7684\u529f\u80fd\u4f1a\u4e0d\u65ad\u8fed\u4ee3\u4e0e\u589e\u52a0\uff0c\u4f46\u8def\u7531\u7ba1\u7406\u9700\u8981\u5bf9\u5f00\u53d1\u8005\u53cb\u597d\uff0c\u8ba9\u5f00\u53d1\u8005\u80fd\u591f\u8f7b\u6613\u7406\u89e3\u7f51\u5173\u80fd\u4e3a\u4ed6\u505a\u4ec0\u4e48\u3001\u8be5\u600e\u4e48\u914d\u7f6e\u3001\u600e\u4e48\u53d1\u5e03\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7528\u8bf7\u6c42\u67d3\u8272\u5e2e\u52a9\u5b9e\u73b0\u751f\u4ea7\u73af\u5883\u6d4b\u8bd5\u3002\u7528 API \u7f51\u5173\u8bf7\u6c42\u67d3\u8272\u5b9e\u73b0\u751f\u4ea7\u73af\u5883\u6d4b\u8bd5\u80fd\u4e3a\u6211\u4eec\u5e26\u6765\u7075\u6d3b\u6027\u4e0e\u6613\u7528\u6027\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q\uff1a\u611f\u8c22\u674e\u535a\u58eb\uff0c\u671f\u5f85 Apache APISIX \u5728 Airwallex \u6709\u66f4\u591a\u7684\u4f7f\u7528\u573a\u666f\uff0c\u53d1\u6325\u7684\u66f4\u591a\u4f5c\u7528\u3002")))}m.isMDXComponent=!0}}]);