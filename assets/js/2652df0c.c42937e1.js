"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85210],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?t.createElement(m,i(i({ref:r},u),{},{components:n})):t.createElement(m,i({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26877:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i={title:"Build an image from the source codes"},c=void 0,l={unversionedId:"build",id:"version-apisix-dashboard-2.10.1/build",isDocsHomePage:!1,title:"Build an image from the source codes",description:"\x3c!--",source:"@site/docs-apisix-docker_versioned_docs/version-apisix-dashboard-2.10.1/build.md",sourceDirName:".",slug:"/build",permalink:"/docs/docker/apisix-dashboard-2.10.1/build",editUrl:null,tags:[],version:"apisix-dashboard-2.10.1",frontMatter:{title:"Build an image from the source codes"},sidebar:"version-apisix-dashboard-2.10.1/docs",next:{title:"Deploy Apache APISIX with Docker",permalink:"/docs/docker/apisix-dashboard-2.10.1/manual"}},s=[{value:"Build an image from source",id:"build-an-image-from-source",children:[]}],u={toc:s};function p(e){var r=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"build-an-image-from-source"},"Build an image from source"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Docker images are not official ASF releases but provided for convenience. Recommended usage is always to build the source.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"install release version (Apache releases are beginning from version 0.9):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Assign Apache release version number to variable `APISIX_VERSION`, for example: 2.2. The latest version can be find at `https://github.com/apache/apisix/releases`\n\nexport APISIX_VERSION=2.9\nmake build-on-alpine\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"install master branch version, which has latest code(ONLY for the developer's convenience):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export APISIX_VERSION=master\nmake build-on-alpine\n")))}p.isMDXComponent=!0}}]);