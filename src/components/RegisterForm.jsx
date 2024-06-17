import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/apiConfig"
export default function RegisterPage() {

    const navigate = useNavigate()
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        
        const response = await axios.post('/api/auth/register',{
            username: username,
            password: password,
            email: email,
            fullname: fullname,
            user_id : ""
        })

        
        
        console.log(response)
        if (response.status) {            
            navigate('/')
        }else{
            alert(data.message)
        }


    }

    return (

        <section className="h-full w-full auth wrap">
            <h1 className="txt-title" >Register</h1>
            <form action="" onSubmit={handleRegister}>
                <input placeholder="Fullname"
                    type="text"
                    name="fullname"
                    id="fullname"
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname} />
                <input placeholder="Username"
                    type="text"
                    name="username"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} />
                <input placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} />
                <input placeholder="Password"
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />

                <input type="submit" className="btn" value="Create Acount" />

            </form>
        </section>


    )

}