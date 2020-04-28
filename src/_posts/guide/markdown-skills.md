---
title: 使用markdown编写文章的一些技巧
date: 2020-04-23
tags:
- markdown
- markdown-it
- vuepress
categories:
- aidol文档
---

**aidol** 是基于 **vuepress** 进行构建的，而在 **vuepress** 中的 **markdown** 文件渲染使用的则是 <a href="https://www.npmjs.com/package/markdown-it" target="_blank"> markdown-it </a> 这个库，只不过 **vuepress** 做了一些特殊的配置，使得你可以使用一些对编写文章特别有用的功能。这篇文档会集中进行介绍。

<!-- more -->

::: tip
对于 markdown 语言的一些常规语法，这里就不进行介绍了，这里主要介绍在 **vuepress** 中提供的一些特殊功能。
:::

# Front Matter

**VuePress** 提供了对 <a href="" target="_blank">YAML front matter </a> 开箱即用的支持。

想了解更多，请移步 <a href="https://vuepress.vuejs.org/zh/guide/frontmatter.html" target="_blank">Front Matter。</a>

``` yaml
---
title: 这是文章标题
date: 2020-04-25
tags:
- vuepress
- aidol
- markdown-it
categories:
- 分个类
passcode: 123456
---
```

这些数据被配置在当前 **markdown** 的正文，也就是最前面。

在 **aidol** 中定义的 **Front Matter** 为以上这些，分别对于如下功能：


| key | 描述 | 数据类型 | 是否必需 |
| :---:| :---: | :---: | :--------: |
| `title` | 文章标题| String | 是 |
| `date` | 文章发布时间| String | 是 |
| `tags` | 文章标签 | Array Of String | 是 |
| `categories` | 文章所属分类，尽管大部分情况下，你只会给某篇文章指定一个分类，但她的数据类型只支持数组。| Array Of String | 是 | 
| `passcode` | 当前文章密码锁密码，如果不设置，则该篇文章对外公开。 | String Or Number | 否 |


# Emoji

你可以在 **markdown** 中使用一些 **Emoji** 图标。

输入：

``` md
:tada: :100:
```

输出：

:tada: 
:100:

你可以在 <a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank">这个列表</a> 找到所有可用的 Emoji。


# 文章摘要

如果你想要将文章内容以摘要的形式，显示在站点首页。那么你需要应用 `<!-- more -->` 标记。她会将这之前的内容以摘要的形式显示在站点首页的文章列表中。
通常，你可以将文章的简要描述处理为摘要。

``` md
这是一段介绍该文章的摘要内容。

<!-- more -->

# 标题

这是文章正文。
...
```

# 插入图片

**aidol** 提供了 `<aidol-image />` 组件用来在文章中插入一张或一组图片。

输入：

``` md
<aidol-image :links="['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg', 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg']" />
```

输出：

<aidol-image :links="['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg', 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg']" />

::: tip 提示
`links` prop 表示图片地址，数据类型为 `[Array, String]`。即你可以在一处使用多张图片，也可以只应用一张。
当图片地址以 `//` , `http://` 或 `https://` 开头时，那 `<aidol-image />` 会将其当做 **外链地址**。
否则，地址会被 <a href="https://vuepress.vuejs.org/zh/guide/assets.html" target="_blank">$withBase</a> 方法处理为站内地址。
:::

# 提示块

这个特殊的语法，通常用来强调文章中的某些信息，有比较醒目的样式。

输入：

``` md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```

输出：

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

你也可以自定义块中的标题：


``` md
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
console.log('你好，VuePress！')
:::

```

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
``` js
console.log('你好，VuePress！')
```
:::

# 代码块中的语法高亮

VuePress 使用了 <a href="https://prismjs.com/"> Prism </a> 来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：

输入：

``` md
``` js
export default {
  name: 'MyComponent',
  // ...
}```
```

输出：

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

输入：

``` md
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>```
```

输出：

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

# 代码中的行高亮

输入：

``` md
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}```
```

输出：

``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

# 其他

除了以上的一些用法，你还可以在 **markdown** 中使用 **HTML标签**，比如 `<a>` 、`<img>` 等。
很重要的一点，由于 **vuepress** 的加持，使得你可以在 **markdown** 中使用 **vue组件**。
这样一来，一些集中式的功能，都可以被抽象成 **vue组件** 供 **markdown** 使用。**aidol** 会提供一些案例供用户使用，你也可以自己扩展她。