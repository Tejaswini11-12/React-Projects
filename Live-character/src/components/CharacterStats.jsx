import {useState, useEffect} from 'react';
function CharacterStats(props){
    useEffect(()=>{
        props.setCount(props.input.length)

    },[props.input])
    return(
        <>
        <div className='foot'>
        <h4>Character Count: {props.count}</h4>
        {props.count >100  && (
            <p style={{ color: "red" }}>
                Character limit exceeded!
            </p>
            )}
        </div>
        </>
    )
}
export default CharacterStats;