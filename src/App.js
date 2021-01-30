import './App.css';
import lines from "./linesData.json";
import Line from "./Line";

function App() {
  return (
    <div className="App">
      {lines.map( text => <Line text={text} />)}
    </div>
  );
}

export default App;