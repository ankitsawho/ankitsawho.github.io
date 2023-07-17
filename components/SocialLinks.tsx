import React from 'react'
import {MdLogoDev} from 'react-icons/md'
import {IoLogoGithub, IoLogoTwitter} from 'react-icons/io'
import {AiFillYoutube, AiFillLinkedin} from "react-icons/ai"
import Link from 'next/link'

function SocialLinks() {
return (
    <div className="flex items-center justify-start space-x-3 mb-5 mt-4">
        <Link href="https://github.com/ankitsawho"><IoLogoGithub className=" cursor-pointer" size={28}  /></Link>
        <Link href="https://dev.to/ankitsahu"><MdLogoDev className=" cursor-pointer" size={28}  /></Link>
        <Link href="https://www.youtube.com/@ankitsawho"><AiFillYoutube className=" cursor-pointer" size={28} /></Link>
        <Link href="https://www.linkedin.com/in/ankitsawho/"><AiFillLinkedin className=" cursor-pointer" size={28} /></Link>
        <Link href="https://twitter.com/ankitsawho"><IoLogoTwitter className=" cursor-pointer" size={28} /></Link>
    </div>
    )
}

export default SocialLinks