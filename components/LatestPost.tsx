import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import LatestPostContainer from './LatestPostContainer'
import Link from 'next/link'
import { getHomePostMetaData } from '@/utils/GetMetaData'

function LatestPost() {
  const postMetaData = getHomePostMetaData()
  const postPreview = postMetaData.map(post => (
    <LatestPostContainer key={post.slug} data={post} />
  ))

  return (
    <div className="w-screen">
      <div className='w-screen flex justify-center mt-24'>
        <div className="w-full max-w-4xl flex justify-between items-center px-2 pb-8">
            <h1 className=' font-extrabold text-2xl md:text-3xl'>Latest Posts</h1>
            <Link href="/blog"><div className='text-sm md:text-lg flex items-center font-semibold hover:underline underline-offset-8 hover:scale-95 transition ease-in-out cursor-pointer space-x-1 mr-2'><p>view all</p> <AiOutlineArrowRight size={24} /></div></Link>
        </div>
    </div>
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-4xl px-2">
      {
        postPreview
      }
      </div>
    </div>
    </div>
  )
}

export default LatestPost