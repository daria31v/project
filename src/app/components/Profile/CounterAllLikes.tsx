'use client'

import HeartSVGComponent from '../../../../public/icon/HeartSVG'

const CounterLikes = () => {
  return (
    <div className="w-[157px] h-11 bg-white rounded-2xl flex justify-center items-center gap-4 ">
      <span className="relative flex ">
        <span className="absolute inline-flex rounded-full ">
          <HeartSVGComponent className="fill-orange shadow-md rounded-full shadow-orange_light" />
        </span>
        <span className="animate-ping relative inline-flex rounded-full opacity-75">
          <HeartSVGComponent className="fill-orange shadow-md rounded-full " />
        </span>
      </span>

      <span className="text-orange">131</span>
    </div>
  )
}

export default CounterLikes

