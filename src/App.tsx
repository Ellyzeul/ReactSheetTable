import './App.css';
import { ReactSheetTable } from './components/ReactSheetTable';
import { ReactSheetTableRow } from './components/ReactSheetTable/types';

function App() {
  const headers = ["a", "b", "c", "d"]

  const rows: ReactSheetTableRow[] = [
    {'id': 0, 'a': 1, 'b': 2,  'c': 3,  'd': [{key:0, value:"String A"}, {key:1, value:"String B"}, {key:2, value:"Another string c"}]},
    {'id': 1, 'a': 1, 'b': 2,  'c': 3,  'd': [{key:0, value:"String A"}, {key:1, value:"String B"}, {key:2, value:"Another string c"}]}
  ]

  return (
    <div className="app">
      <ReactSheetTable headers={headers} rows={rows} />
    </div>
  );
}

export default App;
