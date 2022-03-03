"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31507],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,g=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33546:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o={title:"APISIX"},l=void 0,c={unversionedId:"architecture-design/apisix",id:"version-2.11/architecture-design/apisix",isDocsHomePage:!1,title:"APISIX",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.11/architecture-design/apisix.md",sourceDirName:"architecture-design",slug:"/architecture-design/apisix",permalink:"/docs/apisix/2.11/architecture-design/apisix",editUrl:null,tags:[],version:"2.11",frontMatter:{title:"APISIX"},sidebar:"version-2.11/docs",next:{title:"Route",permalink:"/docs/apisix/2.11/architecture-design/route"}},p=[{value:"Plugin Loading Process",id:"plugin-loading-process",children:[]},{value:"Plugin Hierarchy Structure",id:"plugin-hierarchy-structure",children:[]},{value:"Configure APISIX",id:"configure-apisix",children:[]}],u={toc:p};function s(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"plugin-loading-process"},"Plugin Loading Process"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.11/docs/assets/images/flow-load-plugin.png",alt:"flow-load-plugin"})),(0,a.kt)("h2",{id:"plugin-hierarchy-structure"},"Plugin Hierarchy Structure"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.11/docs/assets/images/flow-plugin-internal.png",alt:"flow-plugin-internal"})),(0,a.kt)("h2",{id:"configure-apisix"},"Configure APISIX"),(0,a.kt)("p",null,"There are two methods to configure APISIX: directly change ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", or add file path argument using ",(0,a.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," flag when start APISIX like ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix start -c <path string>")),(0,a.kt)("p",null,"For example, set the default listening port of APISIX to 8000, and keep other configurations as default. The configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," should be like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  node_listen: 8000 # APISIX listening port\n")),(0,a.kt)("p",null,"Set the default listening port of APISIX to 8000, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," address to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://foo:2379"),",\nand keep other configurations as default. The configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," should be like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  node_listen: 8000 # APISIX listening port\n\netcd:\n  host: "http://foo:2379" # etcd address\n')),(0,a.kt)("p",null,"Other default configurations can be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," file, which is bound to the APISIX source code. ",(0,a.kt)("strong",{parentName:"p"},"Never")," manually modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," file. If you need to customize any configuration, you should update the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX")," will generate ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf")," file automatically, so please ",(0,a.kt)("em",{parentName:"p"},"DO NOT EDIT")," ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf")," file too."))}s.isMDXComponent=!0}}]);