import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import ProjectPreviewContainer from './ProjectPreviewContainer'
import Link from 'next/link'

function RecentProjects(props: any) {
  const postPreview = props.projects.map((post: { slug: any }) => (
    <ProjectPreviewContainer key={post.slug} data={post} />
  ))
  return (
    <div className="w-screen">
      <div className='w-screen flex justify-center mt-24'>
        <div className="w-full max-w-4xl flex justify-between items-center px-2 pb-8">
            <h1 className=' font-extrabold text-2xl md:text-3xl'>Projects</h1>
            <Link href="/projects"><div className='text-sm md:text-lg flex items-center font-semibold hover:underline underline-offset-8 hover:scale-95 transition ease-in-out cursor-pointer space-x-1 mr-2'><p>view all</p> <AiOutlineArrowRight size={24} /></div></Link>
        </div>
    </div>
    <div className="w-full flex justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-12 px-2">
        {
          postPreview
        }
      </div>
    </div>
    </div>
  )
}

export default RecentProjects