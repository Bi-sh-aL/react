// import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Bi-sh-aL')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     }, [])
    // })
    
    return (
        <>
          <div className="mx-auto w-full max-w-7xl text-center m-4 bg-gray-600 text-white p-5 text-3xl flex justify-center items-center flex-col gap-5">
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="github picture" width={300} />
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Bi-sh-aL')
    return res.json()
}