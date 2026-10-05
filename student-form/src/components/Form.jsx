import React, {useState} from 'react';
function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        number:'',
        course:'',
        gender:'',
        terms: false
    });
    const [arr, setArr] =useState([]);
    function handleChange(e){
        const{name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type == 'checkbox'? checked: value
        });
    }
    function handleSubmit(e){
        e.preventDefault();
        setArr([...arr, formData]);
        setFormData({
            name: '',
            email:'',
            number:'',
            course:'',
            gender:'',
            terms: false
        });
    }
    return(
        <>
        <form className="registration-form" onSubmit={handleSubmit}>
            <h1>Student Regestration Form</h1>
            <label>Name:</label>
            <input type= 'text' name= 'name' value={formData.name} onChange={handleChange} required></input>
            <label>Email:</label>
            <input type= 'email' name= 'email' value={formData.email} onChange={handleChange} required></input>
            <label>Phone Number:</label>
            <input type= 'tel' name= 'number' value={formData.number} onChange={handleChange} ></input>
            <label>Course:</label>
            <input type= 'text' name= 'course' value={formData.course} onChange={handleChange} ></input>
            <label>Gender:</label>
            <label>
                <input type='radio' name='gender' value='male' onChange={handleChange} checked = {formData.gender === 'male'}></input>
                male
            </label>
            <label>
                <input type='radio' name='gender' value='female' onChange={handleChange} checked = {formData.gender === 'female'}></input>
                female
            </label>
            <label>
                <input type='checkbox' name='terms' value='agree' checked= {formData.terms} onChange ={handleChange} required></input>
                I agree to the terms and conditions
            </label>
            <button type='submit'>Register</button>
            <h2>Student Details</h2>
            <div className="student-list">
                {arr.map((item, index) => (
                    <ul key={index}>
                        <li>Name: {item.name}</li>
                        <li>Email: {item.email}</li>
                        <li>Phone Number: {item.number}</li>
                        <li>Course: {item.course}</li>
                        <li>Gender: {item.gender}</li>
                    </ul>
                ))}
            </div>
        </form>
        </>
    )
}
export default Form;