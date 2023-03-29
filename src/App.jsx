import { useState } from 'react';
import styled from 'styled-components';
import reactLogo from './assets/react.svg';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Head />
      <Body />          
    </div>
  );
}

export default App;

const HelloWorld = styled.div`
  font-size: 50px;
`;
