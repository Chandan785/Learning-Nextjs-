'use client'
import {useRouter} from "next/navigation";
import Link from "next/link";
const login =() =>{
     const router = useRouter();
    return(
        <main>
            <h1>Login Page</h1>
          
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit">Login</button>
                </form>
                  <br/>
                  <Link href="/">Go to home</Link>
                    <br />
                <Link href="/about">Go to about</Link>
                <br />
                 <Link href="https://chatgpt.com/">Go to Chatgpt</Link>
                <br />
                
                 <br/>
               
                <button onClick={()=>router.push('/')}>Go to home page</button>
                  <br/>  <br/>
                <button onClick={()=> router.push('/about')}>Go to about page</button><br/>
                <button onClick={()=> router.push('/about/aboutcollage')}>Go to about collage page</button>
                 <button onClick={()=> router.push('/login/studentlogin')}>Go to about collage page</button>
              </main>      
    )
}
export default login;