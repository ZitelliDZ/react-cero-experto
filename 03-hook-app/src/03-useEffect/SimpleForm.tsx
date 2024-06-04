import { ChangeEvent, useEffect, useState } from "react";
import { Message } from './Message';


export const SimpleForm = () => {
    
        const [formState, setFormState] = useState({
            username: 'Diegos',
            email: 'Diego@gmail.com'
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
    
        const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
            setFormState({
                ...formState,
                [target.name]: target.value
            });
        }
    
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
            </>
        )
    }