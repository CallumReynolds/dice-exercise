import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render(){   
        return(
            <i className={`Die-icon fas fa-dice-${this.props.number}`}></i>
        );
    }
}

export default Die;