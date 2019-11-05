import React from 'react';
import { render } from 'react-dom';

class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "Text here..."
        };
        this.updateData = this.updateData.bind(this);
    }

    render() {
        return (
            <div>
                <Content myData={this.state.data} updateMyData={this.updateData} />     
            </div>
        );
    }

    updateData(event) {
        this.setState({ data: event.target.value });
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <div>Name:</div>
                <input value={this.props.myData} onChange={this.props.updateMyData}></input>
                <div>{this.props.myData}</div>
                <button type="submit">Submit</button>
            </div>
        );
    }
}

export default InputText;