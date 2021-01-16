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
      currentLine: 0,
    }
  }

  handleClick = increment => ()=> {  
      this.setState(prevState => {
        return {
          currentLine: prevState.currentLine + increment
          }
        }); 
  }

  render() {
    const linesText = lines.map((item, index) => <Line key={index} text={item} />);
    return (
      <StyledBox>
        <AppHeader>Textos de teatre</AppHeader>
        <button onClick={this.handleClick(-1)}>Anterior</button>
        <button onClick={this.handleClick(1)}>Següent</button>
        <p>{this.state.currentLine}</p>
        {linesText}
      </StyledBox>
    );
  }

};

export default App;
