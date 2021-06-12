import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./components/add";
import Listtodo from "./components/list";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>todo list</h1>
      <Add/>
      <Listtodo/>
     
    </div>
  );


}

export default App;
