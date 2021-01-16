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
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  font-size: 0.7em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
        <StyledButton onClick={this.handleClick(-1)} disabled={!this.state.previousIsEnabled}>Anterior</StyledButton>
        <StyledButton onClick={this.handleClick(1)} disabled={!this.state.nextIsEnabled}>Següent</StyledButton>
        {this.state.linesText[this.state.currentLineIndex]}
      </StyledBox>
    );
  }
};

export default App;
