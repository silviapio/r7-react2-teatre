import React, {Component} from "react";
import Line from "./Line";
import lines from "./linesData.json";
import {StyledBox, AppHeader, StyledButton} from './styles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLineIndex: 0,
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
          nextIsEnabled: !(newIndex === lines.length - 1)
          }
        }); 
  }

  render() {
    const { previousIsEnabled, nextIsEnabled, currentLineIndex } = this.state;    
    return (
      <StyledBox>
        <AppHeader>Textos de teatre</AppHeader>
        <StyledButton onClick={this.handleClick(-1)} disabled={!previousIsEnabled}>Anterior</StyledButton>
        <StyledButton onClick={this.handleClick(1)} disabled={!nextIsEnabled}>Següent</StyledButton>
        <Line text={lines[currentLineIndex]} />
      </StyledBox>
    );
  }
};

export default App;