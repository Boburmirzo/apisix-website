"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22345],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,m=p["".concat(u,".").concat(d)]||p[d]||h[d]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2325:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o={title:"Forward-auth, Another Choice for Authentication Function",authors:[{name:"Zeping Bai",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","Authentication","Plugin","Ecosystem"],description:"This article describes the use of `forward-auth`, a new plugin in Apache APISIX, and provides detailed instructions on how to use this cleanly designed authentication model.",tags:["Technology","Ecosystem","Authentication"]},s=void 0,u={permalink:"/blog/2022/01/26/apisix-integrate-forward-auth-plugin",source:"@site/blog/2022/01/26/apisix-integrate-forward-auth-plugin.md",title:"Forward-auth, Another Choice for Authentication Function",description:"This article describes the use of `forward-auth`, a new plugin in Apache APISIX, and provides detailed instructions on how to use this cleanly designed authentication model.",date:"2022-01-26T00:00:00.000Z",formattedDate:"January 26, 2022",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"},{label:"Authentication",permalink:"/blog/tags/authentication"}],readingTime:3.31,truncated:!0,authors:[{name:"Zeping Bai",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4",imageURL:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Integrating Splunk HTTP Event Collector with API Gateway",permalink:"/blog/2022/02/10/splunk-apisix-integration"},nextItem:{title:"Integrating Apache APISIX with gRPC-Web",permalink:"/blog/2022/01/25/apisix-grpc-web-integration"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"Principle",id:"principle",children:[]},{value:"How to use",id:"how-to-use",children:[{value:"Step 1: Set up the authentication service",id:"step-1-set-up-the-authentication-service",children:[]},{value:"Step 2: Create a route and enable the <code>forward-auth</code> plugin",id:"step-2-create-a-route-and-enable-the-forward-auth-plugin",children:[]},{value:"Step 3: Test Requests",id:"step-3-test-requests",children:[]},{value:"Addendum: Disable the plugin",id:"addendum-disable-the-plugin",children:[]}]},{value:"Summary",id:"summary",children:[]}],h={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article describes the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"forward-auth"),", a new plugin in Apache APISIX, and provides detailed instructions on how to use this cleanly designed authentication model.")),(0,r.kt)("p",null,"Forward Auth cleverly moves the authentication and authorization logic to a dedicated external service, where the gateway forwards the user's request to the authentication service and blocks the original request and replaces the result when the authentication service responds with a non-20x status. In this way, it is possible to return a custom error or redirect the user to the authentication page if the authentication fails."),(0,r.kt)("h2",{id:"principle"},"Principle"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1643096414141-ccbc33c0-7899-445a-a2f8-b6d5341c44df.jpg",alt:"Plugin priciple"})),(0,r.kt)("p",null,"The principle and flow of the ",(0,r.kt)("inlineCode",{parentName:"p"},"forward-auth plugin")," in Apache APISIX is shown in the figure above and is summarized in the following steps."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Step 1: A request is made by the client to APISIX"),(0,r.kt)("li",{parentName:"ul"},"Step 2: APISIX makes a request to the user-configured authentication service"),(0,r.kt)("li",{parentName:"ul"},"Step 3: The authentication service responds (2xx or exception status)"),(0,r.kt)("li",{parentName:"ul"},"Step 4: Based on the authentication service response, APISIX will decide to forward the request upstream or send a rejection response directly to the client")),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("h3",{id:"step-1-set-up-the-authentication-service"},"Step 1: Set up the authentication service"),(0,r.kt)("p",null,"Suppose there is an authentication service to which the user sends a request with an Authorization request header. If this data passes authentication, a 200 status code and a response header named ",(0,r.kt)("inlineCode",{parentName:"p"},"X-User-ID")," are returned; if it does not pass authentication, the authentication status is considered expired and a 302 status code and ",(0,r.kt)("inlineCode",{parentName:"p"},"Location")," response header are returned to redirect the client to the login page."),(0,r.kt)("h3",{id:"step-2-create-a-route-and-enable-the-forward-auth-plugin"},"Step 2: Create a route and enable the ",(0,r.kt)("inlineCode",{parentName:"h3"},"forward-auth")," plugin"),(0,r.kt)("p",null,"Next, we will configure a route and enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"forward-auth")," plugin to interface the above authentication service with the upstream application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "forward-auth": {\n            "address": "http://127.0.0.1:9080/auth",\n            "request_headers": ["Authorization"],\n            "upstream_headers": ["X-User-ID"],\n            "client_headers": ["Location"]\n        }\n    },\n    "uri": "/user"\n}\'\n')),(0,r.kt)("p",null,"The above configuration details are explained."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When a request matches the current route, a request is sent to the ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," in address with the request header Authorization defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"request_headers")," (i.e., the request header configured to be forwarded by the client to the authentication service, if not set, no request header is forwarded), whereby the authentication service can confirm the user's identity."),(0,r.kt)("li",{parentName:"ul"},"If the authentication passes, the status code is 200 and returns an ",(0,r.kt)("inlineCode",{parentName:"li"},"X-User-ID")," as defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"upstream_headers")," (i.e. the request header to be forwarded upstream by the authentication service when the authentication passes, if not set, no request header is forwarded)."),(0,r.kt)("li",{parentName:"ul"},"If authentication fails, the status code is 302 and returns a ",(0,r.kt)("inlineCode",{parentName:"li"},"Location")," as defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"client_headers")," (i.e., the response header sent by the authentication service to the client if authentication fails, or no response header if it is not set).")),(0,r.kt)("h3",{id:"step-3-test-requests"},"Step 3: Test Requests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Request and send data using POST\ncurl http://127.0.0.1:9080/user \\\n    --header 'Authorization: true'\n\nHTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 28\nServer: APISIX/2.11.0\n\n{\"user_id\":\"i-am-real-user\"}\n\n# Request using GET\ncurl -i http://127.0.0.1:9080/user \\\n    --header 'Authorization: false'\n\nHTTP/1.1 302 FOUND\nServer: APISIX/2.11.0\nLocation: https://example.com/auth\n")),(0,r.kt)("h3",{id:"addendum-disable-the-plugin"},"Addendum: Disable the plugin"),(0,r.kt)("p",null,"If you have finished using the Forward Auth plugin, simply remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"forward-auth")," plugin configuration from the route configuration and save it to turn off the Forward Auth plugin on the route."),(0,r.kt)("p",null,"Thanks to the dynamic nature of Apache APISIX, there is no need to restart Apache APISIX to turn the plugin on and off."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"To get more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"forward-auth")," plugin description and full configuration list, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/next/plugins/forward-auth"},"official documentation"),". Also, if you have more complex authentication or authorization application scenarios, try using the ",(0,r.kt)("inlineCode",{parentName:"p"},"opa")," plugin, which allows for more powerful functionality in a programmable way."),(0,r.kt)("p",null,"Apache APISIX is also currently working on additional plugins to support the integration of additional services, so if you are interested, feel free to start a discussion in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"GitHub Discussion"),", or via the ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/general/subscribe-guide"},"mailing list")," to communicate."))}p.isMDXComponent=!0}}]);