---
title: 开始使用
date: 2020-04-25
tags:
- aidol开始使用
- vuepress
- start
- theme
categories:
- aidol文档
---

**aidol** 是一个快速搭建现代个人博客系统的轻量化解决方案。
其内置了，文章标签、分类、归档、智能分页、评论系统、访问统计系统、快捷分享等功能。项目生成极其简单快速。

<!-- more -->

# 开始

## 安装cli

使用 `@aidol/cli` 脚手架快速构建项目。

``` bash
$ npm i @aidol/cli -g
```

## 生成项目

你只需要运行如下命令即可生成项目。

``` bash
$ aidol init <projectName>
$ cd <projectName>
$ npm install
```

## 项目预览

你可以在开发模式下，实时查看文章的渲染效果。

``` bash
$ npm run dev
```

# 编写文章

文章使用 **markdown** 语言进行编写，相信对于程序员来说，**markdown** 的使用门槛非常低，她简洁而优雅。是编写文章的利器。

在项目生成后，找到项目根目录下的 `src/_posts` 文件夹，该文件夹下是专门放置文章的地方。

## 尝试第一篇文章

在 `src/_posts` 文件夹下创建你的第一篇文章 `hello-aidol.md`。就是在该文件夹下新建一个名为 `hello-aidol.md` 的 `markdown` 格式文件。当然，你想取什么名字都可以，但不要使用中文命名，建议使用英文，并在每个单词之间使用中横线 `-` 分隔，这样渲染出来的地址栏 `url` 是很好看的。

接下来，然后开始编写内容：

``` YAML    
---
title: 这是我的第一篇文章
date: 2020-04-20
tags:
- 打个标签
- blog
- aidol
- vuepress
categories:
- 分个类
---
```

如上的内容，是编写在 `markdown` 文件的头部，其称为 `YAML front matter`，使用的是 `YAML` 语法，表示文章信息，比如文章标题 `title`，分布日期 `date`，文章标签 `tags`(数据类型为 Array，因为你会给某个文章打多个标签)，文章分类 `categories`(数据类型同样为 Array)。

以上 4 个字段数据是必须的，通常，你也只需定义这 4 个数据即可。


文章信息定义完成后，就可以正式编写文章了。接下来你可以使用一切 `markdown` 可以使用的语法来尽情编写文章内容。

执行 `npm run dev` 你可以看到新编写的文章，已经自动按照发布日期 `date` 排序好了，点击 **阅读全文** 查看一下你精心编辑的文章。


# 构建

文章编辑完，预览效果无误后，就可以执行构建，准备发布了。使用如下命令进行构建，生成的站点静态文件会被输出到项目根目录下的 `dist` 文件夹中。其可以被部署到任何静态服务器上。

``` bash
$ npm run build
```

# 发布

这里推荐使用 <a target="_blank" href="https://www.gitee.com"> 码云Gitee Pages </a> 进行博客内容的部署。

首先在 **Gitee** 上创建放置你博客的仓库，再将整个构建项目推送至仓库。

找到配置 **Gitee Pages** 的入口：

<img :src="$withBase('/post_imgs/start-use/gitee-pages-enter.png')" />

然后再配置 **部署分支（默认使用master）** 和 **部署目录（填写 dist）**。

<img :src="$withBase('/post_imgs/start-use/gitee-pages-start.png')" />

点击 **启动**，等待部署... 大概 10几秒的时间，非常快速。

<img :src="$withBase('/post_imgs/start-use/gitee-pages-deploy.png')" />

部署成功后，会自动生成博客访问地址。

<img :src="$withBase('/post_imgs/start-use/gitee-pages-visit.png')" />

点击链接就可以查看你的博客了。

### 自定义域名？

**Gitee Pages** 不支持 **CNAME** 协议， 但是它是支持自定义域名的，不过它是收费的，一年 `99 元`。它提供了以下这几条服务：

1. 支持自定义域名支持 
2. HTTPS
3. 支持推送后自动部署 （免费版，需要用户提交完构建后的代码后，到**Gitee Pages** 部署页面，手动点击 **更新**，站点才会重新部署）

但是，初次使用 **Gitee Pages** 的用户有 1个 月的 **Gitee Pages Pro** 服务试用期，所以，你可以先体验一下它的便利性，再决定是不是要花这个钱。

# 结语

这就是使用 **aidol** 创建个人博客的过程，是不是很简单？后面，文档会介绍 **aidol** 其他功能的使用方式。玩得愉快！