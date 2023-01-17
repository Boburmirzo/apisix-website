---
title: "Manage serverless APIs with Apache APISIX"
authors:
  - name: Bobur Umurzokov
    title: Author
    url: https://github.com/Boburmirzo
    image_url: https://avatars.githubusercontent.com/u/14247607
keywords: 
- API Gateway
- Apache APISIX
- Serverless
- Azure
- Functions
description: This article shows with the simple example how to manage Java-based serverless APIs with Apache APISIX.
tags: [Case Studies]
image: https://static.apiseven.com/uploads/2023/01/17/AHmMpXgc_Manage%20serverless%20APIs%20with%20Apache%20APISIX.png
---

> Serverless computing enables developers to build applications faster by eliminating the need for them to manage infrastructure. With serverless APIs in the cloud, the cloud service provider automatically provisions, scales, and manages the infrastructure required to run the code. In this article, you will learn how to integrate [Apache APISIX API Gateway](https://apisix.apache.org/) with [Azure functions](https://azure.microsoft.com/en-in/products/functions/) to manage **Java-based serverless APIs**.

<!--truncate-->

### Learning objectives

You will learn the following throughout the article:

- What serverless APIs?
- The role of API Gateway in managing complex serverless API traffic.
- How to set up Apache APISIX Gateway.
- How to build serverless APIs with Azure Functions.
- How to expose serverless APIs as upstream services.
- How to secure serverless APIs with APISIX authentication plugins.
- How to apply rate-limiting policies.

> Apache APISIX offers [additional plugins](https://apisix.apache.org/docs/apisix/plugins/serverless/) that can be used with other serverless solutions like [AWS Lambda](https://aws.amazon.com/lambda/).

Before we get started with the practical side of the tutorial, let's go through some concepts.

## What serverless APIs?

[Serverless APIs](https://www.koombea.com/blog/serverless-apis/) are the same as traditional APIs, except they utilize a serverless backend. For businesses and developers, serverless computing means they no longer have to worry about server **maintenance or scaling** server resources to meet user demands.  Also, serverless APIs **avoid the issue of scaling** because they create server resources every time a request is made. Serverless APIs **reduce latency** because they are hosted on an origin server. Last but not least serverless computing is far more **cost-efficient** than the traditional alternative such as building entire [microservices](https://www.ideamotive.co/blog/serverless-vs-microservices-architecture#:~:text=Serverless%20vs%20Microservices%20%E2%80%93%20Main%20Differences,can%20host%20microservices%20on%20serverless.).

## Serverless APIs using Azure function

An [Azure Function](https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview) is a simple way of running small pieces of code in the cloud. You don’t have to worry about the infrastructure required to host that code. You can write the Function in _C#, Java, JavaScript, PowerShell, Python,_ or any of the languages that are listed in the [supported languages](https://learn.microsoft.com/en-us/azure/azure-functions/supported-languages).

With Azure Functions, you can rapidly build HTTP APIs for your web apps without the headache of web frameworks. Azure Functions is serverless, so you're only charged when an HTTP endpoint is called. When the endpoints aren't being used, you aren't being charged. These two things combined make serverless platforms like Azure Functions an ideal choice for APIs where you experience unexpected spikes in traffic.

## API Gateway for serverless APIs traffic management

An [API Gateway](https://apisix.apache.org/docs/apisix/terminology/api-gateway/) is the fundamental part of serverless API because it is responsible for the connection between a defined API and the function handling requests to that API. There are many benefits of API Gateway in the serverless-based APIs architecture. In addition to API Gateway’s Primary edge functionalities such as **authentication, rate throttling, observability, caching**, and so on, it is capable of **invoking serverless APIs**, **subscribing to events**, then processing them using callbacks and **forward authentication requests** to external authorization services with completely custom serverless function logic.

## Manage serverless APIs with Apache APISIX demo

With enough theoretical knowledge in mind, now we can jump into a practical session. We use an example project repo [apisix-manage-serverless-apis](https://github.com/Boburmirzo/apisix-manage-serverless-apis) hosted on GitHub. You can find the source code and sample curl commands we use in this tutorial.

For our mini-project, we’ll work with two simple Azure functions written in Java that simulates our serverless APIs for [Product](https://github.com/Boburmirzo/apisix-manage-serverless-apis/tree/main/upstream/src/main/java/com/function/products) and [Review](https://github.com/Boburmirzo/apisix-manage-serverless-apis/tree/main/upstream/src/main/java/com/function/reviews) services.

### Prerequisites

- Must be familiar with fundamental API concepts
- Must have a working knowledge of Azure Functions, for example [this learning module](https://learn.microsoft.com/en-us/training/modules/build-api-azure-functions/1-introduction) shows how to build an HTTP API using the Azure Functions extension for Visual Studio Code.
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Azure Account](https://azure.microsoft.com/en-us/free/)
- [Azure CLI](https://docs.microsoft.com/cli/azure/install-azure-cli)
- [Java Developer Kit](https://aka.ms/azure-jdks), at least version 8
- [Maven](https://maven.apache.org)
- [Azure Functions Core Tools](https://www.npmjs.com/package/azure-functions-core-tools)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Azure Functions Core Tools (min. version 2.6.666)](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Ccsharp%2Cportal%2Cbash#install-the-azure-functions-core-tools)
- [Azure Functions extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)

### Set up the project

This first thing you clone the project repo from GitHub:

```bash
git clone https://github.com/Boburmirzo/apisix-manage-serverless-apis.git
```

Open the project folder in your favorite code editor. The tutorial leverages [VS Code](https://code.visualstudio.com/).

#### Run Apache APISIX

To run Apache APISIX and Azure functions locally, you can follow these steps:

Open a new terminal window and run `docker compose up` command from the root folder of the project:

```bash
docker compose up -d
```

Above command will run Apache APISIX and etcd together with Docker. For example, if Docker desktop installed on your machine, you can see running containers there:

![Apisix is running on Docker](https://static.apiseven.com/uploads/2023/01/16/syu25RaG_manage-serverless-apis-1.png)

> We installed APISIX on our local environment in this demo but you can also deploy it to Azure and run it on [Azure Container Instance](https://learn.microsoft.com/en-us/azure/container-instances/). See the [following tutorial](https://dev.to/apisix/run-apache-apisix-on-microsoft-azure-container-instance-1gdk).

#### Run Azure functions

Then, navigate to `/upstream` folder:

``` bash
mvn clean install
mvn azure-functions:run
```

The two functions will start in a terminal window. You can request both serverless APIs in your browser:

For example:

![Products Serverless API](https://static.apiseven.com/uploads/2023/01/16/OjTvnXIO_manage-serverless-apis-2.png)

![Reviews Serverless API](https://static.apiseven.com/uploads/2023/01/16/OSJgCWcu_manage-serverless-apis-3.png)

#### Deploy Azure functions

Next, we deploy functions code to Azure Function App by running below cmd:

``` bash
mvn azure-functions:deploy
```

Or you can simply follow this tutorial on [how to deploy the function project to Azure](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-java?tabs=bash%2Cazure-cli%2Cbrowser#deploy-the-function-project-to-azure)

> Note that the function app name is randomly generated based on your `artifactId`, appended with a randomly generated number. In the tutorial cmds, the function app name `serverless-apis` is mentioned.

Just to make sure our function works, we can test an invocation call directly requesting it URL in the browser:

``` bash
https://serverless-apis.azurewebsites.net/api/products
https://serverless-apis.azurewebsites.net/api/reviews
```

### Exposing serverless APIs in APISIX

Once the set up is complete, now we will expose serverless Azure function APIs as upstream services in APISIX. To do so, we need to create a new [Route](https://apisix.apache.org/docs/apisix/terminology/route/) with `azure-function` plugin enabled for both `products` and `reviews` serverless backend APIs.

If `azure-function` plugin is enabled on a route, APISIX listens for requests on that route’s path, and then it invokes the remote Azure Function code with the parameters from that request.

#### Create a Route for Products

To create a route for Products function, run the following command:

```bash
curl http://127.0.0.1:9180/apisix/admin/routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "name": "Create a route with Azure function plugin",
    "plugins": {
        "azure-functions": {
            "function_uri": "https://serverless-apis.azurewebsites.net/api/products",
            "ssl_verify": false
        }
    },
    "uri": "/products"
}'
```

> Note that we set `ssl_verify` attribute of `azure-functions` plugin to `false` to disable SSL verification for only the demo purpose. You can also enable it to perform more secure requests from APISIX to Azure Functions. Learn other [configuration parameters](https://apisix.apache.org/docs/apisix/plugins/azure-functions/#attributes).

#### Test with a curl request

We can use curl to send a request, seeing if APISIX listens on the path correctly and forwards the request to the upstream service successfully:

```bash
curl -i -XGET http://127.0.0.1:9080/products
HTTP/1.1 200 OK
[
  {
    "id": 1,
    "name": "Product1",
    "description": "Description1"
  },
  {
    "id": 2,
    "name": "Product2",
    "description": "Description2"
  }
]
```

Great! We got response from the actual serverless API on Azure Function.

Next, we will make similar configuration for `reviews` function.

#### Create a Route for Reviews and test

Create the second route with Azure function plugin enabled:

```bash
curl http://127.0.0.1:9180/apisix/admin/routes/2 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "plugins": {
        "azure-functions": {
            "function_uri": "https://serverless-apis.azurewebsites.net/api/reviews",
            "ssl_verify": false
        }
    },
    "uri": "/reviews"
}'
```

Test serverless API response:

```bash
curl -i -XGET http://127.0.0.1:9080/reviews
```

In this section, we introduced the new route and added `azure-functions` plugin to our serverless APIs so that APISIX can invoke remote Azure functions and manage the traffic. In the following sections, we will learn how to authenticate API consumers and apply runtime policies like rate-limiting.  

### Secure serverless APIs with APISIX authentication plugins

Up to now, our serverless APIs are public and accessible by unauthorized users. In this section, we will enable the authentication feature to disallow unauthorized requests to serverless APIs.

Apache APISIX can verify the identity associated with API requests through credential and token validation. Also, it is capable of determining which traffic is authorized to pass through the API to backend services. You can check all available [authentication plugins](https://apisix.apache.org/docs/apisix/plugins/key-auth/).

Let's create a new consumer for our serverless APIs and add [basic-auth](https://apisix.apache.org/docs/apisix/plugins/basic-auth/) plugin for the existing route so that only allowed user can access them.

#### Create a new consumer for serverless APIs

The below command will create our new consumer with its credentials such as username and password:

```bash
curl http://127.0.0.1:9180/apisix/admin/consumers -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "username": "consumer1",
    "plugins": {
        "basic-auth": {
            "username": "username1",
            "password": "password1"
        }
    }
}
```

#### Add basic auth plugin to the existing Products and Services routes.

Now we configure `basic-auth` plugin for routes to let APISIX check the request header with the API consumer credentials each time APIs are called:

```bash
curl http://127.0.0.1:9180/apisix/admin/routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "name": "Create a route with Azure function plugin",
    "plugins": {
        "azure-functions": {
            "function_uri": "https://serverless-apis.azurewebsites.net/api/products",
            "ssl_verify": false
        }, 
        "basic-auth": {}
    },
    "uri": "/products"
}'
```

```bash
curl http://127.0.0.1:9180/apisix/admin/routes/2 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "plugins": {
        "azure-functions": {
            "function_uri": "https://serverless-apis.azurewebsites.net/api/reviews",
            "ssl_verify": false
        },
        "basic-auth": {}
    },
    "uri": "/reviews"
}'
```

#### Test basic auth plugin

Now if we request the serverless APIs without user credentials in the header, we will get an unauthorized error:

```
curl -i http://127.0.0.1:9080/products
HTTP/1.1 401 Unauthorized

{"message":"Missing authorization in request"}
```

The result is as we expected. But if we provide the correct user credentials in the request and access the same endpoint, it should work well:

```bash
curl -i -u username1:password1 http://127.0.0.1:9080/products
HTTP/1.1 200 OK
```

We have validated the client’s identity attempting to request serverless APIs by using basic authentication plugin with the help of Apache APISIX.

### Apply rate limiting policies for serverless APIs

In this section, we will protect serverless APIs from abuse by applying a throttling policy. In Apache APISIX Gateway we can apply rate limiting to restrict the number of incoming calls.

#### Apply and test the rate-limit policy

With the existing route configurations for Products and Reviews functions selected, we can apply a rate-limit policy with [limit-count](https://apisix.apache.org/docs/apisix/plugins/limit-count/) plugin to protect our API from abnormal usage. We will limit the number of API calls to 2 per 60s per API consumer.

To enable `limit-count` plugin for the existing Products route, we need to add the plugin to plugins attribute in our Json route configuration:

```bash
curl http://127.0.0.1:9180/apisix/admin/routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "name": "Create a route with Azure function plugin",
    "plugins": {
        "azure-functions": {
            "function_uri": "https://serverless-apis.azurewebsites.net/api/products",
            "ssl_verify": false
        },
        "basic-auth": {},
        "limit-count": {
            "count": 2,
            "time_window": 60,
            "rejected_code": 403,
            "rejected_msg": "Requests are too frequent, please try again later."
        }
    },
    "uri": "/products"
}'
```

Apache APISIX will handle the first two requests as usual. However, a third request in the same period will return a `403 HTTP Forbidden` code with our custom error message:

```
HTTP/1.1 403 Forbidden

{"error_msg":"Requests are too frequent, please try again later."}
```

## Next steps

In this article, we learned step by step how to create Java-based serverless APIs with Azure Functions and Apache APISIX Gateway to manage your APIs throughout their full lifecycle from the exposing serverless APIs as upstream services in APISIX to properly secure and apply rate-limiting to limit the number of requests. This opens the doors to other use-cases of API Gateway and serverless APIs integration.

You can explore other capabilities of APISIX Gateway by chaining of various [built-in plugins](https://apisix.apache.org/plugins/) to transform requests, [monitor the availability](https://dev.to/apisix/apis-observability-with-apache-apisix-plugins-1bnm), performance, and usage of our serverless APIs, [cache API responses](https://apisix.apache.org/blog/2022/12/14/web-caching-server/) and further evolve them by [versioning APIs](https://blog.frankel.ch/evolve-apis/#:~:text=Joe%0AHello%20Joe-,Version%20the%20API,-Evolving%20an%20API) that helps you to reduce development time, increase scalability, and cost savings.

Apache APISIX is fully open-source API Gateway solution. If you require to have more advanced API management features for serverless APIs, you can use [API7 Enterprise](https://api7.ai/apisix-vs-api7) or [API7 Cloud](https://api7.ai/cloud) which are powered by APISIX.

### Related resources

- [Azure Functions](https://azure.microsoft.com/en-in/products/functions/).

- [Build Serverless APIs with Azure Functions](https://learn.microsoft.com/en-us/training/modules/build-api-azure-functions/).

- [Create a Java function in Azure using Visual Studio Code](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-java).

- [Run Apache APISIX on Microsoft Azure Container Instance](https://dev.to/apisix/run-apache-apisix-on-microsoft-azure-container-instance-1gdk).

### Recommended content

- [How to choose the right API Gateway](https://iambobur.com/2022/11/22/how-to-choose-the-right-api-gateway/).

- [Why Is Apache APISIX the Best API Gateway?](https://api7.ai/blog/why-is-apache-apisix-the-best-api-gateway)

- [What Are API Gateway Policies?](https://api7.ai/blog/api-gateway-policies).
