import React from 'react';
import InputText from './forms.jsx';   // 引用App組件
// 檔案變多時則繼續引用其他組件

class MainForms extends React.Component {
    render() {
        return (
            <InputText />
        );
    }
}

ReactDOM.render(<MainForms />, document.getElementById('form'));
// export default MainForms;  // 輸出供index.js引用
