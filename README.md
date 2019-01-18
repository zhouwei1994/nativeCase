# nativeCase
React Native项目开发模板,项目配置

# 项目初始化
请完全按照以下步骤启动项目，请完全按照以下步骤启动项目，请完全按照以下步骤启动项目，重要的事情说三遍
```bash
git clone https://github.com/zhouwei1994/nativeCase.git

cd nativeCase

yarn install

yarn start

yarn run ios (android)     

windows用户请用 react-native run-android 命令启动
```
# 项目结构
```bash
├── android                     // android原生部分
├── ios                         // ios原生部分
├── node_modules                // 项目依赖包
├── src                         // Ract Native
│   ├── components              // 所有组件
│   │    ├── common             // 常用组件
│   │    └── module             // 项目组件
│   ├── config                  // 项目配置文件
│   │    ├── fetch.js           // response.js方法配置
│   │    ├── response.js        // http数据请求方法
│   │    └── utils.js           // 常用方法库
│   ├── images                  // 项目图片
│   │    └── tabIcon            // 底部导航图标
│   ├── router                  // 路由部分
│   │    ├── index.js           // 具体页面导航配置
│   │    └── navigator.js       // 底部主导航配置
│   ├── store                   // redux部分
│   │    ├── index.js           // redux配置页面
│   │    └── stores.js          // redux数据中心
│   ├── view                    // page模块聚合页
│   └── App.js                  // Ract Native 入口页
├── index.js                    // 项目注册入口文件
├── package.json                // 项目配置信息
├── .babelrc                    // 设置转码的规则,插件,文件地址映（自动生成的）
├── .buckconfig                 // 为buck 的配置文件，buck是Fcebook 开源的高效编译系统（自动生成的）
├── .flowconfig                 // 为 flow 的配置文件，flow 用于代码静态检查 （自动生成的）
├── .gitattributes              // git生成的文件，可以指定项目预约，方便GitHub查询（自动生成的）
├── .gitignore                  // 告诉Git哪些文件不需要添加到版本管理中（自动生成的）
├── .watchmanconfig             // 为 watchman 的配置文件，watchman 用于监控文件变化，辅助实现工程修改所见即所得
├── android.bat                 // 启动android项目指令文件，点击即可打开cmd运行react-native run-android
├── .eslintrc                   // 代码校验规则配置
├── README.md                   // help
└── yarn.lock                   // 依赖的版本信息管理

```