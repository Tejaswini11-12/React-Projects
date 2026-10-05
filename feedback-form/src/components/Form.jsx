import React ,{ useState } from 'react';
function Form(){
    const [formData, setFormData] = useState({
        name: '',
        feedback: ''
    });
    const [arr, setArr] = useState([]);

    function handleChange(e){
        const name= e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]: value
        })

    }
    function handleSubmit(e){
        e.preventDefault();
        setArr([...arr, formData]);
        setFormData({
            name: '',
            feedback: ''
        })
    }
    return(
        <>
        <div className='form-container'>
        <h1>Feedback Form</h1>
        <form onSubmit={handleSubmit}>
            <label> Name:</label>
            <input type= 'text' required name= 'name' value={formData.name} onChange = {handleChange}></input>
            <label>Feedback:</label>
            <textarea type = 'text'placeholder='Enter your feedback' name='feedback' value={formData.feedback} onChange = {handleChange}></textarea>
            <button type='submit'>Submit</button>
        </form>
        </div>
        <div className='feedback-section'>
            <h2>Feedbacks ({arr.length})</h2>
                {
                    arr.length === 0 ? (
                        <div className="empty-feedback">
                            No feedback yet. Be the first one to share your thoughts!
                        </div>
                    ) : (
                    arr.map((item,index)=>(
                    <div className="feedback-card" key={index}>
                        <div className="avatar">
                        {item.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="feedback-content">
                            <h3>{item.name}</h3>
                            <p>{item.feedback}</p>
                        </div>
                    </div>
                    ))
                )}
        </div>
        </>
    )
}
export default Form