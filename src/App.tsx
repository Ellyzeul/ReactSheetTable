import './App.css';
import { Table } from './components/Table';

function App() {
  const headers = ["a", "b", "c", "d"]
  const data = [
    [
      {value:1, cellType: "input"},
      {value:[{key:0, value:"a"}, {key:1, value:"b"}, {key:2, value:"c"}], cellType: "select"},
      {value:3, cellType: "input"},
      {value:4, cellType: "input"}
    ], 
    [
      {value:2, cellType: "input"},
      {value:[{key:0, value:"d"}, {key:1, value:"e"}, {key:2, value:"f"}], cellType: "select"},
      {value:5, cellType: "input"},
      {value:7, cellType: "input"}
    ]
  ]

  return (
    <div className="app">
      <Table headers={headers} data={data} />
    </div>
  );
}

export default App;
