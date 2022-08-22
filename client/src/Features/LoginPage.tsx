import React, { useEffect } from 'react'
import ButtonComponent from '../Components/ButtonComponent'
import InputComponent from '../Components/InputComponent'
import { useAuth } from '../Context/authContext'
import * as ReactRouterDOM from 'react-router-dom'

const LoginPage : React.FC = () => {
    const navigate = ReactRouterDOM.useNavigate()
    const [message, setMessage] = React.useState(false)
    const [messageContent, setMessageContent] = React.useState("")

    const [userDetails, setUserDetails] = React.useState({
        email: "",
        password: ""
    })

    const {login, currentUser, signup} = useAuth()

    useEffect(() => {
        const checkUserLogin = () => {
            if(currentUser) navigate('/')
        }
        checkUserLogin()
    }, [])

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({
            ...userDetails, [e.target.name] : e.target.value
        })
    }

    const handleLogin = async () => {
        try {
            if(userDetails.email === '' || userDetails.password === ''){
                setMessage(true)
                setMessageContent("Please fill up all details")
                setTimeout(() => {
                    setMessage(false)
                    setMessageContent("")
                }, 5000);
            }
            else{
                const loginData = await login(userDetails.email, userDetails.password)
                clearDetails()
                navigate('/')
            }
        } catch (error) {
            console.log(error)
            setMessage(true)
            setMessageContent("Login Error")
            setTimeout(() => {
                setMessage(false)
                setMessageContent("")
            }, 5000);
        }
    }

    const handleRegister = async () => {
        try {
            if(userDetails.email === '' || userDetails.password === '') {
                setMessage(true)
                setMessageContent("Please fill up all details")
                setTimeout(() => {
                    setMessage(false)
                    setMessageContent("")
                }, 5000)
            }
            else{
                const registerData = await signup(userDetails.email, userDetails.password)
                clearDetails()
                navigate('/')
            }
        } catch (error) {
            console.log(error)
            setMessage(true)
            setMessageContent("Register Error")
            setTimeout(() => {
                setMessage(false)
                setMessageContent("")
            }, 5000)
        }
    }

    const clearDetails = () => {
        setUserDetails({
            email: "",
            password: ""
        })
    }

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-[400px] mt-4 h-96 bg-gray-100 rounded-lg p-7 shadow-lg'>
                <div className='w-full'>
                    {message && <p className='text-center bg-red-300 outline-2 text- outline outline-red-500 p-2 my-1'>{messageContent}</p>}
                    <div className='py-6 flex flex-col gap-5'>
                    <InputComponent onChange={handleInputChange} name="email" value={userDetails.email} type='email' placeholder='Email' required={true}/>
                    <InputComponent onChange={handleInputChange} name="password" value={userDetails.password} type='password' placeholder='Password' required={true}/>
                    </div>
                    <div className='flex flex-col gap-3'>
                    <ButtonComponent onClick={handleLogin}>Login</ButtonComponent>
                    <ButtonComponent onClick={handleRegister}>Don't have an account ?</ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default LoginPage