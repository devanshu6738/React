import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { provider} from '../config/firebaseAuth'
import { auth } from '../config/firebaseAuth'

 function SigninPage() {
    async function handleAuth(){
       let data=await signInWithPopup(auth,provider)
       
       
    }
  return (
    <div>
      Login 
      <button onClick={handleAuth} className='p-5 bg-slate-500 mt-6'>Google Login</button>
    </div>
  )
}

export default SigninPage
