## 優化Webpack輸入與輸出
### 一般情況
一般使用Webpack的entry為指定路徑輸入檔案(index.js)， <br>
並output輸出為bundle.js， <br>
其中bundle.js包含： <br>
1.**index.js的React組件檔案** <br>
2.**NPM安裝的所有套件檔案** <br><br>
為**單輸入單輸出**的編譯 <br>
<br>
### 擴充使用
如有多個React頁面要呈現， <br>
則仰賴**多輸入多輸出**的Webpack編譯 <br>

* Ex: <br>
productList\index.js + productDetail\index.js <br>
&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;    ↓ <br>
projectList.bundle.js + prodectDetail.bundle.js <br>

#### 發現問題
不過這樣會導致NPM套件資訊**同時都存在這兩個bundle檔案**中(檔案會越來越肥)， <br>
因此要再額外將NPM的檔案分離出來 (套件優化) <br>
 <br>
* 所以最終結果變成： <br>
&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  productList\index.js + productDetail\index.js <br>
&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp;   ↓ <br>
projectList.bundle.js + prodectDetail.bundle.js + vender.bundle.js (套件檔案) <br><br>
這樣只要NPM套件不更新的情況下， <br>
vender.bundle.js也不會變更， <br>
進而減少掉不必要的編譯， <br>
防止頁面變多時bundle.js編譯變慢 <br>
### 範例設定檔
將webpack.config.js檔案更改為以下程式碼即可進行多輸入輸出 <br> <br> 
**自定義的規則**： <br>
1. **搜尋entry範圍(curDir)** - 在./src/components內去搜尋 <br>
2. **搜尋entry目標檔案名** - main.js <br>
3. **輸出output檔案規則** - [main.js的資料夾名].bundle.js

```javascript
"use strict";

const path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const curDir = path.join("src", "components", path.sep);
const entryFiles = findFiles(curDir, ["main.js"]);  // 在資料夾中找到所有自定義檔名path (及資料夾名稱)

module.exports = {
    entry: entryFiles,
    output: {
        path: path.resolve(__dirname, "./src"),
        filename: "[name].bundle.js"    // 根據資料夾名稱命名輸出檔案
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,    // 指定所有import的js及jsx檔案
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"] //可識別最新的js格式
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg)$/,
                use: ['url-loader']
            }
        ]
    },
    optimization: {   // 優化將套件資訊抽出
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },
    devtool: "inline-source-map",
    plugins: [new WebpackNotifierPlugin(), new BrowserSyncPlugin()]
};


// 找到自定義檔名的路徑，並命名為資料夾名稱
function findFiles(searchPath, targetFilename) {
    const fs = require("fs");   // file system
    const targetFiles = [];

    function startScaning(startPath) {
        const files = fs.readdirSync(startPath);
        for (let i in files) {
            const file = path.join(startPath, files[i]);
            if (file.indexOf(targetFilename) >= 0) {
                targetFiles.push(file);
            } else if (fs.lstatSync(file).isDirectory()) {
                startScaning(file); // scan directory
            }
        }
    };
    startScaning(searchPath);
    const targetFilesArr = targetFiles.reduce((obj, filePath) => {
        const entryChunkName = path.basename(path.dirname(filePath)); //資料夾名稱作為obj的名字
        obj[entryChunkName] = `./${filePath}`;  // name array object
        return obj;
        }, {}
    );
    return targetFilesArr;
}

```
