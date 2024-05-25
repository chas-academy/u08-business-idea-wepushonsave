import Navbar from './components/navbar/Navbar';
import { useEffect } from 'react';

useEffect(() => {
  fetch("http://localhost:3000")
    .then((res) => res.text())
    .then((data) => console.log(data)); 
}, []);

function App() {
  return (
    <>
      <Navbar></Navbar>
      
    </>
  );
}

export default App;
