import React from 'react'
import { useParams } from 'react-router-dom'
// we need to inform react about we are fetching data dynamically so we have to use custom hooks so that we can catch the values 
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User