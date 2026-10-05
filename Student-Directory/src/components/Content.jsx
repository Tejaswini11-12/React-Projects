import React from "react";
import { useParams, Link } from "react-router-dom";
import {students} from '../data.js';

function Content(){
    const {id} = useParams();

    const student = students.find((student)=>
        student.id == Number(id)
    )
    if(!student){
        return (
            <>
            <h2>Student not found</h2>
            <Link to ='/'>Go back</Link>
            </>
        )
    }
    return (
    <div className="profile-card">
        <h1>{student.name}</h1>

        <h2>{student.about}</h2>

        <div className="student-info">
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Course:</strong> {student.course}</p>
            <p><strong>Gender:</strong> {student.gender}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>College:</strong> {student.college}</p>
        </div>

        <Link className="back-link" to="/">
            ← Back to Directory
        </Link>
    </div>
    )
}
export default Content;