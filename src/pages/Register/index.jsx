import { useState } from "react";
import { useForm } from "react-hook-form";
import { app } from "../../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const Register = () => {
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        const authentication = getAuth();
        let uid = '';
        await createUserWithEmailAndPassword(authentication, data.email, data.password)
            .then((response) => {
                uid = response.user.uid;
                sessionStorage.setItem('User Id', uid);
                sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken)
                window.dispatchEvent(new Event("storage"))
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    console.error('Email Already In Use')
                }
            })
        
            fetch('http://localhost:8080/api/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: data.email,
                    name: data.name,
                    _id: uid
                })
            }).then((response) => {
                if (response.status === 200) {
                    setLoading(false);
                    
                    navigate('/');
                } else {
                    console.log(response.json());
                }
            }).catch((error) => {
                setLoading(false);
                console.log(error)
            })
    }
    return (
        <div>
        <h1 className="flex items-center justify-center text-3xl font-bold bg-black text-white">FOODUP!</h1>
        <div className="h-screen bg-black flex  items-center justify-center">
            <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
                <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
                    
                <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label 
                        htmlFor="name"
                        className="block text-lg font-medium text-gray-200">Name</label>
                        <input 
                        {...register('name')}
                        id="name"
                        type="text"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                        />
                    </div>
                    <div>
                        <label 
                        htmlFor="email"
                        className="block text-lg font-medium text-gray-200">Email</label>
                        <input 
                        {...register('email')}
                        id="email"
                        type="email"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                        />
                    </div>
                    <div>
                        <label 
                        htmlFor="password"
                        className="block text-lg font-medium text-gray-200">Password</label>
                        <input 
                        {...register('password')}
                        id="password"
                        type="password"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                        />
                    </div>
                    <div className="py-4 flex items-center justify-center"><button size="large" className="bg-yellow-400 hover:bg-yellow-500 w-60 h-10 p-5 flex items-center justify-center text-lg rounded-lg">{loading ? "loading" : 'Register'}</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Register;