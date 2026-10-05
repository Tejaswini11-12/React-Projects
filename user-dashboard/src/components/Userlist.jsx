import { useEffect, useMemo, useState } from "react";
import { fetchUsers } from "../api/userApi";
import UserCard from "./UserCard";

function UserList() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {

        async function getUsers() {
            try {
                setLoading(true);
                setError("");

                const data = await fetchUsers();

                setUsers(data);
            } 
            catch (err) {
                setError(err.message);
            } 
            finally {
                setLoading(false);
            }
        }

        getUsers();

    }, []);


    const filteredUsers = useMemo(() => {

        console.log("Filtering users...");

        return users.filter((user) =>
            user.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    }, [users, search]);


    if (loading) {
        return <h2 className="message">Loading users...</h2>;
    }


    if (error) {
        return <h2 className="error">{error}</h2>;
    }


    return (
        <div>

            <div className="search-container">

                <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>


            <div className="user-list">

                {filteredUsers.length > 0 ? (

                    filteredUsers.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                        />
                    ))

                ) : (

                    <p>No users found.</p>

                )}

            </div>

        </div>
    );
}

export default UserList;