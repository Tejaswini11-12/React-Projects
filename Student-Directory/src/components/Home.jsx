import React from "react";
import {Link} from 'react-router-dom'
import {students} from '../data.js'

function Home() {
    return (
        <>
            <h1 className="page-title">User Directory</h1>

            <div className="student-grid">
                {
                    students.map((data) => {
                        return (
                            <Link
                                className="student-link"
                                key={data.id}
                                to={`/content/${data.id}`}
                            >
                                <div className="student-card">
                                    <h2>{data.name}</h2>
                                    <span>View Profile →</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home;