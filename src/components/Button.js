import React from 'react';
import "./Button.css"
import 'bootstrap/dist/css/bootstrap.min.css';




class Button extends React.Component {
    isOperator = (value) => {
        return (!isNaN(value) || value === "=" || value === ".")
    }
    render(){
        return (
            <button className={`button btn rounded-0 ${this.isOperator(this.props.children) ? "" : "operator"}`} onClick={()=>this.props.handleClick(this.props.children)}>
                {this.props.children}
            </button>
        );
    }
    
}

export default Button;
