import './App.css';
import lines from "./linesData.json";
import Line from "./Line";

function App() {
  const linesText = lines.map(item => <Line text={item} />);
  return (
    <div className="App">
      {linesText}
    </div>
  );
}

export default App;
