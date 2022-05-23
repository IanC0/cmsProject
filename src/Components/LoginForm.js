import { useState } from "react";
import { logIn } from '../utils';

export const LoginForm = ({setUser, setNeedsAccount}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        logIn(username, password, setUser, setError);
    }

    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
            {error && <p className="errorMessage">{error}</p>}
            <button type="submit">Log In</button>
            <p onClick={() => setNeedsAccount(true)}>Sign up</p>
        </form>
    )
}