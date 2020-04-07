import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render(){   
        return(
            <i className={`Die-icon fas fa-dice-${this.props.number} ${this.props.rolling && 'shaking'}`}></i>
        );
    }
}

export default Die;