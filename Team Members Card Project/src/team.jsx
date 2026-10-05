import React, {useState} from 'react';
import {member} from './team.js';

function Membercard({item, toggleAvailability}){
    return (
        <>
             <div className='member-card'>
                <h2>{item.name}</h2>
                <p><strong>Role: </strong>{item.role}</p>
                <p><strong>Status: </strong>{item.defaultavailable?"✅ Available":"❌ Not Available" }</p>
                <button onClick ={()=> toggleAvailability(item.id)}>Toggle Availability</button>
            </div>
        </>
    );
}
function Team(){
  const [members, setMembers] = useState(member);
  function toggleAvailability(id){
    setMembers(
      members.map((item) =>
        item.id === id
          ? { ...item, defaultavailable: !item.defaultavailable }
          : item
    ))
  }
  const availableCount = members.filter((item)=> item.defaultavailable).length;
    return (
    <div className="container">
      <h1>Team members</h1>
      <p>Available : {availableCount}/{members.length}</p>

      <div className='card'>
        {members.map((item) => {
          return (
            <Membercard key={item.id} item={item} toggleAvailability={toggleAvailability} />
          );
        })}
      </div>
    </div>
    )
    }
export default Team