import Link from "next/link";
const AboutCollege = () => {
    return (
        <div className="container"> 
            <h1>About College Page</h1>
            <p>This is the about college page.</p>
            <p>We are a college of engineering and technology.</p>
            <Link href="/">Go to home</Link>
              <Link href="/about">Go to About</Link>
              <Link href="/login">Go to Login</Link>
        </div>
    );
};

export default AboutCollege;
