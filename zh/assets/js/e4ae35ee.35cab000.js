"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11577],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,y=s["".concat(u,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(y,c(c({ref:t},p),{},{components:r})):n.createElement(y,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},22161:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"Apache APISIX \u5b58\u5728\u6539\u5199 X-REAL-IP header \u7684\u98ce\u9669\u516c\u544a\uff08CVE-2022-24112\uff09",keywords:["\u98ce\u9669\u516c\u544a","Header","IP \u9650\u5236"],description:"\u5728 Apache APISIX 2.12.1 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u542f\u7528 Apache APISIX `batch-requests` \u63d2\u4ef6\u4e4b\u540e\u4f1a\u5b58\u5728\u6539\u5199 X-REAL-IP header \u98ce\u9669\uff0c\u73b0\u5c06\u5904\u7406\u4fe1\u606f\u8fdb\u884c\u76f8\u5173\u516c\u544a\u3002",tags:["Security"]},i=void 0,u={permalink:"/zh/blog/2022/02/11/cve-2022-24112",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/02/11/cve-2022-24112.md",title:"Apache APISIX \u5b58\u5728\u6539\u5199 X-REAL-IP header \u7684\u98ce\u9669\u516c\u544a\uff08CVE-2022-24112\uff09",description:"\u5728 Apache APISIX 2.12.1 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u542f\u7528 Apache APISIX `batch-requests` \u63d2\u4ef6\u4e4b\u540e\u4f1a\u5b58\u5728\u6539\u5199 X-REAL-IP header \u98ce\u9669\uff0c\u73b0\u5c06\u5904\u7406\u4fe1\u606f\u8fdb\u884c\u76f8\u5173\u516c\u544a\u3002",date:"2022-02-11T00:00:00.000Z",formattedDate:"2022\u5e742\u670811\u65e5",tags:[{label:"Security",permalink:"/zh/blog/tags/security"}],readingTime:.615,truncated:!0,authors:[],prevItem:{title:"\u540e\u7aef\u65b0\u624b\u5982\u4f55\u4ece 0 \u5230 1 \u5728 API \u7f51\u5173\u4e0a\u5f00\u53d1 file-logger \u63d2\u4ef6",permalink:"/zh/blog/2022/02/16/file-logger-api-gateway"},nextItem:{title:"\u751f\u6001\u6269\u5927\u8fdb\u884c\u4e2d\uff01\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u96c6\u6210 Splunk HTTP Event Collector",permalink:"/zh/blog/2022/02/10/splunk-apisix-integration"}},l={authorsImageUrls:[]},p=[],f={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728 Apache APISIX 2.12.1 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u542f\u7528 Apache APISIX ",(0,a.kt)("inlineCode",{parentName:"p"},"batch-requests")," \u63d2\u4ef6\u4e4b\u540e\u4f1a\u5b58\u5728\u6539\u5199 X-REAL-IP header \u98ce\u9669\uff0c\u73b0\u5c06\u5904\u7406\u4fe1\u606f\u8fdb\u884c\u76f8\u5173\u516c\u544a\u3002")))}s.isMDXComponent=!0}}]);