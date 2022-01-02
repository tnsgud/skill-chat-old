import React, {useEffect, useState} from "react";
import {authService, dbService} from '../firebase'
import {User} from "firebase/auth";
import {query, where, getDoc, collection, getDocs} from "firebase/firestore";
import AppRouter from 'components/Router'

function App() {
    const [init, setInit] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLogin, setIsLogin] = useState<boolean>(false);

    const selectUserDocument = async () => {

    }

    useEffect(() => {
        authService.onAuthStateChanged((userInfo) => {
            if (userInfo) {
                setUser(userInfo)
                setIsLogin(true)
            } else {
                setIsLogin(false)
            }

            setInit(true)
        })
    }, []);


    return (
        <>{init ? <AppRouter isLogin={isLogin} user={user}/> : 'initializing'}</>
    );
}

export default App;
