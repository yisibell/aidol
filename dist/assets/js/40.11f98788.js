(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{600:function(t,s,a){"use strict";a.r(s);var e=a(0),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("aidol")]),t._v(" 是一个快速搭建现代个人博客系统的轻量化解决方案。\n其内置了，文章标签、分类、归档、智能分页、评论系统、访问统计系统、快捷分享等功能。项目生成极其简单快速。")]),t._v(" "),a("h1",{attrs:{id:"开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),a("h2",{attrs:{id:"安装cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装cli"}},[t._v("#")]),t._v(" 安装cli")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("@aidol/cli")]),t._v(" 脚手架快速构建项目。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @aidol/cli -g\n")])])]),a("h2",{attrs:{id:"生成项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成项目"}},[t._v("#")]),t._v(" 生成项目")]),t._v(" "),a("p",[t._v("你只需要运行如下命令即可生成项目。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ aidol init "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("projectName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("projectName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("h2",{attrs:{id:"项目预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目预览"}},[t._v("#")]),t._v(" 项目预览")]),t._v(" "),a("p",[t._v("你可以在开发模式下，实时查看文章的渲染效果。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),a("h1",{attrs:{id:"编写文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写文章"}},[t._v("#")]),t._v(" 编写文章")]),t._v(" "),a("p",[t._v("文章使用 "),a("strong",[t._v("markdown")]),t._v(" 语言进行编写，相信对于程序员来说，"),a("strong",[t._v("markdown")]),t._v(" 的使用门槛非常低，她简洁而优雅。是编写文章的利器。")]),t._v(" "),a("p",[t._v("在项目生成后，找到项目根目录下的 "),a("code",[t._v("src/_posts")]),t._v(" 文件夹，该文件夹下是专门放置文章的地方。")]),t._v(" "),a("h2",{attrs:{id:"尝试第一篇文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尝试第一篇文章"}},[t._v("#")]),t._v(" 尝试第一篇文章")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("src/_posts")]),t._v(" 文件夹下创建你的第一篇文章 "),a("code",[t._v("hello-aidol.md")]),t._v("。就是在该文件夹下新建一个名为 "),a("code",[t._v("hello-aidol.md")]),t._v(" 的 "),a("code",[t._v("markdown")]),t._v(" 格式文件。当然，你想取什么名字都可以，但不要使用中文命名，建议使用英文，并在每个单词之间使用中横线 "),a("code",[t._v("-")]),t._v(" 分隔，这样渲染出来的地址栏 "),a("code",[t._v("url")]),t._v(" 是很好看的。")]),t._v(" "),a("p",[t._v("接下来，然后开始编写内容：")]),t._v(" "),a("div",{staticClass:"language-YAML extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 这是我的第一篇文章\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("2020-04-20")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 打个标签\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" blog\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" aidol\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" vuepress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("categories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 分个类\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),a("p",[t._v("如上的内容，是编写在 "),a("code",[t._v("markdown")]),t._v(" 文件的头部，其称为 "),a("code",[t._v("YAML front matter")]),t._v("，使用的是 "),a("code",[t._v("YAML")]),t._v(" 语法，表示文章信息，比如文章标题 "),a("code",[t._v("title")]),t._v("，分布日期 "),a("code",[t._v("date")]),t._v("，文章标签 "),a("code",[t._v("tags")]),t._v("(数据类型为 Array，因为你会未某个文章打多个标签)，文章分类 "),a("code",[t._v("categories")]),t._v("(数据类型为 Array)。")]),t._v(" "),a("p",[t._v("以上 4 个字段数据是必须的，通常，你也只需定义这 4 个数据即可。")]),t._v(" "),a("p",[t._v("文章信息定义完成后，就可以正式编写文章了。接下来你可以使用一切 "),a("code",[t._v("markdown")]),t._v(" 可以使用的语法来尽情编写文章内容。")]),t._v(" "),a("p",[t._v("执行 "),a("code",[t._v("npm run dev")]),t._v(" 你可以看到新编写的文章，已经自动按照发布日期 "),a("code",[t._v("date")]),t._v(" 排序好了，点击 "),a("strong",[t._v("阅读全文")]),t._v(" 查看一下你精心编辑的文章。")]),t._v(" "),a("h2",{attrs:{id:"构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建"}},[t._v("#")]),t._v(" 构建")]),t._v(" "),a("p",[t._v("文章编辑完，预览效果无误后，就可以执行构建，准备发布了。使用如下命令进行构建，生成的站点静态文件会被输出到项目根目录下的 "),a("code",[t._v("dist")]),t._v(" 文件夹中。其可以被部署到任何静态服务器上。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),a("h2",{attrs:{id:"发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[t._v("#")]),t._v(" 发布")]),t._v(" "),a("p",[t._v("这里推荐使用 "),a("a",{attrs:{href:"https://www.gitee.com"}},[t._v(" 码云Gitee Pages ")]),t._v(" 进行博客内容的部署。")]),t._v(" "),a("p",[t._v("首先在 "),a("strong",[t._v("Gitee")]),t._v(" 上创建放置你博客的仓库，再将整个构建项目推送至仓库。")]),t._v(" "),a("p",[t._v("找到配置 "),a("strong",[t._v("Gitee Pages")]),t._v(" 的入口：")]),t._v(" "),a("img",{attrs:{src:"/post_imgs/start-use/gitee-pages-enter.png"}}),t._v(" "),a("p",[t._v("然后再配置 "),a("strong",[t._v("部署分支（默认使用master）")]),t._v(" 和 "),a("strong",[t._v("部署目录（填写 dist）")]),t._v("。")]),t._v(" "),a("img",{attrs:{src:"/post_imgs/start-use/gitee-pages-start.png"}}),t._v(" "),a("p",[t._v("点击 "),a("strong",[t._v("启动")]),t._v("，等待部署... 大概 10几秒的时间，非常快速。")]),t._v(" "),a("img",{attrs:{src:"/post_imgs/start-use/gitee-pages-deploy.png"}}),t._v(" "),a("p",[t._v("部署成功后，会自动生成博客访问地址。")]),t._v(" "),a("img",{attrs:{src:"/post_imgs/start-use/gitee-pages-visit.png"}}),t._v(" "),a("p",[t._v("点击链接就可以查看你的博客了。")]),t._v(" "),a("h3",{attrs:{id:"自定义域名？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义域名？"}},[t._v("#")]),t._v(" 自定义域名？")]),t._v(" "),a("p",[a("strong",[t._v("Gitee Pages")]),t._v(" 不支持 "),a("strong",[t._v("CNAME")]),t._v(" 协议， 但是它是支持自定义域名的，不过它是收费的，一年 "),a("code",[t._v("99 元")]),t._v("。它提供了一下这几条服务：")]),t._v(" "),a("ol",[a("li",[t._v("支持自定义域名支持")]),t._v(" "),a("li",[t._v("HTTPS")]),t._v(" "),a("li",[t._v("支持推送后自动部署 （免费版，需要用户提交完构建后的代码后，到"),a("strong",[t._v("Gitee Pages")]),t._v(" 部署页面，手动点击 "),a("strong",[t._v("更新")]),t._v("，站点才会重新部署）")])]),t._v(" "),a("p",[t._v("但是，初次使用 "),a("strong",[t._v("Gitee Pages")]),t._v(" 的用户有 1个 月的 "),a("strong",[t._v("Gitee Pages Pro")]),t._v(" 服务试用期，所以，你可以先体验一下它的便利性，再决定是不是要花这个钱。")]),t._v(" "),a("h2",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),a("p",[t._v("这就是使用 "),a("strong",[t._v("aidol")]),t._v(" 创建个人博客的过程，是不是很简单？后面，文档会介绍 "),a("strong",[t._v("aidol")]),t._v(" 其他功能的使用方式。玩得愉快！")])])}),[],!1,null,null,null);s.default=v.exports}}]);