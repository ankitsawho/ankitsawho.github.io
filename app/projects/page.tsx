import ProjectPreviewContainer from '@/components/ProjectPreviewContainer'
import { getProjectMetaData } from '@/utils/GetMetaData'
import React from 'react'


function Projects() {
  const postMetaData = getProjectMetaData()
  const postPreview = postMetaData.map(post => (
    <ProjectPreviewContainer key={post.slug} data={post} />
  ))
  return (
    <div className="w-screen">
      <div className='w-screen flex justify-center mt-24'>
        <div className="w-full max-w-4xl flex justify-between items-center px-2 pb-8">
            <h1 className='font-bold text-5xl mb-6'>Projects</h1>
        </div>
    </div>
    <div className="w-full flex justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 max-w-4xl px-2 gap-12">
        {postPreview}
      </div>
    </div>
    </div>
  )
}

export default Projects