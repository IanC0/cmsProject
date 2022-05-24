import { useState } from "react";
import './style.css';
import { AccessForm } from './Components/Access';
import { Sidebar } from "./Components/Sidebar"


function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      {!user && <AccessForm setUser={setUser} />}
      {user && <Sidebar />}
    </div>
  );
}

export default App;
