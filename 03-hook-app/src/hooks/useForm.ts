import { ChangeEvent, useState } from "react";





export const useForm = (initialState: any = {}) => {
        
        const [formState, setFormState] = useState(initialState);
    
        const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
            setFormState({
                ...formState,
                [target.name]: target.value
            });
        }

        /** Reset */
        const onResetForm = () => {
            setFormState(initialState);
        }

        
    
        return {
            ...formState,
            formState,
            handleInputChange,
            onResetForm
        }
    
    }
