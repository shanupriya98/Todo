import React, { useState } from 'react'  
import './App.css';
function App() {
  const[activity, setActivity]= useState("");
  const[listData, setlistData]= useState([]);
  function addActivity(){
      setlistData((listData)=>{
const updatedList =[...listData,activity]
console.log(updatedList)
setActivity('');
return updatedList
      })
      
  }
  function removeActivity(i){
const updatedlistData =listData.filter((elem, id)=>{
  return i!=id;
})
setlistData(updatedlistData)
  }
  function removeall(){
    setlistData([])
  }
  return (
    <>
    <div className='container'>
      <div className='header'> Todo List</div>
      <input type='text' placeholder='Add activity' value={activity} 
      onChange={(e) =>setActivity(e.target.value)}/>
      <button onClick={addActivity}>Add</button>
      <p className='List-heading'> Here is your list:{")"}</p>
      {listData!=[] &&listData.map((data, i)=>{
        return(
          <>
          <p key={i}>
           <div className='listdata'>{data}</div>
           <div className='btn-position'><button onClick={()=>removeActivity(i)}>
            remove(-)</button></div>
          </p>
          </>
        )
      }
      )}
      {listData .length>=1 && 
      <button onClick={removeall}>Remove all</button>}
      </div>  
    </>
  )
}

export default App
