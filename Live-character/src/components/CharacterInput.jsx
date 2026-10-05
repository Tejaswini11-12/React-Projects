function CharacterInput(props){
    return(
    <>
    <div className='head'>
    <h1>Live Character Counter</h1>
    <p>Type Something:</p>
    <textarea onChange={(e)=> {props.setInput (e.target.value)}} placeholder='Start Typing...'></textarea>
    </div>
    </>
    )
}
export default CharacterInput;