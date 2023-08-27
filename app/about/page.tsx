import SocialLinks from '@/components/SocialLinks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div className='w-screen flex flex-col items-center justify-center'>
      <div className="w-screen md:flex justify-center items-center">
        <div className="w-full max-w-4xl md:flex items-center justify-center mt-10">
          <div className="space-y-4 p-4">
            <h1 className="text-5xl font-extrabold mb-10">Hey there 👋</h1>
            <span className="text-xl font-medium">I'm Ankit Kumar Sahu. </span><br></br>
            <span className="text-xl font-medium">Currently I'm in my final year of BTech in Computer Science and Engineering with specialization and Artificial Intelligence and Machine Learning from Vellore Institute of Technology Chennai Campus.</span>
            <div className="md:flex items-center justify-between">
              <SocialLinks />
            </div>
          </div>
          <Image
            className=" rounded-full shadow-xl"
            src="/photo.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>

      </div>
      <div className="w-full max-w-4xl px-4">
        <div className="">
          <Link href="https://drive.google.com/file/d/1Wsi5Ve1gW83m9upZRe5yUYF4XzbVuzRG/view?usp=sharing"><button className="py-3 px-8 font-semibold bg-slate-200 shadow-md rounded-3xl text-slate-700">Resume</button></Link>
        </div>
      </div>
    </div>
  )
}

export default About