/* eslint-disable react/react-in-jsx-scope */
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
//import Register from './pages/register/Register';



function App() {
  return (
    <>
      <Navbar></Navbar>
     
      <Login></Login>
      {/*<Register></Register>*/}
    </>
  );
}

export default App;
