import React from 'react';
import { render } from 'react-dom';

/*
const App = () => (
    <React.Fragment>
        <h1>React in ASP.NET MVC!</h1>
        <div>Hello React World</div>
    </React.Fragment>
);
*/



// 自訂組件 (限定return一個TAG)
class App extends React.Component {

    // (3)使用State更改其他組件變數值
    constructor(props) {
        super(props);
        this.state = {
            textState: "NEW TEXTTTT"
        }
    }

    render() {  // (method1)直接取預設值 (method2)將被指定變數取代掉 (method3)使用State更改另一個組件之值
        return (
            <div>
                <h1 id="method1">{this.props.title}</h1>
                <div id="method2">{this.props.text1}</div> <br />
                <App2 text2= {this.state.textState} />
            </div>
        );
    }
}
class App2 extends React.Component {
    render() {
        return (
            <div id="method3">{this.props.text2}</div>
        );
    }
} 


// (1)組件變數預設值
App.defaultProps = {
    title: "React Hello World!",
    text1: "Default.",
}
App2.defaultProps = {
    text2: "This will be replaced."
}

export default App

// 呼叫App組件 & (2)指定變數值
// render(<App text1="Hmmmmmmmm" />, document.getElementById('app'));