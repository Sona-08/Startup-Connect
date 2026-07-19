import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Founder");

    const handleLogin = async () => {

        if (!email || !password) {
            alert("Please enter email and password.");
            return;
        }

        try {

            const response = await api.post("/auth/login", {
                email,
                password
            });

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", role);

            alert(response.data.message || "Login Successful");

            switch (role) {

                case "Founder":
                    navigate("/founder/dashboard");
                    break;

                case "Investor":
                    navigate("/investor/dashboard");
                    break;

                case "Administrator":
                    navigate("/admin/dashboard");
                    break;

                default:
                    navigate("/");
            }

        } catch (error) {

            console.error(error);

            if (error.response) {
                alert(error.response.data.message || "Invalid Email or Password");
            } else {
                alert("Unable to connect to the server.");
            }

        }

    };

    return (

        <div className="login-container">

            <div className="login-box">

                <h1>Login</h1>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="Founder">Founder</option>
                    <option value="Investor">Investor</option>
                    <option value="Administrator">Administrator</option>
                </select>

                <button onClick={handleLogin}>
                    Login
                </button>

                <div className="register-link">
                    Don't have an account?{" "}
                    <Link to="/register">
                        Register
                    </Link>
                </div>

            </div>

        </div>

    );

}

export default Login;