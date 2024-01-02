'use client'
import React from 'react'
import HeartSVGComponent from '../../../../public/icon/HeartSVG'

const CounterLikes = () => {
  return (
    <div className="w-[157px] h-11 bg-white rounded-2xl flex justify-center items-center gap-4 ">
      <span className="relative flex ">
        <HeartSVGComponent className="fill-orange rounded-full" />
      </span>

      <span className="text-orange">153</span>
    </div>
  )
}

export default CounterLikes
