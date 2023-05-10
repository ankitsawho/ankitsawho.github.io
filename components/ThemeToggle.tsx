"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import {MdLightMode, MdModeNight} from 'react-icons/md' 


function ToggleTheme() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const [isLight, setIsLight] = useState(true)
    const [spin, setSpin] = useState(false)
    const changeTheme = () => {
        setSpin(true)
        if(isLight){
            setTheme('dark');
            setIsLight(false);
        }else{
            setTheme('light');
            setIsLight(true);
        }
    }

    useEffect(() => {
        setMounted(true)
        if(theme === 'light') setIsLight(true)
        else setIsLight(false)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div onClick={changeTheme} onAnimationEnd={() => setSpin(false)} className={ (spin?"animate-wiggle":"") + " cursor-pointer flex items-center justify-center p-1 rounded-full"}>
            {isLight ? <MdLightMode size={28} /> : <MdModeNight size={28} />}
        </div>
    )
}

export default ToggleTheme