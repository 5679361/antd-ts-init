###webzhi-demo

此项目是一个antd+ts的初始化项目。


使用 yarn 创建项目。

`$ yarn create react-app antd-demo-ts --typescript`

如果你使用的是 npm（接下来我们都会用 yarn 作为例子，如果你习惯用 npm 也没问题）。

`$ npx create-react-app antd-demo-ts --typescript`

**引入 antd**

`$ yarn add antd`

引入 react-app-rewired 并修改 package.json 里的启动配置。由于新的 react-app-rewired@2.x 版本的关系，你还需要安装 customize-cra。

`$ yarn add react-app-rewired customize-cra`

然后在项目根目录创建一个 config-overrides.js 用于修改默认配置。

````
module.exports = function override(config, env) {
 
    // do stuff with the webpack config...
    return config;
};
````
babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件（原理），现在我们尝试安装它并修改 config-overrides.js 文件。

````
$ yarn add babel-plugin-import
````
详情请移步：
https://ant-design.gitee.io/docs/react/use-in-typescript-cn