import React, { Component } from 'react';
import './Button';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {num: 1};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let ranNum = Math.floor(Math.random() * 10) + 1;
        this.setState({num: ranNum});
    }
    render(){
        return <div>
            <h1>henlo {this.state.num}</h1>
            {this.state.num === 7
            ? <h3>WINNER</h3>
            : <button onClick={this.handleClick}>Click me</button>}
        </div>
    }
}

export default Button;