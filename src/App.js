import logo from "./logo.svg";
import "./App.css";
import SortTable from "./sort_table/SortTable";

function App() {
  let data = [
    { fistName: "1", lastName: "2", phone: "3" },
    { fistName: "123", lastName: "123", phone: "22" },
    { fistName: "123", lastName: "123", phone: "44" },
    { fistName: "123", lastName: "123", phone: "33" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
    { fistName: "123", lastName: "123", phone: "123" },
  ];

  return (
    <SortTable
      // columnsNames={["First Name", "Last Name", "Phone"]}
      dateFormat={["DD/MM/YYYY", "MM/DD/YYYY"]}
      rows={data}
      // rows={[
      //   ["a", "01/02/2000", "0,1"],
      //   ["b", "01/02/2001", "000000"],
      //   ["c", "01/03/2000", "000001"],
      //   ["z", "21/02/2000", "000002"],
      //   ["qwe", "01/02/1999", "000003"],
      //   ["1", "12/02/1999", "000003"]
      // ]}
    />
  );
}

export default App;
