import React, { useEffect, useState } from 'react';

const First = () => {
    const [time,setTime] = useState(new Date());
    
    useEffect(()=>{
     let name =  setInterval(()=>{
           setTime(new Date())
      },1000)
      return ()=>{
        clearInterval(name)
        console.log("removed");
      }
    },[])

  return (
    <div>
     <h2>
      {time.toLocaleTimeString()}
     </h2>
    </div>
  )
}
export default First
