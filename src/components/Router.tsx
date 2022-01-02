import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from 'pages/Home';
import Auth from 'pages/Auth'
import {User} from "firebase/auth";
import AppNavigation from "components/AppNavigation";


const AppRouter = ({isLogin, user}: { isLogin: boolean, user:User|null }) => {
    return (
        <BrowserRouter>
            {isLogin && user && <AppNavigation user={user}/>}
            {isLogin ? <>
                    <Routes>
                        <Route path={'/'} element={<Home user={user}/>}/>
                    </Routes>
                </>
                : <>
                    <Routes>
                        <Route path={'/'} element={<Auth />}/>
                    </Routes>
                </>}
        </BrowserRouter>
    );
};

export default AppRouter;
