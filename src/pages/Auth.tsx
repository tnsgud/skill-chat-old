import React, {MouseEvent} from "react";
import {GoogleAuthProvider, signInWithPopup} from "@firebase/auth";
import {authService} from "../firebase";

const Auth = () => {
    const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(authService, provider);
    }

    return <button onClick={onClick}>구글로 로그인</button>
}

export default Auth