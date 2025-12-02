import React, { useState } from 'react';
import "./User.css"

const User = () => {
    const [user, setUser] = useState({
        name: "Tom",
        age: 32,
    });

    const [name, setName] = useState();

    const changeAge = () => {
        setUser({ ...user, age: user.age + 1 });
    };

    const changeHandler = (e) =>{
        setName(e.target.value);
        
    };

    const ChangeUserName = () =>{
        setUser({...user, name: name})
    };

    return (
        <div className='user'>
            <h2>Name: {user.name}, age: {user.age}</h2>
            <button onClick={changeAge}>Change age</button>
            <div>
                <input type="text" value={name} onChange={changeHandler}/>
                <button onClick={ChangeUserName}>save</button>
            </div>
        </div>
    );
}

export default User;
 