import React, { Component } from 'react';
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRolled: true,
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
        this.setState({num2 : item2, num1 : item1});
    }

    render(){
        return(
            <div>
                <Die number={this.state.num1}/>
                <Die number={this.state.num2}/>
                <br/>
                <button className="RollDice-button" onClick={this.roll}>Roll Dice~!</button>
            </div>
        ); 
    }
}

export default RollDice;