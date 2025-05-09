 'use client'
 
import styles from "./page.module.css";
/*
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        // { <User name ="Chandan"/> }
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      </main>
    </div>

  );
}
 */

//use Component

/*
const User = (props) => {
  return (
    <div>
      <h1> Welcome  {props.name}  Start your journey With next</h1>
    </div>
  );
}
*/


// make button

export default function Home() {
  const apple = (item)=>{
    alert(item)
  }
 return (
  <main className={styles.main}>
    <h1>Event , Function & state</h1>
    <button onClick={() => apple("apple are good for heath")}>Click Me</button>

    </main>
 )
}
 
// use state