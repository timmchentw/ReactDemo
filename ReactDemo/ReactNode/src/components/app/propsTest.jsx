import React from 'react';

class PropsTest extends React.Component {
    constructor(props) {
        super(props);   // 繼承props屬性
        this.state = {
            textState: "This text was set by state."    // (3)
        }
    }

    render() {  // (1)直接取props預設值 (2)直接指定props (3)使用State更改組件props
        return (
            <div>
                <MyText />                                      <br />
                <MyText text="This text was set manually." />   <br />
                <MyText text={this.state.textState} />          <br />
            </div>
        );
    }
}

class MyText extends React.Component {
    render() {
        return (
            <div>{this.props.text}</div>
        );
    }
}

MyText.defaultProps = { // (1)
    text: "This text was set by defaultProps."
}

export default PropsTest;