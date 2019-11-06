import React from 'react';

class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {      // 設定初始state變數
            data: "Text here..."
        };
        this.updateData = this.updateData.bind(this);   // 綁定updateData這個function
    }

    render() {
        return (
            <div>
                <Content myData={this.state.data} updateMyData={this.updateData} />     
            </div>
        );  // 以props變數、自定義function輸入<Content/>這個自定義class的自定義變數myData&updateData
    }

    updateData(event) { // 自定義Function
        this.setState({ data: event.target.value });
    }
}

// 被呼叫的class
class Content extends React.Component {
    render() {
        return (
            <div>
                <div>Name:</div>
                <input value={this.props.myData} onChange={this.props.updateMyData}></input>
                <div>{this.props.myData}</div>
                <button type="submit">Submit</button>
            </div>
        );  // 使用props自定義變數
    }
}

export default InputText;