import React from 'react';
import Button from "./components/Button"
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      output: "0",
      input:"0",
      prevValue:"",
      CurrentValue: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleZero = this.handleZero.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
  }
  handleClick=(val)=>{
    this.setState({input: this.state.input + val})
  }
  handleClear=()=>{
    this.setState({input: "0", output: ""})
  }
  handleZero=(val)=>{
    if(this.state.input !== "0"){
      this.setState({input: this.state.input + val})
    }

  }
  handleDecimal= (val)=>{
    if(this.state.input.indexOf(val) === -1){
      this.setState({input: this.state.input + val})
    }
  }
  render(){
    return (
      <div className="App">
        <div className="container_wrapper">
          <div className="row">
            <div id="displayed">{this.state.output}</div>
          </div>
          <div className="row">
    <div id="display">{this.state.input}</div>
          </div>
          <div className="row">
            <Button id="seven" handleClick={this.handleClick}>7</Button>
            <Button id="eight" handleClick={this.handleClick}>8</Button>
            <Button id="nine" handleClick={this.handleClick}>9</Button>
            <Button id="subtract" >-</Button>
          </div>
          <div className="row">
            <Button id="four" handleClick={this.handleClick}>4</Button>
            <Button id="five"handleClick={this.handleClick}>5</Button>
            <Button id="six"handleClick={this.handleClick}>6</Button>
            <Button id="add">+</Button>
          </div>
          <div className="row">
            <Button id="one" handleClick={this.handleClick}>1</Button>
            <Button id="two" handleClick={this.handleClick}>2</Button>
            <Button id="three" handleClick={this.handleClick}>3</Button>
            <Button id="multiply" handleClick={this.handleClick}>*</Button>
          </div>
          <div className="row">            
            <Button id="zero" handleClick={this.handleZero}>0</Button>           
            <Button id="decimal" handleClick={this.handleDecimal}>.</Button>
           
            <Button id="equals">=</Button>
            <Button id="divide">/</Button>
          </div>
          <div className="row">
            <div id="clear" className="button btn rounded-0" onClick={this.handleClear}>Clear</div>
          </div>
        </div>
        
      </div>
    );
  }
  
}

export default App;
