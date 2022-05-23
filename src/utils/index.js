export const logIn = async (username, password, setUser) => {
    try {
        console.log("about to fetch");
        const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                password
            }),
        });
        console.log("fetch done");
        const data = await response.json();
        console.log(data);
        setUser(data.username);
    } catch (error) {
        console.log(error)
    }
}

export const signUp = async (username, email, password, setUser, setError) => {
    try {
        console.log("about to fetch");
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                email,
                password
            }),
        });
        console.log("fetch done");
        const data = await response.json();
        setUser(data.username);
    } catch (error) {
        setError("Could not create an account");
        console.log(error)
    }
}