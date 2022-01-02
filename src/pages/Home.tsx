import React from "react";
import {User} from "firebase/auth";

const Home = ({user} :{user:User|null }) => {
    return <div>this is home {user ? 'hello!' : 'Bye!'}</div>
}

export default Home