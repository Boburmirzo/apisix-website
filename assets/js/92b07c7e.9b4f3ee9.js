"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98411],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16479:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o={title:"APISIX"},l=void 0,c={unversionedId:"architecture-design/apisix",id:"architecture-design/apisix",isDocsHomePage:!1,title:"APISIX",description:"\x3c!--",source:"@site/docs/apisix/architecture-design/apisix.md",sourceDirName:"architecture-design",slug:"/architecture-design/apisix",permalink:"/docs/apisix/next/architecture-design/apisix",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/architecture-design/apisix.md",tags:[],version:"current",frontMatter:{title:"APISIX"},sidebar:"docs",next:{title:"Route",permalink:"/docs/apisix/next/architecture-design/route"}},s=[{value:"Apache APISIX : Software Architecture",id:"apache-apisix--software-architecture",children:[]},{value:"Plugin Loading Process",id:"plugin-loading-process",children:[]},{value:"Plugin Hierarchy Structure",id:"plugin-hierarchy-structure",children:[]},{value:"Configuring APISIX",id:"configuring-apisix",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"apache-apisix--software-architecture"},"Apache APISIX : Software Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/flow-software-architecture.png",alt:"flow-software-architecture"})),(0,a.kt)("h2",{id:"plugin-loading-process"},"Plugin Loading Process"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/flow-load-plugin.png",alt:"flow-load-plugin"})),(0,a.kt)("h2",{id:"plugin-hierarchy-structure"},"Plugin Hierarchy Structure"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/flow-plugin-internal.png",alt:"flow-plugin-internal"})),(0,a.kt)("h2",{id:"configuring-apisix"},"Configuring APISIX"),(0,a.kt)("p",null,"Apache APISIX can be configured in two ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"By directly changing ",(0,a.kt)("inlineCode",{parentName:"li"},"conf/config.yaml"),"."),(0,a.kt)("li",{parentName:"ol"},"Using the ",(0,a.kt)("inlineCode",{parentName:"li"},"--config")," or the ",(0,a.kt)("inlineCode",{parentName:"li"},"-c")," flag to pass in the file path of your config file while starting APISIX (",(0,a.kt)("inlineCode",{parentName:"li"},"apisix start -c <path to config file>"),").")),(0,a.kt)("p",null,"Configurations can be added to this YAML file and Apache APISIX will fall back to the default configurations for anything that is not configured in this file."),(0,a.kt)("p",null,"For example, to set the default listening port to 8000 while keeping other configurations as default, your configuration file (",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml"),") would look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  node_listen: 8000 # APISIX listening port\n")),(0,a.kt)("p",null,"Similarly, to set the listening port to 8000 and set the etcd address to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://foo:2379")," while keeping other configurations as default, your configuration file would look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  node_listen: 8000 # APISIX listening port\n\netcd:\n  host: "http://foo:2379" # etcd address\n')),(0,a.kt)("p",null,"Default configurations of APISIX can be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": This file is bound to the APISIX source code and should ",(0,a.kt)("strong",{parentName:"p"},"NOT")," be modified. The configuration should only be changed by the methods mentioned above."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf")," file is automatically generated by APISIX and should ",(0,a.kt)("strong",{parentName:"p"},"NOT")," be edited."))}u.isMDXComponent=!0}}]);