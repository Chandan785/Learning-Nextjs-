import link from "next/link";
const login =() =>{
    return(
        <main>
            <h1>Login Page</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit">Login</button>
                </form>
            
              </main>
        
        
      
       
    )
}
export default login;