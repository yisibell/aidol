# CHANGE LOGS

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