# egg-knight

## 环境要求
Node.js: >= 8.0.0

## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。
- 使用 `npm run clean` 清除js文件

### 调试

使用 `npm run debug` 来进行debug调试。
服务启动后chrome-devtools中有个绿色图标，`add conneciton`:`localhost:9999`，然后在**source**中就可以愉快的调试了
* ![1](http://p6uyzta82.bkt.clouddn.com/node_api_1531470791911)
* ![2](http://p6uyzta82.bkt.clouddn.com/node_api_15314708597)
* ![3](http://p6uyzta82.bkt.clouddn.com/node_api_1531470879518)

#### 在vocode或webstorm中调试
> npm install

保证所有依赖都安装
vscode中安装**eggjs**插件，按F5启动即可调试

如有疑问可可参考文档 [debug](https://eggjs.org/zh-cn/tutorials/typescript.html#debug)

[egg]: http://eggjs.org/zh-cn/intro/quickstart.html
