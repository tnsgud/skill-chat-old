import React, {FormEvent, useState, MouseEvent} from "react";
import {authService} from './firebase'
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";

function App() {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    };

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        const {currentTarget: {name, value}} = e;

        if (name === 'email') {
            setUserEmail(value)
        } else if (name === 'password') {
            setUserPassword(value)
        }
    }

    const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(authService, provider)
        console.log(result)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                이메일 <input name="email" type="email" placeholder="Email" onChange={onChange}/>
                비밀번호 <input name="password" type="password" placeholder="Password" onChange={onChange}/>
                로그인 <input type="submit"/>
            </form>
            <button onClick={onClick}>
                Continue with Google
            </button>
        </>
    );
}

export default App;
