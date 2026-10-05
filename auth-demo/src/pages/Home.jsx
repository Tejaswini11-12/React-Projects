import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

function Home() {
    const auth = useAuth();

    return (
        <div className="home-page">

            <div className="home-content">

                <div className="home-icon">
                    🔐
                </div>

                <h1>
                    Welcome to <span>Auth Demo</span>
                </h1>

                <p>
                    A simple React authentication application
                    demonstrating login, protected routes,
                    navigation and user sessions.
                </p>

                <div className="home-buttons">

                    {auth.user ? (
                        <Link
                            to="/dashboard"
                            className="primary-btn"
                        >
                            📊 Go to Dashboard
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className="primary-btn"
                        >
                            🚀 Get Started
                        </Link>
                    )}

                    <a
                        href="#features"
                        className="secondary-btn"
                    >
                        Explore Features
                    </a>

                </div>

            </div>

            <div
                className="home-features"
                id="features"
            >

                <div className="feature-card">
                    <div className="feature-icon">
                        🔑
                    </div>

                    <h3>Authentication</h3>

                    <p>
                        Login and logout functionality
                        using React Context.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        🛡️
                    </div>

                    <h3>Protected Routes</h3>

                    <p>
                        Dashboard access is restricted
                        to authenticated users.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        🧭
                    </div>

                    <h3>React Router</h3>

                    <p>
                        Navigate between pages without
                        refreshing the browser.
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Home;