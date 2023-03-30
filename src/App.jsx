import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';

function App() {
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
