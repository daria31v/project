'use client'
import React from 'react'
import HeartSVGComponent from '../../../../public/icon/HeartSVG'

const CounterLikes = () => {
  return (
    <div className="w-[157px] h-11 bg-white rounded-2xl flex justify-center items-center gap-4 shadow-md">
    <HeartSVGComponent className="fill-orange shadow-md rounded-full shadow-orange_light"/>
    <span>3131</span>
    </div>
  )
}

export default CounterLikes