export const submitLoginForm = async (username, password, setError, setUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                password
            }),
        });
        const data = await response.json();
        if (data.err) { 
            throw new Error(data.err)
        };
        setUser(data.username);
    } catch (error) {
        setError(error.message);
    }
}

export const signUp = async (username, email, password, setUser, setError) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                email,
                password
            }),
        });
        const data = await response.json();
        setUser(data.username);
    } catch (error) {
        setError("Could not create an account");
        console.log(`The error object is: ${error}`);
    }
}