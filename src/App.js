import lines from "./linesData.json";
import Line from "./Line";
import {StyledBox, AppHeader} from './styles';

function App() {
  return (
    <StyledBox>
      <AppHeader>Textos de teatre</AppHeader>
      {lines.map((text, index) => <Line key={index} text={text} />)}
    </StyledBox>
  );
}

export default App;
