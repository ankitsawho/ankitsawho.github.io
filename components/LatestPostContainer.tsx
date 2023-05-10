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
            <span className='font-bold text-slate-400'>July 7, 2021 • </span>
            <span className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem labore quis dolorum, autem officiis a soluta? Pariatur dolores omnis similique enim tempore. Incidunt ex nesciunt ullam sed et, beatae mollitia!</span>
        </div>
    </div>
  )
}

export default LatestPostContainer