import logo from "./logo.svg";
import "./App.css";
import SortTable from "./sort_table/SortTable";

function App() {
  return (
    <SortTable
      columnsNames={["First Name", "Last Name", "Phone"]}
      rows={[
        ["BB", "Quesada Cascante", "000003"],
        ["CCC", "Quesada Cascante", "000000"],
        ["AAA", "Quesada Cascante", "000001"],
        ["EEE", "Quesada Cascante", "000002"],
      ]}
    />
  );
}

export default App;
