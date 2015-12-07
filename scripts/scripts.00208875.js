"use strict";angular.module("wwwApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("wwwApp").controller("MainCtrl",["$scope","projects",function(a,b){a.projects=b.data}]),angular.module("wwwApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wwwApp").service("projects",function(){return{data:[{name:"config",title:"用于微信配置信息的校验",desc:""},{name:"auth",title:"用于与微信服务器握手检验",desc:""},{name:"oauth",title:"用于微信的OAuth相关操作",desc:""},{name:"util",title:"一些常用的微信请求，加密，解密，检验的功能与处理",desc:""},{name:"request",title:"微信的各类服务的HTTP请求的抽象集合",desc:""},{name:"pay",title:"微信支付的服务器接口",desc:""},{name:"jssdk",title:"微信JSSDK相关的服务器接口",desc:""},{name:"menu",title:"微信菜单相关的操作与命令",desc:""},{name:"user",title:"微信用户API",desc:""},{name:"media",title:"微信多媒体API",desc:""},{name:"link",title:"微信推广(二维码,URL)API",desc:""}]}}),angular.module("wwwApp").controller("ProjectsCtrl",["$scope","projects",function(a,b){a.projects=b.data}]),angular.module("wwwApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="row text-left marketing"> <h1 class="text-center">node-weixin开源项目</h1> <p>node-weixin项目是一个开源的基于nodejs的微信SDK项目</p> <p>它旨在实现：</p> <ol> <li>一个代码精良的api库(<a href="https://github.com/node-weixin/node-weixin-api">node-weixin-api</a>)</li> <li>一个可以直接运行的服务器(<a href="https://github.com/node-weixin/node-weixin-express">node-weixin-express</a>)</li> </ol> </div> <div class="row marketing"> <p> 目前两个项目已经产生了一些成果，并且也可以开始使用了。 </p> <p>node-weixin-api已经相对比较成熟，可以支持常用的weixin api.</p> <p> node-weixin-express也已经完成了最初始的部分，为搭建一个简单的微信服务器提供了便利。 </p> <p> 所以这两个项目的基本目标都已经实现，由于代码添加了足够多的测试代码，并且配置了持续集成能力，基本上每个发布版本是可以保证可用与一定程度的质量的， 所以可以放心使用。 </p> </div>  <div class="row marketing"> <p> <a href="https://github.com/node-weixin/node-weixin-api">node-weixin-api</a>和<a href="https://github.com/node-weixin/node-weixin-express">node-weixin-express</a>都是由很多子项目组合而成的，他们可以分开使用，也可以合并使用，所以使用者可以根据需要组合使用或者基于 <a href="https://github.com/node-weixin/node-weixin-api">node-weixin-api</a>之上使用。 </p> <ul> 基础node-weixin子项目如下： <li ng-repeat="project in projects"><a href="https://github.com/node-weixin/node-weixin-{{project.name}}">node-weixin-{{project.name}}</a> <br> {{project.title}} </li> </ul> </div>')}]);