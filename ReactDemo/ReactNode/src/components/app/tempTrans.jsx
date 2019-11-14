import React from 'react';
import { METHODS } from 'http';

class TempTrans extends React.Component {
    constructor() {
        super();                                // 繼承Props
        this.state = { output: 'Default output state' }       // 設定預設state

        this.HandlerCal = this.HandlerCal.bind(this);   // 綁定Handler
    }

    HandlerCal(event) {
        const input = event.target.value;   // input值
        const testPass = /\d$/.test(input); // 檢查input須為全數字

        if (input && testPass) {            // input有值且為數字 -> 傳送至後端API
            fetch("/Home/TempTrans", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ data: input })
            })
                .then(res => res.json())    // 將Response轉成Json格式
                .then(
                    (result) => {           // 取得API傳回結果
                        this.setState({ output: result });
                    },
                    (error) => {            // 取得API傳回的錯誤
                        alert('Error occured - ' + error)
                    }
                ); 
        }
    }

    render() {
        return (
            <fieldset>
                <legend>Temperature</legend>

                <b>Input the Celsius degree：</b>
                <input type="text" onChange={this.HandlerCal}></input>   <br /><br />

                　　↓  (Fetch to Server & Return the Result)  <br /><br />

                <b>Here's the Fahrenheit degree：</b>
                <input type="text" value={this.state.output} readOnly></input> (State Value) <br />
            </fieldset>
        )
    }

}

class BtnShowDiv extends React.Component {        // 顯示&隱藏溫度轉換器的按鈕
    constructor() {
        super();            // 繼承
        this.state = {      // 設定預設state
            showTransfer: false
        }
        this.handleShowHide = this.handleShowHide.bind(this);   // 綁定功能
    }

    handleShowHide(e) {     // 被綁定功能
        var Show = this.state.showTransfer;
        this.setState({ showTransfer: Show ? false : true });   // 切換state為另一個狀態
    }

    render() {
        const IsDisplayed = {
            display: this.state.showTransfer ? '' : 'none'      // 根據state更改CSS
           };

        return (
            <div>
                <div>The state of "showTransfer" is: <input readOnly type="text" value={this.state.showTransfer} style={{ width: "30px" }}></input></div><br />

                <button type="button" onClick={this.handleShowHide}>{this.props.btnText}</button> <br /><br />
                <div style={IsDisplayed}>
                    {this.props.inside}
                </div>    
            </div>
        )   // 點擊按鈕->切換state、根據state->轉換style；props.btnText=自訂按鈕、props.inside=被顯示內容
    }
}

BtnShowDiv.defaultProps = {     // 預設Prop的值
    btnText: "Show Something...",
    inside: "Insert a <Html Tag /> Here."
}

export { BtnShowDiv, TempTrans};
