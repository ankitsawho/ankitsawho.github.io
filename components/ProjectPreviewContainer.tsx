import Link from 'next/link'
import React from 'react'

function ProjectPreviewContainer(props: any) {
  const links = JSON.parse(props.data.links)
  
  return (
    <div className="">
        <div className='text-xl font-bold items-center hover:underline underline-offset-8 transition ease-in-out cursor-pointer'>
          <Link href={`projects/${props.data.slug}`}>
            {props.data.title}
          </Link>
        </div>
        <br />
        <span className='text-sm'>{props.data.subtitle}</span>
        <div className='mt-5 space-x-4'>
        {
        (links.source!=="") && <Link href={links.source} rel="noopener noreferrer" target="_blank">
          <span className='text-sm font-semibold items-center hover:underline underline-offset-8 hover:scale-95 transition ease-in-out cursor-pointer'>Source</span>
        </Link>
        }
        {
        (links.demo!=="") && <Link href={links.demo} rel="noopener noreferrer" target="_blank">
          <span className='text-sm font-semibold items-center hover:underline underline-offset-8 hover:scale-95 transition ease-in-out cursor-pointer'>Demo</span>
        </Link>
        }
        {
        (links.video!=="") && <Link href={links.video} rel="noopener noreferrer" target="_blank">
          <span className='text-sm font-semibold items-center hover:underline underline-offset-8 hover:scale-95 transition ease-in-out cursor-pointer'>Video Link</span>
        </Link>
        }
        </div>
    </div>
  )
}

export default ProjectPreviewContainer