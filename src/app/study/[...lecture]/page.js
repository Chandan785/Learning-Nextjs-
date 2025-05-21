 'use client';
import Link from "next/link";
 export default function Lecture({params}) 
    {
        return (
            <main>
                <div>
                    <h1>Lecture Details</h1>
                   <h3>lecture: {params.lecture[0]}</h3>
                    <h3>Lecture ID: {params.lecture[1]}</h3>
                    <p>Lecture Title: Introduction to Next.js</p>
                    <p>Lecture Date: 2023-10-01</p>
                    <p>Lecture Duration: 2 hours</p>
                    <p>Lecture Description: This lecture covers the basics of Next.js, a React framework for building server-rendered applications.</p>
                </div>
                <br />
                 <br />
                
                <Link href="/study">Go to Study</Link>
                 <br />
                <Link href="/">Go to Home</Link>
                <br />
                <Link href="/studentlist">Go to Student List</Link>
                <br />
            </main>
        );
    }