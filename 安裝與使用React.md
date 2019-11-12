# ReactJS
## 使用 Visual Studio Node 於 .net MVC 5 建立React物件

[**《準備篇》**](#1-安裝環境) </br>
 [　　1. 安裝環境](#1-安裝環境) </br>
 [　　2. 設定組態](#2-建立專案與組態檔) </br>
 [　　3. 安裝NPM套件](#3-新增NPM套件於NODE) </br>
 [　　4. 建立jsx檔案目錄](#4-建立jsx檔案目錄) </br>
[**《應用篇》**](#5-執行NPM套件以轉換JSX檔案) </br>
 [　　5. 執行JSX轉換](#5-執行NPM套件以轉換JSX檔案) </br>
 [　　6. 引用React](#6-引用轉換後之React-JS檔案) </br> </br>
**《觀念與資源》** </br>
 [　　官方公布的使用注意事項](https://reactjs.org/docs/react-component.html) </br>
 [　　React生命週期](https://ithelp.ithome.com.tw/articles/10200767?sc=iThelpR) </br>
 [　　檔案目錄結構](https://ithelp.ithome.com.tw/articles/10203767?sc=iThelpR) </br>
 [　　複用組件：合成>繼承](https://zh-hant.reactjs.org/docs/composition-vs-inheritance.html) </br>
 [　　setState時機注意](https://medium.com/@as790726/%E4%B8%80%E4%BA%9B%E8%87%AA%E5%B7%B1%E5%AF%AB-react-%E7%9A%84%E5%A5%BD%E7%BF%92%E6%85%A3-lifecycle-method-%E8%B7%9F-state-%E7%AE%A1%E7%90%86-b37a12da968b) </br>
 [　　配合AJAX - Fetch](https://zh-hant.reactjs.org/docs/faq-ajax.html) / 
 [教學](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html) / 
 [官方說明文件](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) </br>
 [　　Chrome的Debug擴充套件](https://medium.com/reactmaker/%E4%BD%BF%E7%94%A8-react-developer-tools-%E4%BE%86%E5%81%B5%E9%8C%AF%E4%BD%A0%E7%9A%84%E7%B6%B2%E9%A0%81-bd44d6d62596) </br>
 [　　NPM常用套件](https://ithelp.ithome.com.tw/articles/10193004) </br>
 [　　-官方教學](https://zh-hant.reactjs.org/tutorial/tutorial.html#overview) </br>
 [　　-React - DOM界的彼方(繁中)](https://eyesofkids.gitbooks.io/react-basic-zh-tw/) </br>
 [　　-激戰 ReactJS 30天 系列](https://ithelp.ithome.com.tw/users/20107674/ironman/1472) </br>
 [　　-一步一腳印的React旅程 系列](https://ithelp.ithome.com.tw/users/20106935/ironman/1651) </br>

### 1. 安裝環境
(1) 安裝 [Visual Studio Node JS](https://docs.microsoft.com/zh-tw/visualstudio/ide/quickstart-nodejs?view=vs-2019) (用於建立NodeJS專案) </br>
(2) 安裝 [Node](https://nodejs.org/zh-tw/download/) (使Package Manager Console可使用NPM指令) </br>
(3) 安裝 [Visual Studio 擴充功能 NPM Task Runner](https://medium.com/@mvpdw06/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-visual-studio-%E9%A9%85%E5%8B%95-node-npm-%E6%8C%87%E4%BB%A4-461557134139) (方便監控Webpack執行) </br></br>

### 2. 建立專案與組態檔
(1) 建立MVC專案 </br>
(2) 建立Node專案於MVC專案資料夾中(※建議與.csproj同一層級) </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/1.png) </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/2.png) </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/3.png) </br>
(3) 新增.babelrc、webpack.config.js等套件之組態檔於Node專案根目錄，並填入以下資訊： <br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/4.png) </br>
**.babelrc**
```json
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
    entry: "./src/index.js",                        // 轉換前之React JSX檔案路徑 (可自行定義)
    output: {
        path: path.resolve(__dirname, "./src"),     // 轉換後之JS輸出檔案路徑 (可自行定義)
        filename: "bundle.js"                       // 輸出檔名
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,                // 目標為JS或JSX檔案
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"          // 使用babel-loader進行編譯
                },                
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]  // 可使用Babel進行最新ES6編譯
                }
            }
        ]
    },
    devtool: "inline-source-map",
    plugins: [new WebpackNotifierPlugin(), new BrowserSyncPlugin()]
};
```
 [Reference: Sung M. Kim](https://dev.to/dance2die/setting-up-a-react-environment-for-aspnet-mvc-44la) </br>
※Webpack組態設定輸出bundle.js檔案之路徑，之後在view會需要src引用</br></br>

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
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/5.png) </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/6.png) </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/7.png) </br>

(3) 從MVC專案中將package.json檔案顯示出來 (在./ReactNode資料夾中) </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/8.png) </br>


### 4. 建立jsx檔案目錄
當專案較龐大時，會有許多的jsx組件，須將檔案目錄整理得宜再進行jsx轉換 </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/9.png) 
</br>
(1) 於Node專案中建立資料夾：src(第一層)、src/components(第二層)、src/components/App(第三層，自行整理與命名各資料夾) </br>
(2) 新增JSX檔案：於src/components/App(第三層)資料夾中，輸入react語法 </br>
**.jsx範例**
```jsx
import React from 'react';

class App extends React.Component {   // class名稱第一碼務必使用大寫!!
    render() {  // 注意render只能return一個tag，有多個tag要包在同一個tag裡面
        return (
            <div>
                <h1>React in ASP.NET MVC 5</h1>
                <div>Hello React!</div>
            </div>
        );
    }
}

export default App;   // 輸出供main.js引用
```

(3) 新增main.js檔案：同JSX檔案之資料夾(第三層)，用於彙整同一資料夾中的多個組件(jsx) </br>
```jsx
import React from 'react';
import App from './app.jsx';   // 引用App組件
// 檔案變多時則繼續引用其他組件

class MainApp extends React.Component {
    render() {
        return (
            <App />
        );
    }
}

export default MainApp;  // 輸出供index.js引用
```

(4) 新增index.js：於src(第一層)，用於彙整各main.js檔案，並使用reactDOM直接渲染html檔案 </br>
(※main.js與index.js皆用於彙整檔案，分成兩層是為了避免index.js的引用過於複雜) </br>
```jsx
import React from 'react';
import { render } from 'react-dom';
import MainApp from './components/App/main.js';  // 引用main組件
// 檔案變多時則繼續引用其他main組件

render( <MainApp /> , document.getElementById('app') );  // 渲染對象為html中id為app者
```

### 5. 執行NPM套件以轉換JSX檔案
(1) 於package.json右鍵開啟NPM Task Runner Explorer </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/10.png) </br>

(2) 點選dev開始轉換JSX檔案，成功後會顯示通知! 並產生bundle.js檔案 </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/11.png) </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/12.png) </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/13.png) </br>

(3) 當dev在Running時，因webpack的watch功能，只要JSX檔案有更動就會即時轉換成bundle.js檔案 </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/14.png) </br>
(※有throw er; // Unhandled 'error' event Error: listen EADDRINUSE ::: XXXX 的bug須重開機以重置port占用問題) </br></br>

### 6. 引用轉換後之React JS檔案
將欲引入React之View(.cshtml)中新增bundle.js引用，即可使用React功能 </br>
```html
<script src="~/ReactNode/src/bundle.js"></script>
```
※ 引用需置於目標TAG之後 </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/15.png) </br>

React渲染成功! </br>
![image](https://raw.githubusercontent.com/timmchentw/ReactDemo/master/%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A%E6%AD%A5%E9%A9%9F/16.png)</br>





Reference: </br>
[Setting up a React Environment for ASP.NET MVC (Sung M. Kim)](https://dev.to/dance2die/setting-up-a-react-environment-for-aspnet-mvc-44la) </br>
[React.js: Introduction and Hello World with ASP.NET MVC 5](https://techbrij.com/react-js-asp-net-mvc-introduction) </br>
[激戰ReactJS 【Day03】所需插件的介紹與安裝 (洪啟瑞-30天熱度)](https://ithelp.ithome.com.tw/articles/10193004) </br>
[教學課程：在 Visual Studio 中建立 Node.js 和 React 應用程式](https://docs.microsoft.com/zh-tw/visualstudio/javascript/tutorial-nodejs-with-react-and-jsx?view=vs-2019) </br></br></br>
