import logo from "./logo.svg";
import "./App.css";
import SortTable from "./sort_table/SortTable";

function App() {
  let data = [
    { fistName: "123", lastName: "123", phone: "11" },
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
  ];

  return (
    <SortTable
      columnsNames={["First Name", "Last Name", "Phone"]}
      rows={data}
      // rows={[
      //   ["asd", "Quesada Cascante", "0,1"],
      //   ["asd", "Quesada Cascante", "000000"],
      //   ["qwe", "Quesada Cascante", "000001"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["qwe", "Quesada Cascante", "000003"],
      //   ["asd", "Quesada Cascante", "000004"],
      //   ["EEE", "Quesada Cascante", "000005"],
      //   ["EEE", "Quesada Cascante", "000006"],
      //   ["EEE", "Quesada Cascante", "000007"],
      //   ["zxc", "Quesada Cascante", "000008"],
      //   ["dasd", "Quesada Cascante", "000009"],
      //   ["xcv", "Quesada Cascante", "0000010"],
      //   ["EEE", "Quesada Cascante", "0000011"],
      //   ["EcvxcvEE", "Quesada Cascante", "0000012"],
      //   ["EEE", "Quesada Cascante", "0000013"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["zxc", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      //   ["EEE", "Quesada Cascante", "000002"],
      // ]}
    />
  );
}

export default App;
