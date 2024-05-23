import Navbar from './components/navbar/Navbar';
import CardRules from './pages/game-docs/Card_rules';
import GameRules from './pages/game-docs/Game_rules';

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
