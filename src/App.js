import lines from "./linesData.json";
import Line from "./Line";
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

function App() {
  const linesText = lines.map((item, index) => <Line key={index} text={item} />);
  return (
    <StyledBox>
      <AppHeader>Textos de teatre</AppHeader>
      {linesText}
    </StyledBox>
  );
}

export default App;
