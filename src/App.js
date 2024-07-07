import logo from './logo.svg';
import './App.css';

import Heading from './components/Heading';

 
function App(props) { 
  return ( 
    <div className="App">{props.title} 
      This is the starting code for "Your first component" ungraded lab 
      <Heading /> 
    </div> 
  ); 
} 
 
export default App;

