import './App.css';
import ChildCom from './components/childComponent';
import {useState} from 'react';

function App() {
  const [chilName,setChildname]=useState('Default');
  const receviedName=(name)=>{
    setChildname(name);
  }
  return (
    <div className="App">
      <h2>Hello React I'm Parent</h2>
      <ChildCom setfun={receviedName}/>
      <p>Parent : My child said : {chilName}</p>
    </div>
  );
}

export default App;
