
import './App.css';

import Heading from './components/Heading';
import Bags from './components/Bags';
import Apples from './components/Apples';
import Pears from './components/Pears';
 
function App(props) { 
  return ( 
    <div className="App">{props.title} 
      This is the starting code for "Your first component" ungraded lab 
      <Heading /> 
      <Bags children={<Apples color="yellow" number="5" />} />
      <Bags children={<Pears friend="Peter" />} />
    </div> 
  ); 
} 
 
export default App;

