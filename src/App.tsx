import React, {FormEvent, useState} from "react";

function App() {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(userEmail + '/' + userPassword)
    };

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        const {currentTarget: {name, value}} = e;

        if (name === 'email') {
            setUserEmail(value)
        } else if (name === 'password') {
            setUserPassword(value)
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                이메일 <input name="email" type="email" placeholder="Email" onChange={onChange}/>
                비밀번호 <input name="password" type="password" placeholder="Password" onChange={onChange}/>
                로그인 <input type="submit"/>
            </form>
            <button>
                Continue with Google
            </button>

            <button>
                Continue with Github
            </button>
        </>
    );
}

export default App;
