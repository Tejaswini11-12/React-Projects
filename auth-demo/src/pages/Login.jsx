import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

function Login() {
    const [name, setName] = useState("");

    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.path || "/dashboard";

    function handleLogin() {
        if (!name.trim()) return;

        auth.login(name);

        navigate(redirectPath, {
            replace: true,
        });
    }

    useEffect(() => {
        console.log(auth.user);
    }, [auth.user]);

    if (auth.user) {
        return null;
    }

    return (
        <div className="login-container">

            <div className="login-card">

                <div className="login-icon">
                    🔐
                </div>

                <h1>Welcome Back</h1>

                <p>
                    Login to continue to your dashboard
                </p>

                <div className="login-form">

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                    />

                    <button onClick={handleLogin}>
                        🚀 Login
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Login;