import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams
  return (
    <div className='bg-gray-500 text-3xl px-5 text-center text-white'>
      User : {userid}
    </div>
  )
}

export default User
