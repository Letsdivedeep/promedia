import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/Signup";
const Approuter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route exact path="/" element={<Navigate to="/signup" />} />
        </Routes>
    </BrowserRouter>

}

export default Approuter;