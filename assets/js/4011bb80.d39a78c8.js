"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[915],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,b=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76187:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i={title:"Apache APISIX \u5728\u79fb\u52a8\u4e91\u7684\u5e94\u7528",slug:"/blog/2021/08/09/apache-apisix-in-china-mobile-cloud",author:"Apache APISIX \u793e\u533a",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","\u4e2d\u56fd\u79fb\u52a8"],description:"\u6211\u4eec\u6709\u5e78\u91c7\u8bbf\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\u7684\u9648\u7131\u5c71\uff0c\u5728\u91c7\u8bbf\u4e2d\u6211\u4eec\u4e86\u89e3\u5230\u4e2d\u56fd\u79fb\u52a8\u516c\u6709\u4e91\u5efa\u8bbe\u53d1\u5c55\u6f14\u8fdb\u5386\u7a0b\uff0c\u4e86\u89e3\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u7f51\u5173\uff0c\u5e76\u4e14\u77e5\u6653\u79fb\u52a8\u4e91\u540e\u7eed\u7684\u53d1\u5c55\u89c4\u5212\u3002",tags:["Interview"]},c=void 0,l={permalink:"/blog/blog/2021/08/09/apache-apisix-in-china-mobile-cloud",source:"@site/blog/2021/08/09/Apache-APISIX-in-China-Mobile-Cloud.md",title:"Apache APISIX \u5728\u79fb\u52a8\u4e91\u7684\u5e94\u7528",description:"\u6211\u4eec\u6709\u5e78\u91c7\u8bbf\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\u7684\u9648\u7131\u5c71\uff0c\u5728\u91c7\u8bbf\u4e2d\u6211\u4eec\u4e86\u89e3\u5230\u4e2d\u56fd\u79fb\u52a8\u516c\u6709\u4e91\u5efa\u8bbe\u53d1\u5c55\u6f14\u8fdb\u5386\u7a0b\uff0c\u4e86\u89e3\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u7f51\u5173\uff0c\u5e76\u4e14\u77e5\u6653\u79fb\u52a8\u4e91\u540e\u7eed\u7684\u53d1\u5c55\u89c4\u5212\u3002",date:"2021-08-09T00:00:00.000Z",formattedDate:"August 9, 2021",tags:[{label:"Interview",permalink:"/blog/tags/interview"}],readingTime:1.205,truncated:!0,authors:[{name:"Apache APISIX \u793e\u533a"}],prevItem:{title:"Apache APISIX Architecture Analysis: How to Dynamically Manage Nginx Clustering?",permalink:"/blog/2021/08/10/apisix-nginx"},nextItem:{title:"Abandoning Kong and Nginx, Hyperchain Technology implements on its BaaS platform",permalink:"/blog/blog/2021/08/09/apache-apisix-in-quliankeji"}},p={authorsImageUrls:[void 0]},u=[],s={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u6709\u5e78\u91c7\u8bbf\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\u7684\u9648\u7131\u5c71\uff0c\u5728\u91c7\u8bbf\u4e2d\u6211\u4eec\u4e86\u89e3\u5230\u4e2d\u56fd\u79fb\u52a8\u516c\u6709\u4e91\u5efa\u8bbe\u53d1\u5c55\u6f14\u8fdb\u5386\u7a0b\uff0c\u4e86\u89e3\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u7f51\u5173\uff0c\u5e76\u4e14\u77e5\u6653\u79fb\u52a8\u4e91\u540e\u7eed\u7684\u53d1\u5c55\u89c4\u5212\u3002")))}f.isMDXComponent=!0}}]);