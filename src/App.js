import React, { useEffect, useState } from 'react'


function App() {
  const [users, setUsers] = useState()
  console.log('app rendered');

  useEffect(() => {
    fetch('/api').then(response => response.json().then(
      data => {
        console.log(data);
        setUsers(data.users)
      }
    ))
  },[])


  return (
    <div>
      Dashboard
      <div>
        <p>
          {!users ? ("Empty"): (users)}
        </p>
      </div>
    </div>
  )
}

export default App