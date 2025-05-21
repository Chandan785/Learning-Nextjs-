'use client'
import Link from "next/link";
export default function Student({params}) {
    // const { student } = params;
    // console.log(student);
    console.log(params);
  return (
    <main>
        <div>
        <h1>Student  Details</h1>
        <p>Student ID: {params.student}</p>
        <p>Student Name: John Doe</p>
        <p>Student Age: 20</p>
        <p>Student Grade: A</p>
        <p>Student Address: 123 Main St, City, Country</p>
        </div>
      <Link href="/studentlist">Go to Student List</Link>
      <Link href="/">Go to Home</Link>
    </main>
  );
}