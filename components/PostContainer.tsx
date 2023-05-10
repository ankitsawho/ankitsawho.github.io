import Link from 'next/link'
import React from 'react'

function PostContainer(props: any) {
  return (
    <div className='w-full py-3 space-y-4 mb-10'>
        <span className='font-extrabold text-3xl hover:underline underline-offset-8 hover:scale-95 transition ease-in-out cursor-pointer'>
          <Link href={`blog/${props.data.slug}`}>
            {props.data.title}
          </Link>
        </span>
        <div className=" font-bold text-xs">
            <span>• {props.data.date}</span>
        </div>
        <div className='text-sm'>{props.data.subtitle}</div>
    </div>
  )
}

export default PostContainer