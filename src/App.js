import React, {Component} from "react";
import Line from "./Line";
import lines from "./linesData.json";
import styled from "styled-components";

const StyledBox = styled.div`
  text-align: left;
  padding: 10px 30px;
  margin-top: 20px;
`;

const AppHeader = styled.header`
  color: #2d3436;
  font-size: 1.2em;
  font-style: italic;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLineIndex: 0,
      linesText: lines.map((item, index) => <Line key={index} text={item} />),
      previousIsEnabled: false,
      nextIsEnabled: true
    }
  }

  handleClick = increment => ()=> {  
      this.setState(prevState => {
        const newIndex = prevState.currentLineIndex + increment;
        return {
          currentLineIndex: newIndex,
          previousIsEnabled: !(newIndex === 0),
          nextIsEnabled: !(newIndex === prevState.linesText.length - 1)
          }
        }); 
  }

  render() {
    
    return (
      <StyledBox>
        <AppHeader>Textos de teatre</AppHeader>
        <button onClick={this.handleClick(-1)} disabled={!this.state.previousIsEnabled}>Anterior</button>
        <button onClick={this.handleClick(1)} disabled={!this.state.nextIsEnabled}>Següent</button>
        <p>{this.state.currentLineIndex}</p>
        {this.state.linesText[this.state.currentLineIndex]}
      </StyledBox>
    );
  }

};

export default App;
