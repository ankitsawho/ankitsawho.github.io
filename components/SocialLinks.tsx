import React from 'react'
import { MdLogoDev } from 'react-icons/md'
import { IoLogoGithub, IoMdMail } from 'react-icons/io'
import { AiFillYoutube, AiFillLinkedin } from "react-icons/ai"
import Link from 'next/link'
import XLogo from './XLogo'

function SocialLinks() {
    return (
        <div>
            <div className='flex justify-center items-center gap-2 cursor-pointer italic'><IoMdMail size={24} /><p>contact@ankitsahu.tech</p></div>

            <div className="flex items-center justify-start space-x-3 mb-5 mt-4">
                <Link href="https://github.com/ankitsawho"><IoLogoGithub className=" cursor-pointer" size={30} /></Link>
                <Link href="https://www.linkedin.com/in/ankitsawho/"><AiFillLinkedin className=" cursor-pointer" size={30} /></Link>
                <Link href="https://twitter.com/ankitsawho"><XLogo /></Link>
                <Link href="https://dev.to/ankitsahu"><MdLogoDev className=" cursor-pointer" size={30} /></Link>
                <Link href="https://www.youtube.com/@ankitsawho"><AiFillYoutube className=" cursor-pointer" size={30} /></Link>
            </div>
        </div>
    )
}

export default SocialLinks