"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1836],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(r),h=o,b=m["".concat(c,".").concat(h)]||m[h]||p[h]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59312:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return l},toc:function(){return s},default:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i={title:"\u4e24\u79cd\u65b9\u5f0f\u6559\u4f60\u5728 K8s \u4e2d\u8f7b\u677e\u90e8\u7f72 Apache APISIX",authors:[{name:"\u55bb\u67cf\u4ef2",title:"Author",url:"https://github.com/zaunist",image_url:"https://avatars.githubusercontent.com/u/38528079?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","Kubernetes","APISIX Dashboard","\u90e8\u7f72\u5b89\u88c5","\u96c6\u7fa4"],description:"Apache APISIX \u76ee\u524d\u652f\u6301\u591a\u79cd\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\u90e8\u7f72\uff0c\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Kubernetes \u73af\u5883\u4e2d\u90e8\u7f72 Apache APISIX \u4ee5\u53ca APISIX-Dashboard\u3002",tags:["Technology","Kubernetes"]},u=void 0,c={permalink:"/zh/blog/2021/12/15/deploy-apisix-in-kubernetes",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/12/15/deploy-apisix-in-kubernetes.md",title:"\u4e24\u79cd\u65b9\u5f0f\u6559\u4f60\u5728 K8s \u4e2d\u8f7b\u677e\u90e8\u7f72 Apache APISIX",description:"Apache APISIX \u76ee\u524d\u652f\u6301\u591a\u79cd\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\u90e8\u7f72\uff0c\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Kubernetes \u73af\u5883\u4e2d\u90e8\u7f72 Apache APISIX \u4ee5\u53ca APISIX-Dashboard\u3002",date:"2021-12-15T00:00:00.000Z",formattedDate:"2021\u5e7412\u670815\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Kubernetes",permalink:"/zh/blog/tags/kubernetes"}],readingTime:2.06,truncated:!0,authors:[{name:"\u55bb\u67cf\u4ef2",title:"Author",url:"https://github.com/zaunist",image_url:"https://avatars.githubusercontent.com/u/38528079?v=4",imageURL:"https://avatars.githubusercontent.com/u/38528079?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"\u76f4\u64ad\u9884\u544a | Apache APISIX \xd7 Apache RocketMQ \u7ebf\u4e0a\u5206\u4eab",permalink:"/zh/blog/2021/12/16/apisix-with-rocketmq-meetup"},nextItem:{title:"\u4f7f\u7528 Prometheus \u76d1\u63a7 APISIX Ingress Controller",permalink:"/zh/blog/2021/12/13/monitor-apisix-ingress-controller-with-prometheus"}},l={authorsImageUrls:[void 0,void 0]},s=[],p={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX \u76ee\u524d\u652f\u6301\u591a\u79cd\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\u90e8\u7f72\uff0c\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Kubernetes \u73af\u5883\u4e2d\u90e8\u7f72 Apache APISIX \u4ee5\u53ca APISIX-Dashboard\u3002")))}m.isMDXComponent=!0}}]);