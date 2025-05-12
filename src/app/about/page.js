'use client';
import Link from "next/link";

import {useRouter} from "next/navigation";

const about=()=>{
    const router = useRouter();
    return(
        <main>
            <div>
            <h1>About</h1>
    <p>This is the about page.</p>
    <Link href ="/">Go to home</Link>
    <br/>  <br/>
     <button onClick={() => router.push("/")}>
      Go to Home page
     </button>
     <br/>
     <br/>
     <button onClick={() => router.push("/login")}>
      Go to login
     </button>
        </div>
         </main>
        
        
    )   
}

export default about;