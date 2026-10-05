import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="not-found-page">

            <div className="not-found-card">

                <div className="error-icon">
                    🔍
                </div>

                <h1>404</h1>

                <h2>Oops! Page Not Found</h2>

                <p>
                    The page you're looking for doesn't exist or
                    may have been moved somewhere else.
                </p>

                <Link to="/" className="home-btn">
                    🏠 Go Back Home
                </Link>

            </div>

            <div className="floating-shape shape-one"></div>
            <div className="floating-shape shape-two"></div>
            <div className="floating-shape shape-three"></div>

        </div>
    );
}

export default NotFound;