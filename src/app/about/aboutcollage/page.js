import Link from "next/link";
 
const AboutCollege = () => {
    return (
        <div className="container"> 
            <h1>About College Page</h1>
            <p>This is the about college page.</p>
            <p>We are a college of engineering and technology.</p>
            <Link href="/">Go to home</Link>
        </div>
    );
};

export default AboutCollege;
