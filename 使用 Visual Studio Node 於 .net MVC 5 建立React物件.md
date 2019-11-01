# ReactJS
## 使用 Visual Studio Node 於 .net MVC 5 建立React物件

#### [準備篇](#1-安裝環境)
##### [1. 安裝環境](#1-安裝環境) </br>
##### [2. 設定組態](#2-建立專案與組態檔) </br>
##### [3. 安裝NPM套件](#3-新增NPM套件於NODE) </br>
#### [應用篇](#4-執行NPM套件以轉換JSX檔案)
##### [4. 執行JSX轉換](#4-執行NPM套件以轉換JSX檔案) </br>
##### [5. 引用React](#5-引用轉換後之React-JS檔案) </br>

### 1. 安裝環境
(1) 安裝 [Visual Studio Node JS](https://docs.microsoft.com/zh-tw/visualstudio/ide/quickstart-nodejs?view=vs-2019) (用於建立N專案) </br>
(2) 安裝 [Node](https://nodejs.org/zh-tw/download/) (使Package Manager Console可使用NPM指令) </br>
(3) 安裝 [Visual Studio 擴充功能 NPM Task Runner](https://medium.com/@mvpdw06/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-visual-studio-%E9%A9%85%E5%8B%95-node-npm-%E6%8C%87%E4%BB%A4-461557134139) (方便監控Webpack執行) </br></br>

### 2. 建立專案與組態檔
(1) 建立MVC專案 </br>
(2) 建立Node專案於MVC專案中 </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/1.png) </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/2.png) </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/3.PNG) </br>
(3) 新增.babelrc、webpack.config.js等套件之組態檔於Node專案根目錄，並填入以下資訊： <br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/4.PNG) </br></br>
**.babelrc**
```
{ 
  "presets": ["@babel/preset-env", "@babel/preset-react"], 
  "plugins": ["@babel/plugin-proposal-class-properties"] 
}
```
**webpack.config.js**
```javascript
"use strict";

var path = require("path");
var WebpackNotifierPlugin = require("webpack-notifier");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    entry: "./Scripts/jsx/index.jsx",                       // 轉換前之React JSX檔案路徑 (可自行定義)
    output: {
        path: path.resolve(__dirname, "./Scripts/react"),   // 轉換後之JS輸出檔案路徑 (可自行定義)
        filename: "bundle.js"                               // 輸出檔名
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,                             // 目標為JSX檔案
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"                  // 使用babel-loader進行編譯
                },                
                options: {
                    presets: ["@babel/preset-env"]          // 可使用Babel進行最新ES6編譯
                }
            }
        ]
    },
    devtool: "inline-source-map",
    plugins: [new WebpackNotifierPlugin(), new BrowserSyncPlugin()]
};
```
 [Reference: Sung M. Kim](https://dev.to/dance2die/setting-up-a-react-environment-for-aspnet-mvc-44la) </br>
※Webpack組態設定輸出js檔案之路徑，之後在view會需要src引用</br></br>

### 3. 新增NPM套件於NODE
(1) 將package.json新增以下資訊 </br></br>
**package.json**
```json
{ 
  "name": "node",
  "version": "1.0.0",
  "description": "Node",
  "main": "app.js",
  "author": {
    "name": ""
  },
  // 從這裡新增下列內容
  "scripts": {  // 此為自定義NPM命令，方便之後可以快速RUN指令
    "dev": "webpack --mode development --watch",
    "build": "webpack"
  },
  "dependencies": { // 以下為欲安裝之NPM套件資訊(空殼)
    "@babel/core": "^7.6.4",,
    "@babel/plugin-proposal-class-properties": "^7.5.5",
    "@babel/plugin-proposal-unicode-property-regex": "^7.6.2",
    "@babel/preset-env": "^7.6.3",
    "@babel/preset-react": "^7.6.3",
    "babel-cli": "^6.26.0",
    "babel-loader": "^8.0.6",
    "browser-sync": "^2.26.7",
    "browser-sync-webpack-plugin": "^2.2.2",
    "express": "~4.16.4",
    "path": "~0.12.7",
    "react": "^16.11.0",
    "react-dom": "~16.6.0",
    "webpack": "^4.23.1",
    "webpack-cli": "~3.1.2",
    "webpack-dev-server": "^3.9.0",
    "webpack-notifier": "^1.8.0"
  }
}
```
(2) 此時npm會出現黃色空套件清單，以更新之方式下載完整NPM套件，完成會顯示紅色 </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/5.PNG) </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/6.png) </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/7.PNG) </br>
(3) 關閉Visual Studio，將整個Node專案內之檔案全部移到MVC專案之根目錄 </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/8.PNG) </br>
(4) 重開Visual Studio，刪除原Node專案並重新新增"已存在之Node專案" </br>
※因NPM要執行命令時，Node專案中的所有檔案必須在MVC專案的根目錄才能夠執行 </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/9.png) </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/10.PNG) </br></br>
(5) 將MVC專案中package.json檔案顯示出來 </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/11.png) </br>


### 4. 執行NPM套件以轉換JSX檔案
(1) 新增index.jsx檔案於Scripts/jsx資料夾中，輸入react語法 </br></br>
**.jsx範例**
```javescript
import React from 'react';
import { render } from 'react-dom';

const App = () => (
    <React.Fragment>
        <h1>React in ASP.NET MVC!</h1>
        <div>Hello React World</div>
    </React.Fragment>
);

render(<App />, document.getElementById('app'));
```
[Reference: Sung M. Kim](https://dev.to/dance2die/setting-up-a-react-environment-for-aspnet-mvc-44la) </br></br>
(2) 右鍵開啟NPM Task Runner Explorer </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/12.png) </br>
(3) 點選dev開始轉換JSX檔案，成功後會顯示通知! </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/13.PNG) </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/14.PNG) </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/15.png) </br>

(4) 當dev在Running時，因webpack的watch功能，只要JSX檔案有更動就會即時轉換成bundle.js檔案 </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/15-2.PNG) </br></br>

### 5. 引用轉換後之React JS檔案
將欲引入React之View(.cshtml)中新增bundle.js引用，即可使用React功能 </br>
```html
<script src="~/Scripts/react/bundle.js"></script>
```
※ 引用需置於目標TAG之後 </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%A9%9F/16.png) </br>






Reference: </br>
[Setting up a React Environment for ASP.NET MVC (Sung M. Kim)](https://dev.to/dance2die/setting-up-a-react-environment-for-aspnet-mvc-44la) </br>
[React.js: Introduction and Hello World with ASP.NET MVC 5](https://techbrij.com/react-js-asp-net-mvc-introduction) </br>
[激戰ReactJS 【Day03】所需插件的介紹與安裝 (洪啟瑞-30天熱度)](https://ithelp.ithome.com.tw/articles/10193004) </br>
[教學課程：在 Visual Studio 中建立 Node.js 和 React 應用程式](https://docs.microsoft.com/zh-tw/visualstudio/javascript/tutorial-nodejs-with-react-and-jsx?view=vs-2019) </br></br></br>
