import Navbar from './components/Navbar/navbar';
import React, { useState } from 'react';
import Threads from './pages/community/Threads';

function App() {
  return (
    <>
      <Threads></Threads>
      <Navbar></Navbar>
    </>
  );
}

export default App;
