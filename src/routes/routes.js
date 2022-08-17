import {BrowserRouter, Routes, Route} from "react-router-dom"
import { PrivateRoutes } from "."
import { Home } from "../pages/home"
import { Login } from "../pages/login"
export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/home" element={<PrivateRoutes/>}>
                    <Route path="/home" element={<Home/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}