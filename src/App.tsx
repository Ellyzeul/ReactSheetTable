import './App.css';
import { Table } from './components/Table';
import { ITableRow } from './components/Table/types';

function App() {
  const headers = ["a", "b", "c", "d"]


  const rows: ITableRow[] = [
    {'id': 0, 'a': 1, 'b': 2,  'c': 3,  'd': [{key:0, value:"a"}, {key:1, value:"b"}, {key:2, value:"c"}]},
    {'id': 1, 'a': 1, 'b': 2,  'c': 3,  'd': [{key:0, value:"a"}, {key:1, value:"b"}, {key:2, value:"c"}]}
  ]

  // [{key:0, value:"a"}, {key:1, value:"b"}, {key:2, value:"c"}]
  return (
    <div className="app">
      <Table headers={headers} rows={rows} />
    </div>
  );
}

export default App;
