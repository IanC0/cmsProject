import { useState } from "react";

import { SignupForm } from './SignupForm';
import { LoginForm } from './LoginForm';

import './Access.css';

export const AccessForm = ({setUser}) => {
    const [needsAccount, setNeedsAccount] = useState();

    return(
        <div id="accessForm">
            {needsAccount && <SignupForm setNeedsAccount={setNeedsAccount} />}
            {!needsAccount && <LoginForm setNeedsAccount={setNeedsAccount} />}
        </div>
    )
}