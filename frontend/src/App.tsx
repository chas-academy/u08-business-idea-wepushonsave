import Navbar from './components/navbar/Navbar';
import React, {useState} from 'react';
import GameRules from './pages/game-docs/Game_rules';
import CardRules from './pages/game-docs/Card_rules';

function App() {
  return (
    <>
      <GameRules></GameRules>
      <CardRules></CardRules>
      <Navbar></Navbar>
    </>
  );
}

export default App;
