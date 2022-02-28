# CHANGE LOGS

- 2022-02-28（version 1.11.0）

1. 更新 `@aidol/svg-icon` 导入方式。

- 2022-02-27（version 1.10.0）

1. `element-ui` 升级至 `v2.15.7`。
2. `sass` 无需再固定补丁版本，原因是，`element-ui` 已使用最新的 `dart-sass` 语法。
3. 添加 `toolkitcss` 样式工具库。
4. `dayjs` 时间格式显示问题修复。

- 2021-01-21 (version 1.9.0)

1. 移除 `@aidol/utils` 。
2. 新增 `pagein` 处理分页。
3. `vuepress` 加载 `element-ui` 时报错 `Cannot find module ‘core-js/library/fn/object/assign` 问题。本地安装 `async-validator` 。
4. 改用 `yarn` 进行包管理。
5. 锁定 `sass` 至补丁版本，避免其警告提示。

- 2020-12-28 (version 1.8.0)

1. 替换 `node-sass` 为 `sass` 编译 `scss` 文件。
2. 替换 `moment` 为 `dayjs` 处理日期。
3. **BugFix** 解决了 **来必力** 评论系统重复渲染插件实例问题。
4. 其他模块升级。