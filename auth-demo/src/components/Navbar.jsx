import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";


function Navbar() {
const auth = useAuth();

function handleLogout() {
    auth.logout();
}
return (
        <div className="navbar">
            <Link to="/">Auth Demo</Link>

            <Link to="/">Home</Link>

            {auth.user ? (
                <>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>

                    <span>{auth.user}</span>

                    <button onClick={handleLogout}>
                        Logout
                    </button>
                </>
            ) : (
                <Link to="/login">
                    Login
                </Link>
            )}
        </div>
    );
}

export default Navbar;
