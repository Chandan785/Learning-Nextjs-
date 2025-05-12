'use client'
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import '../login.css';
const studentlogin = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Student Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>Login to your student account</p>
      <div className='container'>
      <Link href = "/">Go to home</Link>
      <Link href = "/login/collagelogin">Go to Collage Login</Link>
      <Link href = "/about/aboutcollage">Go to About Collage</Link>
      <Link href = "/about">Go to About</Link>
      <br />
      <Link href = "/login/collagelogin">Go to Collage Login</Link>
      <br/>
      <button onClick={() => router.push('/login/collagelogin')}>Go to Collage Login</button>
      </div>
     
    </div>
  );
}
export default studentlogin;