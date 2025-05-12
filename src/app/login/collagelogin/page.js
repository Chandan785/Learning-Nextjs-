'use client'
import Link from 'next/link';
import {useRouter} from 'next/navigation';
const collagelogin = () => {
    const router = useRouter();
  return (
    <div>
      <h1>Collage Login</h1>
      <p>Login to your collage account</p>
      <Link href = "/">Go to home</Link>
      <br />
      <button onClick={() => router.push('/login/studentlogin')}>Go to Student Login</button>
      <br/>
    </div>
  );
}
export default collagelogin;