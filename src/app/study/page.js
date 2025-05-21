

'use client';
import Link from "next/link";
export default function study() {
    return (
    <div>
      <h1>Study</h1>
      
      <p>Study is the process of acquiring knowledge, skills, and understanding through learning, practice, and experience.</p>
      <p>It involves various methods such as reading, writing, listening, and observing.</p>
      <p>Effective study techniques can enhance comprehension and retention of information.</p>
      <p>Study habits can vary from person to person, and finding the right approach is essential for success.</p>
<br /> 
      <Link href="/study/lecture">Go to Lecture</Link>
      <br />
    </div>
  );
}