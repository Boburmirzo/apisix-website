"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1279],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=l(n),d=r,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||s;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},11295:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},assets:function(){return l},toc:function(){return u},default:function(){return h}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i={title:"Stable Product Delivery with Cypress",author:"Yi Sun",authorURL:"https://github.com/LiteSun",authorImageURL:"https://avatars.githubusercontent.com/u/31329157?s=400&u=e81b4bb4db2be162c1fcac6d188f5b0f82f71920&v=4",keywords:["API Gateway","APISIX","Apache APISIX","Helm Chart"],description:"This article explains how Yi Sun, GitHub ID [@LiteSun](https://github.com/LiteSun), Apache APISIX Committer from [API7.ai](https://www.apiseven.com/), implements stable product delivery with Cypress.",tags:["Technology"]},o=void 0,c={permalink:"/blog/2021/02/08/stable-product-delivery-with-cypress",source:"@site/blog/2021/02/08/stable-product-delivery-with-cypress.md",title:"Stable Product Delivery with Cypress",description:"This article explains how Yi Sun, GitHub ID [@LiteSun](https://github.com/LiteSun), Apache APISIX Committer from [API7.ai](https://www.apiseven.com/), implements stable product delivery with Cypress.",date:"2021-02-08T00:00:00.000Z",formattedDate:"February 8, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:5.515,truncated:!0,authors:[{name:"Yi Sun",url:"https://github.com/LiteSun",imageURL:"https://avatars.githubusercontent.com/u/31329157?s=400&u=e81b4bb4db2be162c1fcac6d188f5b0f82f71920&v=4"}],prevItem:{title:"Install Apache APISIX from Helm Charts",permalink:"/blog/2021/02/26/install-apache-apisix-from-helm-charts"},nextItem:{title:"Run Ingress APISIX on Amazon EKS",permalink:"/blog/2021/01/21/run-ingress-apisix-on-amazon-eks"}},l={authorsImageUrls:[void 0]},u=[{value:"Background",id:"background",children:[]},{value:"What is Front-End E2E",id:"what-is-front-end-e2e",children:[]},{value:"Why Cypress",id:"why-cypress",children:[]},{value:"Cypress and APISIX Dashboard",id:"cypress-and-apisix-dashboard",children:[]},{value:"Summary",id:"summary",children:[]}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This article explains how Yi Sun, GitHub ID ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/LiteSun"},"@LiteSun"),", became Apache APISIX Committer from ",(0,s.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"API7.ai"),", implements stable product delivery with Cypress.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Source:"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix"},"https://github.com/apache/apisix")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard"},"https://github.com/apache/apisix-dashboard")))),(0,s.kt)("h2",{id:"background"},"Background"),(0,s.kt)("p",null,"The Apache APISIX Dashboard is designed to make it as easy as possible for users to operate Apache APISIX through a front-end interface, and since the project's inception, there have been 552 commits and 10 releases. With such rapid product iteration, it is important to ensure the quality of the open-source product. For this reason, we have introduced an E2E testing module to ensure stable product delivery."),(0,s.kt)("h2",{id:"what-is-front-end-e2e"},"What is Front-End E2E"),(0,s.kt)("p",null,'E2E, which stands for "End to End", can be translated as "end-to-end" testing. It mimics user behavior, starting with an entry point and executing actions step-by-step until a job is completed. Sound testing prevents code changes from breaking the original logic.'),(0,s.kt)("h2",{id:"why-cypress"},"Why Cypress"),(0,s.kt)("p",null,"We used Taiko, Puppeteer, TestCafe, and Cypress to write test cases for creating routes during the selection research period, and we used each testing framework to write cases to experience their respective features."),(0,s.kt)("p",null,"Taiko is characterized by smart selector, which can intelligently locate the elements that you want to operate based on text content and location relations, and has a low start-up cost, so you can finish the test cases quickly. However, it is not user-friendly when writing test cases. When the user exits the terminal by mistake, all the written test cases are lost, and if you want to run a complete test case, you need to use it together with other test runners, which undoubtedly increases the learning cost for the user."),(0,s.kt)("p",null,"Puppeteer has the best performance. However, testing is not the focus of Puppeteer. It is widely used for web crawlers. Our project started with Puppeteer, the official E2E testing framework recommended by ANTD, and after using it for a while we found that Puppeteer did not look so friendly to non-front-end developers and it was hard to get other users involved. When users write test cases, the lack of intelligent element positioning makes the learning curve very high."),(0,s.kt)("p",null,"TestCafe is surprisingly easy to install, it has a built-in waiting mechanism so that users don't have to actively sleep waiting for page interactions, and it supports concurrent multi-browser testing, which is helpful for multi-browser compatibility testing. The disadvantage is that its debugging process is not so user-friendly, and you have to run a new use case after each test case change. For the developers, they need to have some basic Javascript syntax. Secondly, its running speed is relatively slow for several other frameworks, especially when executing withText () to find elements."),(0,s.kt)("p",null,"After a comprehensive comparison, we finally chose Cypress as our front-end E2E framework, listing four main reasons:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Simple syntax")),(0,s.kt)("p",null,"The syntax used in Cypress tests is very simple and easy to read and write. With a little practice, you can master creating test cases, which is important for open source projects because it allows the community interested in E2E test cases to participate in writing test cases with minimal learning cost."),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Easy debugging")),(0,s.kt)("p",null,"When debugging test cases, we can use Cypress's Test Runner, which presents multi-dimensional data that allows us to quickly pinpoint the problem."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Showing the status of the test case execution, including the number of successes, failures, and runs in progress."),(0,s.kt)("li",{parentName:"ul"},"Displaying the total time spent on the execution of the entire test set."),(0,s.kt)("li",{parentName:"ul"},"A built-in Selector Playground to help locate elements."),(0,s.kt)("li",{parentName:"ul"},"shows each step of execution for each use case and forms a snapshot that can show information about each execution step after it is completed.")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Active community")),(0,s.kt)("p",null,"Cypress has a large community of users, and there are always many people inside the community sharing their experiences and ideas."),(0,s.kt)("p",null,"This is helpful when encountering problems, and you are likely to encounter problems that others have encountered before. Also, when new features are requested, we can participate in the community by discussing and adding features to Cypress that we want to add, just like we do in the APISIX community: listening to the community and feeding it back."),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Clear documentation")),(0,s.kt)("p",null,"Cypress's documentation structure is clearer and more comprehensive. In the early stages of use, we were able to quickly introduce Cypress into our project and write our first case based on the official documentation guidelines. In addition, there is a large amount of documentation available on the documentation site that gives users good guidance on what is best practice."),(0,s.kt)("h2",{id:"cypress-and-apisix-dashboard"},"Cypress and APISIX Dashboard"),(0,s.kt)("p",null,"There are currently 49 test cases written for the APISIX Dashboard. We configured the corresponding CI in GitHub Action to ensure that the code passes before each merge to ensure code quality. We share the use of Cypress in APISIX Dashboard with you by referring to Cypress best practices and combining them with our project."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202102/image.png",alt:"image"})),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Commonly used functions are encapsulated into commands."),(0,s.kt)("p",{parentName:"li"},"Take login as an example, login is an essential part of entering the system, so we encapsulate it as a command, so that the login command can be called before each case run."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-javaScript"},'Cypress.Commands.add("login", () => {\n  cy.request(\n    "POST",\n    \'http://127.0.0.1/apisix/admin/user/login\',\n    {\n      username: "user",\n      password: "user",\n    }\n  ).then((res) => {\n    expect(res.body.code).to.equal(0);\n    localStorage.setItem("token", res.body.data.token);\n  });\n});\n')),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-javaScript"},"beforeEach(() => {\n  // init login\n  cy.login();\n})\n")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\n2. Extract the selector and data as public variables.\n\nTo make it more intuitive for the user to understand the meaning of the test code, we extract a selector and data as public variables.\n\n```javaScript\n\xa0 const data = {\n\xa0 \xa0 name: 'hmac-auth',\n\xa0 \xa0 deleteSuccess: 'Delete Plugin Successfully',\n\xa0 };\n\xa0 const domSelector = {\n\xa0 \xa0 tableCell: '.ant-table-cell',\n\xa0 \xa0 empty: '.ant-empty-normal',\n\xa0 \xa0 refresh: '.anticon-reload',\n\xa0 \xa0 codemirror: '.CodeMirror',\n\xa0 \xa0 switch: '#disable',\n\xa0 \xa0 deleteBtn: '.ant-btn-dangerous',\n\xa0 };\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Remove cy.wait(someTime)")),(0,s.kt)("p",null,"We used cy.wait(someTime) in the early days of Cypress, but found that cy.wait(someTime) relies too much on the network environment and the performance of the test machine, which can cause test cases to report errors when the network environment or machine performance is poor. The recommended practice is to use it in conjunction with cy.intercept() to explicitly specify the network resources to wait for."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'cy.intercept("https://apisix.apache.org/").as("fetchURL");\ncy.wait("@fetchURL");\n')),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"At present, APISIX Dashboard has written 49 test cases. In the future, we will continue to enhance the front-end E2E coverage, and require the community to agree to write test cases for each new feature or bugfix submission to ensure the stability of the product."),(0,s.kt)("p",null,"Welcome to join us to polish the world-class gateway product."),(0,s.kt)("p",null,"Project repository: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"https://github.com/apache/apisix-dashboard")))}h.isMDXComponent=!0}}]);