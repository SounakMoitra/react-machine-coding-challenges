import "./App.css";
import SelectableGrid from "./components/SelectableGrid";

function App() {
  return (
    <>
      <h1>Constructing a Selectable Grid</h1>
      <SelectableGrid rows={15} columns={15} />
    </>
  );
}

export default App;
