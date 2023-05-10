import React from 'react'
import ToggleTheme from './ThemeToggle'
import Link from 'next/link';

function Navbar() {
  return (
    <div>
      <div className="w-screen flex justify-center items-center">
        <nav className='flex justify-between items-center w-full max-w-4xl h-32 px-4'>
          <Link href='/'>
            <div className="font-bold cursor-pointer text-3xl dark:text-slate-50">
                Ankit Sahu
            </div>
          </Link>
          <div>
          <ToggleTheme />
          </div>
      </nav>
    </div>
    <div className="w-screen justify-center flex items-center">
        <div className='flex items-center w-full max-w-4xl space-x-10 px-4 text-md'>
        <Link href="/blog"><div className='font-semibold hover:underline underline-offset-8 hover:scale-95 transition ease-in-out cursor-pointer'>Blog</div></Link>
        <Link href="/projects"><div className='font-semibold hover:underline underline-offset-8 hover:scale-95 transition ease-in-out cursor-pointer'>Projects</div></Link>
        <Link href="/about"><div className='font-semibold hover:underline underline-offset-8 hover:scale-95 transition ease-in-out cursor-pointer'>About</div></Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar