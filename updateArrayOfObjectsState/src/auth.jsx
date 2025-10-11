import { useState } from "react";
import { supabase } from "./supabse-clients";
import { useNavigate } from "react-router-dom";


export default function Auth(){

    const [isSignUp, setIsSignUp] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try{
        if(isSignUp){
            const {error: signUpError} = await supabase.auth.signUp({email,password})
            if (signUpError){
                setError(`Sign Up failed: ${signUpError.message}`)
                console.error('error signing up:', signUpError.message)
                return;
            }
            navigate('/cars')
        }else{
            const {error: signInError} = await supabase.auth.signInWithPassword({email,password})
            if(signInError){
                setError(`Sign In failed: ${signInError.message}`)
                console.error('Error signing in:', signInError.message);
                return ;
            }
            navigate('/cars')
        }
        
    } catch(err){
        setError('An unexpected error ocurred');
    } finally{
        setIsLoading(false);
    }
    }


    return(
        <form style={{display: 'flex', flexDirection: 'column', gap: '4px'}} onSubmit={handleSubmit}>
            <input 
             placeholder="Email" 
             type="email" 
             value={email}
             onChange={(e)=>setEmail(e.target.value)} />
            
            <input 
             placeholder="Password" 
             type="password" 
             value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
            
            <button
            type="submit"
            >
                Login
            </button>
            <button
            type="submit"
            onClick={() => setIsSignUp(true)}
            >
                Signup
            </button>
            {error && (
                <div style={{color: 'red'}}>
                    {error}
                </div>
            )}
        </form>
    );
}

