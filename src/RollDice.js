import React, { Component } from 'react';
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rolling: false,
            num1: 'six',
            num2: 'six' 
        }
        this.roll = this.roll.bind(this);
    }

    static defaultProps = {
        diceNum: ['one','two','three','four','five','six']
    }
    
    random(item){
        return item[Math.floor(Math.random() * item.length)];
    }

    roll(e){
        let item1 = this.random(this.props.diceNum);
        let item2 = this.random(this.props.diceNum);
        this.setState({num2 : item2, num1 : item1, rolling: true});
        setTimeout(() => {
           this.setState({rolling: false}) 
        }, 1000);
    }

    render(){
        return(
            <div>
                <Die number={this.state.num1} rolling={this.state.rolling}/>
                <Die number={this.state.num2} rolling={this.state.rolling}/>
                <br/>
                <button className="RollDice-button" onClick={this.roll} disabled={this.state.rolling}>
                   {this.state.rolling ? "Rolling..." : "Roll dice~!"}
                </button>
            </div>
        ); 
    }
}

export default RollDice;