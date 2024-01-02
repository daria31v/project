import React from 'react'
import CounterPostLikes from '../Profile/CounterPostLikes'
import CounterComments from './CounterComments'

const CounterInfoBlock = () => {
  return (
    <div className="mb-8 py-4">
        <div className="h-[1px] bg-grey_decor w-full"></div>
        <div className="flex gap-6">
            <CounterPostLikes/>
            <CounterComments/>
        </div>
        <div className="h-[1px] bg-grey_decor w-full"></div>
    </div>
  )
}

export default CounterInfoBlock