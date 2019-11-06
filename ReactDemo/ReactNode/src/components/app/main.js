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