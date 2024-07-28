
import './App.css';

import Heading from './components/Heading';
import Bags from './components/Bags';
import Apples from './components/Apples';
import Pears from './components/Pears';
import Btn from './components/Btn';
import InputComponent from './components/Hookies';
import RegisterForm from './components/Hookies2';
import TextInputWithFocusButton from './components/Refs';
import Appie from './components/Propdrillin';
import { Route,Routes,Link } from 'react-router-dom';
import Homepage  from './components/Homepage';  
import AboutMe  from './components/AboutMe';
import CurrentMessage from './components/Condrender';
import MyVideo from './components/Loadvideo';

function App(props) { 
  return ( 
    <div className="App">{props.title} 
      This is the starting code for "Your first component" ungraded lab 
      <Heading /> 
      <Bags children={<Apples color="yellow" number="5" />} />
      <Bags children={<Pears friend="Peter" />} />
      <Btn></Btn>
      <InputComponent></InputComponent>
      <RegisterForm></RegisterForm>
      <TextInputWithFocusButton></TextInputWithFocusButton>
      <Appie></Appie>
      <nav className='nav'>
        
        <Link to="/" className='nav-item'>Homepage</Link>
        <Link to="/about-me" className='nav-item'>About Me</Link>
        
        
      </nav>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/about-me' element={<AboutMe/>}></Route>
      </Routes>

      <CurrentMessage/>
      <MyVideo></MyVideo>
    </div> 
  ); 
} 
 
export default App;

