import React from 'react';
import ReactDOM from 'react-dom'
import App from './app.jsx';   // 引用App組件
import PropsTest from './propsTest.jsx';   // 引用App組件
import { BtnShowDiv, TempTrans } from './tempTrans.jsx';
import { UseCompos } from './compositionTest.jsx';
// 檔案變多時則繼續引用其他組件

class MainApp extends React.Component {
    render() {
        return (
            <div>
                <App />

                <b>1. Props Test:</b> <br />
                <PropsTest />  <br />

                <b>2. State & Event+Fetch Test:</b> <br />
                <BtnShowDiv btnText="Show Temperature Calculater" inside={<TempTrans />} /> <br />

                <b>3. Composition Test:</b> <br />
                <UseCompos />

                <b>4. </b> <br />

            </div>
        );
    }
}

ReactDOM.render(<MainApp />, document.getElementById('app'));
ReactDOM.render(<Application />, document.getElementById('globalState'));

//export default MainApp;  // 輸出供index.js引用