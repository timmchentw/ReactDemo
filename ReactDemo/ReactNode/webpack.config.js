"use strict";

const path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const curDir = path.join("src", "components", path.sep);
const entryFiles = findFiles(curDir, ["main.js"]);

module.exports = {
    entry: entryFiles,
    output: {
        path: path.resolve(__dirname, "./src"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    optimization: {
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
        const entryChunkName = path.basename(path.dirname(filePath));
        obj[entryChunkName] = `./${filePath}`;  // name array object
        return obj;
        }, {}
    );
    return targetFilesArr;
}
