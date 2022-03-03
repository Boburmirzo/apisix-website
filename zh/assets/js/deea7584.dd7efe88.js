"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80260],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||p;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52695:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return c},toc:function(){return s},default:function(){return m}});var a=n(87462),r=n(63366),p=(n(67294),n(3905)),o={title:"Nacos \u5728 API \u7f51\u5173\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u5b9e\u8df5",authors:[{name:"\u6797\u5fd7\u714c",title:"Author",url:"https://github.com/oil-oil",image_url:"https://avatars.githubusercontent.com/u/57465570?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4"}],keywords:["Apache APISIX","Nacos","API gateway","Service Discovery","Service Registry","Ecosystem"],description:"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd Apache APISIX \u57fa\u672c\u6982\u5ff5\u4ee5\u53ca\u6ce8\u518c\u4e2d\u5fc3\u7684\u4f5c\u7528\uff0c\u5e76\u4e3a\u60a8\u5c55\u793a\u4e86 API \u7f51\u5173\u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u7684\u5177\u4f53\u64cd\u4f5c\u3002",tags:["Technology","Ecosystem","Service Discovery"]},i=void 0,l={permalink:"/zh/blog/2022/02/21/nacos-api-gateway",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/02/21/nacos-api-gateway.md",title:"Nacos \u5728 API \u7f51\u5173\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u5b9e\u8df5",description:"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd Apache APISIX \u57fa\u672c\u6982\u5ff5\u4ee5\u53ca\u6ce8\u518c\u4e2d\u5fc3\u7684\u4f5c\u7528\uff0c\u5e76\u4e3a\u60a8\u5c55\u793a\u4e86 API \u7f51\u5173\u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u7684\u5177\u4f53\u64cd\u4f5c\u3002",date:"2022-02-21T00:00:00.000Z",formattedDate:"2022\u5e742\u670821\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"},{label:"Service Discovery",permalink:"/zh/blog/tags/service-discovery"}],readingTime:1.81,truncated:!0,authors:[{name:"\u6797\u5fd7\u714c",title:"Author",url:"https://github.com/oil-oil",image_url:"https://avatars.githubusercontent.com/u/57465570?v=4",imageURL:"https://avatars.githubusercontent.com/u/57465570?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4",imageURL:"https://avatars.githubusercontent.com/u/97138894?v=4"}],prevItem:{title:"\u5982\u4f55\u4f7f\u7528 API \u7f51\u5173 Apache APISIX \u7684 CSRF \u5b89\u5168\u63d2\u4ef6\u62e6\u622a\u8de8\u7ad9\u70b9\u4f2a\u9020\u653b\u51fb",permalink:"/zh/blog/2022/02/23/csrf-api-gateway"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff5c2.1-2.14 \u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",permalink:"/zh/blog/2022/02/17/weekly-report-0214"}},c={authorsImageUrls:[void 0,void 0]},s=[{value:"\u80cc\u666f\u4fe1\u606f",id:"\u80cc\u666f\u4fe1\u606f",children:[]},{value:"API \u7f51\u5173\u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0",id:"api-\u7f51\u5173\u57fa\u4e8e-nacos-\u5b9e\u73b0\u670d\u52a1\u53d1\u73b0",children:[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",children:[]},{value:"\u6b65\u9aa4\u4e00\uff1a\u670d\u52a1\u6ce8\u518c",id:"\u6b65\u9aa4\u4e00\uff1a\u670d\u52a1\u6ce8\u518c",children:[]},{value:"\u6b65\u9aa4\u4e8c\uff1a\u65b0\u589e Nacos \u8def\u7531",id:"\u6b65\u9aa4\u4e8c\uff1a\u65b0\u589e-nacos-\u8def\u7531",children:[]},{value:"\u6b65\u9aa4\u4e09\uff1a\u9a8c\u8bc1\u914d\u7f6e\u7ed3\u679c",id:"\u6b65\u9aa4\u4e09\uff1a\u9a8c\u8bc1\u914d\u7f6e\u7ed3\u679c",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd Apache APISIX \u57fa\u672c\u6982\u5ff5\u4ee5\u53ca\u6ce8\u518c\u4e2d\u5fc3\u7684\u4f5c\u7528\uff0c\u5e76\u4e3a\u60a8\u5c55\u793a\u4e86 API \u7f51\u5173\u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u7684\u5177\u4f53\u64cd\u4f5c\u3002")),(0,p.kt)("h2",{id:"\u80cc\u666f\u4fe1\u606f"},"\u80cc\u666f\u4fe1\u606f"),(0,p.kt)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\uff0c\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002\u5b83\u4e0d\u4ec5\u62e5\u6709\u4f17\u591a\u5b9e\u7528\u7684\u63d2\u4ef6\uff0c\u800c\u4e14\u652f\u6301\u63d2\u4ef6\u52a8\u6001\u53d8\u66f4\u548c\u70ed\u63d2\u62d4\u3002\u540c\u65f6\u5728\u4f7f\u7528\u670d\u52a1\u53d1\u73b0\u7ec4\u4ef6\u65f6\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u5229\u7528 etcd\uff0c\u4e5f\u53ef\u4ee5\u5c06 Eureka\u3001Consul \u548c Nacos \u4f5c\u4e3a\u670d\u52a1\u53d1\u73b0\u7ec4\u4ef6\u3002\u672c\u6587\u5c06\u8be6\u7ec6\u4e3a\u60a8\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u914d\u7f6e Nacos \u4f5c\u4e3a Apache APISIX API \u7f51\u5173\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u7ec4\u4ef6\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646038041730-3d9bfdd8-d2f0-41a2-84f5-cb1e1d567a86.png",alt:"error/Apache APISIX API Getway.png"})),(0,p.kt)("p",null,"\u6ce8\u518c\u4e2d\u5fc3\u662f\u670d\u52a1\u8981\u5b9e\u73b0\u670d\u52a1\u5316\u7ba1\u7406\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u7c7b\u4f3c\u4e8e\u76ee\u5f55\u670d\u52a1\u7684\u4f5c\u7528\uff0c\u4e5f\u662f\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u6700\u57fa\u7840\u7684\u8bbe\u65bd\u4e4b\u4e00\uff0c\u4e3b\u8981\u7528\u6765\u5b58\u50a8\u670d\u52a1\u4fe1\u606f\uff0c\u8b6c\u5982\u670d\u52a1\u63d0\u4f9b\u8005 URL \u3001\u8def\u7531\u4fe1\u606f\u7b49\u3002\u6ce8\u518c\u4e2d\u5fc3\u7684\u5b9e\u73b0\u662f\u901a\u8fc7\u4e00\u79cd\u6620\u5c04\u7684\u65b9\u5f0f\uff0c\u5c06\u590d\u6742\u7684\u670d\u52a1\u7aef\u4fe1\u606f\u6620\u5c04\u4e3a\u7b80\u5355\u6613\u61c2\u7684\u4fe1\u606f\u63d0\u4f9b\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,p.kt)("p",null,"\u6ce8\u518c\u4e2d\u5fc3\u7684\u6838\u5fc3\u529f\u80fd\u4e3a\u4ee5\u4e0b\u4e09\u70b9\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u670d\u52a1\u6ce8\u518c\uff1a",(0,p.kt)("strong",{parentName:"li"},"\u670d\u52a1\u63d0\u4f9b\u65b9"),"\u5411",(0,p.kt)("strong",{parentName:"li"},"\u6ce8\u518c\u4e2d\u5fc3"),"\u8fdb\u884c\u6ce8\u518c\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u670d\u52a1\u53d1\u73b0\uff1a",(0,p.kt)("strong",{parentName:"li"},"\u670d\u52a1\u6d88\u8d39\u65b9"),"\u53ef\u4ee5\u901a\u8fc7\u6ce8\u518c\u4e2d\u5fc3\u5bfb\u627e\u5230\u670d\u52a1\u63d0\u4f9b\u65b9\u7684\u8c03\u7528\u8def\u7531\u4fe1\u606f\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u5065\u5eb7\u68c0\u6d4b\uff1a\u786e\u4fdd\u6ce8\u518c\u5230\u6ce8\u518c\u4e2d\u5fc3\u7684\u670d\u52a1\u8282\u70b9\u662f\u53ef\u4ee5\u88ab\u6b63\u5e38\u8c03\u7528\u7684\uff0c\u907f\u514d\u65e0\u6548\u8282\u70b9\u5bfc\u81f4\u7684\u8c03\u7528\u8d44\u6e90\u6d6a\u8d39\u7b49\u95ee\u9898\u3002")),(0,p.kt)("p",null,"\u6ce8\u518c\u4e2d\u5fc3\u672c\u8d28\u4e0a\u662f\u4e3a\u4e86",(0,p.kt)("strong",{parentName:"p"},"\u89e3\u8026\u670d\u52a1\u63d0\u4f9b\u8005\u548c\u670d\u52a1\u6d88\u8d39\u8005"),"\uff0c\u5728\u5fae\u670d\u52a1\u4f53\u7cfb\u4e2d\uff0c\u5404\u4e2a\u4e1a\u52a1\u670d\u52a1\u4e4b\u95f4\u4f1a\u9891\u7e41\u4e92\u76f8\u8c03\u7528\uff0c\u5e76\u4e14\u9700\u8981\u5bf9\u5404\u4e2a\u670d\u52a1\u7684 IP\u3001port \u7b49\u8def\u7531\u4fe1\u606f\u8fdb\u884c\u7edf\u4e00\u7684\u7ba1\u7406\u3002\u4f46\u662f\u8981\u5982\u4f55\u8fdb\u884c\u7ba1\u7406\u5462\uff1f\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6ce8\u518c\u4e2d\u5fc3\u7684",(0,p.kt)("strong",{parentName:"p"},"\u670d\u52a1\u6ce8\u518c"),"\u529f\u80fd\u5c06\u5df2\u6709\u670d\u52a1\u7684\u76f8\u5173\u4fe1\u606f\u63d0\u4f9b\u5230\u7edf\u4e00\u7684\u6ce8\u518c\u4e2d\u5fc3\u8fdb\u884c\u7ba1\u7406\u3002"),(0,p.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u63cf\u8ff0\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3\u5230\u6ce8\u518c\u4e2d\u5fc3\u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u901a\u8fc7\u6620\u5c04\u5feb\u901f\u627e\u5230\u670d\u52a1\u548c\u670d\u52a1\u5730\u5740\u3002\u968f\u7740\u4e1a\u52a1\u66f4\u65b0\u8fed\u4ee3\uff0c\u670d\u52a1\u4f1a\u9891\u7e41\u53d1\u751f\u53d8\u5316\uff0c\u5728\u670d\u52a1\u7aef\u4e2d\u6ce8\u518c\u4e86\u65b0\u7684\u670d\u52a1\u6216\u8005\u670d\u52a1\u5b95\u673a\u540e\uff0c\u5ba2\u6237\u7aef\u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7\u6ce8\u518c\u4e2d\u5fc3\u7684",(0,p.kt)("strong",{parentName:"p"},"\u670d\u52a1\u53d1\u73b0"),"\u529f\u80fd\u62c9\u53d6\u670d\u52a1\u5217\u8868\uff0c\u5982\u679c\u6ce8\u518c\u4e2d\u5fc3\u7684\u670d\u52a1\u8282\u70b9\u53d1\u751f\u53d8\u66f4\uff0c\u6ce8\u518c\u4e2d\u5fc3\u4f1a\u53d1\u9001\u8bf7\u6c42\u901a\u77e5\u5ba2\u6237\u7aef\u91cd\u65b0\u62c9\u53d6\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u670d\u52a1\u7aef\u7684\u670d\u52a1\u7a81\u7136\u5b95\u673a\uff0c\u5e76\u4e14\u6ca1\u6709\u5411\u6ce8\u518c\u4e2d\u5fc3\u53cd\u9988\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u901a\u8fc7\u6ce8\u518c\u4e2d\u5fc3\u7684",(0,p.kt)("strong",{parentName:"p"},"\u5065\u5eb7\u68c0\u67e5"),"\u529f\u80fd\uff0c\u8fdb\u884c\u56fa\u5b9a\u65f6\u95f4\u95f4\u9694\u7684\u4e3b\u52a8\u4e0a\u62a5\u5fc3\u8df3\u65b9\u5f0f\u5411\u670d\u52a1\u7aef\u8868\u660e\u81ea\u5df1\u7684\u670d\u52a1\u72b6\u6001\u3002\u5982\u679c\u670d\u52a1\u72b6\u6001\u5f02\u5e38\uff0c\u5219\u4f1a\u901a\u77e5\u6ce8\u518c\u4e2d\u5fc3\uff0c\u6ce8\u518c\u4e2d\u5fc3\u53ef\u4ee5\u53ca\u65f6\u628a\u5df2\u7ecf\u5b95\u673a\u7684\u670d\u52a1\u8282\u70b9\u8fdb\u884c\u5254\u9664\uff0c\u907f\u514d\u8d44\u6e90\u7684\u6d6a\u8d39\u3002"),(0,p.kt)("p",null,"Apache APISIX + Nacos \u53ef\u4ee5\u5c06\u5404\u4e2a\u5fae\u670d\u52a1\u8282\u70b9\u4e2d\u4e0e\u4e1a\u52a1\u65e0\u5173\u7684\u5404\u9879\u63a7\u5236\uff0c\u96c6\u4e2d\u5728 Apache APISIX \u4e2d\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c\u5373",(0,p.kt)("strong",{parentName:"p"},"\u901a\u8fc7 Apache APISIX \u5b9e\u73b0\u63a5\u53e3\u670d\u52a1\u7684\u4ee3\u7406\u548c\u8def\u7531\u8f6c\u53d1\u7684\u80fd\u529b"),"\u3002\u5728 Nacos \u4e0a\u6ce8\u518c\u5404\u4e2a\u5fae\u670d\u52a1\u540e\uff0cApache APISIX \u53ef\u4ee5\u901a\u8fc7 Nacos \u7684\u670d\u52a1\u53d1\u73b0\u529f\u80fd\u83b7\u53d6\u670d\u52a1\u5217\u8868\uff0c\u67e5\u627e\u5bf9\u5e94\u7684\u670d\u52a1\u5730\u5740\u4ece\u800c\u5b9e\u73b0\u52a8\u6001\u4ee3\u7406\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1645433492822-5218e923-97ae-4d04-863b-3b3f901de84f.png",alt:"error/Principle Introduction.png"})),(0,p.kt)("h2",{id:"api-\u7f51\u5173\u57fa\u4e8e-nacos-\u5b9e\u73b0\u670d\u52a1\u53d1\u73b0"},"API \u7f51\u5173\u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0"),(0,p.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,p.kt)("p",null,"\u672c\u6587\u64cd\u4f5c\u57fa\u4e8e\u4ee5\u4e0b\u73af\u5883\u8fdb\u884c\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf Centos 7.9\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5 Apache APISIX 2.12.1\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,p.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/how-to-build"},"\u5982\u4f55\u6784\u5efa Apache APISIX"),"\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5 Nacos 2.0.4\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,p.kt)("a",{parentName:"li",href:"https://nacos.io/zh-cn/docs/quick-start.html"},"Nacos \u5feb\u901f\u5165\u95e8"),"\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5 Node.js\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,p.kt)("a",{parentName:"li",href:"https://github.com/nodejs/help/wiki/Installation"},"Node.js \u5b89\u88c5\u6307\u5357"),"\u3002")),(0,p.kt)("h3",{id:"\u6b65\u9aa4\u4e00\uff1a\u670d\u52a1\u6ce8\u518c"},"\u6b65\u9aa4\u4e00\uff1a\u670d\u52a1\u6ce8\u518c"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4f7f\u7528 Node.js \u7684 Koa \u6846\u67b6\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"3005")," \u7aef\u53e3\u542f\u52a8\u4e00\u4e2a\u7b80\u5355\u7684\u6d4b\u8bd5\u670d\u52a1\u4f5c\u4e3a",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/admin-api#upstream"},"\u4e0a\u6e38\uff08Upstream\uff09"),"\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-JavaScript"},"const Koa = require('koa');\nconst app = new Koa();\n\napp.use(async ctx => {\n  ctx.body = 'Hello World';\n});\n\napp.listen(3005);\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5728\u547d\u4ee4\u884c\u4e2d\u901a\u8fc7\u8bf7\u6c42 Nacos Open API \u7684\u65b9\u5f0f\u8fdb\u884c\u670d\u52a1\u6ce8\u518c\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},"curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?serviceName=APISIX-NACOS&ip=127.0.0.1&port=3005&ephemeral=false'\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u6267\u884c\u670d\u52a1\u6ce8\u518c\u540e\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2\u5f53\u524d\u670d\u52a1\u60c5\u51b5\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},"curl -X GET 'http://127.0.0.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS'\n")))),(0,p.kt)("p",null,"\u6b63\u786e\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "name": "DEFAULT_GROUP@@APISIX-NACOS",\n  "groupName": "DEFAULT_GROUP",\n  "clusters": "",\n  "cacheMillis": 10000,\n  "hosts": [\n    {\n      "instanceId": "127.0.0.1#3005#DEFAULT#DEFAULT_GROUP@@APISIX-NACOS",\n      "ip": "127.0.0.1",\n      "port": 3005,\n      "weight": 1.0,\n      "healthy": true,\n      "enabled": true,\n      "ephemeral": true,\n      "clusterName": "DEFAULT",\n      "serviceName": "DEFAULT_GROUP@@APISIX-NACOS",\n      "metadata": {},\n      "instanceHeartBeatInterval": 5000,\n      "instanceHeartBeatTimeOut": 15000,\n      "ipDeleteTimeout": 30000,\n      "instanceIdGenerator": "simple"\n    }\n  ],\n  "lastRefTime": 1643191399694,\n  "checksum": "",\n  "allIPs": false,\n  "reachProtectionThreshold": false,\n  "valid": true\n}\n')),(0,p.kt)("h3",{id:"\u6b65\u9aa4\u4e8c\uff1a\u65b0\u589e-nacos-\u8def\u7531"},"\u6b65\u9aa4\u4e8c\uff1a\u65b0\u589e Nacos \u8def\u7531"),(0,p.kt)("p",null,"\u4f7f\u7528 Apache APISIX \u63d0\u4f9b\u7684 Admin API \u521b\u5efa\u4e00\u4e2a\u65b0\u7684",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/admin-api#route"},"\u8def\u7531\uff08Route\uff09"),"\uff0cAPISIX \u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"upstream.discovery_type")," \u5b57\u6bb5\u9009\u62e9\u4f7f\u7528\u7684\u670d\u52a1\u53d1\u73b0\u7c7b\u578b\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"upstream.service_name")," \u9700\u8981\u4e0e\u6ce8\u518c\u4e2d\u5fc3\u7684\u5bf9\u5e94\u670d\u52a1\u540d\u8fdb\u884c\u5173\u8054\uff0c\u56e0\u6b64\u521b\u5efa\u8def\u7531\u65f6\u6307\u5b9a\u670d\u52a1\u53d1\u73b0\u7c7b\u578b\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"nacos"),"\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/nacos/*",\n    "upstream": {\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos"\n    }\n}\'\n')),(0,p.kt)("p",null,"\u5728\u4e0a\u8ff0\u547d\u4ee4\u4e2d\uff0c\u8bf7\u6c42\u5934 ",(0,p.kt)("inlineCode",{parentName:"p"},"X-API-KEY")," \u662f Admin API \u7684\u8bbf\u95ee token\uff0c\u53ef\u4ee5\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u6587\u4ef6\u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"apisix.admin_key.key")," \u67e5\u770b\u3002"),(0,p.kt)("p",null,"\u6dfb\u52a0\u6210\u529f\u540e\uff0c\u6b63\u786e\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "action": "set",\n  "node": {\n    "key": "\\/apisix\\/routes\\/1",\n    "value": {\n      "update_time": 1643191044,\n      "create_time": 1643176603,\n      "priority": 0,\n      "uri": "\\/nacos\\/*",\n      "upstream": {\n        "hash_on": "vars",\n        "discovery_type": "nacos",\n        "scheme": "http",\n        "pass_host": "pass",\n        "type": "roundrobin",\n        "service_name": "APISIX-NACOS"\n      },\n      "id": "1",\n      "status": 1\n    }\n  }\n}\n')),(0,p.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"upstream.discovery_args")," \u4e2d\u4f20\u9012\u5176\u4ed6\u670d\u52a1\u76f8\u5173\u53c2\u6570\u7528\u4e8e\u6307\u5b9a\u670d\u52a1\u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4\u6216\u7ec4\u522b\uff0c\u5177\u4f53\u5185\u5bb9\u53ef\u53c2\u8003",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/next/discovery/nacos/#%E5%8F%82%E6%95%B0"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,p.kt)("h3",{id:"\u6b65\u9aa4\u4e09\uff1a\u9a8c\u8bc1\u914d\u7f6e\u7ed3\u679c"},"\u6b65\u9aa4\u4e09\uff1a\u9a8c\u8bc1\u914d\u7f6e\u7ed3\u679c"),(0,p.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u53d1\u9001\u8bf7\u6c42\u81f3\u9700\u8981\u914d\u7f6e\u7684\u8def\u7531\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},"curl -i http://127.0.0.1:9080/nacos/\n")),(0,p.kt)("p",null,"\u6b63\u5e38\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Shell"},"HTTP/1.1 200 OK\nContent-Type: text/plain; charset=utf-8\nContent-Length: 11\nConnection: keep-alive\nDate: Thu, 27 Jan 2022 00:48:26 GMT\nServer: APISIX/2.12.0\n\nHello World\n")),(0,p.kt)("p",null,"\u901a\u8fc7\u793a\u4f8b\u770b\u5230\uff0cApache APISIX \u4e2d\u65b0\u589e\u7684\u8def\u7531\u5df2\u7ecf\u53ef\u4ee5\u901a\u8fc7 Nacos \u670d\u52a1\u53d1\u73b0\u627e\u5230\u6b63\u786e\u7684\u670d\u52a1\u5730\u5740\uff0c\u5e76\u6b63\u5e38\u54cd\u5e94\u3002"),(0,p.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,p.kt)("p",null,"\u672c\u6587\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u4e86\u6ce8\u518c\u4e2d\u5fc3\u7684\u6982\u5ff5\u4ee5\u53ca Apache APISIX \u5982\u4f55\u914d\u5408 Nacos \u5b9e\u73b0\u57fa\u4e8e\u670d\u52a1\u53d1\u73b0\u7684\u8def\u7531\u4ee3\u7406\u3002\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u7684\u4e1a\u52a1\u9700\u6c42\u548c\u8fc7\u5f80\u6280\u672f\u67b6\u6784\u4f7f\u7528 Apache APISIX \u4e0e Nacos\uff0c\u4ee5\u5b9e\u73b0\u63a5\u53e3\u670d\u52a1\u7684\u4ee3\u7406\u548c\u8def\u7531\u8f6c\u53d1\u7684\u80fd\u529b\u3002"),(0,p.kt)("p",null,"\u5173\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"nacos")," \u63d2\u4ef6\u7684\u66f4\u591a\u8bf4\u660e\u548c\u5b8c\u6574\u914d\u7f6e\u4fe1\u606f\uff0c\u53ef\u53c2\u8003 ",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/discovery/nacos"},"Apache APISIX \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,p.kt)("p",null,"Apache APISIX \u9879\u76ee\u76ee\u524d\u6b63\u5728\u5f00\u53d1\u5176\u4ed6\u63d2\u4ef6\u4ee5\u652f\u6301\u96c6\u6210\u66f4\u591a\u670d\u52a1\uff0c\u5982\u679c\u60a8\u5bf9\u6b64\u6709\u5174\u8da3\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"GitHub Discussions")," \u53d1\u8d77\u8ba8\u8bba\uff0c\u6216\u901a\u8fc7",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/general/subscribe-guide"},"\u90ae\u4ef6\u5217\u8868"),"\u8fdb\u884c\u4ea4\u6d41."))}m.isMDXComponent=!0}}]);