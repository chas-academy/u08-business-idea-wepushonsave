/* eslint-disable react/react-in-jsx-scope */
import Navbar from './components/navbar/Navbar';
/*import Login from './pages/login/Login';*/
/*import { useEffect } from 'react';*/

/*useEffect(() => {
  fetch("http://localhost:3000")
    .then((res) => res.text())
    .then((data) => console.log(data)); 
}, []);*/

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/*<Login></Login>*/}
    </>
  );
}

export default App;
