import React, { useEffect, useState } from 'react'

function Signup() {
    const [userSignUp, setUserSignUp] = useState({
        username : '',
        email : '',
        phone : '',
        password : ''
    })

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserSignUp({...userSignUp, [name] : value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8000/test', {
            method : 'POST',
            body : JSON.stringify(userSignUp),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        
    }

    const getUsers = async () => {
        const response = await fetch('http://localhost:8000/test', {
            method : 'GET'
        })
        const data = await response.json()
        console.log(data);
    }

    useEffect(() => {
        getUsers()
    },[])


  return (
    <>
        <form action='' onSubmit={handleSubmit}>
            <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
                <div className='40-w p-5 rounded bg-white'>
                    <div className='mb-2'>
                        <label className='item' htmlFor='username'>Full Name</label>
                        <input type='text' placeholder='Enter your name' value={userSignUp.username} onChange={handleInput} name='username' id='username' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label className='item' htmlFor='email'>Email</label>
                        <input type='text' placeholder='enter email' value={userSignUp.email} onChange={handleInput} name='email' id='email'className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label className='item' htmlFor='phone'>Phone</label>
                        <input type='text' placeholder='enter phone no' value={userSignUp.phone} onChange={handleInput} name='phone' id='phone'className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label className='item' htmlFor='password'>Password</label>
                        <input type='password' placeholder='enter password' value={userSignUp.password} onChange={handleInput} name='password' id='password'className='form-control'/>
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary my-4' type='submit'>SignUp</button>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}

export default Signup