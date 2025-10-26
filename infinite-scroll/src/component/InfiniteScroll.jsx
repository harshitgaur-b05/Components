import React, { useState } from 'react'

const InfiniteScroll = () => {
    const [data,setData]=useState([...Array(40)])
  
  
    return (
    <div>
        <h1>InfinteScroll</h1>
<div className='flex justify-center '>
        {data.map((ele,i)=>{
            return<div key={i}>
               {`${i+1}  helo`}</div>
        })
        }
        </div>
    </div>
  )
}

export default InfiniteScroll