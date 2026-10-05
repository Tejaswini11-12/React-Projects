import { useAuth } from "../context/Authcontext";

function Dashboard() {
    const auth = useAuth();

    function handleLogout() {
        auth.logout();
    }

    return (
        <div className="dashboard-container">

            <div className="dashboard-card">

                <div className="dashboard-icon">
                    🎉
                </div>

                <h1>Welcome, {auth.user}!</h1>

                <p>
                    You are successfully logged in.
                </p>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    🚪 Sign Out
                </button>

            </div>

        </div>
    );
}

export default Dashboard;