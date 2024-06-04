import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";



export const LoginPage = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const onLogin = () => {
      const lastPath = localStorage.getItem("lastPath") || "/";
      login('Diego');
      navigate( lastPath
        , { replace: true });
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
     
    }
    return (
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <form  onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary" onClick={onLogin}>
                Submit
              </button>
            </form>
          </div>
        </div>
        
      </div>
    )
  }