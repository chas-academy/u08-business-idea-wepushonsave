import Navbar from './components/Navbar/navbar';
import { useState } from 'react';
import Threads from './pages/community/Threads';

function App() {
  return (
    <>
      <GameRules></GameRules>
      <CardRules></CardRules>
      <Threads></Threads>
      <Navbar></Navbar>
    </>
  );
}

export default App;
