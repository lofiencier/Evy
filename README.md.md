![image](./.storybook/images.png)

### 安装
```
npm i wsf-library
```
npm package位置
https://www.npmjs.com/package/wsf-library


### 环境说明 

##### 开发环境(dev)：
```
npm run dev
```
http://localhost:9000/

##### 说明文档环境(guide)：


```
npm run guide
```
http://localhost:9001

##### 编译环境与npm发布：
```
npm run build
npm run publish
```
### 组件开发过程
如开发一个Form分类下的Input组件:
- 开启development环境(可选)
- Form分类下生成Input目录(此目录下必须有index.js、使用css模块化)
- 把组件暴露到components/index.js
- 可以发布了，npm run publish发布(确保你有登录/有权限/有验证邮箱)
- 在组件文件夹下写 *.story.js,readme.md确保guide环境有效


### 文件目录
```
ROOT
│  .gitmodules 										//git子模块配置文件(暂时废弃)
│  README.md 										//仓库说明
│  
├─.storybook										//storybook guide环境配置
│      addons.js
│      Aspira-Light.woff
│      config.js
│      postcss.config.js 							//webpack postcss配置
│      story.css
│      webpack.config.js 							//storybook使用的create-react-app webpack配置
│      
├─components
│  │  app.js 										//development环境入口
│  │  index.js 										//build编译环境（rollup）入口,组件建成后发布前在此export
│  │  story.js 										//guide环境说明文档入口
│  │  
│  ├─Form 											//Form:development和guide环境的列表分类项（必需）
│  │  ├─Select 										//组件名(此目录必须包含index.js、readme.md、*.story.js才能符合三套环境)
│  │  │  │  index.js 								//组件入口(必需，保持在组件名的文件夹下)
│  │  │  │  index.less 								//组件的样式文件
│  │  │  │  readme.md 								//guide环境下 单组件的说明文档(必需)
│  │  │  │  Switch.story.js  						//各组件说明文档入口
│  │  │  │  
│  │  │  └─assets									//各组件的资源文件，如css、图片、readme.md都可以放在这里
│  │  │          canuse.png
│  │  │          
│  │  └─Switch										//Form分类下的另一个组件
│  │      │  index.js
│  │      │  index.less
│  │      │  readme.md
│  │      │  Switch.story.js
│  │      │  
│  │      └─assets
│  │              canuse.png
│  │              
│  └─General										//General分类
│      └─Iiu
│        │  Iiu.story.js
│        │  index.js
│        │  index.less
│        │  readme.md
│        │  
│        └─assets
│                canuse.png
├─config											//development的webpack配置
├─dist												//编译的输出位置
│  │  index.cjs.js  								//require('')的方式引入时引入的文件
│  │  index.es.js 									//import from ''的方式引入时引入的文件
│  │  package.json									//处理后的package.json
│  │  README.md 									//处理后的readme
│  │  
│  ├─Iiu											
│  │      index.css									//在下面这种方式引入时，需手动引入css
│  │      index.js 									//import Iiu from "wsf-library/Iiu"的方式引入时引入的文件
│  ├─Select
│  │      ...
│          
├─node_modules
│    
└─tools												//node工具
        build.js 									//rollup编译进程与配置
        clean.js 									//删除dist下除.git的文件

```


### 技术选择与依赖
- node                 ——fs文件操作
- storybook             ——代码量少，组件参数说明、实时调整与展示，回调可观测，带各组件的参数说明与说明文档
- rollup                ——通用的 第三方库的打包方案 
- React                 ——
- Webpack ^3.4.1        —— 可自行更新版本，但请保持在4之下，storybook与4不兼容
- postcss               —— css模块化等 
