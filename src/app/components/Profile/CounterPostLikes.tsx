'use client'

import HeartSVGComponent from '../../../../public/icon/HeartSVG'

const CounterLikes = () => {
  return (
    <div className="w-[157px] h-11 bg-white rounded-2xl flex justify-center items-center gap-4 ">
      <span className="relative flex ">
        <HeartSVGComponent className="fill-orange rounded-full" />
      </span>

      <span className="text-orange">213</span>
    </div>
  )
}

export default CounterLikes
