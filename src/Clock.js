import React from 'react';

const Clock = () => {
  const students = [
    {name:"sam", email:"sam@gmail.com",contact:888},
    {name:"john", email:"john@gmail.com",contact:111},
    {name:"roni", email:"roni@gmail.com",contact:222},
    {name:"jack", email:"jack@gmail.com",contact:333}
  ]
  const bottom = students.slice(-3);
  return (
    <div>
      <h1>Hello</h1>
      <table border="1">
        {
          bottom.map((a)=>
               <tr>
                  <td>{a.name}</td>
                  <td>{a.email}</td>
                  <td>{a.contact}</td>
               </tr>
          )
        }
      </table>
    </div>
  )
}

export default Clock
