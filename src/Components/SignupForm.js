import { useState } from "react";

export const SignupForm = ({setUser, setNeedsAccount}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        setError(`${username}, you can't currently sign up with details ${email} and ${password}`);
        /*signIn(username, password, setError)*/;
    }

    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
            {error && <p className="errorMessage">{error}</p>}
            <button type="submit">Sign Up</button>
            <p onClick={() => setNeedsAccount(false)}
            >Already a user? Log in</p>
        </form>
    )
}