import { useState } from "react";
import './style.css';
import { AccessForm } from './Components/Access';
import { MainApp } from './Components/mainApp'
import { Support } from './Components/support'


function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <MainApp />
      <Support />
      {/* {!user && <AccessForm setUser={setUser} />}
      {user && <MainApp />}     */}
    </div>
  );
}

export default App;
