import Form from './components/Form';
import Instruction from './components/Instruction';
import ResizeableLayout from './components/ResizeableLayout';

import './App.css';

function App() {
  return (
    <div className="App">
      <Instruction/>
      <Form/>
      <ResizeableLayout/>
    </div>
  );
}

export default App;
