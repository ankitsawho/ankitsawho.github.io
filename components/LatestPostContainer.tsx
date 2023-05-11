import React from 'react'
import Link from 'next/link'

function LatestPostContainer(props:any) {
  
  return (
    <div className='w-full py-2 space-y-3 mb-5'>
        <span className='font-extrabold text-xl md:text-2xl hover:underline underline-offset-8 transition ease-in-out cursor-pointer'>
          <Link href={`blog/${props.data.slug}`}>
            {props.data.title}
          </Link>
        </span>
        <div className="text-sm">
            <span className='font-bold'>{props.data.date} • </span>
            <span className=''>{props.data.subtitle}</span>
        </div>
    </div>
  )
}

export default LatestPostContainer