import React from "react";

function UserCard({ user }) {
    console.log("UserCard rendered:", user.name);

    return (
        <div className="user-card">
            <h3>{user.name}</h3>

            <p>
                <strong>Username:</strong> {user.username}
            </p>

            <p>
                <strong>Email:</strong> {user.email}
            </p>

            <p>
                <strong>Phone:</strong> {user.phone}
            </p>

            <p>
                <strong>City:</strong> {user.address.city}
            </p>
        </div>
    );
}

export default React.memo(UserCard);