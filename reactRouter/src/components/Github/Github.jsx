import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('http://api.github.com/users/rajtejaswee')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    },[])
  return (
    <div className='bg-black text-2xl text-center text-white px-4'>
      Github Repositories: {data.public_repos}
    </div>
  )
}

export default Github
