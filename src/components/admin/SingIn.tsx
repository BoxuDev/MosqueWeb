import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase";
import React, { useState } from 'react';
import { AddDoc } from './AddDoc';

const SingIn = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [user, setUser] = useState<any>(null);

    const signIn = (e: any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                setUser(userCredential);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            {!user ?
                <>
                    <div className="sign-in-container">
                        <form onSubmit={signIn}>
                            <h1>Log In to your Account</h1>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                            <button type="submit">Log In</button>
                        </form>
                    </div>
                </> : <AddDoc />
            }
        </>
    );
}

export default SingIn;