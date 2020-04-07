import React, { Component } from 'react';

class Die extends Component {
    
    render(){
        
        return(
        <div>
            <i className={`fas fa-dice-${this.props.number}`}></i>
        </div>
        );
    }
}

export default Die;