(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{198:function(s,t,a){"use strict";a.r(t);var n=a(3),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"前后端接口规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前后端接口规范"}},[s._v("#")]),s._v(" 前后端接口规范")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("期望有一份固定的协作文档以供前后端实行，提高前后端协作效率，加快项目开发速度")])]),s._v(" "),a("p",[s._v("目标:")]),s._v(" "),a("ol",[a("li",[s._v("达成一致默契，减少沟通成本，提高开发效率")]),s._v(" "),a("li",[s._v("提高代码可读性")]),s._v(" "),a("li",[s._v("更便捷抽象逻辑和组件")]),s._v(" "),a("li",[s._v("熟悉套路后可知道接口大概逻辑和对应操作")])]),s._v(" "),a("h2",{attrs:{id:"状态码定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态码定义"}},[s._v("#")]),s._v(" 状态码定义")]),s._v(" "),a("p",[s._v("HTTP 状态码:")]),s._v(" "),a("ul",[a("li",[s._v("200 请求成功")]),s._v(" "),a("li",[s._v("302 重定向")]),s._v(" "),a("li",[s._v("401 无登录凭证")]),s._v(" "),a("li",[s._v("403 登录凭证无权限")]),s._v(" "),a("li",[s._v("404 找不到资源")]),s._v(" "),a("li",[s._v("405 禁止的请求方法")]),s._v(" "),a("li",[s._v("500 服务器内部错误")]),s._v(" "),a("li",[s._v("502 网关接收到了一个无效的响应")]),s._v(" "),a("li",[s._v("503 服务器超载，无法继续处理请求")]),s._v(" "),a("li",[s._v("504 网关无法及时接收到上游服务器的响应")]),s._v(" "),a("li",[s._v("...")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("期望新接口全部都接入网关，统一业务状态码")])]),s._v(" "),a("p",[s._v("业务状态码 code")]),s._v(" "),a("ul",[a("li",[s._v("200 表示调用成功")])]),s._v(" "),a("p",[s._v("其它(为了跟现在的网关保持一致)")]),s._v(" "),a("ul",[a("li",[s._v("status: true 表示"),a("strong",[s._v("接口调用成功")]),s._v("，如果是 false，需要返回错误信息")]),s._v(" "),a("li",[s._v("msg: string 表示接口返回的信息提示")]),s._v(" "),a("li",[s._v("...")])]),s._v(" "),a("h2",{attrs:{id:"请求方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求方式"}},[s._v("#")]),s._v(" 请求方式")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("如果能遵循 "),a("RouterLink",{attrs:{to:"/skill/!http://www.ruanyifeng.com/blog/2014/05/restful_api.html"}},[s._v("RESTful API 设计指南")]),s._v(" 规范最好")],1)]),s._v(" "),a("p",[s._v("不能的话就只提供 get 和 post:")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("获取数据使用 get 方法，有可能少数情况用 post")])]),s._v(" "),a("li",[a("strong",[s._v("新增，删除，修改数据用 post 方法")])])]),s._v(" "),a("h2",{attrs:{id:"content-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content-type"}},[s._v("#")]),s._v(" Content-Type")]),s._v(" "),a("p",[s._v("服务器会根据该字段去得知请求踢中消息体的编码格式，并解析")]),s._v(" "),a("p",[s._v("请求头中控制数据类型字段 Content-Type，常用有三种类型")]),s._v(" "),a("ol",[a("li",[s._v("application/json")]),s._v(" "),a("li",[s._v("application/x-www-form-urlencoded")]),s._v(" "),a("li",[s._v("multipart/form-data")])]),s._v(" "),a("h3",{attrs:{id:"application-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-json"}},[s._v("#")]),s._v(" application/json")]),s._v(" "),a("p",[s._v("可读性良好的传输数据格式，可以支持嵌套对象，强烈推荐使用")]),s._v(" "),a("ul",[a("li",[s._v("数组")]),s._v(" "),a("li",[s._v("对象")]),s._v(" "),a("li",[s._v("null")]),s._v(" "),a("li",[s._v("布尔值")]),s._v(" "),a("li",[s._v("数字类型")]),s._v(" "),a("li",[s._v("字符串")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" application"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  status"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请求成功'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      b1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    d"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"application-x-www-form-urlencoded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-x-www-form-urlencoded"}},[s._v("#")]),s._v(" application/x-www-form-urlencoded")]),s._v(" "),a("p",[s._v("客服后台历史包袱，很多地方都用，数据会被 encode 过，而且不支持嵌套对象，可读性十分的差，不推荐使用")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" application"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("form"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("urlencoded"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n\ntitle"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("sub"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("B"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("D"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("sub"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("B"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("D"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("sub"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("B"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("D"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"multipart-form-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multipart-form-data"}},[s._v("#")]),s._v(" multipart/form-data")]),s._v(" "),a("p",[s._v("常用于流的传输，比如文件上传")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("multipart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("form"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" boundary"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("WebKitFormBoundaryrGKCBY7qhFd3TrwA\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("WebKitFormBoundaryrGKCBY7qhFd3TrwA\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Disposition"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" form"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v("\n\ntitle\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("WebKitFormBoundaryrGKCBY7qhFd3TrwA\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Disposition"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" form"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chrome.png"')]),s._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" image"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("png\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PNG")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" content "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" chrome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("png "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("WebKitFormBoundaryrGKCBY7qhFd3TrwA"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("客服后台也有旧接口是转成 base64 去实现的，不推荐")]),s._v(" "),a("ol",[a("li",[s._v("转换后代码体积过大，可读性差")]),s._v(" "),a("li",[s._v("网关或者服务器对文件大小有限制")]),s._v(" "),a("li",[s._v("网速差时接口响应缓慢")])])]),s._v(" "),a("h2",{attrs:{id:"通用请求头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用请求头"}},[s._v("#")]),s._v(" 通用请求头")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("如果是新项目可以考虑用 "),a("RouterLink",{attrs:{to:"/skill/!http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html"}},[s._v("JSON Web Token")]),s._v(" 方式去实现")],1)]),s._v(" "),a("p",[s._v("某些非常共性的会抽取到请求中的 headers 中供后端获取：")]),s._v(" "),a("ol",[a("li",[s._v("adminId 客服 id")]),s._v(" "),a("li",[s._v("ehrNumber 客服工号")]),s._v(" "),a("li",[s._v("language 当前后台使用的语言")])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("增加 header 的参数会报跨域异常，网关接口需要加上对该 header 的支持")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("Request Headers\n\nadminId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" test\nehrNumber"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" test\nlanguage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" zh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CN")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"实体字段定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实体字段定义"}},[s._v("#")]),s._v(" 实体字段定义")]),s._v(" "),a("ol",[a("li",[s._v("布尔值传数字 0 和 1，0 表示 false，1 表示 true")]),s._v(" "),a("li",[s._v("多选框的值用数组传输, 例如: "),a("code",[s._v("['value1', 'value2']")])]),s._v(" "),a("li",[s._v("级联选择传输的是带父子层级关系的数组, 例如: "),a("code",[s._v("['grandfatherId', 'fatherId', 'sonId']")])]),s._v(" "),a("li",[s._v("时间选择器传输的是 dateTime 类型数据(时间戳的话是因为前端的是毫秒，但是后端却是秒，如果后端不想转换，可以使用时间戳),字段命名可以是: "),a("strong",[s._v("xxxTime")])]),s._v(" "),a("li",[s._v("时间范围选择传输的是数组, 字段命名可以是"),a("strong",[s._v("xxxTimeRange")]),s._v(", 例如: "),a("code",[s._v("[startTime, endTime]")])])]),s._v(" "),a("h2",{attrs:{id:"枚举接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#枚举接口"}},[s._v("#")]),s._v(" 枚举接口")]),s._v(" "),a("ol",[a("li",[s._v("显示到界面的值字段为"),a("strong",[s._v("label")])]),s._v(" "),a("li",[s._v("传输到接口的值字段为"),a("strong",[s._v("value")])]),s._v(" "),a("li",[s._v("一个枚举接口下发多个枚举值，可通过传参的形式去获取，不传默认获取全部，如果想获取某几个，可以传数组，字段名是"),a("strong",[s._v("enums")])]),s._v(" "),a("li",[s._v("如果该接口是多个枚举值的时候，返回 data 是一个对象，对象的 key 就是对应的枚举值")]),s._v(" "),a("li",[s._v("如果是级联的数据，亦即无限嵌套的数据，子类型是"),a("strong",[s._v("children")]),s._v(",表示这是一个级联选择")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("什么是"),a("RouterLink",{attrs:{to:"/skill/!https://element.eleme.cn/#/zh-CN/component/cascader"}},[s._v("级联选择")])],1)]),s._v(" "),a("p",[s._v("单个")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  status"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请求成功'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      label"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'枚举1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      label"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'枚举2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("多个")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  enums"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'enum1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'enum2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  status"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请求成功'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    enum1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        label"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    enum2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        label"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h2",{attrs:{id:"分页参数和信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分页参数和信息"}},[s._v("#")]),s._v(" 分页参数和信息")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("page 是从 1 开始的")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 请求参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  page"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前分页")]),s._v("\n  pageSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 分页大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  rows"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 分页数据")]),s._v("\n  total"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 总数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"命名风格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名风格"}},[s._v("#")]),s._v(" 命名风格")]),s._v(" "),a("ul",[a("li",[s._v("统一命名风格，"),a("strong",[s._v("驼峰命名")])]),s._v(" "),a("li",[s._v("类型需要强一致，不能下发诸如一个接口是字符串数字，另一个接口对应的值却是纯数字的情况")]),s._v(" "),a("li",[s._v("如果数字是超长类型，那必须得返回字符串类型，否则 js 会发生数字溢出的情况")]),s._v(" "),a("li",[s._v("期望接口返回统一的数据，对于 crud 来说，"),a("strong",[s._v("新增")]),s._v(", "),a("strong",[s._v("修改")]),s._v(", "),a("strong",[s._v("详情")]),s._v("三个接口的字段要基本保持一致")]),s._v(" "),a("li",[s._v("不能同一含义的"),a("strong",[s._v("变量")]),s._v("不同的"),a("strong",[s._v("命名")])]),s._v(" "),a("li",[s._v("如果该 key 对应的数据是没有的话，期望下发原数据格式而"),a("strong",[s._v("不下发 null")]),s._v(",比如一个字段本来是数组的，如果没数据，那么就下发"),a("code",[s._v("[]")]),s._v("，这么做前端可以减少判空，并且减去出现读取数据错误的情况")]),s._v(" "),a("li",[s._v("如果是"),a("strong",[s._v("列表类型")]),s._v("的数据，后端需要返回"),a("strong",[s._v("唯一 id")]),s._v("，前端有性能优化需要")]),s._v(" "),a("li",[s._v("图片 url 必须是标准的 url 格式,例如")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zcsweb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("branx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("csp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("devx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zuzuche"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("net"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("#"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ticketflow"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ticketTypeManage\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只需要/ticketflow/ticketTypeManage，#后面的所有参数，如果后面还是查询参数，是需要的")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("接口成功失败必须有对应的 msg 返回")]),s._v(" "),a("li",[s._v("如果是返回"),a("strong",[s._v("内部链接")]),s._v("，则链接不需要带域名，只需要**#**后的全部参数即可,")])]),s._v(" "),a("ul",[a("li",[s._v("接口地址能语义化最好，下面是例子")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GET")]),s._v(" “"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("product"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("list” 表示获取产品列表信息\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" “"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("product"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("add” 表示添加产品\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" “"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("product"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v("” 表示删除产品\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" “"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("product"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("edit” 表示编辑产品，即更新操作\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GET")]),s._v(" “"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("refund"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("reasons” 表示获取退货原因\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GET")]),s._v(" “"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("refund"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("orderlist” 表水获取退货订单列表，注意这里都是采用小写\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"文档化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档化"}},[s._v("#")]),s._v(" 文档化")]),s._v(" "),a("p",[a("a",{attrs:{href:"/skill/%E5%90%8E%E7%AB%AF%E6%8E%A5%E5%8F%A3%E5%9C%B0%E5%9D%80"}},[s._v("后端服务文档地址集合")])])])}),[],!1,null,null,null);t.default=r.exports}}]);