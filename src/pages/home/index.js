import { useContext } from "react"
import { AuthGoogleContext } from "../../contexts/authGoogle"

export const Home = () => {

    const { user, singOut } = useContext(AuthGoogleContext);
    let userLogado = JSON.parse(user);
    console.log(userLogado)
    return (
            <div>
                <h1>Bem Vindo : {userLogado.displayName}</h1>
                <button onClick={() => singOut() }>Sair</button>
            </div>
        );
}