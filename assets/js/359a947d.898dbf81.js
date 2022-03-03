"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68038],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98450:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i={title:"The first GA release of Apache APISIX Ingress Controller v1.0 is now available!",slug:"/blog/2021/06/18/first-ga-version-v1.0-of-apache-apisix-ingress-controller-released",author:"Jintao Zhang",authorURL:"https://github.com/tao12345666333",authorImageURL:"https://avatars.githubusercontent.com/u/3264292?v=4",keywords:["APISIX","Apache APISIX","Ingress Controller"],description:"Apache APISIX Ingress Controller v1.0 has been released, supporting the use of custom resources including ApisixRoute and ApisixUpstream, as well as Kubernetes native Ingress resources to control external traffic access to services deployed in Kubernetes.",tags:["Release"]},s=void 0,l={permalink:"/blog/blog/2021/06/18/first-ga-version-v1.0-of-apache-apisix-ingress-controller-released",source:"@site/blog/2021/06/18/first-GA-version-v1.0-of-Apache-APISIX-Ingress-Controller-released.md",title:"The first GA release of Apache APISIX Ingress Controller v1.0 is now available!",description:"Apache APISIX Ingress Controller v1.0 has been released, supporting the use of custom resources including ApisixRoute and ApisixUpstream, as well as Kubernetes native Ingress resources to control external traffic access to services deployed in Kubernetes.",date:"2021-06-18T00:00:00.000Z",formattedDate:"June 18, 2021",tags:[{label:"Release",permalink:"/blog/tags/release"}],readingTime:2.775,truncated:!0,authors:[{name:"Jintao Zhang",url:"https://github.com/tao12345666333",imageURL:"https://avatars.githubusercontent.com/u/3264292?v=4"}],prevItem:{title:"How to Write an Apache APISIX Plugin in Java",permalink:"/blog/blog/2021/06/21/use-java-to-write-apache-apisix-plugins"},nextItem:{title:"Apache APISIX Dashboard Access Control Bypass Vulnerability Advisory (CVE-2021-33190)",permalink:"/blog/blog/2021/06/17/apache-apisix-dashboard-access-control-bypass-vulnerability-announcement"}},c={authorsImageUrls:[void 0]},u=[{value:"About Apache APISIX Ingress Controller",id:"about-apache-apisix-ingress-controller",children:[]},{value:"v1.0 latest features",id:"v10-latest-features",children:[{value:"Add ApisixConsumer custom resource to make configuration authentication more convenient",id:"add-apisixconsumer-custom-resource-to-make-configuration-authentication-more-convenient",children:[]},{value:"Adding mTLS support to ApisixTls",id:"adding-mtls-support-to-apisixtls",children:[]},{value:"Added more annotations to the native Ingress resource to enrich its functionality",id:"added-more-annotations-to-the-native-ingress-resource-to-enrich-its-functionality",children:[]}]},{value:"Why use APISIX Ingress Controller",id:"why-use-apisix-ingress-controller",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apache APISIX Ingress Controller v1.0 has been released, supporting the use of custom resources including ",(0,o.kt)("inlineCode",{parentName:"p"},"ApisixRoute"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ApisixUpstream"),", and Kubernetes native Ingress resources to control external traffic access to services deployed in Kubernetes. services deployed in Kubernetes.")),(0,o.kt)("h2",{id:"about-apache-apisix-ingress-controller"},"About Apache APISIX Ingress Controller"),(0,o.kt)("p",null,"The Apache APISIX Ingress Controller is a cloud-native Ingress Controller implementation that uses Apache APISIX as a data plane to carry traffic and extends Kubernetes using CRD."),(0,o.kt)("p",null,"Supports controlling external traffic access to services deployed in Kubernetes using custom resources including ApisixRoute, ApisixUpstream, and Kubernetes-native Ingress resources."),(0,o.kt)("p",null,"The overall architecture is as follows."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639464578081-06d7c64a-b597-444f-a59f-0217676e1ffc.png",alt:"Apache APISIX Ingress Controller Architecture Diagram"})),(0,o.kt)("h2",{id:"v10-latest-features"},"v1.0 latest features"),(0,o.kt)("h3",{id:"add-apisixconsumer-custom-resource-to-make-configuration-authentication-more-convenient"},"Add ApisixConsumer custom resource to make configuration authentication more convenient"),(0,o.kt)("p",null,"In the previous version, if you want to configure keyAuth or basicAuth, you need to manually call Apache APISIX admin api to create consumer configuration."),(0,o.kt)("p",null,"In v1.0, we added the ",(0,o.kt)("inlineCode",{parentName:"p"},"ApisixConsumer")," resource, which allows users to define consumer resources and configure authentication for ApisixRoute in a more native way."),(0,o.kt)("p",null,"For example, a keyAuth resource is defined with the following configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixConsumer\nmetadata:\n  name: keyauth\nspec:\n  authParameter:\n    keyAuth:\n      value:\n        key: API\n")),(0,o.kt)("p",null,"In ApisixRoute you only need to add the corresponding type of ",(0,o.kt)("inlineCode",{parentName:"p"},"authentication")," configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixRoute\nmetadata:\n  name: httpbin-route\nspec:\n  http:\n   ...\n   authentication:\n     enable: true\n     type: keyAuth\n")),(0,o.kt)("h3",{id:"adding-mtls-support-to-apisixtls"},"Adding mTLS support to ApisixTls"),(0,o.kt)("p",null,"In v1.0 we also added mTLS support for ApisixTls custom resources, just add the client configuration to the ApisixTls resource configuration, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixTls\nmetadata:\n  name: sample-tls\nspec:\n  ...\n  client:\n    ... client: caSecret:\n      name: client-ca-secret\n      namespace: default\n")),(0,o.kt)("h3",{id:"added-more-annotations-to-the-native-ingress-resource-to-enrich-its-functionality"},"Added more annotations to the native Ingress resource to enrich its functionality"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/blocklist-source-range")," to restrict the source IP."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/rewrite-target")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/rewrite-target-regex")," to perform target rewrite operations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/http-to-https")," to perform HTTP to HTTPS forced redirects.")),(0,o.kt)("p",null,"See the project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/master/CHANGELOG.md"},"CHANGELOG")," for more feature changes."),(0,o.kt)("h2",{id:"why-use-apisix-ingress-controller"},"Why use APISIX Ingress Controller"),(0,o.kt)("p",null,"Apache APISIX Ingress Controller uses Apache APISIX as its data plane to carry business traffic, so it inherits the following advantages from Apache APISIX."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"High Performance & Stability"),": Apache APISIX is a cloud-native high-performance dynamic API gateway that has been used in many enterprise large-scale traffic scenarios, and its performance and stability have been tested for a long time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Rich ecology"),": Apache APISIX is currently the most active open source gateway project, as the top project of Apache, both the community activity and its plug-in ecology are very rich, can meet the user's multiple use scenarios and needs.")),(0,o.kt)("p",null,"In addition, because APISIX Ingress Controller also has the following unique advantages."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Good compatibility"),": supports multiple Ingress resource versions and works fine in different Kubernetes versions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dynamic updates"),": Both Ingress resources and configuration updates such as certificates are hot loaded without reload, ensuring smooth business operation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Flexible Scalability"),": Since APISIX Ingress Controller adopts the architecture of separate control plane and data plane, the data plane cluster of Apache APISIX can be scaled up separately without scaling up Apache APISIX Ingress Controller."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Operation and Maintenance Friendly"),": Under the current architecture, users can choose to deploy the dataplane Apache APISIX cluster in a Kubernetes cluster or in a physical machine environment as the case may be. And Apache APISIX Ingress Controller failure will not have any impact on business traffic.")))}d.isMDXComponent=!0}}]);