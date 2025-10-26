import React, { useState } from 'react'

const InfiniteScroll = () => {
    const [data, setData] = useState([... new Array(40)])
    function loadMore(){
        setData(([...data,[... new Array(20)]]))
    }

    return (
        <div>
            <h1>InfinteScroll</h1>
            <div className='flex flex-col  justify-center items-center '>
                {data.map((ele, i) => {
                    return <div className='border-y-black border-y-1 w-full'  key={i}>
                        {`${i + 1}  helo`}</div>
                })
                }
            </div>
        </div>
    )
}

export default InfiniteScroll