import Link from 'next/link';
export default function StudentList() {
  return (
    <main>
      <h1>Student List</h1>
      <ul>
        <li>
            <Link href="/studentlist/1">Student 1</Link>
        </li>
        <li>
            <Link href="/studentlist/2">Student 2</Link>
        </li>
        <li> 
            <Link href="/studentlist/3">Student 3</Link>
        </li>
        <li>
            <Link href="/login/studentlogin">Student 4</Link>
        </li>
        <li>
            <Link href="/login/studentlogin">Student 5</Link>
        </li>
      </ul>

      <Link href="/">Go to Home</Link>
    </main>
  );
}