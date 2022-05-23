import { useState } from "react";
import './style.css';
import { AccessForm } from './Components/Access';

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      {!user && <AccessForm setUser={setUser} />}
      {user && <h1>{`Welcome ${user}`}</h1>}
    </div>
  );
}

export default App;
