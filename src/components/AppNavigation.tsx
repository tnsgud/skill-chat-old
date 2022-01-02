import React, {useEffect, useState} from 'react'
import {User} from "firebase/auth";
import {dbService} from '../firebase'
import {onSnapshot, collection, query, where, getDocs} from 'firebase/firestore'

const AppNavigation = ({user}: { user: User }) => {
    const [serverList, setServerList] = useState<{ id: string }[]>([]);

    const query1 = query(collection(dbService, 'skill-chat'), where('test1', '==', 'a'))

    useEffect(() => {
        // onSnapshot(query1, (snapshot) => {
        //
        //     const newArray:[id:string,name:string] = snapshot.docs.map(doc => {
        //         for(let key in doc.data()) {
        //
        //         }
        //
        //         return {id:doc.id, name:'hello'}
        //     })
        //
        //     // const newArray:{id:string, test1:string}= snapshot.docs.map((doc) => ({id: doc.id, test1:doc.data()}));
        //     // setServerList(newArray);
        // })
    }, []);

    return <div>this is nav</div>

    // return <div>{serverList.map(value => {
    //     return (<span>{value.test1}</span>)
    // })}</div>
}

export default AppNavigation