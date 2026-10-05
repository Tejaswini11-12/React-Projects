import UserList from "./components/UserList";
import "./App.css";

function App() {

    return (
        <div className="app">

            <header>
                <h1>User Directory</h1>
                <p>Search and explore users</p>
            </header>

            <UserList />

        </div>
    );
}

export default App;
