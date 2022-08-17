import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";

export const Login = () => {
    const {singInGoogle, signed } =  useContext(AuthGoogleContext);
    
    async function loginGoogle(){
        await singInGoogle();
    }

    if(!signed){

        return <button onClick={() => singInGoogle() }>Logar Com o Google</button>
    } else {
        return <Navigate to="/home" />
    }
};

