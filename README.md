# aidol

A theme for vuePress but not only theme.

## Introduction

`aidol` 是 `@aidol/cli` 的默认模板，用于快速开发生成属于你自己的静态博客。`aidol` 正在持续更新中。

<a href="http://elenhong.gitee.io/aidol/" target="_blank">aidol 演示地址</a>

# @aidol/cli

A command line tool for quickly building blog sites.

## Installation

``` bash
npm i @aidol/cli -g
```

## Usage

``` bash
aidol init <projectName>
cd <projectName>
npm install
npm run dev
```

# Logs

- 2020-12-28 (version 1.8.0)

1. 替换 `node-sass` 为 `sass` 编译 `scss` 文件。
2. 替换 `moment` 为 `dayjs` 处理日期。
3. **BugFix** 解决了 **来必力** 评论系统重复渲染插件实例问题。
4. 其他模块升级。

