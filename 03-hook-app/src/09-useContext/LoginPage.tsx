import { useContext } from "react"
import { UserContext } from "./context/UserContext"



export const LoginPage = () => {


  const {setUser, user} = useContext(UserContext)
 
  
  return (
    <div>
      <h1>LoginPage</h1>
      <hr />
      <pre aria-label="pre">
        {JSON.stringify(user, null, 3)}
      </pre>
      <button
        className="btn btn-primary"
        onClick={setUser}
      >
        Login
      </button>
    </div>
  )
}
 
