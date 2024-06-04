import { useEffect } from "react";
import { Message } from './Message';
import { useForm } from "../hooks/useForm";


export const FormCustomHook = () => {
    
        const {formState,handleInputChange, onResetForm} = useForm({
            username: '',
            email: '',
            password: ''
        });
    
        const { username, email } = formState;
    
        useEffect(() => {
            //console.log('Hey!');
        }, []);
    
        useEffect(() => {
            //console.log('formState cambió');
        }, [formState]);
    
        useEffect(() => {
            //console.log('email cambió');
        }, [email]);
     
    
        return (
            <>
                <h1>Simple Form</h1>
                <hr />
    
                <div className="form-group">
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Tu nombre"
                        autoComplete="off"
                        value={username}
                        onChange={handleInputChange}
                    />
                </div>
                { (username === 'Diego') && <Message />}
    
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        className="form-control mt-3"
                        placeholder="Tu email"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        className="form-control mt-3"
                        placeholder="Tu contraseña"
                        autoComplete="off"
                        value={formState.password}
                        onChange={handleInputChange}
                    />
                </div>

                {/** button reset */}
                <button className="btn btn-secondary mt-3"
                        onClick={onResetForm}
                >Limpiar</button>



            </>
        )
    }