import PostContainer from '@/components/PostContainer'
import React from 'react'
import Link from 'next/link'
import { getPostMetaData } from '@/utils/GetMetaData'


function Blog() {
  const postMetaData = getPostMetaData()
  const postPreview = postMetaData.map(post => (
    <PostContainer key={post.slug} data={post} />
  ))
  return (
    <div className="w-screen">
      <div className='w-screen flex justify-center mt-24'>
        <div className="w-full max-w-4xl md:flex justify-start items-center px-2 pb-8">
            <h1 className='font-bold text-5xl pb-12 md:pb-0'>Blog</h1>
        </div>
    </div>
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-4xl px-2">
        {postPreview}
      </div>
    </div>
    </div>
  )
}

export default Blog